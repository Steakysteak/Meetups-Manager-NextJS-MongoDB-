"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n//our-domain.com/\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80\",\n        address: \"Some Address 5, Some City\",\n        description: \"This is a first Meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80\",\n        address: \"Some Address 6, Some City\",\n        description: \"This is a Second Meetup\"\n    }\n];\nfunction HomePage(props) {\n    // const [loadedMeetups, setLoadedMeetups] = useState([]);\n    // useEffect(() => {\n    //   //send a http req and fetch data\n    //   setLoadedMeetups(DUMMY_MEETUPS);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"D:\\\\React By Maximilian Schwarzm\\xfcller\\\\13 - Bigger NextJs Project\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUJBQWlCOztBQUd5QztBQUUxRCxNQUFNQyxnQkFBZ0I7SUFDcEI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtDQUNEO0FBRUQsU0FBU0MsU0FBU0MsS0FBSyxFQUFFO0lBQ3ZCLDBEQUEwRDtJQUUxRCxvQkFBb0I7SUFDcEIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxVQUFVO0lBRVYscUJBQU8sOERBQUNSLHNFQUFVQTtRQUFDUyxTQUFTRCxNQUFNQyxPQUFPOzs7Ozs7QUFDM0M7S0FUU0Y7O0FBb0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9vdXItZG9tYWluLmNvbS9cclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDMyJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBBZGRyZXNzIDUsIFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IE1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDMyJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBBZGRyZXNzIDYsIFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIFNlY29uZCBNZWV0dXBcIixcclxuICB9LCBcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgLy8gY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy9zZW5kIGEgaHR0cCByZXEgYW5kIGZldGNoIGRhdGFcclxuICAvLyAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvKnJlc2VydmVkIGZ1bmN0biBmb3Igd2hpY2ggbmV4dCBqcyBsb29rcyBmb3Igd2hlbiBwcmUgcmVuZGVyaW5nIGEgcGFnZSBmb3IgdGhlIFxyXG4gIGRhdGEgdGhhdCBzaG91bGQgYmUgdGhlcmUgd2hpbGUgcHJlIHJlbmRlcmluZyAqL1xyXG4gIC8qZXhlY3V0ZWQgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIGFuZCBjYW4gaGF2ZSBzZXJ2ZXIgc2lkZSBjb2RlIHRvbyAqL1xyXG4gIC8qY29kZSBoZXJlIHdpbGwgbmV2ZXIgcmVhY2ggdGhlIGNsaWVudCBtYWNoaW5lICovXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vY2hhcmxpZTIxMDA6TW85UG1Dd2pXaUhSZVhDQUBjbHVzdGVyMC5pcTZycWhnLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIGNsaWVudC5jbG9zZSgpOyAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgIFxyXG4gICAgICB9KSlcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMDAvL2RhdGEgd2lsbCBiZSBwcmVnZW5lcmF0ZWQgYWZ0ZXIgbnVtYmVyIG9mIHNlY3MgbWVudGlvbmVkIGhlcmVcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});