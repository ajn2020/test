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

/***/ "./components/RecyclingServiceAccordion.tsx":
/*!**************************************************!*\
  !*** ./components/RecyclingServiceAccordion.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecyclingServiceAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pictureAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictureAddress */ \"./components/pictureAddress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecyclingServiceAccordion(props) {\n    _s();\n    const { PictureAddress , topAddress  } = _pictureAddress__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [accordionButton, SetAccordionButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"accordion-button\");\n    const handleClick = ()=>{\n        setOpen(!isOpen);\n        if (accordionButton === \"accordion-button\") {\n            SetAccordionButton(\"accordion-button accordion-button-active\");\n        } else {\n            SetAccordionButton(\"accordion-button\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"accordion-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"accordion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"accordion-title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"accordion-description\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"p-expand\",\n                            children: props.description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isOpen ? \"accordion-content-displayed\" : \"accordion-content-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: props.content\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: accordionButton,\n                type: \"button\",\n                onClick: handleClick,\n                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: topAddress\n                }, void 0, false, {\n                    fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 94\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"\",\n                    src: PictureAddress\n                }, void 0, false, {\n                    fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 119\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(RecyclingServiceAccordion, \"S/Os6aqt7BekwpxxBjY09g/3hr4=\");\n_c = RecyclingServiceAccordion;\nvar _c;\n$RefreshReg$(_c, \"RecyclingServiceAccordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY3ljbGluZ1NlcnZpY2VBY2NvcmRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ1E7QUFPekIsU0FBU0UsMEJBQTBCQyxLQUE0QixFQUFFOztJQUNoRixNQUFNLEVBQUNDLGVBQWMsRUFBQ0MsV0FBVSxFQUFDLEdBQUNKLHVEQUFRQTtJQUN0QyxNQUFNLENBQUNLLFFBQVFDLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNRLGlCQUFnQkMsbUJBQW1CLEdBQUNULCtDQUFRQSxDQUFDO0lBQ3BELE1BQU1VLGNBQWMsSUFBTTtRQUN0QkgsUUFBUSxDQUFDRDtRQUNULElBQUdFLG9CQUFrQixvQkFBbUI7WUFDcENDLG1CQUFtQjtRQUN2QixPQUFLO1lBQ0RBLG1CQUFtQjtRQUN2QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDO3NDQUFJVixNQUFNVyxLQUFLOzs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRzs0QkFBRUgsV0FBVTtzQ0FBWVQsTUFBTWEsV0FBVzs7Ozs7Ozs7Ozs7a0NBRTlDLDhEQUFDTDt3QkFBSUMsV0FBV04sU0FBUSxnQ0FBZ0MsMEJBQTBCOzswQ0FDOUUsOERBQUNXOzs7OzswQ0FDRCw4REFBQ0Y7MENBQUdaLE1BQU1lLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUNDO2dCQUFPUCxXQUFXSjtnQkFBaUJZLE1BQUs7Z0JBQVNDLFNBQVNYOzBCQUFjSix1QkFBUSw4REFBQ2dCO29CQUFJQyxLQUFLbEI7Ozs7O3lDQUFlLDhEQUFDaUI7b0JBQUlWLFdBQVU7b0JBQUdXLEtBQUtuQjs7Ozs7d0JBQWlCOzs7Ozs7Ozs7Ozs7QUFHOUosQ0FBQztHQS9CdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVjeWNsaW5nU2VydmljZUFjY29yZGlvbi50c3g/ZjhmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbWFnZUNvbmZpZ0RlZmF1bHQgfSBmcm9tICduZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pbWFnZS1jb25maWcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwaWNEcmVzcyBmcm9tIFwiLi9waWN0dXJlQWRkcmVzc1wiO1xudHlwZSBSZWN5Y2xpbmdTZXJ2aWNlUHJvcHMgPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjeWNsaW5nU2VydmljZUFjY29yZGlvbihwcm9wczogUmVjeWNsaW5nU2VydmljZVByb3BzKSB7XG5jb25zdCB7UGljdHVyZUFkZHJlc3MsdG9wQWRkcmVzc309cGljRHJlc3M7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjY29yZGlvbkJ1dHRvbixTZXRBY2NvcmRpb25CdXR0b25dPXVzZVN0YXRlKCdhY2NvcmRpb24tYnV0dG9uJylcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0T3BlbighaXNPcGVuKTtcbiAgICAgICAgaWYoYWNjb3JkaW9uQnV0dG9uPT09XCJhY2NvcmRpb24tYnV0dG9uXCIpe1xuICAgICAgICAgICAgU2V0QWNjb3JkaW9uQnV0dG9uKFwiYWNjb3JkaW9uLWJ1dHRvbiBhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZVwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBTZXRBY2NvcmRpb25CdXR0b24oXCJhY2NvcmRpb24tYnV0dG9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwLWV4cGFuZCc+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNPcGVuPyBcImFjY29yZGlvbi1jb250ZW50LWRpc3BsYXllZFwiIDogXCJhY2NvcmRpb24tY29udGVudC1oaWRkZW5cIn0+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICB7LyogXCJFeHBhbmRcIiAgICAgICAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY2NvcmRpb25CdXR0b259IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+e2lzT3Blbj8gPGltZyBzcmM9e3RvcEFkZHJlc3N9Lz46IDxpbWcgY2xhc3NOYW1lPScnIHNyYz17UGljdHVyZUFkZHJlc3N9Lz59PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJwaWNEcmVzcyIsIlJlY3ljbGluZ1NlcnZpY2VBY2NvcmRpb24iLCJwcm9wcyIsIlBpY3R1cmVBZGRyZXNzIiwidG9wQWRkcmVzcyIsImlzT3BlbiIsInNldE9wZW4iLCJhY2NvcmRpb25CdXR0b24iLCJTZXRBY2NvcmRpb25CdXR0b24iLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJiciIsImNvbnRlbnQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RecyclingServiceAccordion.tsx\n"));

/***/ })

});