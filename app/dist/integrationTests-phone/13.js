(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/frontend/modules/managedPortfoliosInvestments/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_NAME_COLUMN", function() { return S_NAME_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_STATUS_COLUMN", function() { return S_STATUS_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_ACCOUNTVALUE_COLUMN", function() { return S_ACCOUNTVALUE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_RETURNVALUE_COLUMN", function() { return S_RETURNVALUE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_INVESTMENTSHIELD_COLUMN", function() { return S_INVESTMENTSHIELD_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_HIGHWATERMARK_COLUMN", function() { return S_HIGHWATERMARK_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_ACCOUNTNAME_COLUMN", function() { return S_ACCOUNTNAME_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_ACTIONS_COLUMN", function() { return S_ACTIONS_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D_NAME_AND_ACCOUNTID_COLUMN", function() { return D_NAME_AND_ACCOUNTID_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D_ACCOUNTVALUE_AND_INVESTMENTSHIELD_COLUMN", function() { return D_ACCOUNTVALUE_AND_INVESTMENTSHIELD_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D_STATUS_AND_RETURN_COLUMN", function() { return D_STATUS_AND_RETURN_COLUMN; });
var S_NAME_COLUMN = 's_name';
var S_STATUS_COLUMN = 's_status';
var S_ACCOUNTVALUE_COLUMN = 's_accountvalue';
var S_RETURNVALUE_COLUMN = 's_returnvalue';
var S_INVESTMENTSHIELD_COLUMN = 's_investmentshield';
var S_HIGHWATERMARK_COLUMN = 's_highwatermark';
var S_ACCOUNTNAME_COLUMN = 's_accountname';
var S_ACTIONS_COLUMN = 's_actions';
var D_NAME_AND_ACCOUNTID_COLUMN = 'd_name_and_accountid';
var D_ACCOUNTVALUE_AND_INVESTMENTSHIELD_COLUMN = 'd_accountvalue_and_investmentshield';
var D_STATUS_AND_RETURN_COLUMN = 'd_status_and_return';

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/actionsRenderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/types.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\grid\\actionsRenderer.js";







var ActionsRenderer = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ActionsRenderer, _React$PureComponent);

  function ActionsRenderer() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ActionsRenderer.prototype;

  _proto.handleGridRowSelect = function handleGridRowSelect() {
    var _this$props = this.props,
        onGridRowSelect = _this$props.onGridRowSelect,
        investmentId = _this$props.investmentId;
    onGridRowSelect(investmentId);
  };

  _proto.render = function render() {
    // temp fix: use a grid to vertically align the Button
    // a new React grid design spec is needed to solve the problem
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid grid--cross-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "data-test-id": "manage-button",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Manage'),
      onTap: this.handleGridRowSelect,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Manage'))));
  };

  return ActionsRenderer;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ActionsRenderer, "defaultProps", {
  onGridRowSelect: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__["bindHandlers"])(ActionsRenderer));

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/baseColumns.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameColumn", function() { return nameColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusColumn", function() { return statusColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountValueColumn", function() { return accountValueColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnValueColumn", function() { return returnValueColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "investmentShieldColumn", function() { return investmentShieldColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highWaterMarkColumn", function() { return highWaterMarkColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountNameColumn", function() { return accountNameColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionManageColumn", function() { return actionManageColumn; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/defaultHeaderRenderer.js");
/* harmony import */ var src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/infoTooltip/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/utils.js");
/* harmony import */ var _actionsRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/actionsRenderer.js");
/* harmony import */ var _errorRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/errorRenderer.js");
/* harmony import */ var _nameRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/nameRenderer.js");
/* harmony import */ var _labelFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/labelFunctions.js");


var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\grid\\baseColumns.js";











var nameColumn = function nameColumn(props) {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_NAME_COLUMN"],
    priority: 1,
    minWidth: props.isNarrow ? 182 : 215,
    maxWidth: 700,
    align: 'start',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Portfolios'),
    template: function template(_ref) {
      var data = _ref.data;
      var logoUrl = data.logoUrl,
          strategyName = data.strategyName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nameRenderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        strategyName: strategyName,
        logoUrl: logoUrl,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 16
        }
      });
    }
  };
};
var statusColumn = function statusColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_STATUS_COLUMN"],
    priority: 4,
    width: 120,
    align: 'start',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Status'),
    template: function template(_ref2) {
      var data = _ref2.data;
      var displayState = data.displayState,
          investmentStateId = data.investmentStateId,
          status = data.status;

      if (_utils__WEBPACK_IMPORTED_MODULE_6__["isInvestmentFailed"](displayState)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_errorRenderer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          investmentStateId: investmentStateId,
          status: status,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        "data-test-id": "status-text",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 16
        }
      }, status);
    }
  };
};
var accountValueColumn = function accountValueColumn(props) {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_ACCOUNTVALUE_COLUMN"],
    priority: 5,
    width: 150,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('AT_InvestmentValue'),
    template: function template(_ref3) {
      var data = _ref3.data;
      var displayState = data.displayState,
          investmentStateId = data.investmentStateId,
          status = data.status;

      if (props.isNarrow && _utils__WEBPACK_IMPORTED_MODULE_6__["isInvestmentFailed"](displayState)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_errorRenderer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          investmentStateId: investmentStateId,
          status: status,
          className: "t-end",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 16
        }
      }, _labelFunctions__WEBPACK_IMPORTED_MODULE_10__["getAccountValue"]({
        data: data
      }));
    }
  };
};
var returnValueColumn = function returnValueColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_RETURNVALUE_COLUMN"],
    priority: 3,
    width: 100,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Return'),
    primaryTooltip: function primaryTooltip() {
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('AsPerPreviousDaysClose');
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_10__["getReturn"]
  };
};
var investmentShieldColumn = function investmentShieldColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_INVESTMENTSHIELD_COLUMN"],
    priority: 6,
    width: 150,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('InvestmentShield'),
    primaryTooltip: function primaryTooltip() {
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TheInvestmentShieldLowestAccValuePossible');
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_10__["getInvestmentShield"]
  };
};
var highWaterMarkColumn = function highWaterMarkColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_HIGHWATERMARK_COLUMN"],
    priority: 6,
    width: 150,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('HighWaterMark'),
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_10__["getHighWaterMark"],
    header: function header(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('HighWaterMark'),
        text: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('HighWaterMark_Tooltip'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      })));
    }
  };
};
var accountNameColumn = function accountNameColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_ACCOUNTNAME_COLUMN"],
    priority: 7,
    width: 200,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('AccountID'),
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_10__["getAccountName"]
  };
};
var actionManageColumn = function actionManageColumn(props) {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_5__["S_ACTIONS_COLUMN"],
    isAvailable: !props.isNarrow,
    priority: 2,
    width: 120,
    align: 'center',
    primaryTitle: '',
    template: function template(_ref4) {
      var investmentId = _ref4.data.investmentId;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionsRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        investmentId: investmentId,
        onGridRowSelect: props.onGridRowSelect,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      });
    }
  };
};

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/columnDefinitions.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLandscapeColumns", function() { return getLandscapeColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnDefinitions", function() { return getColumnDefinitions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/utils.js");
/* harmony import */ var _errorRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/errorRenderer.js");
/* harmony import */ var _nameRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/nameRenderer.js");
/* harmony import */ var _labelFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/labelFunctions.js");
/* harmony import */ var _baseColumns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/baseColumns.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\grid\\columnDefinitions.phone.js";











var nameColumn = function nameColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_NAME_COLUMN"],
    priority: 1,
    minWidth: 105,
    maxWidth: 500,
    align: 'start',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Portfolios'),
    template: function template(_ref) {
      var data = _ref.data;
      var logoUrl = data.logoUrl,
          strategyName = data.strategyName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nameRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        strategyName: strategyName,
        logoUrl: logoUrl,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 16
        }
      });
    }
  };
};

var statusColumn = function statusColumn(_ref2) {
  var isLandscape = _ref2.isLandscape;
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_STATUS_COLUMN"],
    priority: 4,
    width: 85,
    align: 'start',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Status'),
    template: function template(_ref3) {
      var data = _ref3.data;
      var displayState = data.displayState,
          investmentStateId = data.investmentStateId,
          status = data.status;

      if (isLandscape && _utils__WEBPACK_IMPORTED_MODULE_4__["isInvestmentFailed"](displayState)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_errorRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          investmentStateId: investmentStateId,
          status: status,
          position: "bottom",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 16
        }
      }, _labelFunctions__WEBPACK_IMPORTED_MODULE_7__["getStatus"]({
        data: data
      }));
    }
  };
};

var accountValueColumn = function accountValueColumn(_ref4) {
  var isPortrait = _ref4.isPortrait;
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_ACCOUNTVALUE_COLUMN"],
    priority: 2,
    width: 115,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('AT_InvestmentValue'),
    template: function template(_ref5) {
      var data = _ref5.data;
      var displayState = data.displayState,
          investmentStateId = data.investmentStateId,
          status = data.status;

      if (isPortrait && _utils__WEBPACK_IMPORTED_MODULE_4__["isInvestmentFailed"](displayState)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_errorRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          investmentStateId: investmentStateId,
          status: status,
          className: "t-end",
          position: "bottom",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 16
        }
      }, _labelFunctions__WEBPACK_IMPORTED_MODULE_7__["getAccountValue"]({
        data: data
      }));
    }
  };
};

var returnValueColumn = function returnValueColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_RETURNVALUE_COLUMN"],
    priority: 3,
    minWidth: 80,
    maxWidth: 150,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Return'),
    primaryTooltip: function primaryTooltip() {
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('AsPerPreviousDaysClose');
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_7__["getReturn"]
  };
};

var BREAKPOINT_LANDSCAPE = 500;
var COLUMNS_PORTRAIT = [nameColumn, accountValueColumn, returnValueColumn];
var COLUMNS_LANDSCAPE = [nameColumn, statusColumn, accountValueColumn, returnValueColumn];
var getLandscapeColumns = function getLandscapeColumns(shouldHideHighWaterMarkColumn) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact([].concat(COLUMNS_LANDSCAPE, [shouldHideHighWaterMarkColumn ? null : _baseColumns__WEBPACK_IMPORTED_MODULE_8__["highWaterMarkColumn"]]));
};
var getColumnDefinitions = function getColumnDefinitions(width, shouldHideHighWaterMarkColumn) {
  var isLandscape = width > BREAKPOINT_LANDSCAPE;
  var isPortrait = !isLandscape;

  if (isLandscape) {
    var landscapeColumns = getLandscapeColumns(shouldHideHighWaterMarkColumn);
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(landscapeColumns, function (column) {
      return column({
        isLandscape: isLandscape,
        isPortrait: isPortrait
      });
    });
  }

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(COLUMNS_PORTRAIT, function (column) {
    return column({
      isLandscape: isLandscape,
      isPortrait: isPortrait
    });
  });
};

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/errorRenderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_infoIconDialog_infoIconDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/infoIconDialog/infoIconDialog.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/types.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\grid\\errorRenderer.js";







var ErrorRenderer = function ErrorRenderer(_ref) {
  var investmentStateId = _ref.investmentStateId,
      status = _ref.status,
      className = _ref.className,
      position = _ref.position;
  var infoMessage = status + " " + _utils__WEBPACK_IMPORTED_MODULE_3__["formatLocalizedErrorText"](investmentStateId);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-cell t-error " + (className || ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Failed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-cell " + (className || ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_infoIconDialog_infoIconDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Failed'),
    className: "grid-cell g--cross-center",
    position: position || 'top',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, infoMessage)));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorRenderer);

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/labelFunctions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountValue", function() { return getAccountValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReturn", function() { return getReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvestmentShield", function() { return getInvestmentShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountName", function() { return getAccountName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighWaterMark", function() { return getHighWaterMark; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/utils.js");




var EMPTY_STRING = '';
var getAccountValue = function getAccountValue(_ref) {
  var data = _ref.data;
  var accountValue = data.accountValue,
      displayState = data.displayState,
      accountCurrency = data.accountCurrency;
  return typeof accountValue !== 'number' || _utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState) ? EMPTY_STRING : src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](accountValue, 2) + " " + (accountCurrency || EMPTY_STRING);
};
var getStatus = function getStatus(_ref2) {
  var data = _ref2.data;
  var displayState = data.displayState,
      status = data.status;
  return _utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState) ? EMPTY_STRING : status;
};
var getReturn = function getReturn(_ref3) {
  var data = _ref3.data;
  var displayState = data.displayState,
      returnPercentage = data.returnPercentage;
  return _utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState) ? EMPTY_STRING : _utils__WEBPACK_IMPORTED_MODULE_3__["formatReturnPct"](returnPercentage);
};
var getInvestmentShield = function getInvestmentShield(_ref4) {
  var data = _ref4.data;
  var investmentShieldAmount = data.investmentShieldAmount,
      displayState = data.displayState,
      accountCurrency = data.accountCurrency;
  return investmentShieldAmount >= 0 && !_utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState) ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](investmentShieldAmount) + " " + (accountCurrency || EMPTY_STRING) : EMPTY_STRING;
};
var getAccountName = function getAccountName(_ref5) {
  var data = _ref5.data;
  var displayState = data.displayState,
      accountId = data.accountId;
  return _utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState) ? EMPTY_STRING : accountId;
};
var getHighWaterMark = function getHighWaterMark(_ref6) {
  var data = _ref6.data;
  var highWaterMark = data.highWaterMark,
      accountCurrency = data.accountCurrency,
      displayState = data.displayState;

  if (_utils__WEBPACK_IMPORTED_MODULE_3__["isInvestmentFailed"](displayState)) {
    return EMPTY_STRING;
  }

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(highWaterMark) ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](highWaterMark, 2) + " " + (accountCurrency || EMPTY_STRING) : src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('NotAvailableAbbr');
};

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/grid/nameRenderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/types.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\grid\\nameRenderer.js";




var NameRenderer = function NameRenderer(_ref) {
  var logoUrl = _ref.logoUrl,
      strategyName = _ref.strategyName,
      subTitle = _ref.subTitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid grid--fit-fill grid--cross-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mystrategies-profile-img grid-cell g--grail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logoUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-cell mystrategies-name tst-investments-strategy-name t-truncate",
    title: strategyName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, subTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, strategyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "beta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, subTitle)), !subTitle && strategyName));
};

/* harmony default export */ __webpack_exports__["default"] = (NameRenderer);

/***/ }),

/***/ "./src/frontend/modules/managedPortfoliosInvestments/managedPortfoliosInvestments.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reactGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/reactGrid/index.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var _grid_columnDefinitions_app___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/managedPortfoliosInvestments/grid/columnDefinitions.phone.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\managedPortfoliosInvestments\\managedPortfoliosInvestments.default.js";











var ManagedPortfoliosInvestments = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ManagedPortfoliosInvestments, _React$PureComponent);

  function ManagedPortfoliosInvestments() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "getColumns", Object(reselect__WEBPACK_IMPORTED_MODULE_4__["defaultMemoize"])(function (shouldHideInvestmentShield, shouldHideHighWaterMarkColumn, onGridRowSelect) {
      return _grid_columnDefinitions_app___WEBPACK_IMPORTED_MODULE_12__["getColumnDefinitions"]({
        onGridRowSelect: onGridRowSelect,
        shouldHideInvestmentShield: shouldHideInvestmentShield,
        shouldHideHighWaterMarkColumn: shouldHideHighWaterMarkColumn
      });
    }));

    return _this;
  }

  var _proto = ManagedPortfoliosInvestments.prototype;

  _proto.componentDidMount = function componentDidMount() {
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["AREA_MANAGEDPORTFOLIOS_INVESTMENTS"], 'Strategies opened');
  };

  _proto.render = function render() {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        isError = _this$props.isError,
        isLoading = _this$props.isLoading,
        resizeTimestamp = _this$props.resizeTimestamp,
        rows = _this$props.rows,
        shouldHideInvestmentShield = _this$props.shouldHideInvestmentShield,
        shouldHideHighWaterMarkColumn = _this$props.shouldHideHighWaterMarkColumn,
        onGridRowSelect = _this$props.onGridRowSelect;
    var hasData = Boolean(rows.length);
    var isReady = !isError && !isLoading;
    var columns = this.getColumns(shouldHideInvestmentShield, shouldHideHighWaterMarkColumn, onGridRowSelect);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "mystrategies grid grid--y tst-investments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isVisible: isLoading && !isError,
      isTranslucent: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), !isLoading && isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('StrategyError'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }), isReady && hasData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_components_reactGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
      componentId: componentId,
      rowClass: "tst-investments-row",
      headerClass: "tst-investments-header",
      resizeTimestamp: resizeTimestamp,
      key: componentId,
      cols: columns,
      rows: rows,
      displayMode: src_frontend_config__WEBPACK_IMPORTED_MODULE_10__["default"].isTabletApp ? src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_11__["DOUBLE_ROW_DISPLAY_MODE"] : src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_11__["SINGLE_ROW_DISPLAY_MODE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }), isReady && !hasData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('No_Investments'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }));
  };

  return ManagedPortfoliosInvestments;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ManagedPortfoliosInvestments, "defaultProps", {
  rows: []
});

/* harmony default export */ __webpack_exports__["default"] = (ManagedPortfoliosInvestments);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/13.js.map