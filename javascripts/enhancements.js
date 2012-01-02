// Code by benschwarz
//
// https://github.com/benschwarz/w3c-spec-styles/blob/master/userscript.js
//
var W3C = function(){
  var elements = {
    link: {
      href: "http://vertigem.xxx/w3c-spec-styles/docs/css/master.css",
      rel:  "stylesheet"
    },
    script: {
      src: "http://vertigem.xxx/w3c-spec-styles/docs/js/enhancements.js",
      async: true
    }
  }

  for(var tag in elements) {
		var element = document.createElement(tag);
		for(var attribute in elements[tag]) {
			element.setAttribute(attribute, elements[tag][attribute]);
			document.body.appendChild(element);
		}
	}
}();

