(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/frontend/components/managedPortfolios/components/strategyDetails/monthlyReturn.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/dropdown/dropdown.js");
/* harmony import */ var src_frontend_blocks_dropdown_dropdownItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/dropdown/dropdownItem.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _monthlyReturnRow_phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/managedPortfolios/components/strategyDetails/monthlyReturnRow.phone.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\managedPortfolios\\components\\strategyDetails\\monthlyReturn.phone.js";









var MonthlyReturn = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MonthlyReturn, _React$PureComponent);

  function MonthlyReturn() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = MonthlyReturn.prototype;

  _proto.handleChange = function handleChange(year) {
    var _this$props = this.props,
        tradeLeaderId = _this$props.tradeLeaderId,
        selectMonthlyReturn = _this$props.selectMonthlyReturn;
    selectMonthlyReturn(tradeLeaderId, String(year));
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        returnData = _this$props2.returnData,
        selectedMonthlyReturn = _this$props2.selectedMonthlyReturn;

    var isSelectMonthlyReturn = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(returnData, {
      year: selectedMonthlyReturn
    });

    var shownSelectedYear = isSelectMonthlyReturn || returnData[0]; // choose first year in array by default

    if (!shownSelectedYear) {
      return false;
    }

    var dropdownItems = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(returnData, function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_dropdown_dropdownItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        value: item.year,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, item.year));
    });

    var header = returnData.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid strategy-details-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell g--cross-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "strategy-details-header-main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "tertiary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('MonthlyReturnPercentage')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell strategy-details-range-select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "grid grid--main-end",
      onChange: this.handleChange,
      value: shownSelectedYear.year,
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('MonthlyReturnSelectYear'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, dropdownItems))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid strategy-details-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "strategy-details-header-main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "tertiary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('MonthlyReturnPercentage')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell strategy-details-header-sub t-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, shownSelectedYear.year));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "strategy-details-monthly-return grid-cell g--fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_monthlyReturnRow_phone__WEBPACK_IMPORTED_MODULE_8__["default"], {
      values: shownSelectedYear.values,
      result: shownSelectedYear.return,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }));
  };

  return MonthlyReturn;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_3__["bindHandlers"])(MonthlyReturn));

/***/ }),

/***/ "./src/frontend/components/managedPortfolios/components/strategyDetails/monthlyReturnRow.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\managedPortfolios\\components\\strategyDetails\\monthlyReturnRow.phone.js";





var keys = [src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Jan'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Feb'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Mar'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Apr'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_May'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Jun'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Jul'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Aug'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Sep'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Oct'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Nov'), src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Full_Dec')];

var getRowItemClass = function getRowItemClass(value) {
  return classnames__WEBPACK_IMPORTED_MODULE_2___default()('grid grid--fill-fit', {
    'strategy-details-profit': Number(value) > 0,
    'strategy-details-loss': Number(value) < 0
  });
};

var renderRowItems = function renderRowItems(values) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(values, function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      className: getRowItemClass(value),
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "kv-key grid-cell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, keys[index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "kv-val grid-cell t-num",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, value));
  });
};

function MonthlyReturnRow(props) {
  var values = props.values,
      result = props.result;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "kv kv--wrap kv--lines strategy-details-kv-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, renderRowItems(values), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
    className: "grid grid--fill-fit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "kv-key grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('1_Year')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "kv-val grid-cell t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, result)));
}

MonthlyReturnRow.defaultProps = {
  result: ''
};
/* harmony default export */ __webpack_exports__["default"] = (MonthlyReturnRow);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/19.js.map