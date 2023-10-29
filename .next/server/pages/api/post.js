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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "slugify":
/*!**************************!*\
  !*** external "slugify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("slugify");

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

/***/ "(api)/./lib/updateJson.js":
/*!***************************!*\
  !*** ./lib/updateJson.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateJson\": () => (/* binding */ updateJson)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\nconst config = __webpack_require__(/*! ../config/config.json */ \"(api)/./config/config.json\");\nconst { blog_folder  } = config.settings;\nconst updateJson = ()=>{\n    const getPosts = fs.readdirSync(path.join(`content/${blog_folder}`));\n    const filterPosts = getPosts.filter((post)=>post.match(/^(?!_)/));\n    const posts = filterPosts.map((filename)=>{\n        const slug = filename.replace(\".md\", \"\");\n        const postData = fs.readFileSync(path.join(`content/${blog_folder}/`, filename), \"utf-8\");\n        const { data  } = matter(postData);\n        const content = matter(postData).content;\n        return {\n            frontmatter: data,\n            content: content,\n            slug: slug\n        };\n    });\n    // write json file. Must need a ./json folder before writing\n    try {\n        fs.writeFileSync(`json/posts.json`, JSON.stringify(posts));\n    } catch (err) {\n        console.error(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXBkYXRlSnNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBS0MsbUJBQU9BLENBQUMsY0FBSTtBQUN2QixNQUFNQyxPQUFPRCxtQkFBT0EsQ0FBQyxrQkFBTTtBQUMzQixNQUFNRSxTQUFTRixtQkFBT0EsQ0FBQyxnQ0FBYTtBQUNwQyxNQUFNRyxTQUFTSCxtQkFBT0EsQ0FBQyx5REFBdUI7QUFDOUMsTUFBTSxFQUFFSSxZQUFXLEVBQUUsR0FBR0QsT0FBT0UsUUFBUTtBQUVoQyxNQUFNQyxhQUFhLElBQU07SUFDNUIsTUFBTUMsV0FBV1IsR0FBR1MsV0FBVyxDQUFDUCxLQUFLUSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQztJQUNsRSxNQUFNTSxjQUFjSCxTQUFTSSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsS0FBSyxDQUFDO0lBQ3pELE1BQU1DLFFBQVFKLFlBQVlLLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQ3hDLE1BQU1DLE9BQU9ELFNBQVNFLE9BQU8sQ0FBQyxPQUFPO1FBQ3JDLE1BQU1DLFdBQVdwQixHQUFHcUIsWUFBWSxDQUM1Qm5CLEtBQUtRLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDLENBQUMsRUFBRVksV0FDckM7UUFFSixNQUFNLEVBQUVLLEtBQUksRUFBRSxHQUFHbkIsT0FBT2lCO1FBQ3hCLE1BQU1HLFVBQVVwQixPQUFPaUIsVUFBVUcsT0FBTztRQUV4QyxPQUFPO1lBQ0hDLGFBQWFGO1lBQ2JDLFNBQVNBO1lBQ1RMLE1BQU1BO1FBQ1Y7SUFDSjtJQUVBLDREQUE0RDtJQUM1RCxJQUFJO1FBQ0FsQixHQUFHeUIsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUVDLEtBQUtDLFNBQVMsQ0FBQ1o7SUFDdkQsRUFBRSxPQUFPYSxLQUFLO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDbEI7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJsb2ctMS8uL2xpYi91cGRhdGVKc29uLmpzPzA0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBtYXR0ZXIgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnL2NvbmZpZy5qc29uXCIpO1xuY29uc3QgeyBibG9nX2ZvbGRlciB9ID0gY29uZmlnLnNldHRpbmdzO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSnNvbiA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRQb3N0cyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihgY29udGVudC8ke2Jsb2dfZm9sZGVyfWApKTtcbiAgICBjb25zdCBmaWx0ZXJQb3N0cyA9IGdldFBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC5tYXRjaCgvXig/IV8pLykpO1xuICAgIGNvbnN0IHBvc3RzID0gZmlsdGVyUG9zdHMubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBzbHVnID0gZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICAgICAgICBwYXRoLmpvaW4oYGNvbnRlbnQvJHtibG9nX2ZvbGRlcn0vYCwgZmlsZW5hbWUpLFxuICAgICAgICAgICAgXCJ1dGYtOFwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHBvc3REYXRhKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1hdHRlcihwb3N0RGF0YSkuY29udGVudDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbnRtYXR0ZXI6IGRhdGEsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgc2x1Zzogc2x1ZyxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIHdyaXRlIGpzb24gZmlsZS4gTXVzdCBuZWVkIGEgLi9qc29uIGZvbGRlciBiZWZvcmUgd3JpdGluZ1xuICAgIHRyeSB7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYGpzb24vcG9zdHMuanNvbmAsIEpTT04uc3RyaW5naWZ5KHBvc3RzKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsIm1hdHRlciIsImNvbmZpZyIsImJsb2dfZm9sZGVyIiwic2V0dGluZ3MiLCJ1cGRhdGVKc29uIiwiZ2V0UG9zdHMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJmaWx0ZXJQb3N0cyIsImZpbHRlciIsInBvc3QiLCJtYXRjaCIsInBvc3RzIiwibWFwIiwiZmlsZW5hbWUiLCJzbHVnIiwicmVwbGFjZSIsInBvc3REYXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJmcm9udG1hdHRlciIsIndyaXRlRmlsZVN5bmMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/updateJson.js\n");

/***/ }),

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization?.split(\" \")[1];\n    if (!token) {\n        return res.status(401).json({\n            error: \"No token provided\"\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.SECRET_TOKEN);\n        return decoded;\n    } catch (err) {\n        return res.status(401).json({\n            error: \"Invalid Token\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLE9BQU8sT0FBT0MsS0FBS0MsTUFBUTtJQUM3QixNQUFNQyxRQUFRRixJQUFJRyxPQUFPLENBQUNDLGFBQWEsRUFBRUMsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUV0RCxJQUFJLENBQUNILE9BQU87UUFDUixPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0I7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDQSxNQUFNQyxVQUFVWCwwREFBVSxDQUFDSSxPQUFPUyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7UUFDMUQsT0FBT0o7SUFDWCxFQUFFLE9BQU9LLEtBQUs7UUFDVixPQUFPYixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0I7SUFDekQ7QUFDSjtBQUVBLGlFQUFlVCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWJsb2ctMS8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3BsaXQoJyAnKVsxXTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdObyB0b2tlbiBwcm92aWRlZCcgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlNFQ1JFVF9UT0tFTik7XG4gICAgICAgIHJldHVybiBkZWNvZGVkXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnSW52YWxpZCBUb2tlbicgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aDtcbiJdLCJuYW1lcyI6WyJqd3QiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGVjb2RlZCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfVE9LRU4iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./pages/api/post/index.js":
/*!*********************************!*\
  !*** ./pages/api/post/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! middleware/auth */ \"(api)/./middleware/auth.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slugify */ \"slugify\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_updateJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/updateJson */ \"(api)/./lib/updateJson.js\");\n\n\n\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst config = __webpack_require__(/*! @config/config.json */ \"(api)/./config/config.json\");\nconst { blog_folder  } = config.settings;\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            {\n                const getPosts = fs.readdirSync(path.join(`content/${blog_folder}`));\n                const filterPosts = getPosts.filter((post)=>post.match(/^(?!_)/));\n                const posts = filterPosts.map((filename)=>{\n                    const slug = filename.replace(\".md\", \"\");\n                    const postData = fs.readFileSync(path.join(`content/${blog_folder}/`, filename), \"utf-8\");\n                    const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(postData);\n                    const content = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(postData).content;\n                    return {\n                        title: data.title,\n                        content: content,\n                        slug\n                    };\n                });\n                return res.status(200).json(posts);\n            }\n        case \"POST\":\n            {\n                await (0,middleware_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n                const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(req.body.content);\n                const slug = slugify__WEBPACK_IMPORTED_MODULE_2___default()(data.title) + Math.random().toString(36).slice(0, 5).toString();\n                fs.writeFileSync(path.join(`content/${blog_folder}/${slug}.md`), req.body.content);\n                (0,_lib_updateJson__WEBPACK_IMPORTED_MODULE_3__.updateJson)();\n                res.status(200).json({\n                    message: \"Tạo b\\xe0i viết th\\xe0nh c\\xf4ng\"\n                });\n                break;\n            }\n        default:\n            return res.status(405).json({\n                error: \"Method Not Allowed\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBQ0Y7QUFDSjtBQUN3QjtBQUNyRCxNQUFNSSxLQUFLQyxtQkFBT0EsQ0FBQyxjQUFJO0FBQ3ZCLE1BQU1DLE9BQU9ELG1CQUFPQSxDQUFDLGtCQUFNO0FBQzNCLE1BQU1FLFNBQVNGLG1CQUFPQSxDQUFDLHVEQUFxQjtBQUM1QyxNQUFNLEVBQUVHLFlBQVcsRUFBRSxHQUFHRCxPQUFPRSxRQUFRO0FBR3hCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE9BQVFELElBQUlFLE1BQU07UUFDZCxLQUFLO1lBQ0Q7Z0JBQ0ksTUFBTUMsV0FBV1YsR0FBR1csV0FBVyxDQUFDVCxLQUFLVSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUVSLFlBQVksQ0FBQztnQkFDbEUsTUFBTVMsY0FBY0gsU0FBU0ksTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEtBQUssQ0FBQztnQkFDekQsTUFBTUMsUUFBUUosWUFBWUssR0FBRyxDQUFDLENBQUNDLFdBQWE7b0JBQ3hDLE1BQU1DLE9BQU9ELFNBQVNFLE9BQU8sQ0FBQyxPQUFPO29CQUNyQyxNQUFNQyxXQUFXdEIsR0FBR3VCLFlBQVksQ0FDNUJyQixLQUFLVSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUVSLFlBQVksQ0FBQyxDQUFDLEVBQUVlLFdBQ3JDO29CQUdKLE1BQU0sRUFBRUssS0FBSSxFQUFFLEdBQUczQixrREFBTUEsQ0FBQ3lCO29CQUN4QixNQUFNRyxVQUFVNUIsa0RBQU1BLENBQUN5QixVQUFVRyxPQUFPO29CQUd4QyxPQUFPO3dCQUNIQyxPQUFPRixLQUFLRSxLQUFLO3dCQUNqQkQsU0FBU0E7d0JBQ1RMO29CQUNKO2dCQUNKO2dCQUNBLE9BQU9aLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDWDtZQUVoQztRQUNKLEtBQUs7WUFDRDtnQkFDSSxNQUFNckIsMkRBQUlBLENBQUNXLEtBQUtDO2dCQUNoQixNQUFNLEVBQUVnQixLQUFJLEVBQUUsR0FBRzNCLGtEQUFNQSxDQUFDVSxJQUFJc0IsSUFBSSxDQUFDSixPQUFPO2dCQUN4QyxNQUFNTCxPQUFPdEIsOENBQU9BLENBQUMwQixLQUFLRSxLQUFLLElBQUlJLEtBQUtDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLElBQUlDLEtBQUssQ0FBQyxHQUFHLEdBQUdELFFBQVE7Z0JBQ2xGaEMsR0FBR2tDLGFBQWEsQ0FBQ2hDLEtBQUtVLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRVIsWUFBWSxDQUFDLEVBQUVnQixLQUFLLEdBQUcsQ0FBQyxHQUFHYixJQUFJc0IsSUFBSSxDQUFDSixPQUFPO2dCQUVqRjFCLDJEQUFVQTtnQkFDVlMsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVPLFNBQVM7Z0JBQTBCO2dCQUMxRCxLQUFLO1lBQ1Q7UUFDSjtZQUNJLE9BQU8zQixJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVEsT0FBTztZQUFxQjtJQUNsRTtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYmxvZy0xLy4vcGFnZXMvYXBpL3Bvc3QvaW5kZXguanM/YjBmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tICdtaWRkbGV3YXJlL2F1dGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknXG5pbXBvcnQgeyB1cGRhdGVKc29uIH0gZnJvbSAnLi4vLi4vLi4vbGliL3VwZGF0ZUpzb24nO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiQGNvbmZpZy9jb25maWcuanNvblwiKTtcbmNvbnN0IHsgYmxvZ19mb2xkZXIgfSA9IGNvbmZpZy5zZXR0aW5ncztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0UG9zdHMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oYGNvbnRlbnQvJHtibG9nX2ZvbGRlcn1gKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyUG9zdHMgPSBnZXRQb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QubWF0Y2goL14oPyFfKS8pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0cyA9IGZpbHRlclBvc3RzLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gZnMucmVhZEZpbGVTeW5jKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5qb2luKGBjb250ZW50LyR7YmxvZ19mb2xkZXJ9L2AsIGZpbGVuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXRmLThcIlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHBvc3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IG1hdHRlcihwb3N0RGF0YSkuY29udGVudDtcblxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdHMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF3YWl0IGF1dGgocmVxLCByZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHJlcS5ib2R5LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KGRhdGEudGl0bGUpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMCwgNSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKGBjb250ZW50LyR7YmxvZ19mb2xkZXJ9LyR7c2x1Z30ubWRgKSwgcmVxLmJvZHkuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVKc29uKClcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdU4bqhbyBiw6BpIHZp4bq/dCB0aMOgbmggY8O0bmcnIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJhdXRoIiwibWF0dGVyIiwic2x1Z2lmeSIsInVwZGF0ZUpzb24iLCJmcyIsInJlcXVpcmUiLCJwYXRoIiwiY29uZmlnIiwiYmxvZ19mb2xkZXIiLCJzZXR0aW5ncyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJnZXRQb3N0cyIsInJlYWRkaXJTeW5jIiwiam9pbiIsImZpbHRlclBvc3RzIiwiZmlsdGVyIiwicG9zdCIsIm1hdGNoIiwicG9zdHMiLCJtYXAiLCJmaWxlbmFtZSIsInNsdWciLCJyZXBsYWNlIiwicG9zdERhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsInRpdGxlIiwic3RhdHVzIiwianNvbiIsImJvZHkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsIndyaXRlRmlsZVN5bmMiLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/index.js\n");

/***/ }),

/***/ "(api)/./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"site":{"title":"Bookworm Next | Personal Blog Theme","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"34","logo_text":"Bookworm Light"},"settings":{"pagination":3,"summary_length":200,"blog_folder":"posts"},"params":{"tag_manager_id":"","contact_form_action":"#","copyright":"Copyright © 2022 a theme by [themefisher](https://themefisher.com)"},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/index.js"));
module.exports = __webpack_exports__;

})();