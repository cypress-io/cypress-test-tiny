(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/frontend/components/managedPortfolios/components/strategyDetails/monthlyReturn.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _monthlyReturnRow_app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/managedPortfolios/components/strategyDetails/monthlyReturnRow.phone.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\managedPortfolios\\components\\strategyDetails\\monthlyReturn.default.js";






function MonthlyReturn(props) {
  var _this = this;

  var returnData = props.returnData;

  var rows = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(returnData, function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_monthlyReturnRow_app___WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      year: item.year,
      values: item.values,
      result: item.return,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    });
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "strategy-details-monthly-return grid-cell g--fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "grid strategy-details-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "strategy-details-header-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('MonthlyReturnPercentage')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", {
    className: "datagrid datagrid-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("colgroup", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("col", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("col", {
    span: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("col", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Jan')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Feb')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Mar')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Apr')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('May')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Jun')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Jul')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Aug')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Sep')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Oct')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Nov')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Dec')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('1_Year')))), rows));
}

/* harmony default export */ __webpack_exports__["default"] = (MonthlyReturn);

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

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/18.js.map