"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload/[filename]";
exports.ids = ["pages/api/upload/[filename]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/upload/[filename].js":
/*!****************************************!*\
  !*** ./pages/api/upload/[filename].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const filename = req.query.filename;\n    switch(req.method){\n        case \"GET\":\n            if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(`./public/uploads/${filename}`)) {\n                const file = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`./public/uploads/${filename}`);\n                res.setHeader(\"Content-Type\", \"image/png\");\n                res.send(file);\n            } else {\n                return res.status(404).json({\n                    error: \"File not found\"\n                });\n            }\n            break;\n        case \"DELETE\":\n            if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(`./public/uploads/${filename}`)) {\n                fs__WEBPACK_IMPORTED_MODULE_0___default().unlinkSync(`./public/uploads/${filename}`);\n                return res.status(200).json({\n                    message: \"Delete file successfully\"\n                });\n            } else {\n                return res.status(404).json({\n                    error: \"File not found\"\n                });\n            }\n            break;\n        default:\n            return res.status(405).json({\n                error: \"Method Not Allowed\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkL1tmaWxlbmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9CO0FBRXBCLGlFQUFlLE9BQU9DLEtBQUtDLE1BQVE7SUFDL0IsTUFBTUMsV0FBV0YsSUFBSUcsS0FBSyxDQUFDRCxRQUFRO0lBQ25DLE9BQVFGLElBQUlJLE1BQU07UUFDZCxLQUFLO1lBQ0QsSUFBSUwsb0RBQWEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFRyxTQUFTLENBQUMsR0FBRztnQkFDL0MsTUFBTUksT0FBT1Asc0RBQWUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFRyxTQUFTLENBQUM7Z0JBRTNERCxJQUFJTyxTQUFTLENBQUMsZ0JBQWdCO2dCQUM5QlAsSUFBSVEsSUFBSSxDQUFDSDtZQUNiLE9BQU87Z0JBQ0gsT0FBT0wsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBaUI7WUFDMUQsQ0FBQztZQUNELEtBQUs7UUFDVCxLQUFLO1lBQ0QsSUFBSWIsb0RBQWEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFRyxTQUFTLENBQUMsR0FBRztnQkFDL0NILG9EQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUcsU0FBUyxDQUFDO2dCQUM1QyxPQUFPRCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRyxTQUFTO2dCQUEyQjtZQUN0RSxPQUFPO2dCQUNILE9BQU9iLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQWlCO1lBQzFELENBQUM7WUFDRCxLQUFLO1FBQ1Q7WUFDSSxPQUFPWCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXFCO0lBQ2xFO0FBQ0osR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1ibG9nLTEvLi9wYWdlcy9hcGkvdXBsb2FkL1tmaWxlbmFtZV0uanM/MzY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHJlcS5xdWVyeS5maWxlbmFtZVxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYC4vcHVibGljL3VwbG9hZHMvJHtmaWxlbmFtZX1gKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoYC4vcHVibGljL3VwbG9hZHMvJHtmaWxlbmFtZX1gKVxuXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2ltYWdlL3BuZycpXG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoZmlsZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdGaWxlIG5vdCBmb3VuZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYC4vcHVibGljL3VwbG9hZHMvJHtmaWxlbmFtZX1gKSkge1xuICAgICAgICAgICAgICAgIGZzLnVubGlua1N5bmMoYC4vcHVibGljL3VwbG9hZHMvJHtmaWxlbmFtZX1gKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdEZWxldGUgZmlsZSBzdWNjZXNzZnVsbHknIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0ZpbGUgbm90IGZvdW5kJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJmcyIsInJlcSIsInJlcyIsImZpbGVuYW1lIiwicXVlcnkiLCJtZXRob2QiLCJleGlzdHNTeW5jIiwiZmlsZSIsInJlYWRGaWxlU3luYyIsInNldEhlYWRlciIsInNlbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1bmxpbmtTeW5jIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload/[filename].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload/[filename].js"));
module.exports = __webpack_exports__;

})();