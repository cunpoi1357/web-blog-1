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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization?.split(\" \")[1];\n    if (!token) {\n        return res.status(401).json({\n            error: \"No token provided\"\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.SECRET_TOKEN);\n        return decoded;\n    } catch (err) {\n        return res.status(401).json({\n            error: \"Invalid Token\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLE9BQU8sT0FBT0MsS0FBS0MsTUFBUTtJQUM3QixNQUFNQyxRQUFRRixJQUFJRyxPQUFPLENBQUNDLGFBQWEsRUFBRUMsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUV0RCxJQUFJLENBQUNILE9BQU87UUFDUixPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0I7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNQyxVQUFVWCwwREFBVSxDQUFDSSxPQUFPUyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7UUFDMUQsT0FBT0o7SUFDWCxFQUFFLE9BQU9LLEtBQUs7UUFDVixPQUFPYixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0I7SUFDekQ7QUFDSjtBQUVBLGlFQUFlVCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJsb2ctMS8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3BsaXQoJyAnKVsxXTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdObyB0b2tlbiBwcm92aWRlZCcgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlNFQ1JFVF9UT0tFTik7XG4gICAgICAgIHJldHVybiBkZWNvZGVkXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCBUb2tlbicgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcbiJdLCJuYW1lcyI6WyJqd3QiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGVjb2RlZCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfVE9LRU4iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./pages/api/upload/index.js":
/*!***********************************!*\
  !*** ./pages/api/upload/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! middleware/auth */ \"(api)/./middleware/auth.js\");\n\n\n\n\n// Khởi tạo multer với nơi lưu trữ tạm thời\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n        destination: \"./public/uploads\",\n        filename: (req, file, cb)=>{\n            cb(null, file.originalname);\n        }\n    })\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    await (0,middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n    switch(req.method){\n        case \"GET\":\n            const getFiles = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(`public/uploads`));\n            res.status(200).json({\n                fileNames: getFiles\n            });\n            break;\n        case \"POST\":\n            // Xử lý tải lên tập tin với multer\n            upload.single(\"file\")(req, {}, (err)=>{\n                if (err) {\n                    return res.status(500).end(\"Upload error\");\n                }\n                res.status(200).json({\n                    message: \"File uploaded successfully\"\n                });\n            });\n            break;\n        default:\n            return res.status(405).json({\n                error: \"Method Not Allowed\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNSO0FBQ0k7QUFDVztBQUVuQywyQ0FBMkM7QUFDM0MsTUFBTUksU0FBU0osNkNBQU1BLENBQUM7SUFDcEJLLFNBQVNMLHlEQUFrQixDQUFDO1FBQzFCTyxhQUFhO1FBQ2JDLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBTUMsS0FBTztZQUMzQkEsR0FBRyxJQUFJLEVBQUVELEtBQUtFLFlBQVk7UUFDNUI7SUFDRjtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZLEtBQUs7SUFDbkI7QUFDRixFQUFFO0FBRUYsaUVBQWUsT0FBT04sS0FBS08sTUFBUTtJQUNqQyxNQUFNYiwyREFBSUEsQ0FBQ00sS0FBS087SUFDaEIsT0FBUVAsSUFBSVEsTUFBTTtRQUNoQixLQUFLO1lBQ0gsTUFBTUMsV0FBV2pCLHFEQUFjLENBQUNDLGdEQUFTLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDMURjLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFdBQVdMO1lBQVM7WUFDM0MsS0FBSztRQUNQLEtBQUs7WUFDSCxtQ0FBbUM7WUFDbkNkLE9BQU9vQixNQUFNLENBQUMsUUFBUWYsS0FBSyxDQUFDLEdBQUcsQ0FBQ2dCLE1BQVE7Z0JBQ3RDLElBQUlBLEtBQUs7b0JBQ1AsT0FBT1QsSUFBSUssTUFBTSxDQUFDLEtBQUtLLEdBQUcsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRFYsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUssU0FBUztnQkFBNkI7WUFDL0Q7WUFDQSxLQUFLO1FBQ1A7WUFDRSxPQUFPWCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFTSxPQUFPO1lBQXFCO0lBQzlEO0FBRUYsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1ibG9nLTEvLi9wYWdlcy9hcGkvdXBsb2FkL2luZGV4LmpzP2I3OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dGggZnJvbSAnbWlkZGxld2FyZS9hdXRoJztcblxuLy8gS2jhu59pIHThuqFvIG11bHRlciB24bubaSBuxqFpIGzGsHUgdHLhu68gdOG6oW0gdGjhu51pXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoe1xuICBzdG9yYWdlOiBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICAgIGRlc3RpbmF0aW9uOiAnLi9wdWJsaWMvdXBsb2FkcycsXG4gICAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgICBjYihudWxsLCBmaWxlLm9yaWdpbmFsbmFtZSk7XG4gICAgfSxcbiAgfSlcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSwgLy8gVOG6r3QgYm9keVBhcnNlciBt4bq3YyDEkeG7i25oIGPhu6dhIE5leHQuanNcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGNvbnN0IGdldEZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKGBwdWJsaWMvdXBsb2Fkc2ApKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmlsZU5hbWVzOiBnZXRGaWxlcyB9KTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICAvLyBY4butIGzDvSB04bqjaSBsw6puIHThuq1wIHRpbiB24bubaSBtdWx0ZXJcbiAgICAgIHVwbG9hZC5zaW5nbGUoJ2ZpbGUnKShyZXEsIHt9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmVuZCgnVXBsb2FkIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseScgfSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9KTtcbiAgfVxuXG59O1xuIl0sIm5hbWVzIjpbIm11bHRlciIsImZzIiwicGF0aCIsImF1dGgiLCJ1cGxvYWQiLCJzdG9yYWdlIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsImZpbGVuYW1lIiwicmVxIiwiZmlsZSIsImNiIiwib3JpZ2luYWxuYW1lIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlcyIsIm1ldGhvZCIsImdldEZpbGVzIiwicmVhZGRpclN5bmMiLCJqb2luIiwic3RhdHVzIiwianNvbiIsImZpbGVOYW1lcyIsInNpbmdsZSIsImVyciIsImVuZCIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload/index.js"));
module.exports = __webpack_exports__;

})();