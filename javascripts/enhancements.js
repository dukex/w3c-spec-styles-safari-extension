// Code by benschwarz
//
// https://github.com/benschwarz/w3c-spec-styles/blob/master/userscript.js
//
var W3C = function(){
  var elements = {
    link: {
      href: "http://github.com/benschwarz/w3c-spec-styles/raw/master/docs/css/master.css",
      rel:  "stylesheet"
    },
    script: {
      src: "http://github.com/paulirish/w3c-spec-styles/raw/master/docs/js/enhancements.js"
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

