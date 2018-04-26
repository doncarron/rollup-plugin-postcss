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

var css = "a {\r\n  color: blue\n}\r\n\r\n.multiline,\r\n.selector {\r\n  box-shadow: 1px 0 9px rgba(0, 0, 0, .4),\r\n              1px 0 3px rgba(0, 0, 0, .6)\n}\r\n";
styleInject(css);
