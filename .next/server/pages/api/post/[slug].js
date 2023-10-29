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
exports.id = "pages/api/post/[slug]";
exports.ids = ["pages/api/post/[slug]"];
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

/***/ "(api)/./pages/api/post/[slug].js":
/*!**********************************!*\
  !*** ./pages/api/post/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! middleware/auth */ \"(api)/./middleware/auth.js\");\n/* harmony import */ var _lib_updateJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/updateJson */ \"(api)/./lib/updateJson.js\");\n\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst config = __webpack_require__(/*! @config/config.json */ \"(api)/./config/config.json\");\nconst { blog_folder  } = config.settings;\nasync function handler(req, res) {\n    await (0,middleware_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n    const slug = req.query.slug;\n    switch(req.method){\n        case \"GET\":\n            {\n                const getPosts = fs.readdirSync(path.join(`content/${blog_folder}`));\n                const filterPosts = getPosts.filter((post)=>post.match(/^(?!_)/));\n                const posts = filterPosts.map((filename)=>{\n                    const slug = filename.replace(\".md\", \"\");\n                    const postData = fs.readFileSync(path.join(`content/${blog_folder}/`, filename), \"utf-8\");\n                    return {\n                        postData,\n                        slug: slug\n                    };\n                });\n                const post = posts.find((post)=>post.slug === slug);\n                return res.status(200).json(post);\n            }\n        case \"DELETE\":\n            {\n                const filePath = path.join(`content/${blog_folder}/${slug}.md`);\n                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);\n                (0,_lib_updateJson__WEBPACK_IMPORTED_MODULE_1__.updateJson)();\n                await fetch(\"api/revalidate\", {\n                    method: \"POST\",\n                    body: {\n                        path: `/blog/${slug}`\n                    }\n                });\n                return res.status(200).json({\n                    message: \"X\\xf3a b\\xe0i viết th\\xe0nh c\\xf4ng\",\n                    revalidated: true\n                });\n            }\n        case \"PUT\":\n            {\n                const filePath1 = path.join(`content/${blog_folder}/${slug}.md`);\n                if (fs.existsSync(filePath1)) fs.writeFileSync(filePath1, req.body.content);\n                (0,_lib_updateJson__WEBPACK_IMPORTED_MODULE_1__.updateJson)();\n                return res.status(200).json({\n                    message: \"Cập nhật th\\xe0nh c\\xf4ng\"\n                });\n            }\n        default:\n            return res.status(405).json({\n                error: \"Method Not Allowed\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ2tCO0FBQ3JELE1BQU1FLEtBQUtDLG1CQUFPQSxDQUFDLGNBQUk7QUFDdkIsTUFBTUMsT0FBT0QsbUJBQU9BLENBQUMsa0JBQU07QUFDM0IsTUFBTUUsU0FBU0YsbUJBQU9BLENBQUMsdURBQXFCO0FBQzVDLE1BQU0sRUFBRUcsWUFBVyxFQUFFLEdBQUdELE9BQU9FLFFBQVE7QUFFeEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTVYsMkRBQUlBLENBQUNTLEtBQUtDO0lBQ2hCLE1BQU1DLE9BQU9GLElBQUlHLEtBQUssQ0FBQ0QsSUFBSTtJQUMzQixPQUFRRixJQUFJSSxNQUFNO1FBQ2QsS0FBSztZQUNEO2dCQUNJLE1BQU1DLFdBQVdaLEdBQUdhLFdBQVcsQ0FBQ1gsS0FBS1ksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFVixZQUFZLENBQUM7Z0JBQ2xFLE1BQU1XLGNBQWNILFNBQVNJLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxLQUFLLENBQUM7Z0JBQ3pELE1BQU1DLFFBQVFKLFlBQVlLLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO29CQUN4QyxNQUFNWixPQUFPWSxTQUFTQyxPQUFPLENBQUMsT0FBTztvQkFDckMsTUFBTUMsV0FBV3ZCLEdBQUd3QixZQUFZLENBQzVCdEIsS0FBS1ksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFVixZQUFZLENBQUMsQ0FBQyxFQUFFaUIsV0FDckM7b0JBRUosT0FBTzt3QkFDSEU7d0JBQ0FkLE1BQU1BO29CQUNWO2dCQUNKO2dCQUVBLE1BQU1RLE9BQU9FLE1BQU1NLElBQUksQ0FBQ1IsQ0FBQUEsT0FBUUEsS0FBS1IsSUFBSSxLQUFLQTtnQkFFOUMsT0FBT0QsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNWO1lBQ2hDO1FBQ0osS0FBSztZQUNEO2dCQUNJLE1BQU1XLFdBQVcxQixLQUFLWSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUVWLFlBQVksQ0FBQyxFQUFFSyxLQUFLLEdBQUcsQ0FBQztnQkFDOUQsSUFBSVQsR0FBRzZCLFVBQVUsQ0FBQ0QsV0FBVzVCLEdBQUc4QixVQUFVLENBQUNGO2dCQUMzQzdCLDJEQUFVQTtnQkFDVixNQUFNZ0MsTUFBTSxrQkFBa0I7b0JBQUVwQixRQUFRO29CQUFRcUIsTUFBTTt3QkFBRTlCLE1BQU0sQ0FBQyxNQUFNLEVBQUVPLEtBQUssQ0FBQztvQkFBQztnQkFBRTtnQkFDaEYsT0FBT0QsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVNLFNBQVM7b0JBQTJCQyxhQUFhLElBQUk7Z0JBQUM7WUFDeEY7UUFDSixLQUFLO1lBQ0Q7Z0JBQ0ksTUFBTU4sWUFBVzFCLEtBQUtZLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRVYsWUFBWSxDQUFDLEVBQUVLLEtBQUssR0FBRyxDQUFDO2dCQUM5RCxJQUFJVCxHQUFHNkIsVUFBVSxDQUFDRCxZQUFXNUIsR0FBR21DLGFBQWEsQ0FBQ1AsV0FBVXJCLElBQUl5QixJQUFJLENBQUNJLE9BQU87Z0JBQ3hFckMsMkRBQVVBO2dCQUNWLE9BQU9TLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFTSxTQUFTO2dCQUFzQjtZQUNqRTtRQUNKO1lBQ0ksT0FBT3pCLElBQUlrQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFVSxPQUFPO1lBQXFCO0lBQ2xFO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1ibG9nLTEvLi9wYWdlcy9hcGkvcG9zdC9bc2x1Z10uanM/ZmQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tICdtaWRkbGV3YXJlL2F1dGgnO1xuaW1wb3J0IHsgdXBkYXRlSnNvbiB9IGZyb20gJy4uLy4uLy4uL2xpYi91cGRhdGVKc29uJztcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIkBjb25maWcvY29uZmlnLmpzb25cIik7XG5jb25zdCB7IGJsb2dfZm9sZGVyIH0gPSBjb25maWcuc2V0dGluZ3M7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcbiAgICBjb25zdCBzbHVnID0gcmVxLnF1ZXJ5LnNsdWdcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRQb3N0cyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihgY29udGVudC8ke2Jsb2dfZm9sZGVyfWApKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJQb3N0cyA9IGdldFBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC5tYXRjaCgvXig/IV8pLykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gZmlsdGVyUG9zdHMubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbHVnID0gZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdERhdGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLmpvaW4oYGNvbnRlbnQvJHtibG9nX2ZvbGRlcn0vYCwgZmlsZW5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1dGYtOFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IHNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZChwb3N0ID0+IHBvc3Quc2x1ZyA9PT0gc2x1Zyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oYGNvbnRlbnQvJHtibG9nX2ZvbGRlcn0vJHtzbHVnfS5tZGApXG4gICAgICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUpzb24oKVxuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKCdhcGkvcmV2YWxpZGF0ZScsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IHsgcGF0aDogYC9ibG9nLyR7c2x1Z31gIH0gfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnWMOzYSBiw6BpIHZp4bq/dCB0aMOgbmggY8O0bmcnLCByZXZhbGlkYXRlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnUFVUJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihgY29udGVudC8ke2Jsb2dfZm9sZGVyfS8ke3NsdWd9Lm1kYClcbiAgICAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIHJlcS5ib2R5LmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgdXBkYXRlSnNvbigpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0Phuq1wIG5o4bqtdCB0aMOgbmggY8O0bmcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiYXV0aCIsInVwZGF0ZUpzb24iLCJmcyIsInJlcXVpcmUiLCJwYXRoIiwiY29uZmlnIiwiYmxvZ19mb2xkZXIiLCJzZXR0aW5ncyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVnIiwicXVlcnkiLCJtZXRob2QiLCJnZXRQb3N0cyIsInJlYWRkaXJTeW5jIiwiam9pbiIsImZpbHRlclBvc3RzIiwiZmlsdGVyIiwicG9zdCIsIm1hdGNoIiwicG9zdHMiLCJtYXAiLCJmaWxlbmFtZSIsInJlcGxhY2UiLCJwb3N0RGF0YSIsInJlYWRGaWxlU3luYyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZmlsZVBhdGgiLCJleGlzdHNTeW5jIiwidW5saW5rU3luYyIsImZldGNoIiwiYm9keSIsIm1lc3NhZ2UiLCJyZXZhbGlkYXRlZCIsIndyaXRlRmlsZVN5bmMiLCJjb250ZW50IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[slug].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/[slug].js"));
module.exports = __webpack_exports__;

})();