nceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),
/* 206 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./packages/react-scripts/template/src/logo.svg ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),
/* 207 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./packages/react-scripts/~/promise/lib/es6-extensions.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(/*! ./core.js */ 100);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valueProm