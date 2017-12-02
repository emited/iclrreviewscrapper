import dryscrape
import pickle as pkl
import time
from bs4 import BeautifulSoup
from urllib.request import urlopen


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


review_dump_path = 'reviews.pkl'
html_iclr_home_page_saved_path = 'html/ICLR 2018 Conference | OpenReview.html'

iclr_mean_score = 0
iclr_reviews = []
article_page_urls = parse_for_article_urls(open(html_iclr_home_page_saved_path, 'rb').read())
for i, url in enumerate(article_page_urls):
    
    try:
        print('{} / {}'.format(i + 1, len(article_page_urls)))
        print('Opening and parsing url {}...'.format(url))
        reviews = open_and_parse_for_reviews(url)
        print('Found {} reviews.'.format(len(reviews)))
        print('Scores: ' + ', '.join([r['rating'][0] for r in reviews]))
        iclr_reviews.append({'url':url,
                             'reviews':reviews})
        
        article_mean = sum([int(r['rating'][0]) for r in reviews]) / len(reviews)
        iclr_mean_score = (iclr_mean_score * i + article_mean) / (i + 1)
        print('ICLR Mean score: {} \n\n'.format(iclr_mean_score))
    except:    
        print('Error !!')
    finally:
        print('dumping all ICLR reviews in {}'.format(review_dump_path))    
        pkl.dump(iclr_reviews, open(review_dump_path, 'wb'))

print('dumping all ICLR reviews in {}'.format(review_dump_path))    
pkl.dump(iclr_reviews, open(review_dump_path, 'wb'))
