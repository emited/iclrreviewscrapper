import dryscrape
import pickle as pkl
import time
from bs4 import BeautifulSoup
from urllib.request import urlopen
import numpy as np


def parse_for_article_urls(home_page_html):
    soup = BeautifulSoup(home_page_html, 'lxml')
    urls = []
    for li in soup.find_all('li', class_='note'):
        url = li.h4.a['href']
        urls.append(url)
    return urls


def open_and_parse_for_reviews(article_page_url):
    session = dryscrape.Session()
    session.visit(article_page_url)
    time.sleep(10)
    soup = BeautifulSoup(session.body(), 'lxml')
    reviews = []
    for div in soup.findAll('div', class_='note panel'):
        if div.find('h2', class_='note_content_title'):
            field = div.find('span', class_='note_content_field')
            if field and field.text.startswith('Rating:'):
                rating, comment, confidence = div.findAll('span', class_='note_content_value')
                reviews.append({'rating':rating.text,
                                'comment':comment.text,
                                'confidence':confidence.text})
    return reviews


if __name__ == '__main__':
    review_dump_path = 'reviews2.pkl'
    html_iclr_home_page_saved_path = 'html/ICLR 2018 Conference | OpenReview.html'

    iclr_ratings = []
    iclr_reviews = []
    article_page_urls = parse_for_article_urls(open(html_iclr_home_page_saved_path, 'rb').read())
    for i, url in enumerate(article_page_urls):
        #try:
        print('{} / {}'.format(i + 1, len(article_page_urls)))
        print('Opening and parsing url {}...'.format(url))
        reviews = open_and_parse_for_reviews(url)
        article_mean_rating = np.mean([int(r['rating'][0]) for r in reviews])
        print('Scores: ' + ', '.join([r['rating'][0] for r in reviews]) + '\tMean : {}'.format(article_mean_rating))
        iclr_ratings.append(article_mean_rating)
        iclr_reviews.append({'url':url, 'reviews':reviews})
        print('Current ICLR Mean score: {} \n\n'.format(np.mean(iclr_ratings)))
        except:    
            print('Error !!')
        finally:
            print('dumping all ICLR reviews in {}'.format(review_dump_path))    
            pkl.dump(iclr_reviews, open(review_dump_path, 'wb'))

    print('dumping all ICLR reviews in {}'.format(review_dump_path))    
    pkl.dump(iclr_reviews, open(review_dump_path, 'wb'))
