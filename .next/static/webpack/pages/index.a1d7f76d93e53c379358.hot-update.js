webpackHotUpdate_N_E("pages/index",{

/***/ "./components/scrolls/anchor.tsx":
/*!***************************************!*\
  !*** ./components/scrolls/anchor.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/home/kevinpak/Documents/onlineshtab/landing-datahub/components/scrolls/anchor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Anchor = function Anchor(props) {\n  _s();\n\n  var _props$href, _props$className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      doScroll = _useState[0],\n      setDoScroll = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      idElem = _useState2[0],\n      setIdElem = _useState2[1];\n\n  var link = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  /*\n  *\n  */\n\n  var scrollDocument = function scrollDocument(event) {\n    event.preventDefault();\n    var elem = link.current;\n    var path = elem.getAttribute('href');\n    var elemId = path.replace(/[#\\/]/g, ''); //setDoScroll(!doScroll)\n\n    setIdElem(elemId);\n    console.log(elem.prototype);\n  };\n  /*\n  *\n  */\n\n  /*useEffect(()=> {\n    if(idElem) {\n      const elem = document.getElementById(idElem)\n      const elemPosition = elem.offsetTop\n      window.scrollTo({\n        top: elemPosition,\n        behavior: \"smooth\"\n      });\n    }\n    \n  }, [doScroll])*/\n\n\n  var Href = (_props$href = props.href) !== null && _props$href !== void 0 ? _props$href : '/';\n  var ClassName = (_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: Href,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: ClassName,\n        ref: link,\n        onClick: function onClick() {\n          return scrollDocument(event);\n        },\n        children: props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Anchor, \"qjoxLJJmCDjcwACPxA2mspY/gA8=\");\n\n_c = Anchor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Anchor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Anchor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxzL2FuY2hvci50c3g/OGFlMCJdLCJuYW1lcyI6WyJBbmNob3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiZG9TY3JvbGwiLCJzZXREb1Njcm9sbCIsImlkRWxlbSIsInNldElkRWxlbSIsImxpbmsiLCJ1c2VSZWYiLCJzY3JvbGxEb2N1bWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbGVtIiwiY3VycmVudCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtSWQiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInByb3RvdHlwZSIsIkhyZWYiLCJocmVmIiwiQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDakJDLFFBRGlCO0FBQUEsTUFDUEMsV0FETzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUVqQkcsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUd4QixNQUFNQyxJQUFJLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsSUFBSSxHQUFHTCxJQUFJLENBQUNNLE9BQWxCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBYjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWEsUUFBYixFQUF1QixFQUF2QixDQUFmLENBTGdDLENBTWhDOztBQUNBWCxhQUFTLENBQUNVLE1BQUQsQ0FBVDtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBSSxDQUFDUSxTQUFqQjtBQUNELEdBVEQ7QUFZQTtBQUNGO0FBQ0E7O0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUUsTUFBTUMsSUFBVyxrQkFBR3BCLEtBQUssQ0FBQ3FCLElBQVQscURBQWlCLEdBQWxDO0FBQ0EsTUFBTUMsU0FBZ0IsdUJBQUd0QixLQUFLLENBQUN1QixTQUFULCtEQUFzQixFQUE1QztBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxVQUFJLEVBQUVILElBQWI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVFLFNBQWY7QUFBMEIsV0FBRyxFQUFFaEIsSUFBL0I7QUFBcUMsZUFBTyxFQUFFO0FBQUEsaUJBQUtFLGNBQWMsQ0FBQ0MsS0FBRCxDQUFuQjtBQUFBLFNBQTlDO0FBQUEsa0JBQTJFVCxLQUFLLENBQUN3QjtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0E3Q0Q7O0dBQU16QixNOztLQUFBQSxNO0FBK0NTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2Nyb2xscy9hbmNob3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBBbmNob3IgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2RvU2Nyb2xsLCBzZXREb1Njcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lkRWxlbSwgc2V0SWRFbGVtXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IGxpbmsgPSB1c2VSZWYobnVsbClcblxuICAvKlxuICAqXG4gICovXG4gIGNvbnN0IHNjcm9sbERvY3VtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgZWxlbSA9IGxpbmsuY3VycmVudFxuICAgIGNvbnN0IHBhdGggPSBlbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgY29uc3QgZWxlbUlkID0gcGF0aC5yZXBsYWNlKC9bI1xcL10vZywgJycpXG4gICAgLy9zZXREb1Njcm9sbCghZG9TY3JvbGwpXG4gICAgc2V0SWRFbGVtKGVsZW1JZCkgIFxuICAgIGNvbnNvbGUubG9nKGVsZW0ucHJvdG90eXBlKVxuICB9XG5cbiBcbiAgLypcbiAgKlxuICAqL1xuICAvKnVzZUVmZmVjdCgoKT0+IHtcbiAgICBpZihpZEVsZW0pIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEVsZW0pXG4gICAgICBjb25zdCBlbGVtUG9zaXRpb24gPSBlbGVtLm9mZnNldFRvcFxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBlbGVtUG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gIH0sIFtkb1Njcm9sbF0pKi9cblxuICBjb25zdCBIcmVmOnN0cmluZyA9IHByb3BzLmhyZWYgPz8gJy8nXG4gIGNvbnN0IENsYXNzTmFtZTpzdHJpbmcgPSBwcm9wcy5jbGFzc05hbWUgPz8gJydcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayAgaHJlZj17SHJlZn0gPlxuICAgICAgICA8YSAgY2xhc3NOYW1lPXtDbGFzc05hbWV9IHJlZj17bGlua30gb25DbGljaz17KCk9PiBzY3JvbGxEb2N1bWVudChldmVudCl9Pntwcm9wcy5jaGlsZHJlbn08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5jaG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scrolls/anchor.tsx\n");

/***/ })

})