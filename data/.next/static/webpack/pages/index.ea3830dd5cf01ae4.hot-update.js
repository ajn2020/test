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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecyclingServiceAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pictureAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictureAddress */ \"./components/pictureAddress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction RecyclingServiceAccordion(props) {\n    _s();\n    const { PictureAddress , topAddress  } = _pictureAddress__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [accordionButton, SetAccordionButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"accordion-button\");\n    const handleClick = ()=>{\n        setOpen(!isOpen);\n        if (accordionButton === \"accordion-button\") {\n            SetAccordionButton(\"accordion-button accordion-button-active\");\n        } else {\n            SetAccordionButton(\"accordion-button\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"accordion-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"accordion\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"accordion-title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"accordion-description\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: props.description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: isOpen ? \"accordion-content-displayed\" : \"accordion-content-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: props.content\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: accordionButton,\n                type: \"button\",\n                onClick: handleClick,\n                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: topAddress\n                }, void 0, false, {\n                    fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 94\n                }, this) : \"expand\"\n            }, void 0, false, {\n                fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\webproject\\\\corsework_term2_recyclewebsite\\\\corsework_term2_recyclewebsite\\\\mgpr_black-create-item-categories\\\\components\\\\RecyclingServiceAccordion.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(RecyclingServiceAccordion, \"S/Os6aqt7BekwpxxBjY09g/3hr4=\");\n_c = RecyclingServiceAccordion;\nvar _c;\n$RefreshReg$(_c, \"RecyclingServiceAccordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY3ljbGluZ1NlcnZpY2VBY2NvcmRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ1E7QUFPekIsU0FBU0UsMEJBQTBCQyxLQUE0QixFQUFFOztJQUNoRixNQUFNLEVBQUNDLGVBQWMsRUFBQ0MsV0FBVSxFQUFDLEdBQUNKLHVEQUFRQTtJQUN0QyxNQUFNLENBQUNLLFFBQVFDLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNRLGlCQUFnQkMsbUJBQW1CLEdBQUNULCtDQUFRQSxDQUFDO0lBQ3BELE1BQU1VLGNBQWMsSUFBTTtRQUN0QkgsUUFBUSxDQUFDRDtRQUNULElBQUdFLG9CQUFrQixvQkFBbUI7WUFDcENDLG1CQUFtQjtRQUN2QixPQUFLO1lBQ0RBLG1CQUFtQjtRQUN2QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDO3NDQUFJVixNQUFNVyxLQUFLOzs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRztzQ0FBR1osTUFBTWEsV0FBVzs7Ozs7Ozs7Ozs7a0NBRXpCLDhEQUFDTDt3QkFBSUMsV0FBV04sU0FBUSxnQ0FBZ0MsMEJBQTBCOzswQ0FDOUUsOERBQUNXOzs7OzswQ0FDRCw4REFBQ0Y7MENBQUdaLE1BQU1lLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUNDO2dCQUFPUCxXQUFXSjtnQkFBaUJZLE1BQUs7Z0JBQVNDLFNBQVNYOzBCQUFjSix1QkFBUSw4REFBQ2dCO29CQUFJQyxLQUFLbEI7Ozs7OzJCQUFlLFFBQVE7Ozs7Ozs7Ozs7OztBQUc5SCxDQUFDO0dBL0J1Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWN5Y2xpbmdTZXJ2aWNlQWNjb3JkaW9uLnRzeD9mOGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGltYWdlQ29uZmlnRGVmYXVsdCB9IGZyb20gJ25leHQvZGlzdC9zaGFyZWQvbGliL2ltYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBpY0RyZXNzIGZyb20gXCIuL3BpY3R1cmVBZGRyZXNzXCI7XG50eXBlIFJlY3ljbGluZ1NlcnZpY2VQcm9wcyA9IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWN5Y2xpbmdTZXJ2aWNlQWNjb3JkaW9uKHByb3BzOiBSZWN5Y2xpbmdTZXJ2aWNlUHJvcHMpIHtcbmNvbnN0IHtQaWN0dXJlQWRkcmVzcyx0b3BBZGRyZXNzfT1waWNEcmVzcztcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYWNjb3JkaW9uQnV0dG9uLFNldEFjY29yZGlvbkJ1dHRvbl09dXNlU3RhdGUoJ2FjY29yZGlvbi1idXR0b24nKVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKCFpc09wZW4pO1xuICAgICAgICBpZihhY2NvcmRpb25CdXR0b249PT1cImFjY29yZGlvbi1idXR0b25cIil7XG4gICAgICAgICAgICBTZXRBY2NvcmRpb25CdXR0b24oXCJhY2NvcmRpb24tYnV0dG9uIGFjY29yZGlvbi1idXR0b24tYWN0aXZlXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFNldEFjY29yZGlvbkJ1dHRvbihcImFjY29yZGlvbi1idXR0b25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc09wZW4/IFwiYWNjb3JkaW9uLWNvbnRlbnQtZGlzcGxheWVkXCIgOiBcImFjY29yZGlvbi1jb250ZW50LWhpZGRlblwifT4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIHsvKiBcIkV4cGFuZFwiICAgICAgICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjY29yZGlvbkJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57aXNPcGVuPyA8aW1nIHNyYz17dG9wQWRkcmVzc30vPjogXCJleHBhbmRcIn08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInBpY0RyZXNzIiwiUmVjeWNsaW5nU2VydmljZUFjY29yZGlvbiIsInByb3BzIiwiUGljdHVyZUFkZHJlc3MiLCJ0b3BBZGRyZXNzIiwiaXNPcGVuIiwic2V0T3BlbiIsImFjY29yZGlvbkJ1dHRvbiIsIlNldEFjY29yZGlvbkJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImJyIiwiY29udGVudCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RecyclingServiceAccordion.tsx\n"));

/***/ })

});