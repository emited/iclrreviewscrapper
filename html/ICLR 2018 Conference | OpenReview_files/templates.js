this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["abstractModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h4>TL;DR</h4>\n  <p>"
    + container.escapeExpression(((helper = (helper = helpers["TL;DR"] || (depth0 != null ? depth0["TL;DR"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TL;DR","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <h4>Subject Areas</h4>\n  <p>"
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0["subject areas"] : depth0),{"name":"join","hash":{},"data":data}))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "  <h4>Topics</h4>\n  <p>"
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.topics : depth0),{"name":"join","hash":{},"data":data}))
    + "</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "  <h4>Keywords</h4>\n  <p>"
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.keywords : depth0),{"name":"join","hash":{},"data":data}))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h4>Abstract</h4>\n<p>"
    + container.escapeExpression(((helper = (helper = helpers["abstract"] || (depth0 != null ? depth0["abstract"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"abstract","hash":{},"data":data}) : helper)))
    + "</p>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["TL;DR"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["subject areas"] : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.topics : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["areachairEntry"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.org : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n      <p>"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + " at "
    + alias4(((helper = (helper = helpers.org || (depth0 != null ? depth0.org : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"org","hash":{},"data":data}) : helper)))
    + "</p>\n    ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <p>Score: "
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.scoreSource || (depth0 != null ? depth0.scoreSource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scoreSource","hash":{},"data":data}) : helper)))
    + ")</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry entry-areachair "
    + alias4(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"btn-group-vertical feedback-btns\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default lock-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lockButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"top\" title=\"Lock this area chair assignment\">\n      <span class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default break-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.breakButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Prevent this area chair assignment\">\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div class=\"areachair-heading\">\n    <h3>"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</h3>\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.score : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"action-links\">\n    <ul class=\"list-unstyled text-right\">\n      <li><a href=\"#\" class=\"areachair-assigned-papers\">Assigned papers &raquo;</a></li>\n      <li><a href=\"#\" class=\"similar-areachairs\">Similar Areachairs &raquo;</a></li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["areachairsList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.areachairEntry,depth0,{"name":"areachairEntry","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "  <p class=\"get-started\">No matching area chairs to display</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["column"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : (container.nullContext || {}),depths[1],"templateType",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "      <p class=\"get-started\">No matching results to display</p>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"alternate-reviewers\">\n        <h3 class=\"entry divider\">Alternate Reviewers</h3>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.alternateItems : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : (container.nullContext || {}),depths[1],"templateType",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"col-"
    + alias4(((helper = (helper = helpers.columnIndex || (depth0 != null ? depth0.columnIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnIndex","hash":{},"data":data}) : helper)))
    + "\" class=\"column "
    + alias4(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-column-type=\""
    + alias4(((helper = (helper = helpers.templateType || (depth0 != null ? depth0.templateType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"templateType","hash":{},"data":data}) : helper)))
    + "\" data-parent-selected=\""
    + alias4(((helper = (helper = helpers.parentSelectionId || (depth0 != null ? depth0.parentSelectionId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentSelectionId","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"head\">\n    <p>"
    + ((stack1 = ((helper = (helper = helpers.columnHeadingLabel || (depth0 != null ? depth0.columnHeadingLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnHeadingLabel","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + alias4((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.columnHeading : depth0),72,{"name":"truncate","hash":{},"data":data}))
    + "</p>\n  </div>\n  <div class=\"col-search\">\n    <form role=\"search\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" id=\"col-"
    + alias4(((helper = (helper = helpers.columnIndex || (depth0 != null ? depth0.columnIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnIndex","hash":{},"data":data}) : helper)))
    + "-search\" class=\"form-control input-sm\" placeholder=\"Search&hellip;\">\n        <span class=\"glyphicon glyphicon-search form-control-feedback\" aria-hidden=\"true\"></span>\n      </div><!-- /form-group -->\n    </form>\n  </div>\n\n  <div class=\"body\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.alternateItems : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["committeeSummary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <h4><a href=\"/profile?id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h4>\n    <span class=\"text-muted\">("
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + ")</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <h4><a href=\"/profile?email="
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"note\" data-id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["components/submissions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h3>"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h3>\n  <hr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <form class=\"form-inline notes-search-form\" role=\"search\">\n    <div class=\"form-group search-content has-feedback\">\n      <input id=\"paper-search-input\" type=\"text\" class=\"form-control\" placeholder=\"Search paper titles and metadata\" autocomplete=\"off\">\n      <span class=\"glyphicon glyphicon-search form-control-feedback\" aria-hidden=\"true\"></span>\n    </div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.search : depth0)) != null ? stack1.subjectAreas : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </form>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"form-group subject-area\">\n        <label for=\"subject-area-dropdown\">Subject Area</label>\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.heading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.search : depth0)) != null ? stack1.enabled : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.noteList,depth0,{"name":"noteList","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["components/table"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <thead>\n        <tr>\n          "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.headings : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </tr>\n      </thead>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<th class=\"row-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</th>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<td>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</td>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"table-responsive\">\n  <table class=\"table table-striped "
    + container.escapeExpression(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headings : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["components/tabs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li role=\"presentation\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n      <a href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" aria-controls=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"tab\" data-toggle=\"tab\" data-tab-index="
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ">\n        "
    + ((stack1 = ((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headingCount : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      </a>\n    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"badge\">"
    + container.escapeExpression(((helper = (helper = helpers.headingCount || (depth0 != null ? depth0.headingCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headingCount","hash":{},"data":data}) : helper)))
    + "</span>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    <div role=\"tabpanel\" class=\"tab-pane fade "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "in active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul class=\"nav nav-tabs\" role=\"tablist\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n<div class=\"tab-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["invitationButton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <strong class=\"item hint\">Add:</strong>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"item hint\">Add:</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"panel\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.largeLabel : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  <button class=\"btn\">"
    + container.escapeExpression((helpers.prettyId || (depth0 && depth0.prettyId) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.invitationId : depth0),{"name":"prettyId","hash":{},"data":data}))
    + "</button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["locksBreaksList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br>\n"
    + ((stack1 = (helpers.userChanges || (depth0 && depth0.userChanges) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.assignments : depth0),(depth0 != null ? depth0.type : depth0),{"name":"userChanges","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});

this["Handlebars"]["templates"]["noteAreaChairs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <tr>\n        <td>\n          <br>Recommendation: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.content : stack1)) != null ? stack1.recommendation : stack1), depth0))
    + " / Format: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.content : stack1)) != null ? stack1.format : stack1), depth0))
    + "\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <a href=\"/forum?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.forum : stack1), depth0))
    + "&noteId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" target=\"_blank\">Read Meta Review</a>\n        </td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"arechair-progress\">\n  <h4>"
    + alias2(((helper = (helper = helpers.numMetaReview || (depth0 != null ? depth0.numMetaReview : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"numMetaReview","hash":{},"data":data}) : helper)))
    + " Meta Review Submitted</h4>\n\n  <strong>Area Chair:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n      <tr>\n        <td style=\"width: 320px;\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.areachair : depth0)) != null ? stack1.name : stack1), depth0))
    + " <span class=\"text-muted\">("
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.areachair : depth0)) != null ? stack1.email : stack1), depth0))
    + ")</span>\n      </tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.metaReview : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["noteComparison"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "      <div class=\"table-responsive\">\n        <table class=\"table\">\n\n          <thead>\n            <th>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.leftNote : depth0)) != null ? stack1.content : stack1)) != null ? stack1.title : stack1), depth0))
    + " <span>(modified "
    + alias2((helpers.modifiedDate || (depth0 && depth0.modifiedDate) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.leftNote : depth0)) != null ? stack1.tmdate : stack1),{"name":"modifiedDate","hash":{},"data":data,"blockParams":blockParams}))
    + ")</span></th>\n            <th>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.rightNote : depth0)) != null ? stack1.content : stack1)) != null ? stack1.title : stack1), depth0))
    + " <span>(modified "
    + alias2((helpers.modifiedDate || (depth0 && depth0.modifiedDate) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.rightNote : depth0)) != null ? stack1.tmdate : stack1),{"name":"modifiedDate","hash":{},"data":data,"blockParams":blockParams}))
    + ")</span></th>\n          </thead>\n\n          <tbody>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.contentDiff : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </tbody>\n\n        </table>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "              <tr>\n                <td style=\"width: 50%\">\n                  <strong>"
    + alias3((helpers.upperFirst || (depth0 && depth0.upperFirst) || alias2).call(alias1,blockParams[0][1],{"name":"upperFirst","hash":{},"data":data,"blockParams":blockParams}))
    + ":</strong> "
    + alias3((helpers.join || (depth0 && depth0.join) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.left : stack1),{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "\n                </td>\n                <td style=\"width: 50%\">\n                  <strong>"
    + alias3((helpers.upperFirst || (depth0 && depth0.upperFirst) || alias2).call(alias1,blockParams[0][1],{"name":"upperFirst","hash":{},"data":data,"blockParams":blockParams}))
    + ":</strong> "
    + alias3((helpers.join || (depth0 && depth0.join) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.right : stack1),{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "\n                </td>\n              </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"revisions-container\">\n  <div id=\"header\" class=\"clearfix\">\n    <h2>Comparing revisions from "
    + alias3((helpers.modifiedDate || (depth0 && depth0.modifiedDate) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.leftNote : depth0)) != null ? stack1.tmdate : stack1),{"name":"modifiedDate","hash":{},"data":data,"blockParams":blockParams}))
    + " and "
    + alias3((helpers.modifiedDate || (depth0 && depth0.modifiedDate) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.rightNote : depth0)) != null ? stack1.tmdate : stack1),{"name":"modifiedDate","hash":{},"data":data,"blockParams":blockParams}))
    + "</h2>\n    <div class=\"button-container\">\n      <button type=\"button\" class=\"btn btn-primary btn-back\">Show Revisions List</button>\n    </div>\n  </div>\n\n  <div class=\"comparison-viewer-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.contentDiff : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n    <iframe src=\""
    + alias3(((helper = (helper = helpers.viewerUrl || (depth0 != null ? depth0.viewerUrl : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"viewerUrl","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" allowfullscreen></iframe>\n  </div>\n</div>\n";
},"useData":true,"useBlockParams":true});

this["Handlebars"]["templates"]["noteContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <li>\n      <strong class=\"note-content-field\">"
    + alias3((helpers.prettyField || (depth0 && depth0.prettyField) || alias2).call(alias1,blockParams[1][1],{"name":"prettyField","hash":{},"data":data,"blockParams":blockParams}))
    + ":</strong>\n      <span class=\"note-content-value\">"
    + alias3((helpers.join || (depth0 && depth0.join) || alias2).call(alias1,blockParams[1][0],{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<ul class=\"list-unstyled note-content\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useBlockParams":true});

this["Handlebars"]["templates"]["noteReviewers"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <tr>\n          <td style=\"width: 22px;\"><strong>"
    + alias2(alias1(blockParams[0][1], depth0))
    + ".</strong></td>\n          <td style=\"width: 300px;\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + " <span class=\"text-muted\">("
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.email : stack1), depth0))
    + ")</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[0][0]) != null ? stack1.completedReview : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </tr>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "              <br>Rating: "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.rating : stack1), depth0))
    + " / Confidence: "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.confidence : stack1), depth0))
    + " / Review length: "
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.reviewLength : stack1), depth0))
    + "\n            </td>\n            <td>\n              <a href=\"/forum?id="
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.forum : stack1), depth0))
    + "&noteId="
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? stack1.note : stack1), depth0))
    + "\" target=\"_blank\">Read Review</a>\n            </td>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            </td>\n            <td \"width: 100px;\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].sendReminder : depths[1]),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </td>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda;

  return "              <a href=\"#\" class=\"send-reminder-link\" data-user-id=\""
    + container.escapeExpression(alias1(((stack1 = blockParams[2][0]) != null ? stack1.id : stack1), depth0))
    + "\" data-forum-url=\""
    + ((stack1 = alias1(((stack1 = blockParams[2][0]) != null ? stack1.forumUrl : stack1), depth0)) != null ? stack1 : "")
    + "\">Send Reminder</a>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[2][0]) != null ? stack1.lastReminderSent : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "              <br>Sent: "
    + container.escapeExpression(container.lambda(((stack1 = blockParams[3][0]) != null ? stack1.lastReminderSent : stack1), depth0))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"reviewer-progress\">\n  <h4>"
    + alias4(((helper = (helper = helpers.numSubmittedReviews || (depth0 != null ? depth0.numSubmittedReviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numSubmittedReviews","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.numReviewers || (depth0 != null ? depth0.numReviewers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numReviewers","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " Reviews Submitted</h4>\n\n  <strong>Reviewers:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.reviewers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n  <strong>Average Rating:</strong> "
    + alias4(((helper = (helper = helpers.averageRating || (depth0 != null ? depth0.averageRating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageRating","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " (Min: "
    + alias4(((helper = (helper = helpers.minRating || (depth0 != null ? depth0.minRating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minRating","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + ", Max: "
    + alias4(((helper = (helper = helpers.maxRating || (depth0 != null ? depth0.maxRating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxRating","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + ")<br>\n  <strong>Average Confidence:</strong> "
    + alias4(((helper = (helper = helpers.averageConfidence || (depth0 != null ? depth0.averageConfidence : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageConfidence","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " (Min: "
    + alias4(((helper = (helper = helpers.minConfidence || (depth0 != null ? depth0.minConfidence : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minConfidence","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + ", Max: "
    + alias4(((helper = (helper = helpers.maxConfidence || (depth0 != null ? depth0.maxConfidence : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxConfidence","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + ")\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});

this["Handlebars"]["templates"]["noteReviewStatus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <h4>Your Recommendation: "
    + alias4(((helper = (helper = helpers.recommendation || (depth0 != null ? depth0.recommendation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recommendation","hash":{},"data":data}) : helper)))
    + "</h4>\n    <p>\n      <a href=\""
    + alias4(((helper = (helper = helpers.editUrl || (depth0 != null ? depth0.editUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"editUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Edit Meta Review</a>\n    </p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <h4><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.invitationUrl || (depth0 != null ? depth0.invitationUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"invitationUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Submit Meta Review</a></h4>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <strong>Reviewer Ratings"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.reviewerRatings : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ":</strong>\n  <ul class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.reviewerRatings : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 2, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "  </ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " <span>(Incomplete)</span>";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <li><strong>Reviewer "
    + alias2(alias1(blockParams[0][1], depth0))
    + ":</strong> "
    + alias2(alias1(blockParams[0][0], depth0))
    + " / "
    + alias2(alias1((depths[1] != null ? depths[1].ratingMax : depths[1]), depth0))
    + "</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <li><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.ratingUrl || (depth0 != null ? depth0.ratingUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ratingUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Enter Reviewer Ratings</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recommendation : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ratingUrl : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});

this["Handlebars"]["templates"]["notesAreaChairProgress"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "        <tr>\n          <td style=\"width: 22px;\"><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.number : stack1), depth0))
    + ".</strong></td>\n          <td style=\"width: 320px;\"><a href=\"/forum?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.forum : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.title : stack1), depth0))
    + "</a></td>\n        </tr>\n        <tr>\n          <td style=\"width: 22px;\"></td>\n          <td style=\"width: 320px;\"><strong>"
    + alias2(((helper = (helper = helpers.numOfReviews || (depth0 != null ? depth0.numOfReviews : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"numOfReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias2(((helper = (helper = helpers.numOfReviewers || (depth0 != null ? depth0.numOfReviewers : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"numOfReviewers","hash":{},"data":data}) : helper)))
    + " Reviews Submitted </strong>/ Average Rating:</strong> "
    + alias2(((helper = (helper = helpers.averageRating || (depth0 != null ? depth0.averageRating : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"averageRating","hash":{},"data":data}) : helper)))
    + " (Min: "
    + alias2(((helper = (helper = helpers.minRating || (depth0 != null ? depth0.minRating : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"minRating","hash":{},"data":data}) : helper)))
    + ", Max: "
    + alias2(((helper = (helper = helpers.maxRating || (depth0 != null ? depth0.maxRating : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"maxRating","hash":{},"data":data}) : helper)))
    + ")</td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"reviewer-progress\">\n  <h4>"
    + alias4(((helper = (helper = helpers.numCompletedReviews || (depth0 != null ? depth0.numCompletedReviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numCompletedReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.numPapers || (depth0 != null ? depth0.numPapers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numPapers","hash":{},"data":data}) : helper)))
    + " Papers Reviews Completed</h4>\n\n  <strong>Papers:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.papers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notesAreaChairStatus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.metaReview : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <tr>\n          <td style=\"width: 22px;\"><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.number : stack1), depth0))
    + ".</strong></td>\n          <td style=\"width: 220px;\">\n            Recommendation: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.content : stack1)) != null ? stack1.recommendation : stack1), depth0))
    + " / Format: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.content : stack1)) != null ? stack1.format : stack1), depth0))
    + "\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 22px;\"></td>\n          <td style=\"width: 220px;\">\n            <a href=\"/forum?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.forum : stack1), depth0))
    + "&noteId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.metaReview : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" target=\"_blank\">Read Meta Review</a>\n          </td>\n        </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr>\n          <td style=\"width: 22px;\"><strong>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.number : stack1), depth0))
    + ".</strong></td>\n          <td style=\"width: 220px;\">MetaReview pending</td>\n        </tr>\n        <tr>\n          <td style=\"width: 22px;\"></td>\n          <td></td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"reviewer-progress\">\n  <h4>"
    + alias4(((helper = (helper = helpers.numCompletedMetaReviews || (depth0 != null ? depth0.numCompletedMetaReviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numCompletedMetaReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.numPapers || (depth0 != null ? depth0.numPapers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numPapers","hash":{},"data":data}) : helper)))
    + " Papers Meta Reviews Completed</h4>\n\n  <strong>Papers:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.papers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notesReviewerProgress"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <tr>\n          <td style=\"width: 28px;\"><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.number : stack1), depth0))
    + ".</strong></td>\n          <td style=\"width: 300px;\"><a href=\"/forum?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.forum : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.title : stack1), depth0))
    + "</a></td>\n        </tr>\n        <tr>\n          <td style=\"width: 28px;\"></td>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.review : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "          <td style=\"width: 300px;\">Rating: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.rating : stack1), depth0))
    + " / Confidence: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.confidence : stack1), depth0))
    + " / Review length: "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.content : stack1)) != null ? stack1.review : stack1)) != null ? stack1.length : stack1), depth0))
    + "</td>\n          <td>\n            <a href=\"/forum?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.forum : stack1), depth0))
    + "&noteId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" target=\"_blank\">Read Review</a>\n          </td>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "          <td style=\"width: 300px;\"></td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"reviewer-progress\">\n  <h4>"
    + alias4(((helper = (helper = helpers.numCompletedReviews || (depth0 != null ? depth0.numCompletedReviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numCompletedReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.numPapers || (depth0 != null ? depth0.numPapers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numPapers","hash":{},"data":data}) : helper)))
    + " Papers Reviews Submitted</h4>\n\n  <strong>Papers:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.papers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notesReviewerStatus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "        <tr>\n          <td style=\"width: 28px;\"><strong>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.number : stack1), depth0))
    + ".</strong></td>\n          <td style=\"width: 280px;\"><strong>"
    + alias1(((helper = (helper = helpers.numOfReviews || (depth0 != null ? depth0.numOfReviews : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"numOfReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias1(((helper = (helper = helpers.numOfReviewers || (depth0 != null ? depth0.numOfReviewers : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"numOfReviewers","hash":{},"data":data}) : helper)))
    + " Reviews Submitted </strong></td>\n        </tr>\n        <tr>\n          <td style=\"width: 28px;\"></td>\n          <td style=\"width: 280px;\">Average Rating: "
    + alias1(((helper = (helper = helpers.averageRating || (depth0 != null ? depth0.averageRating : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"averageRating","hash":{},"data":data}) : helper)))
    + " (Min: "
    + alias1(((helper = (helper = helpers.minRating || (depth0 != null ? depth0.minRating : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"minRating","hash":{},"data":data}) : helper)))
    + ", Max: "
    + alias1(((helper = (helper = helpers.maxRating || (depth0 != null ? depth0.maxRating : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"maxRating","hash":{},"data":data}) : helper)))
    + ")</td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"reviewer-progress\">\n  <h4>"
    + alias4(((helper = (helper = helpers.numCompletedReviews || (depth0 != null ? depth0.numCompletedReviews : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numCompletedReviews","hash":{},"data":data}) : helper)))
    + " of "
    + alias4(((helper = (helper = helpers.numPapers || (depth0 != null ? depth0.numPapers : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numPapers","hash":{},"data":data}) : helper)))
    + " Papers Reviews Completed</h4>\n\n  <strong>Papers:</strong>\n  <table class=\"table table-condensed table-minimal\">\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.papers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["noteSummary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"note-authors\">Conflict Domains: "
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.authorDomains : stack1),{"name":"join","hash":{},"data":data}))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"note\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n  <h4><a href=\"/forum?id="
    + alias4(((helper = (helper = helpers.forum || (depth0 != null ? depth0.forum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"forum","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></h4>\n  <div class=\"note-authors\">"
    + alias4((helpers.join || (depth0 && depth0.join) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.authors : stack1),{"name":"join","hash":{},"data":data}))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.authorDomains : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + alias4((helpers.noteContentCollapsible || (depth0 && depth0.noteContentCollapsible) || alias2).call(alias1,depth0,{"name":"noteContentCollapsible","hash":{},"data":data}))
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["paperEntry"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "("
    + container.escapeExpression(((helper = (helper = helpers.numReviewersAssigned || (depth0 != null ? depth0.numReviewersAssigned : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"numReviewersAssigned","hash":{},"data":data}) : helper)))
    + ") ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry entry-paper "
    + alias4(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <h3><a href=\"/forum?id="
    + alias4(((helper = (helper = helpers.forum || (depth0 != null ? depth0.forum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"forum","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h3>\n  <div class=\"action-links clearfix\">\n    <div class=\"btn-group-vertical feedback-btns\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-default lock-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lockButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"top\" title=\"Lock this reviewer assignment\">\n        <span class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></span>\n      </button>\n      <button type=\"button\" class=\"btn btn-default break-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.breakButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Prevent this reviewer assignment\">\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n    <ul class=\"list-unstyled left\">\n      <li><span>"
    + ((stack1 = (helpers.authorsList || (depth0 && depth0.authorsList) || alias2).call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"authorsList","hash":{},"data":data})) != null ? stack1 : "")
    + "</span></li>\n      <li><a href=\"#\" class=\"paper-abstract\">Abstract</a></li>\n    </ul>\n    <ul class=\"list-unstyled right\">\n      <li><a href=\"#\" class=\"assigned-reviewers\">Reviewers "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.numReviewersAssigned : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "&raquo;</a></li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["papersList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.paperEntry,blockParams[0][0],{"name":"paperEntry","data":data,"blockParams":blockParams,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "  <p class=\"get-started\">No matching papers to display</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.program(3, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useBlockParams":true});

this["Handlebars"]["templates"]["partials/assignmentParameters"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = (helpers.isnt || (depth0 && depth0.isnt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][1],"weights",{"name":"isnt","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.escapeExpression;

  return "      <li>\n        <strong>"
    + alias1(container.lambda(blockParams[1][1], depth0))
    + ":</strong>\n        <span>"
    + alias1((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[1][0],{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n      </li>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.escapeExpression;

  return "    <li>\n      <strong>"
    + alias1(container.lambda(blockParams[0][1], depth0))
    + ":</strong>\n      <span>"
    + alias1((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h4>General Parameters:</h4>\n<ul class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.parameters : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</ul>\n<br>\n\n<h4>Weights:</h4>\n<ul class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parameters : depth0)) != null ? stack1.weights : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useBlockParams":true});

this["Handlebars"]["templates"]["partials/bibtexModal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"bibtex-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" >\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h3 class=\"modal-title\">BibTeX Record</h3>\n      </div>\n      <div class=\"modal-body\">\n        <pre class=\"bibtex-content\">"
    + container.escapeExpression(((helper = (helper = helpers.bibtexContent || (depth0 != null ? depth0.bibtexContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bibtexContent","hash":{},"data":data}) : helper)))
    + "</pre>\n        <em class=\"instructions\">Click anywhere on the box above to highlight complete record</em>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Done</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["partials/noteBasic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "&noteId="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "No Title";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <a href=\""
    + container.escapeExpression((helpers.pdfUrl || (depth0 && depth0.pdfUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,false,{"name":"pdfUrl","hash":{},"data":data}))
    + "\" class=\"pdf-link\" title=\"Download PDF\" target=\"_blank\"><img src=\"/static/images/pdf_icon_blue.svg\"></a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.ee : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n    <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.ee : stack1), depth0))
    + "\" class=\"html-link\" title=\"Open Website\" target=\"_blank\"><img src=\"/static/images/html_icon_blue.svg\"></a>\n  ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isnt || (depth0 && depth0.isnt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.forum : depth0),{"name":"isnt","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"parent-title\">\n  <span class=\"glyphicon glyphicon-share-alt\"></span> <span class=\"title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.forumContent : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "<span class=\"readers\">Readers: "
    + container.escapeExpression((helpers.forumReaders || (depth0 && depth0.forumReaders) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.readers : depth0),{"name":"forumReaders","hash":{},"data":data}))
    + "</span>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<span>"
    + container.escapeExpression((helpers.inflect || (depth0 && depth0.inflect) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.replyCount : depth0),"Reply","Replies",true,{"name":"inflect","hash":{},"data":data}))
    + "</span>";
},"19":function(container,depth0,helpers,partials,data) {
    return "  "
    + container.escapeExpression((helpers.noteContentCollapsible || (depth0 && depth0.noteContentCollapsible) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"noteContentCollapsible","hash":{},"data":data}))
    + "\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.tagInvitations : stack1),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "    "
    + container.escapeExpression((helpers.tagWidget || (depth0 && depth0.tagWidget) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,(depths[1] != null ? depths[1].tags : depths[1]),{"name":"tagWidget","hash":{},"data":data}))
    + "\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.taskInvitation : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n  <div class=\"note-task\">\n    <a href=\"/forum?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.reply : stack1)) != null ? stack1.forum : stack1), depth0))
    + "&noteId="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.reply : stack1)) != null ? stack1.replyTo : stack1), depth0))
    + "&invitationId="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n      "
    + alias2((helpers.prettyInvitationId || (depth0 && depth0.prettyInvitationId) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.id : stack1),{"name":"prettyInvitationId","hash":{},"data":data}))
    + "\n    </a>\n    <span class=\"duedate "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.dueDateStatus : stack1), depth0))
    + "\">Due: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.taskInvitation : depth0)) != null ? stack1.dueDateStr : stack1), depth0))
    + "</span>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h4>\n  <a href=\"/forum?id="
    + alias3(((helper = (helper = helpers.forum || (depth0 != null ? depth0.forum : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"forum","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.isnt || (depth0 && depth0.isnt) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.forum : depth0),{"name":"isnt","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n  </a>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.pdfLink : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.htmlLink : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</h4>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.forumContent : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n<div class=\"note-authors\">\n  "
    + alias3((helpers.noteAuthors || (depth0 && depth0.noteAuthors) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.authors : stack1),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.authorids : stack1),{"name":"noteAuthors","hash":{},"data":data}))
    + "\n</div>\n\n<div class=\"note-meta-info\">\n  <span class=\"date\">"
    + alias3((helpers.forumDate || (depth0 && depth0.forumDate) || alias2).call(alias1,(depth0 != null ? depth0.tcdate : depth0),null,{"name":"forumDate","hash":{},"data":data}))
    + "</span>\n  <span>"
    + alias3((helpers.prettyId || (depth0 && depth0.prettyId) || alias2).call(alias1,(depth0 != null ? depth0.invitation : depth0),{"name":"prettyId","hash":{},"data":data}))
    + "</span>\n  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.readers : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.replyCount : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.showContents : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.showTags : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.showTasks : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["partials/noteForum"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <a class=\"note_content_pdf citation_pdf_url\" href=\"/pdf?id="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" title=\"Download PDF\" target=\"_blank\"><img src=\"/static/images/pdf_icon_blue.svg\"></a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <a class=\"note_content_pdf html-link\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.ee : stack1), depth0))
    + "\" title=\"Open Website\" target=\"_blank\"><img src=\"/static/images/html_icon_blue.svg\"></a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <a class=\"note_content_pdf html-link\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" title=\"Open Website\" target=\"_blank\"><img src=\"/static/images/html_icon_blue.svg\"></a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <span class=\"item\">readers: "
    + container.escapeExpression((helpers.forumReaders || (depth0 && depth0.forumReaders) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.readers : stack1),{"name":"forumReaders","hash":{},"data":data}))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <span class=\"item\"><a class=\"action-bibtex-modal\" data-bibtex=\""
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1._bibtex : stack1), depth0)) != null ? stack1 : "")
    + "\">Show Bibtex</a></span>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.inArray || (depth0 && depth0.inArray) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].omittedContentFields : depths[1]),blockParams[0][1],{"name":"inArray","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "";
},"15":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[1][0],{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <li>\n        <strong class=\"note-content-field\">"
    + alias3((helpers.prettyField || (depth0 && depth0.prettyField) || alias2).call(alias1,blockParams[2][1],{"name":"prettyField","hash":{},"data":data,"blockParams":blockParams}))
    + ":</strong>\n        <span class=\"note-content-value\">"
    + alias3((helpers.join || (depth0 && depth0.join) || alias2).call(alias1,blockParams[2][0],{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div id=\"note_"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"note panel\">\n  <div class=\"title_pdf_row\">\n    <h2 class=\"note_content_title citation_title\">\n      "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.title : stack1), depth0))
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.pdf : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.ee : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </h2>\n  </div>\n  <div class=\"meta_row\">\n    <h3 class=\"signatures author\">"
    + alias2((helpers.join || (depth0 && depth0.join) || alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1.authors : stack1),{"name":"join","hash":{},"data":data,"blockParams":blockParams}))
    + "</h3>\n  </div>\n  <div class=\"meta_row\">\n    <span class=\"date item\">"
    + alias2((helpers.forumDate || (depth0 && depth0.forumDate) || alias4).call(alias3,(depth0 != null ? depth0.creationDate : depth0),((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.tmdate : stack1),{"name":"forumDate","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n    <span class=\"item\">"
    + alias2((helpers.prettyId || (depth0 && depth0.prettyId) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.invitation : stack1),{"name":"prettyId","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.readers : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1)) != null ? stack1._bibtex : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "  </div>\n\n  <ul class=\"list-unstyled note-content\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.content : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "  </ul>\n\n  <div class=\"reply_row clearfix\">\n  </div>\n</div>\n";
},"useData":true,"useDepths":true,"useBlockParams":true});

this["Handlebars"]["templates"]["partials/noteList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <li class=\"note\" data-id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n"
    + ((stack1 = container.invokePartial(partials.noteBasic,depth0,{"name":"noteBasic","hash":{"options":(depths[1] != null ? depths[1].options : depths[1])},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li><p class=\"empty-message\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.emptyMessage : stack1), depth0))
    + "</p></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"list-unstyled submissions-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["partials/profileCoauthors"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <ul class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.coauthors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "      </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <a href=\"/profile?email="
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" class=\"profile-link\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "  <p class=\"empty-message\">No co-authors found</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.coauthors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["profileSearchResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forum : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\"/forum?id="
    + alias4(((helper = (helper = helpers.forum || (depth0 != null ? depth0.forum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"forum","hash":{},"data":data}) : helper)))
    + "#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n          <h4>"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n          <span>"
    + alias4((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.review : stack1),75,{"name":"truncate","hash":{},"data":data}))
    + "</span>\n        </a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "  <li class=\"no-results\"><span>No matching profiles found</span></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["reviewerEntry"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.org : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n      <p>"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + " at "
    + alias4(((helper = (helper = helpers.org || (depth0 != null ? depth0.org : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"org","hash":{},"data":data}) : helper)))
    + "</p>\n    ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <p>Score: "
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.scoreSource || (depth0 != null ? depth0.scoreSource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scoreSource","hash":{},"data":data}) : helper)))
    + ")</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry entry-reviewer "
    + alias4(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"btn-group-vertical feedback-btns\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default lock-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lockButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"top\" title=\"Lock this reviewer assignment\">\n      <span class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default break-match "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.breakButtonActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"button\" autocomplete=\"off\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Prevent this reviewer assignment\">\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n  <div class=\"reviewer-heading\">\n    <h3>"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</h3>\n    <p>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</p>\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.score : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"action-links\">\n    <ul class=\"list-unstyled text-right\">\n      <li><a href=\"#\" class=\"reviewer-assigned-papers\">Assigned papers &raquo;</a></li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["reviewersList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.reviewerEntry,depth0,{"name":"reviewerEntry","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "  <p class=\"get-started\">No matching reviewers to display</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["spinner"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"spinner-container "
    + container.escapeExpression(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"spinner\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n  <span>Loading</span>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["tagWidget_bid"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "incomplete";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.placeholder : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "        <li><a href=\"#\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"tag-widget bid "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\"\n  data-type=\"bid\" data-id=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-invitation-id=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.invitationId : stack1), depth0))
    + "\">\n  <label>Bid:</label>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-default btn-xs btn-link dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <span class=\"bid-value\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.options : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["tagWidget_recommend"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "incomplete";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <span class=\"selected-reviewer\" data-id="
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + " data-tag="
    + alias2(alias1((depth0 != null ? depth0.tag : depth0), depth0))
    + ">\n      "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " <a href=\"#\" title=\"Delete recommendation\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></a>\n    </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"tag-widget recommend "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-type=\"recommend\">\n  <label>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + ":</label>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class=\"dropdown-container\" style=\"display:none;\"></div>\n  <a href=\"#\" class=\"show-reviewer-dropdown\">Add&hellip;</a>\n  <a href=\"#\" class=\"hide-reviewer-dropdown\" style=\"display:none;\">Done</a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["tagWidget_text"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "incomplete";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"tag-widget text "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(((helper = (helper = helpers.extraClasses || (depth0 != null ? depth0.extraClasses : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"extraClasses","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-type=\"text\">\n  <form class=\"form-inline\">\n    <label>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.label : stack1), depth0))
    + ":</label>\n    <span class=\"current-value\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1), depth0))
    + "</span>\n    <input type=\"text\" class=\"form-control new-value\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.tag : depth0)) != null ? stack1.value : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\" style=\"display:none;\">\n    <button class=\"btn btn-default btn-xs btn-link toggle-edit-value\" type=\"button\">Edit</button>\n  </form>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["userMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li id=\"user-menu\" class=\"dropdown\">\n    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.last : stack1), depth0))
    + " <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\">\n      <li><a href=\"/profile\">Profile</a></li>\n      <li><a href=\"/tasks\">Tasks</a></li>\n      <li role=\"separator\" class=\"divider hidden-xs\"></li>\n      <li><a href=\"/logout\">Logout</a></li>\n    </ul>\n  </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <li id=\"user-menu\"><a href=\"/login\">Login</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["userProfile"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"img-container\">\n      <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWQzN2JhMDNhMCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZDM3YmEwM2EwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" alt=\"Profile Image\">\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"table-row\">\n          <div class=\"name\"><span>"
    + alias4(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data}) : helper)))
    + "</span> <span>"
    + alias4(((helper = (helper = helpers.middle || (depth0 != null ? depth0.middle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle","hash":{},"data":data}) : helper)))
    + "</span> <span>"
    + alias4(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last","hash":{},"data":data}) : helper)))
    + "</span> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.preferred : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n          <div class=\"username\"><small>OpenReview ID: &nbsp;"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</small></div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<small>(Preferred)</small>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"table-row\">\n          <div>"
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</div>\n          <div>\n"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1].publicProfile : depths[1]),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "              "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.confirmed : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.preferred : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "<small>(Confirmed)</small>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <div class=\"table-row\">\n        <div><strong>Homepage:</strong></div>\n        <div><a href=\""
    + alias3(((helper = (helper = helpers.homepage || (depth0 != null ? depth0.homepage : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"homepage","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.homepage : depth0),75,{"name":"truncate","hash":{},"data":data}))
    + "</a></div>\n      </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <div class=\"table-row\">\n        <div><strong>Google Scholar:</strong></div>\n        <div><a href=\""
    + alias3(((helper = (helper = helpers.gscholar || (depth0 != null ? depth0.gscholar : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"gscholar","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.gscholar : depth0),75,{"name":"truncate","hash":{},"data":data}))
    + "</a></div>\n      </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <div class=\"table-row\">\n        <div><strong>DBLP:</strong></div>\n        <div><a href=\""
    + alias3(((helper = (helper = helpers.dblp || (depth0 != null ? depth0.dblp : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dblp","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.dblp : depth0),75,{"name":"truncate","hash":{},"data":data}))
    + "</a></div>\n      </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <div class=\"table-row\">\n        <div><strong>LinkedIn:</strong></div>\n        <div><a href=\""
    + alias3(((helper = (helper = helpers.linkedin || (depth0 != null ? depth0.linkedin : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"linkedin","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.linkedin : depth0),75,{"name":"truncate","hash":{},"data":data}))
    + "</a></div>\n      </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <div class=\"table-row\">\n        <div><strong>Wikipedia:</strong></div>\n        <div><a href=\""
    + alias3(((helper = (helper = helpers.wikipedia || (depth0 != null ? depth0.wikipedia : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"wikipedia","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.wikipedia : depth0),75,{"name":"truncate","hash":{},"data":data}))
    + "</a></div>\n      </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "        <div class=\"table-row\">\n          <div class=\"position\"><strong>"
    + alias2(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</strong></div>\n          <div class=\"institution\" data-toggle=\"tooltip\" title=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.institution : depth0)) != null ? stack1.domain : stack1), depth0))
    + "\">\n            "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.institution : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n          </div>\n          <div class=\"timeframe\">\n            <em>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.start : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.end : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "</em>\n          </div>\n        </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"start","hash":{},"data":data}) : helper)))
    + " &ndash;";
},"23":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"end","hash":{},"data":data}) : helper)));
},"25":function(container,depth0,helpers,partials,data) {
    return "Present";
},"27":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"empty-message\">No history found</p>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"table-row\">\n          <div><strong>"
    + alias4(((helper = (helper = helpers.relation || (depth0 != null ? depth0.relation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relation","hash":{},"data":data}) : helper)))
    + "</strong></div>\n          <div><span>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></div>\n          <div><em>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.start : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.end : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "</em></div>\n        </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"empty-message\">No relations found</p>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"table-row\">\n          <div><span>"
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"join","hash":{},"data":data}))
    + "</span></div>\n          <div><em>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.start : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.end : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "</em></div>\n        </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"empty-message\">No areas of expertise listed</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header class=\"clearfix\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profileImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class=\"title-container\">\n    <h1>"
    + alias4(((helper = (helper = helpers.preferredName || (depth0 != null ? depth0.preferredName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preferredName","hash":{},"data":data}) : helper)))
    + "</h1>\n    <h3>"
    + alias4(((helper = (helper = helpers.currentInstitution || (depth0 != null ? depth0.currentInstitution : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentInstitution","hash":{},"data":data}) : helper)))
    + "</h3>\n  </div>\n</header>\n\n<div class=\"row equal-height-cols\">\n  <div class=\"col-md-12 col-lg-8\">\n\n  <section class=\"names\">\n    <h4>Names</h4>\n    <p class=\"instructions\">How do you usually write your name as author of a paper? Also add any other names you have authored papers under.</p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.names : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest Name</a></li>\n    </ul>\n  </section>\n\n\n  <section class=\"emails\">\n    <h4>Emails</h4>\n    <p class=\"instructions\">Enter email addresses associated with all of your current and historical institutional affiliations, as well as all your previous publications, and the Toronto Paper Matching System. This information is crucial for deduplicating users, and ensuring you see your reviewing assignments.</p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.emails : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest Email</a></li>\n    </ul>\n  </section>\n\n  <section class=\"links\">\n    <h4>Personal Links</h4>\n    <p class=\"instructions\">Add links to your profiles on other sites. (Optional)</p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homepage : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gscholar : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dblp : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.linkedin : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.wikipedia : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest URL</a></li>\n    </ul>\n  </section>\n\n  <section class=\"history\">\n    <h4>Education &amp; Career History</h4>\n    <p class=\"instructions\">Enter your education and career history. The institution domain is used for conflict of interest detection and institution ranking. For ongoing positions, leave the end field blank.</p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.program(27, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest Position</a></li>\n    </ul>\n  </section>\n\n  <section class=\"relations\">\n    <h4>Advisors, Relations &amp; Conflicts</h4>\n    <p class=\"instructions\">Enter all advisors, co-workers, and other people that should be included when detecting conflicts of interest.</p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.relations : depth0),{"name":"each","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest Relation</a></li>\n    </ul>\n  </section>\n\n  <section class=\"expertise\">\n    <h4>Expertise</h4>\n    <p class=\"instructions\">\n      For each line, enter comma-separated keyphrases representing an intersection of your interests. Think of each line as a query for papers in which you would have expertise and interest. For example:<br>\n      <em>topic models, social network analysis, computational social science</em><br>\n      <em>deep learning, RNNs, dependency parsing</em>\n    </p>\n\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.expertise : depth0),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.program(35, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <ul class=\"actions list-inline\">\n      <li><a class=\"suggest\">Suggest Expertise</a></li>\n    </ul>\n  </section>\n\n  </div>\n\n  <aside class=\"col-md-12 col-lg-4\">\n\n  <section class=\"publications\">\n    <h4>Recent Publications</h4>\n    <p class=\"instructions\"></p>\n\n    <div class=\"section-content\">\n      <p class=\"loading-message\">Loading...</p>\n    </div>\n\n    <ul class=\"actions list-inline\" style=\"display: none;\">\n      <li><a href=\"/search?term="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "&content=authors&group=all&source=forum\" class=\"search-link\">View All</a></li>\n    </ul>\n  </section>\n\n  <section class=\"coauthors\">\n    <h4>Co-Authors</h4>\n    <p class=\"instructions\"></p>\n\n    <div class=\"section-content\">\n      <p class=\"loading-message\">Loading...</p>\n    </div>\n  </section>\n\n  </aside>\n</div>\n\n\n<div id=\"profile-suggestion-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h3 class=\"modal-title\">Suggest Profile Data</h3>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"alert alert-warning\">Profile suggestions are currently disabled.</div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["venueHeader"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <h4>\n    <span class=\"venue-location\">\n      <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "\n    </span>\n    <span class=\"venue-date\">\n      <span class=\"glyphicon glyphicon-calendar pad-left\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\n    </span>\n    <span class=\"venue-website\">\n      <span class=\"glyphicon glyphicon-new-window pad-left\" aria-hidden=\"true\"></span> <a href=\""
    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"website","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " Homepage\" target=\"_blank\">"
    + alias4((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.website : depth0),60,{"name":"truncate","hash":{},"data":data}))
    + "</a>\n    </span>\n  </h4>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <h4>"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</h4>\n  <h4><a href=\""
    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"website","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"website","hash":{},"data":data}) : helper)))
    + "</a></h4>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + ((stack1 = ((helper = (helper = helpers.instructions || (depth0 != null ? depth0.instructions : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"instructions","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <p class=\"no-margin\">Please see the venue website for more information.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n<h3>"
    + ((stack1 = ((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.noIcons : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n<div class=\"description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instructions : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "  <p>"
    + alias4(((helper = (helper = helpers.deadline || (depth0 != null ? depth0.deadline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deadline","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});