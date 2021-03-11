webpackHotUpdate_N_E("pages/index",{

/***/ "./components/scrolls/anchor.tsx":
/*!***************************************!*\
  !*** ./components/scrolls/anchor.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/home/kevinpak/Documents/onlineshtab/landing-datahub/components/scrolls/anchor.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Anchor = function Anchor(props) {\n  _s();\n\n  var _props$href, _props$className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      doScroll = _useState[0],\n      setDoScroll = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      idElem = _useState2[0],\n      setIdElem = _useState2[1];\n\n  var link = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  /*\n  *\n  */\n\n  var scrollDocument = function scrollDocument(event) {\n    event.preventDefault();\n    var elem = link.current;\n    var path = elem.getAttribute('href');\n    var elemId = path.replace(/[#\\/]/g, ''); //setDoScroll(!doScroll)\n\n    setIdElem(elemId);\n  };\n  /*\n  *\n  */\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (idElem) {\n      var elem = document.getElementById(idElem);\n      var elemPosition = elem.offsetTop;\n      window.scrollTo({\n        top: elemPosition,\n        behavior: \"smooth\"\n      });\n    }\n  }, [idElem]);\n  var Href = (_props$href = props.href) !== null && _props$href !== void 0 ? _props$href : '#';\n  var ClassName = (_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: Href,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: ClassName,\n        ref: link,\n        onClick: function onClick() {\n          return scrollDocument(event);\n        },\n        children: props.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Anchor, \"xOFxxKfv/S0XSHVdij5R0h1ev0g=\");\n\n_c = Anchor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Anchor);\n\nvar _c;\n\n$RefreshReg$(_c, \"Anchor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxzL2FuY2hvci50c3g/OGFlMCJdLCJuYW1lcyI6WyJBbmNob3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiZG9TY3JvbGwiLCJzZXREb1Njcm9sbCIsImlkRWxlbSIsInNldElkRWxlbSIsImxpbmsiLCJ1c2VSZWYiLCJzY3JvbGxEb2N1bWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbGVtIiwiY3VycmVudCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtSWQiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1Qb3NpdGlvbiIsIm9mZnNldFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJIcmVmIiwiaHJlZiIsIkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsSUFBRCxDQUZaO0FBQUEsTUFFakJHLE1BRmlCO0FBQUEsTUFFVEMsU0FGUzs7QUFHeEIsTUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFFQTtBQUNGO0FBQ0E7O0FBQ0UsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaENBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQU1DLElBQUksR0FBR0wsSUFBSSxDQUFDTSxPQUFsQjtBQUNBLFFBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxZQUFMLENBQWtCLE1BQWxCLENBQWI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhLFFBQWIsRUFBdUIsRUFBdkIsQ0FBZixDQUxnQyxDQU1oQzs7QUFDQVgsYUFBUyxDQUFDVSxNQUFELENBQVQ7QUFDRCxHQVJEO0FBV0E7QUFDRjtBQUNBOzs7QUFDRUUseURBQVMsQ0FBQyxZQUFLO0FBQ2IsUUFBR2IsTUFBSCxFQUFXO0FBQ1QsVUFBTU8sSUFBSSxHQUFHTyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JmLE1BQXhCLENBQWI7QUFDQSxVQUFNZ0IsWUFBWSxHQUFHVCxJQUFJLENBQUNVLFNBQTFCO0FBQ0FDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNkQyxXQUFHLEVBQUVKLFlBRFM7QUFFZEssZ0JBQVEsRUFBRTtBQUZJLE9BQWhCO0FBSUQ7QUFFRixHQVZRLEVBVU4sQ0FBQ3JCLE1BQUQsQ0FWTSxDQUFUO0FBWUEsTUFBTXNCLElBQVcsa0JBQUcxQixLQUFLLENBQUMyQixJQUFULHFEQUFpQixHQUFsQztBQUNBLE1BQU1DLFNBQWdCLHVCQUFHNUIsS0FBSyxDQUFDNkIsU0FBVCwrREFBc0IsRUFBNUM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQU8sVUFBSSxFQUFFSCxJQUFiO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFFRSxTQUFmO0FBQTBCLFdBQUcsRUFBRXRCLElBQS9CO0FBQXNDLGVBQU8sRUFBRTtBQUFBLGlCQUFLRSxjQUFjLENBQUNDLEtBQUQsQ0FBbkI7QUFBQSxTQUEvQztBQUFBLGtCQUE0RVQsS0FBSyxDQUFDOEI7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBNUNEOztHQUFNL0IsTTs7S0FBQUEsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Njcm9sbHMvYW5jaG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgQW5jaG9yID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtkb1Njcm9sbCwgc2V0RG9TY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpZEVsZW0sIHNldElkRWxlbV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBsaW5rID0gdXNlUmVmKG51bGwpXG5cbiAgLypcbiAgKlxuICAqL1xuICBjb25zdCBzY3JvbGxEb2N1bWVudCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGVsZW0gPSBsaW5rLmN1cnJlbnRcbiAgICBjb25zdCBwYXRoID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgIGNvbnN0IGVsZW1JZCA9IHBhdGgucmVwbGFjZSgvWyNcXC9dL2csICcnKVxuICAgIC8vc2V0RG9TY3JvbGwoIWRvU2Nyb2xsKVxuICAgIHNldElkRWxlbShlbGVtSWQpICBcbiAgfVxuXG4gXG4gIC8qXG4gICpcbiAgKi9cbiAgdXNlRWZmZWN0KCgpPT4ge1xuICAgIGlmKGlkRWxlbSkge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRWxlbSlcbiAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IGVsZW0ub2Zmc2V0VG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IGVsZW1Qb3NpdGlvbixcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgfSwgW2lkRWxlbV0pXG5cbiAgY29uc3QgSHJlZjpzdHJpbmcgPSBwcm9wcy5ocmVmID8/ICcjJ1xuICBjb25zdCBDbGFzc05hbWU6c3RyaW5nID0gcHJvcHMuY2xhc3NOYW1lID8/ICcnXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgIGhyZWY9e0hyZWZ9ID5cbiAgICAgICAgPGEgIGNsYXNzTmFtZT17Q2xhc3NOYW1lfSByZWY9e2xpbmt9ICBvbkNsaWNrPXsoKT0+IHNjcm9sbERvY3VtZW50KGV2ZW50KX0+e3Byb3BzLmNoaWxkcmVufTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmNob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/scrolls/anchor.tsx\n");

/***/ })

})