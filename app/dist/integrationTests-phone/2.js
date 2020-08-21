(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/frontend/components/instrumentSearchResultList/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_RESULT_ITEM_HEIGHT", function() { return SEARCH_RESULT_ITEM_HEIGHT; });
var SEARCH_RESULT_ITEM_HEIGHT = function () {
  if (false) {}

  if (false) {}

  if (true) {
    return 54;
  }

  return 39;
}();

/***/ }),

/***/ "./src/frontend/components/instrumentSearchResultList/instrumentSearchResultList.simple.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_components_reactGrid_list_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/components/reactGrid/list/list.js");
/* harmony import */ var src_frontend_components_reactGrid_config_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/reactGrid/config/items.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/instrumentSearchResultList/constants.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\instrumentSearchResultList\\instrumentSearchResultList.simple.js";





function SearchResultList(props) {
  var children = props.children,
      height = props.height,
      selectedItem = props.selectedItem,
      resizeTimestamp = props.resizeTimestamp,
      isScrollEnabled = props.isScrollEnabled,
      onScrollEnd = props.onScrollEnd,
      onItemSelect = props.onItemSelect,
      onGetItemHeight = props.onGetItemHeight,
      onResize = props.onResize,
      onItemTap = props.onItemTap;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_reactGrid_list_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-test-id": props['data-test-id'],
    className: "list list--lines",
    itemHeight: _constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_RESULT_ITEM_HEIGHT"],
    selectedItem: selectedItem,
    resizeTimestamp: resizeTimestamp,
    height: height,
    isVirtualLayout: true,
    isScrollEnabled: isScrollEnabled,
    onResize: onResize,
    onContentResize: onResize,
    onItemSelect: onItemSelect,
    onItemTap: onItemTap,
    onItemDoubleTap: onItemSelect,
    onScrollEnd: onScrollEnd,
    onGetItemHeight: onGetItemHeight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_reactGrid_config_items__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchResultList);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/2.js.map