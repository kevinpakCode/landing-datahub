webpackHotUpdate_N_E("pages/index",{

/***/ "./components/scrolls/anchor.tsx":
/*!***************************************!*\
  !*** ./components/scrolls/anchor.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/home/kevinpak/Documents/onlineshtab/landing-datahub/components/scrolls/anchor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Anchor = function Anchor(props) {\n  _s();\n\n  var _props$href, _props$className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      comptScroll = _useState[0],\n      setComptScroll = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      idElem = _useState2[0],\n      setIdElem = _useState2[1];\n\n  var link = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  /*\n  *\n  */\n\n  var scrollDocument = function scrollDocument(event) {\n    event.preventDefault();\n    var newComptScroll = Number(comptScroll) + 1;\n    var elem = link.current;\n    var path = elem.getAttribute('href');\n    var elemId = path.replace(/[#\\/]/g, '');\n    setComptScroll(newComptScroll);\n    setIdElem(elemId);\n  };\n  /*\n  *\n  */\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(comptScroll);\n\n    if (idElem) {\n      var elem = document.getElementById(idElem);\n      var elemPosition = elem.offsetTop;\n      window.scrollTo({\n        top: elemPosition,\n        behavior: \"smooth\"\n      });\n    }\n  }, [comptScroll]);\n  var Href = (_props$href = props.href) !== null && _props$href !== void 0 ? _props$href : '#';\n  var ClassName = (_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: Href,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: ClassName,\n        ref: link,\n        onClick: function onClick() {\n          return scrollDocument(event);\n        },\n        children: props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Anchor, \"2e6Wi72SY3gcEDl6tCSVNuYe8TE=\");\n\n_c = Anchor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Anchor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Anchor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxzL2FuY2hvci50c3g/OGFlMCJdLCJuYW1lcyI6WyJBbmNob3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiY29tcHRTY3JvbGwiLCJzZXRDb21wdFNjcm9sbCIsImlkRWxlbSIsInNldElkRWxlbSIsImxpbmsiLCJ1c2VSZWYiLCJzY3JvbGxEb2N1bWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdDb21wdFNjcm9sbCIsIk51bWJlciIsImVsZW0iLCJjdXJyZW50IiwicGF0aCIsImdldEF0dHJpYnV0ZSIsImVsZW1JZCIsInJlcGxhY2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1Qb3NpdGlvbiIsIm9mZnNldFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJIcmVmIiwiaHJlZiIsIkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsSUFBRCxDQUZaO0FBQUEsTUFFakJHLE1BRmlCO0FBQUEsTUFFVEMsU0FGUzs7QUFHeEIsTUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFFQTtBQUNGO0FBQ0E7O0FBQ0UsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaENBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQUlDLGNBQWMsR0FBR0MsTUFBTSxDQUFDVixXQUFELENBQU4sR0FBc0IsQ0FBM0M7QUFDQSxRQUFNVyxJQUFJLEdBQUdQLElBQUksQ0FBQ1EsT0FBbEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csWUFBTCxDQUFrQixNQUFsQixDQUFiO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLEVBQXZCLENBQWY7QUFDQWYsa0JBQWMsQ0FBQ1EsY0FBRCxDQUFkO0FBQ0FOLGFBQVMsQ0FBQ1ksTUFBRCxDQUFUO0FBQ0QsR0FSRDtBQVdBO0FBQ0Y7QUFDQTs7O0FBQ0VFLHlEQUFTLENBQUMsWUFBSztBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWW5CLFdBQVo7O0FBQ0EsUUFBR0UsTUFBSCxFQUFXO0FBQ1QsVUFBTVMsSUFBSSxHQUFHUyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JuQixNQUF4QixDQUFiO0FBQ0EsVUFBTW9CLFlBQVksR0FBR1gsSUFBSSxDQUFDWSxTQUExQjtBQUNBQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsV0FBRyxFQUFFSixZQURTO0FBRWRLLGdCQUFRLEVBQUU7QUFGSSxPQUFoQjtBQUlEO0FBRUYsR0FYUSxFQVdOLENBQUMzQixXQUFELENBWE0sQ0FBVDtBQWFBLE1BQU00QixJQUFXLGtCQUFHOUIsS0FBSyxDQUFDK0IsSUFBVCxxREFBaUIsR0FBbEM7QUFDQSxNQUFNQyxTQUFnQix1QkFBR2hDLEtBQUssQ0FBQ2lDLFNBQVQsK0RBQXNCLEVBQTVDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUFPLFVBQUksRUFBRUgsSUFBYjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBRUUsU0FBZjtBQUEwQixXQUFHLEVBQUUxQixJQUEvQjtBQUFzQyxlQUFPLEVBQUU7QUFBQSxpQkFBS0UsY0FBYyxDQUFDQyxLQUFELENBQW5CO0FBQUEsU0FBL0M7QUFBQSxrQkFBNEVULEtBQUssQ0FBQ2tDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRCxDQTdDRDs7R0FBTW5DLE07O0tBQUFBLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zY3JvbGxzL2FuY2hvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEFuY2hvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29tcHRTY3JvbGwsIHNldENvbXB0U2Nyb2xsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpZEVsZW0sIHNldElkRWxlbV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBsaW5rID0gdXNlUmVmKG51bGwpXG5cbiAgLypcbiAgKlxuICAqL1xuICBjb25zdCBzY3JvbGxEb2N1bWVudCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmV3Q29tcHRTY3JvbGwgPSBOdW1iZXIoY29tcHRTY3JvbGwpICsgMVxuICAgIGNvbnN0IGVsZW0gPSBsaW5rLmN1cnJlbnRcbiAgICBjb25zdCBwYXRoID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgIGNvbnN0IGVsZW1JZCA9IHBhdGgucmVwbGFjZSgvWyNcXC9dL2csICcnKVxuICAgIHNldENvbXB0U2Nyb2xsKG5ld0NvbXB0U2Nyb2xsKVxuICAgIHNldElkRWxlbShlbGVtSWQpICBcbiAgfVxuXG4gXG4gIC8qXG4gICpcbiAgKi9cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB0U2Nyb2xsKVxuICAgIGlmKGlkRWxlbSkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbSlcbiAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IGVsZW0ub2Zmc2V0VG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IGVsZW1Qb3NpdGlvbixcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgfSwgW2NvbXB0U2Nyb2xsXSlcblxuICBjb25zdCBIcmVmOnN0cmluZyA9IHByb3BzLmhyZWYgPz8gJyMnXG4gIGNvbnN0IENsYXNzTmFtZTpzdHJpbmcgPSBwcm9wcy5jbGFzc05hbWUgPz8gJydcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayAgaHJlZj17SHJlZn0gPlxuICAgICAgICA8YSAgY2xhc3NOYW1lPXtDbGFzc05hbWV9IHJlZj17bGlua30gIG9uQ2xpY2s9eygpPT4gc2Nyb2xsRG9jdW1lbnQoZXZlbnQpfT57cHJvcHMuY2hpbGRyZW59PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/scrolls/anchor.tsx\n");

/***/ })

})