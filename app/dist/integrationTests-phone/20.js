(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/frontend/modules/productPage/productPageNews/productPageNews.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/layout/layout.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/workspace/childComponent/container.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_modules_news_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/news/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/productPage/constants.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageNews\\productPageNews.default.js";










function ProductPageNews(props) {
  var componentVisibleChildren = props.componentVisibleChildren,
      componentId = props.componentId,
      resizeTimestamp = props.resizeTimestamp;

  if (!componentVisibleChildren[_constants__WEBPACK_IMPORTED_MODULE_8__["CHILD_MODULES"].NEWS_ID]) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "product-page-news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "secondary",
    isCenter: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('News'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isFlushTop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    childRef: _constants__WEBPACK_IMPORTED_MODULE_8__["CHILD_MODULES"].NEWS_ID,
    parentId: componentId,
    componentProps: {
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      config: src_frontend_modules_news_constants__WEBPACK_IMPORTED_MODULE_7__["INSTRUMENT_NEWS_CONFIG"]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPageNews);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/20.js.map