var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['empty'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "describe(\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"suitName") || (depth0 != null ? lookupProperty(depth0,"suitName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"suitName","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":22}}}) : helper)))
    + "\", () => {\n    test(\"all cool\"),()=>{\n        console.log(\"DONE\")\n    })\n\n    test(\"second one\"),()=>{\n        console.log(\"DONE\")\n    })\n})";
},"useData":true});
templates['suit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    test(\""
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\", async () => {\n        "
    + alias1(((helper = (helper = lookupProperty(helpers,"deployComment") || (depth0 != null ? lookupProperty(depth0,"deployComment") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"deployComment","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":25}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias2,(depth0 != null ? lookupProperty(depth0,"deployments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias2,(depth0 != null ? lookupProperty(depth0,"interactions") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "    });\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import {\n    shallPass,\n    shallResolve,\n    shallRevert,\n    deployContractByName,\n    sendTransaction,\n    executeScript,\n    mintFlow\n} from \"flow-js-testing\"\n\ndescribe(\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"suitName") || (depth0 != null ? lookupProperty(depth0,"suitName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"suitName","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":22}}}) : helper)))
    + "\", () => {\n    // Instantiate emulator and path to Cadence files\n    beforeEach(async () => {\n        const basePath = path.resolve(__dirname, \"./cadence\");\n        const port = 8080;\n        await init(basePath, port);\n        return emulator.start(port, false);\n    });\n\n    // Stop emulator, so it could be restarted\n        afterEach(async () => {\n        return emulator.stop();\n    });\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tests") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":0},"end":{"line":37,"column":9}}})) != null ? stack1 : "")
    + "})";
},"useData":true});
