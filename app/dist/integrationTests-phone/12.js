(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/frontend/components/transactionsNotBookedDialog/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_accounts_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/accounts/selectors.js");
/* harmony import */ var _transactionsNotBookedDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/transactionsNotBookedDialog/transactionsNotBookedDialog.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/transactionsNotBookedDialog/selectors.js");







var mapStateToProps = function mapStateToProps() {
  var getTransactionsDataDetails = _selectors__WEBPACK_IMPORTED_MODULE_5__["createGetTransactionsNotBookedDetails"]();
  return function (state, ownProps) {
    var accountId = ownProps.accountId,
        clientKey = ownProps.clientKey;
    var currentClientKey = clientKey || src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__["getClientKey"](state);
    var account = src_frontend_models_accounts_selectors__WEBPACK_IMPORTED_MODULE_3__["default"].getAccountById(state, accountId, currentClientKey);
    var transactionsNotBookedDetails = getTransactionsDataDetails(state, accountId, currentClientKey);
    return {
      transactionsNotBookedDetails: transactionsNotBookedDetails,
      currencyDecimals: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultTo(account == null ? void 0 : account.BaseCurrencyDecimals, 2)
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_transactionsNotBookedDialog__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/frontend/components/transactionsNotBookedDialog/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetTransactionsNotBookedDetails", function() { return createGetTransactionsNotBookedDetails; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_models_balances_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/balances/selectors.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/balances/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");






var transactionsNotBookedTranslations = {
  CashDeposit: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_CashDeposit'),
  CashWithdrawal: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_CashWithdrawal'),
  Commission: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_Commission'),
  StampDuty: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_StampDuty'),
  ExchangeFee: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_ExchangeFee'),
  AdditionalTransactionCost: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_AdditionalTransactionCost'),
  ExternalCharges: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_ExternalCharges'),
  ShareValue: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_ShareValue'),
  BondValue: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_BondValue'),
  MutualFundValue: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_MutualFundValue'),
  OptionPremium: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_OptionPremium'),
  WarrantPremium: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_WarrantPremium'),
  LeveragedKnockoutProductsValue: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_TurboPremium'),
  CertificatesValue: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_CertificatePremium'),
  FundsReservedByOrder: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_FundsReservedByOrder'),
  Accrual: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_Accrual'),
  CashReservation: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_CashReservation')
};
var transactionsNotBookedTooltips = {
  Accrual: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_Accrual_Tooltip'),
  CashReservation: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('AccountDetails_TransactionsNotBooked_CashReservation_Tooltip')
};

var mapTransactionNotBookedToArray = function mapTransactionNotBookedToArray(transactionsNotBooked) {
  if (!transactionsNotBooked) {
    return [];
  }

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(transactionsNotBooked, function (acc, val, key) {
    if (!val) {
      return acc;
    }

    return [].concat(acc, [{
      key: key,
      label: transactionsNotBookedTranslations[key],
      value: val,
      tooltip: transactionsNotBookedTooltips[key]
    }]);
  }, []);
};

var createGetTransactionsNotBookedDetails = function createGetTransactionsNotBookedDetails() {
  var getDataByAccount = src_frontend_models_balances_selectors__WEBPACK_IMPORTED_MODULE_2__["createGetDataByAccount"]();
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getDataByAccount, function (balanceData) {
    return mapTransactionNotBookedToArray(balanceData.TransactionsNotBookedDetail);
  });
};

/***/ }),

/***/ "./src/frontend/components/transactionsNotBookedDialog/transactionsNotBookedDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/dialog/types.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/infoTooltip/index.js");
/* harmony import */ var src_frontend_atoms_stack_stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/atoms/stack/stack.js");
/* harmony import */ var src_frontend_atoms_stack_stackItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/atoms/stack/stackItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionsNotBookedDialog\\transactionsNotBookedDialog.js";














var TransactionsNotBookedDialogWidth = 330;

function TransactionsNotBookedDialog(_ref) {
  var _this = this;

  var dialogParent = _ref.dialogParent,
      dialogType = _ref.dialogType,
      transactionsNotBookedDetails = _ref.transactionsNotBookedDetails,
      currencyDecimals = _ref.currencyDecimals,
      onHideDialog = _ref.onHideDialog;

  var getLabel = function getLabel(tooltip, label) {
    return tooltip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: label,
      text: tooltip,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, label) : label;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: dialogType || 'card',
    parent: dialogParent,
    showUnderlay: true,
    onHide: onHideDialog,
    width: TransactionsNotBookedDialogWidth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "grid grid--y grid--fit-fill",
    "data-test-id": "transactions-not-booked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TransactionsNotBooked')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid grid--scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_atoms_stack_stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isVertical: true,
    gutter: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_atoms_stack_stackItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isStretch: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(transactionsNotBookedDetails, function (_ref2) {
    var key = _ref2.key,
        label = _ref2.label,
        value = _ref2.value,
        tooltip = _ref2.tooltip;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: getLabel(tooltip, label),
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
      value: value,
      decimals: currencyDecimals,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 53
      }
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_atoms_stack_stackItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TransactionsNotBookedDialog);

/***/ }),

/***/ "./src/frontend/models/accountFundingLimits/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFundingUtilisationPct", function() { return getFundingUtilisationPct; });
var getFundingUtilisationPct = function getFundingUtilisationPct(netFundedAmount, maxFundingLimit) {
  return netFundedAmount / maxFundingLimit * 100;
};

/***/ }),

/***/ "./src/frontend/modules/accountDetails/accountDetails.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/balances/queries.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/link/link.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_graphBar_graphBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/graphBar/graphBar.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/models/balances/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/blocks/utilisationGraphBar/utilisationGraphBar.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_models_accountFundingLimits_queries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/models/accountFundingLimits/queries.js");
/* harmony import */ var src_frontend_models_accounts_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/models/accounts/utils.js");
/* harmony import */ var src_frontend_components_transactionsNotBookedDialog_container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/components/transactionsNotBookedDialog/container.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/workspace/childComponent/container.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/blocks/emptyValue/emptyValue.js");
/* harmony import */ var _list_listItem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/modules/accountDetails/list/listItem.js");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/accountDetails/list/list.js");
/* harmony import */ var _accountName_container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/modules/accountDetails/accountName/container.js");
/* harmony import */ var _marginModesLineSummary_marginModesLineSummary_default__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/modules/accountDetails/marginModesLineSummary/marginModesLineSummary.default.js");
/* harmony import */ var _settlementLine_settlementLine_default__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/frontend/modules/accountDetails/settlementLine/settlementLine.default.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/frontend/modules/accountDetails/queries.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\accountDetails\\accountDetails.default.js";
// Added ignore rule ase refactor is planned

/* eslint-disable complexity */
































var AccountDetails = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AccountDetails, _React$Component);

  function AccountDetails() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      sheetRef: null,
      isTransactionsNotBookedCardShown: false,
      isMarginBreakdownShown: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleDomRef", function (ref) {
      _this.setState({
        sheetRef: ref
      });
    });

    return _this;
  }

  var _proto = AccountDetails.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        clientId = _this$props.clientId,
        featureArea = _this$props.featureArea;

    if (featureArea) {
      src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_22__["logEvent"](featureArea, 'Account details dialog launched', {
        clientId: clientId
      });
    }
  };

  _proto.handleOpenCashMarginCollateralCard = function handleOpenCashMarginCollateralCard() {
    var _this$props2 = this.props,
        componentId = _this$props2.componentId,
        onShowCashMarginCollateralCard = _this$props2.onShowCashMarginCollateralCard;
    onShowCashMarginCollateralCard(componentId);
  };

  _proto.handleHideCashMarginCollateralCard = function handleHideCashMarginCollateralCard() {
    var _this$props3 = this.props,
        componentId = _this$props3.componentId,
        onHideCashMarginCollateralCard = _this$props3.onHideCashMarginCollateralCard;
    onHideCashMarginCollateralCard(componentId);
  };

  _proto.handleMarginBreakdownTap = function handleMarginBreakdownTap() {
    this.setState({
      isMarginBreakdownShown: true
    });
  };

  _proto.handleHideMarginBreakdown = function handleHideMarginBreakdown() {
    this.setState({
      isMarginBreakdownShown: false
    });
  };

  _proto.handleShowTransactionsNotBookedDetails = function handleShowTransactionsNotBookedDetails() {
    var clientId = this.props.clientId;
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_22__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_22__["AREA_ACCOUNT_DETAILS"], 'Transactions not booked dialog launched', {
      clientId: clientId
    });
    this.setState({
      isTransactionsNotBookedCardShown: true
    });
  };

  _proto.handleHideTransactionsNotBookedDetails = function handleHideTransactionsNotBookedDetails() {
    this.setState({
      isTransactionsNotBookedCardShown: false
    });
  };

  _proto.getMarginLendingEntityLevelRenderer = function getMarginLendingEntityLevelRenderer(balance, decimals, sheetRef) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loan'),
      "data-test-id": "loan",
      tooltipText: src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["hasCollateralCreditValue"](this.props.account) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loan_AccountDetails_Tooltip') : null,
      dialogParent: sheetRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCollateralLoan"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Not_available_initial_collateral'),
      "data-test-id": "not-available-initial-collateral",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getNotAvailableAsInitialCollateral"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('TC_InitialCollateralValue'),
      "data-test-id": "initial-collateral-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getInitialMarginCollateralCreditValueLine"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Initial_Collateral_Available'),
      dialogParent: sheetRef,
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Initial_Collateral_Available_Tooltip'),
      "data-test-id": "initial-collateral-available",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getInitialCollateralAvailable"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Not_available_maintenance_collateral'),
      "data-test-id": "not-available-maintenance-collateral",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getNotAvailableAsMaintenanceCollateral"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('TC_MaintenanceCollateralValue'),
      "data-test-id": "maintenance-collateral-value",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCollateralCreditValueLine"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MaintenanceCollateralAvailable'),
      dialogParent: sheetRef,
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MaintenanceCollateralAvailable_Tooltip'),
      "data-test-id": "maintenance-collateral-available",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getMaintenanceCollateralAvailable"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CollateralUtilisation'),
      dialogParent: sheetRef,
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CollateralUtilisation_Tooltip'),
      isHighlighted: true,
      "data-test-id": "collateral-utilisation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCollateralUtilisationPct"](balance),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    })));
  };

  _proto.getMarginLendingAccountLevelRenderer = function getMarginLendingAccountLevelRenderer(balance, decimals) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loan'),
      "data-test-id": "loan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCollateralLoan"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }));
  }
  /*
   * @hasMarginLending - indicate that selected account is margin lending entity
   * (collateral can be monitored on client, group or singe account level - depends on FOC settings)
   * in that case we show extended fields set
   * @isMarginLendingAccount - selected account is margin lending type,
   * this doesn't mean that account is margin lending entity
   * (group/client may contain several accounts with type=MarginLending)
   * Requirement is that when we select account which is
   * part of group/client classified as margin lending entity
   * but selected account itself its not margin entity however its margin lending TYPE
   * we should show only Loan field
   * */
  ;

  _proto.getMarginLendingRenderer = function getMarginLendingRenderer(hasMarginLending, isMarginLendingAccount, balance, decimals, sheetRef) {
    if (!hasMarginLending && isMarginLendingAccount) {
      return this.getMarginLendingAccountLevelRenderer(balance, decimals);
    }

    return this.getMarginLendingEntityLevelRenderer(balance, decimals, sheetRef);
  };

  _proto.isMarginLendingEntityOrAccount = function isMarginLendingEntityOrAccount(hasMarginLending, isMarginLendingAccount) {
    return Boolean(hasMarginLending || isMarginLendingAccount);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        componentId = _this$props4.componentId,
        clientId = _this$props4.clientId,
        clientKey = _this$props4.clientKey,
        clientCurrency = _this$props4.clientCurrency,
        account = _this$props4.account,
        accountList = _this$props4.accountList,
        balance = _this$props4.balance,
        maxCreditLine = _this$props4.maxCreditLine,
        isVariationMarginEligible = _this$props4.isVariationMarginEligible,
        isRealTimeNettingEnabled = _this$props4.isRealTimeNettingEnabled,
        isCashMarginCollateralVisible = _this$props4.isCashMarginCollateralVisible,
        isInitialAndMaintenanceMarginEnabled = _this$props4.isInitialAndMaintenanceMarginEnabled,
        isImpersonatedClient = _this$props4.isImpersonatedClient,
        isAccountDisplayNameEditable = _this$props4.isAccountDisplayNameEditable,
        _this$props4$balance = _this$props4.balance,
        UnrealizedMarginProfitLoss = _this$props4$balance.UnrealizedMarginProfitLoss,
        UnrealizedMarginOpenProfitLoss = _this$props4$balance.UnrealizedMarginOpenProfitLoss,
        UnrealizedMarginClosedProfitLoss = _this$props4$balance.UnrealizedMarginClosedProfitLoss,
        WarrantsMarketValue = _this$props4$balance.WarrantsMarketValue,
        TurbosMarketValue = _this$props4$balance.TurbosMarketValue,
        OptionPremiumsMarketValue = _this$props4$balance.OptionPremiumsMarketValue,
        OtherCollateral = _this$props4$balance.OtherCollateral,
        MaxCreditLine = _this$props4$balance.MaxCreditLine,
        MarginCollateralNotAvailable = _this$props4$balance.MarginCollateralNotAvailable,
        MarginUtilizationPct = _this$props4$balance.MarginUtilizationPct,
        CashBalance = _this$props4$balance.CashBalance,
        VariationMarginCashBalance = _this$props4$balance.VariationMarginCashBalance,
        TransactionsNotBooked = _this$props4$balance.TransactionsNotBooked,
        NonMarginPositionsValue = _this$props4$balance.NonMarginPositionsValue,
        CostToClosePositions = _this$props4$balance.CostToClosePositions,
        TotalValue = _this$props4$balance.TotalValue,
        VariationMargin = _this$props4$balance.VariationMargin,
        CreditLineUtilization = _this$props4$balance.CreditLineUtilization,
        CollateralUtilization = _this$props4$balance.CollateralUtilization,
        CollateralValue = _this$props4$balance.CollateralValue,
        Loan = _this$props4$balance.Loan,
        UnusedCollateralValue = _this$props4$balance.UnusedCollateralValue,
        MarginNetExposure = _this$props4$balance.MarginNetExposure,
        MarginExposureCoveragePct = _this$props4$balance.MarginExposureCoveragePct,
        shouldShowSettlementLine = _this$props4.shouldShowSettlementLine,
        _this$props4$accountV = _this$props4.accountValidations,
        MaxFundingLimit = _this$props4$accountV.MaxFundingLimit,
        RemainingFundingLimit = _this$props4$accountV.RemainingFundingLimit,
        isAccountBalanceValidationsPending = _this$props4.isAccountBalanceValidationsPending,
        accountFundingLimits = _this$props4.accountFundingLimits,
        hasCollateralMonitoringMode = _this$props4.hasCollateralMonitoringMode,
        hasMarginModeLines = _this$props4.hasMarginModeLines,
        accountId = _this$props4.accountId;
    var _this$state = this.state,
        sheetRef = _this$state.sheetRef,
        isTransactionsNotBookedCardShown = _this$state.isTransactionsNotBookedCardShown;
    var hasCreditLine = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["hasCreditLine"](account, accountList, maxCreditLine); // if net exposure is zero or not defined, hide the entire section

    var hasExposure = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isFinite(MarginNetExposure) && MarginNetExposure !== 0;
    var hasMargin = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["hasMargin"](account, accountList);

    var decimals = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaultTo(account.BaseCurrencyDecimals, 2);

    var showMarginPositionsPL = hasMargin || UnrealizedMarginProfitLoss !== 0;
    var showMarginPositions = showMarginPositionsPL && !isRealTimeNettingEnabled;
    var showVariationMarginSection = isVariationMarginEligible;
    var showRealTimeNettingFieldValues = showMarginPositionsPL && isRealTimeNettingEnabled;
    var cash = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCash"](balance);
    var cashAvailable = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getCashAvailable"](balance);
    var hasCashAvailable = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["hasCashAvailable"](balance);
    var valueOfPositions = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getValueOfPositions"](balance);
    var canUseCashPositionsAsMarginCollateral = src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isCashPositionsCollateralForMarginEnabled && account.CanUseCashPositionsAsMarginCollateral;
    var isAktiesparekontoAccount = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["isAktiesparekontoAccount"](account);
    var isEquitySavingAccount = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["isEquitySavingAccount"](account);
    var isPEAorPEAPMEAccount = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["isPEAAccount"](account) || src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["isPEAPMEAccount"](account);
    var useCashPositionsAsMarginCollateralText = account.UseCashPositionsAsMarginCollateral ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Yes') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('No');
    var hasMarginLending = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["hasMarginLending"](account, accountList);
    var isMarginLendingAccount = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["isMarginLendingAccount"](account);
    var isMarginLendingEntityOrAccount = this.isMarginLendingEntityOrAccount(hasMarginLending, isMarginLendingAccount);
    var hasSettlementLine = shouldShowSettlementLine && src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["hasSettlementLine"](balance);
    var isMandatumFundingLimitEnabled = src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isMandatumFundingLimitEnabled;
    var isAccountFundingLimitsPending = isMandatumFundingLimitEnabled && this.props.isAccountFundingLimitsPending;
    var fundingLimitCurrency = 'EUR';
    var isPEAFundingLimitEnabled = src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isPEAFundingLimitEnabled;
    var canChangeUseCashPositionsForMargin = !isImpersonatedClient && src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appId !== 'monitor';
    var isTransactionsNotBookedDetailsEnabled = _queries__WEBPACK_IMPORTED_MODULE_33__["isTransactionsNotBookedDetailsEnabled"](TransactionsNotBooked);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "account-details grid grid--y grid--fit-fill",
      "data-test-id": "account-details-dialog-sheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_26__["default"], {
      className: "grid-cell",
      "data-test-id": "account-details-sheet-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountDetails')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "account-details grid grid--scroll",
      "data-test-id": "account-details",
      onDomRef: this.handleDomRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "data-test-id": "account-details-content",
      className: "account-details-content  grid grid--y grid--series g--fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Details'),
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClientID'),
      "data-test-id": "account-details-client-id",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 33
      }
    }, clientId), account.IsAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountName'),
      "data-test-id": "account-details-account-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_accountName_container__WEBPACK_IMPORTED_MODULE_30__["default"], {
      dialogParent: sheetRef,
      accountId: account.AccountId,
      clientKey: clientKey,
      displayName: account.DisplayName,
      isAccountDisplayNameEditable: isAccountDisplayNameEditable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 45
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountID'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 41
      }
    }, account.AccountId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Currency'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 41
      }
    }, account.BaseCurrency)), (account.IsGroup || account.IsSummary) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Currency'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 37
      }
    }, clientCurrency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CashAndPositions'),
      className: "kv--lines account-details-kv tst-account-details-margin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CashBalance'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: CashBalance,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('TransactionsNotBooked'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 33
      }
    }, isTransactionsNotBookedDetailsEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "data-test-id": "transactions-not-booked-details-link",
      onTap: function onTap() {
        return _this2.handleShowTransactionsNotBookedDetails();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: TransactionsNotBooked,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 45
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: TransactionsNotBooked,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 41
      }
    }), isTransactionsNotBookedCardShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_transactionsNotBookedDialog_container__WEBPACK_IMPORTED_MODULE_21__["default"], {
      accountId: accountId,
      dialogParent: sheetRef,
      onHideDialog: function onHideDialog() {
        return _this2.handleHideTransactionsNotBookedDetails();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Cash'),
      isHighlighted: true,
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: cash,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarketValueCashPositions'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: NonMarginPositionsValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 37
      }
    })), Boolean(WarrantsMarketValue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarketValueWarrantPositions'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: WarrantsMarketValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 41
      }
    })), Boolean(TurbosMarketValue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarketValueTurboPositions'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: TurbosMarketValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 41
      }
    })), Boolean(OptionPremiumsMarketValue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarketValueOptionPositions'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: OptionPremiumsMarketValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 41
      }
    })), showMarginPositions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('PLMarginPositions'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: UnrealizedMarginProfitLoss,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 41
      }
    })), showRealTimeNettingFieldValues && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarginPL_Open'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: UnrealizedMarginOpenProfitLoss,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 41
      }
    })), showRealTimeNettingFieldValues && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarginPL_Closed'),
      isNumber: true,
      isProfitLoss: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: UnrealizedMarginClosedProfitLoss,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CostToClose'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: CostToClosePositions,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ValueOfPositions'),
      isHighlighted: true,
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: valueOfPositions,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountValue'),
      isHighlighted: true,
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: TotalValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 37
      }
    }))), (hasMargin || canUseCashPositionsAsMarginCollateral) && !isMarginLendingEntityOrAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Margin'),
      className: "kv--lines account-details-kv",
      "data-test-id": "margin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 37
      }
    }, hasMargin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, Boolean(OtherCollateral) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OtherCollateral'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 53
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: OtherCollateral,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 57
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NotAvailableAsMarginCollateral'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: MarginCollateralNotAvailable,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 53
      }
    })), isInitialAndMaintenanceMarginEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('InitialMarginReserved'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 57
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getInitialMarginReservedValue"](balance),
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645,
        columnNumber: 61
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('InitialMarginAvailable'),
      isNumber: true,
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('InitialMarginAvailable_Tooltip'),
      dialogParent: sheetRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 57
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getInitialMarginAvailableValue"](balance),
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 61
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getMarginReservedLabel"](isInitialAndMaintenanceMarginEnabled),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 49
      }
    }, src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isMarginBreakdownEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onTap: function onTap() {
        return _this2.handleMarginBreakdownTap();
      },
      "data-test-id": "margin-breakdown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 61
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: balance.MarginUsedByCurrentPositions,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 65
      }
    })), this.state.isMarginBreakdownShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_25__["default"], {
      type: "card",
      parent: sheetRef,
      showUnderlay: true,
      onHide: function onHide() {
        return _this2.handleHideMarginBreakdown();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 65
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_23__["default"], {
      childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_24__["MARGIN_BREAKDOWN"],
      parentId: this.props.componentId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 69
      }
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: balance.MarginUsedByCurrentPositions,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 57
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getMarginAvailableLabel"](isInitialAndMaintenanceMarginEnabled),
      isNumber: true,
      tooltipText: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getMarginAvailableTooltip"](isInitialAndMaintenanceMarginEnabled),
      dialogParent: sheetRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: balance.MarginAvailableForTrading,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 53
      }
    })), !hasMarginModeLines && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarginUtilisation'),
      isHighlighted: true,
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MarginUtilisation_Tooltip'),
      dialogParent: sheetRef,
      "data-test-id": "margin-utilisation-pct",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 53
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_graphBar_graphBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      pct: MarginUtilizationPct,
      isSkinny: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 57
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      className: "t-num",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 57
      }
    }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__["formatPercentage"](MarginUtilizationPct, 2)))), canUseCashPositionsAsMarginCollateral && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('UseCashPositionsForMarginTrading'),
      "data-test-id": "use-cash-position-for-margin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769,
        columnNumber: 45
      }
    }, canChangeUseCashPositionsForMargin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onTap: this.handleOpenCashMarginCollateralCard,
      className: "tst-open-cash-margin-collateral-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778,
        columnNumber: 57
      }
    }, useCashPositionsAsMarginCollateralText)) : useCashPositionsAsMarginCollateralText, isCashMarginCollateralVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_23__["default"], {
      childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_24__["CASH_MARGIN_COLLATERAL"],
      parentId: componentId,
      componentProps: {
        account: account,
        dialogParent: sheetRef,
        nonMarginPositionsValue: NonMarginPositionsValue,
        marginCollateralNotAvailable: MarginCollateralNotAvailable,
        marginUtilizationPct: MarginUtilizationPct,
        useCashPositionsAsMarginCollateral: account.UseCashPositionsAsMarginCollateral,
        decimals: decimals,
        onModuleClose: this.handleHideCashMarginCollateralCard,
        hasMargin: hasMargin
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 53
      }
    }))), isMarginLendingEntityOrAccount && hasCollateralMonitoringMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Margin_Lending'),
      className: "kv--lines account-details-kv",
      "data-test-id": "margin-lending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 37
      }
    }, this.getMarginLendingRenderer(hasMarginLending, isMarginLendingAccount, balance, decimals, sheetRef)), showVariationMarginSection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('VariationMargin'),
      isHighlighted: true,
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: VariationMargin,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('VariationMarginCashBalance'),
      isHighlighted: true,
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: VariationMarginCashBalance,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 41
      }
    }))), hasMarginModeLines && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_marginModesLineSummary_marginModesLineSummary_default__WEBPACK_IMPORTED_MODULE_31__["default"], {
      account: account,
      sheetRef: sheetRef,
      balance: balance,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 33
      }
    }), hasCreditLine && !isMarginLendingEntityOrAccount && hasCollateralMonitoringMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('LineSummary'),
      className: "kv--lines account-details-kv",
      "data-test-id": "line-summary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('MaxCreditLine'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: MaxCreditLine,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 45
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CreditLineUtilization'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_graphBar_graphBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      pct: CreditLineUtilization || 0,
      isSkinny: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 45
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      className: "t-num",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 893,
        columnNumber: 45
      }
    }, (CreditLineUtilization || 0) + "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CollateralUtilisation'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_graphBar_graphBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      pct: CollateralUtilization || 0,
      isSkinny: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 45
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      className: "t-num",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 45
      }
    }, (CollateralUtilization || 0) + "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CollateralValue'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: CollateralValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916,
        columnNumber: 45
      }
    })), Boolean(OtherCollateral) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OtherCollateral'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: OtherCollateral,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 49
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loan'),
      tooltipText: src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["hasCollateralCreditValue"](account) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loan_AccountDetails_Tooltip') : null,
      isNumber: true,
      dialogParent: sheetRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: Loan,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 45
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('UnusedCollateralValue'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: UnusedCollateralValue,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 45
      }
    }))), hasSettlementLine && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_settlementLine_settlementLine_default__WEBPACK_IMPORTED_MODULE_32__["default"], {
      account: account,
      sheetRef: sheetRef,
      balance: balance,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 968,
        columnNumber: 33
      }
    }), account.IsAccount && hasCashAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      className: "kv--lines account-details-kv tst-account-cash-available",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].isInvestorApp ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Trade_Details_Spending_Power') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CashAvailable'),
      tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NonInvestor_CashAvailableHeading_Tooltip'),
      isHighlighted: true,
      isNumber: true,
      dialogParent: sheetRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 977,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: cashAvailable,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 992,
        columnNumber: 41
      }
    }))), hasExposure && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      "data-test-id": "account-details-exposure",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Exposure'),
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1000,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NetExposure'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: MarginNetExposure,
      decimals: decimals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ExposureCoverage'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014,
        columnNumber: 37
      }
    }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__["formatPercentage"](MarginExposureCoveragePct, 2))), isPEAorPEAPMEAccount && isPEAFundingLimitEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      "data-test-id": "account-details-peaaccount",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('PEA_Account'),
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('WithdrawFunds_PEA_AgeOfTheAccount'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
        columnNumber: 37
      }
    }, src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getFirstFundingDate"](balance) ? src_frontend_models_accounts_utils__WEBPACK_IMPORTED_MODULE_20__["getFormattedAccountAge"](src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getFirstFundingDate"](balance)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043,
        columnNumber: 45
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Net_Funded_Amount'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047,
        columnNumber: 37
      }
    }, isPEAFundingLimitEnabled && isPEAorPEAPMEAccount && src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountFundingLimit"](balance) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_graphBar_graphBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      pct: src_frontend_models_accountFundingLimits_queries__WEBPACK_IMPORTED_MODULE_19__["getFundingUtilisationPct"](src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountNetFundedAmount"](balance), src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountFundingLimit"](balance)),
      isSkinny: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056,
        columnNumber: 49
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountNetFundedAmount"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('PEA_Funding_Limit'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1076,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountFundingLimit"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Remaining_Funding_Limit'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1088,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_8__["getAccountRemainingFunding"](balance),
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094,
        columnNumber: 41
      }
    }))), isAktiesparekontoAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      "data-test-id": "account-details-aktiesparekonto",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Aktiesparekonto'),
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1105,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Funded_This_Year'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: MaxFundingLimit,
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1114,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Remaining_This_Year'),
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: RemainingFundingLimit,
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126,
        columnNumber: 41
      }
    }))), isMandatumFundingLimitEnabled && isEquitySavingAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_29__["default"], {
      "data-test-id": "account-details-equitysaving",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('EquitySavingAccount'),
      className: "kv--lines account-details-kv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1135,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Funding_Limit') + " (" + fundingLimitCurrency + ")",
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1140,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: accountFundingLimits.MaxFundingLimit,
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1146,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Net_Funded_Amount') + " (" + accountFundingLimits.AccountCurrency + ")",
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: accountFundingLimits.NetFundedAmount,
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1158,
        columnNumber: 41
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Remaining_Funding_Limit') + " (" + accountFundingLimits.AccountCurrency + ")",
      isNumber: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1164,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: accountFundingLimits.RemainingFundingLimit,
      decimals: decimals,
      showEmptyValue: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1170,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_18__["default"], {
      isInstant: true,
      isVisible: isAccountBalanceValidationsPending || isAccountFundingLimitsPending,
      isSubtle: true,
      isTransparent: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1180,
        columnNumber: 29
      }
    })))));
  };

  return AccountDetails;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_13__["bindHandlers"])(AccountDetails));

/***/ }),

/***/ "./src/frontend/modules/accountDetails/accountName/accountName.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/link/link.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\accountDetails\\accountName\\accountName.phone.js";




var AccountName = function AccountName(_ref) {
  var displayName = _ref.displayName,
      isAccountDisplayNameEditable = _ref.isAccountDisplayNameEditable,
      showDialog = _ref.showDialog;
  return isAccountDisplayNameEditable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onTap: showDialog,
    className: "tst-account-rename-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, displayName) : displayName;
};

/* harmony default export */ __webpack_exports__["default"] = (AccountName);

/***/ }),

/***/ "./src/frontend/modules/accountDetails/accountName/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_modules_accountRename_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/accountRename/actions.js");
/* harmony import */ var _accountName_app___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/accountDetails/accountName/accountName.phone.js");




function mapDispatchToProps(dispatch, ownProps) {
  return {
    showDialog: function showDialog() {
      dispatch(src_frontend_modules_accountRename_actions__WEBPACK_IMPORTED_MODULE_1__["show"](ownProps.accountId));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_accountName_app___WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/frontend/modules/accountDetails/marginModesLineSummary/marginModesLineSummary.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/utilisationGraphBar/utilisationGraphBar.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/balances/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/balances/queries.js");
/* harmony import */ var _list_listItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/accountDetails/list/listItem.js");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/accountDetails/list/list.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\accountDetails\\marginModesLineSummary\\marginModesLineSummary.default.js";











function MarginModesLineSummary(_ref) {
  var account = _ref.account,
      sheetRef = _ref.sheetRef,
      balance = _ref.balance;

  var decimals = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultTo(account.BaseCurrencyDecimals, 2);

  var tradingLine = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__["getTradingLine"](balance);
  var tradingLineUsage = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__["getTradingLineExposure"](balance);
  var creditLine = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__["getCreditLine"](balance);
  var creditLineUsage = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__["getCreditLineExposure"](balance);
  var creditLineUtilizationPct = src_frontend_models_balances_queries__WEBPACK_IMPORTED_MODULE_7__["getCreditLineUtilizationPct"](balance);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_Lines'),
    className: "kv--lines account-details-kv",
    "data-test-id": "margin-modes-line-summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(tradingLine) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_TradingLine'),
    "data-test-id": "line-summary-trading-line",
    isNumber: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: tradingLine,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(tradingLineUsage) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_TradingLineUsage'),
    "data-test-id": "line-summary-trading-usage",
    isNumber: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: tradingLineUsage,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_CreditLine'),
    "data-test-id": "line-summary-credit-line",
    isNumber: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: creditLine,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_CreditLineUsage'),
    "data-test-id": "line-summary-credit-usage",
    isNumber: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: creditLineUsage,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_CreditLineUtilisation'),
    isHighlighted: true,
    tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('MarginLineMode_CreditLineUtilization_Tooltip'),
    dialogParent: sheetRef,
    "data-test-id": "line-summary-credit-utilisation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: creditLineUtilizationPct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MarginModesLineSummary);

/***/ }),

/***/ "./src/frontend/modules/accountDetails/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransactionsNotBookedDetailsEnabled", function() { return isTransactionsNotBookedDetailsEnabled; });
var isTransactionsNotBookedDetailsEnabled = function isTransactionsNotBookedDetailsEnabled(transactionsBotBookedAmount) {
  return Boolean(transactionsBotBookedAmount);
};

/***/ }),

/***/ "./src/frontend/modules/accountDetails/settlementLine/settlementLine.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/utilisationGraphBar/utilisationGraphBar.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/balances/types.js");
/* harmony import */ var src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_balances_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/accountDetails/list/list.js");
/* harmony import */ var _list_listItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/accountDetails/list/listItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\accountDetails\\settlementLine\\settlementLine.default.js";










function SettlementLine(_ref) {
  var _balance$SettlementLi, _balance$SettlementLi2, _balance$SettlementLi3;

  var account = _ref.account,
      sheetRef = _ref.sheetRef,
      balance = _ref.balance;

  var decimals = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultTo(account.BaseCurrencyDecimals, 2);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement'),
    className: "kv--lines account-details-kv",
    "data-test-id": "account-details-settlement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement_Line'),
    "data-test-id": "account-details-settlement-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: (_balance$SettlementLi = balance.SettlementLine) == null ? void 0 : _balance$SettlementLi.Line,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(balance.SettlementValue) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement_Value'),
    "data-test-id": "account-details-settlement-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: balance.SettlementValue,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement_Exposure'),
    "data-test-id": "account-details-settlement-exposure",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: (_balance$SettlementLi2 = balance.SettlementLine) == null ? void 0 : _balance$SettlementLi2.Exposure,
    decimals: decimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_listItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement_Line_Utilisation'),
    dialogParent: sheetRef,
    tooltipText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Account_Details_Settlement_Line_Utilisation_Tooltip'),
    isHighlighted: true,
    "data-test-id": "account-details-settlement-utilisation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_utilisationGraphBar_utilisationGraphBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: (_balance$SettlementLi3 = balance.SettlementLine) == null ? void 0 : _balance$SettlementLi3.UtilizationPct,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SettlementLine);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/12.js.map