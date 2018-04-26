'use strict';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var foohacked = "style_foo";
var newhacked = "style_new";
var css = ".style_foo {\r\n  color: red;\r\n}\r\n\r\n.style_new {\r\n  color: blue;\r\n}\r\n";
var style = {"foo":"style_foo","new":"style_new","foohacked":"style_foo","newhacked":"style_new"};
styleInject(css);

var style$1 = /*#__PURE__*/Object.freeze({
  foohacked: foohacked,
  newhacked: newhacked,
  default: style
});

console.log(style$1);
