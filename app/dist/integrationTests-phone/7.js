(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/frontend/components/cardCarousel/closedPositionCard/closedPositionCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/formattedPrice/formattedPrice.js");
/* harmony import */ var src_frontend_modules_closedPositions_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var src_frontend_components_positionDetailsItems_srdSettlementDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/positionDetailsItems/srdSettlementDate.js");
/* harmony import */ var _details_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/cardCarousel/details/details.js");
/* harmony import */ var _details_detailsItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/components/cardCarousel/details/detailsItem.js");
/* harmony import */ var _detailsOption__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/cardCarousel/closedPositionCard/detailsOption.js");
/* harmony import */ var _detailsStructuredProduct__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/cardCarousel/closedPositionCard/detailsStructuredProduct.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\cardCarousel\\closedPositionCard\\closedPositionCard.js";





















var ClosedPositionCard = function ClosedPositionCard(_ref) {
  var isActive = _ref.isActive,
      featureArea = _ref.featureArea,
      instrument = _ref.instrument,
      closedPosition = _ref.closedPosition,
      closedPositionId = _ref.closedPositionId,
      selectedAccount = _ref.selectedAccount;
  var elRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (elRef.current) {
      elRef.current.scrollTop = 0;
    }
  }, [closedPosition]);
  var handleScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (ref) {
    elRef.current = ref;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isActive) {
      var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_11__["getId"](instrument);
      src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_1__["logEvent"](featureArea, 'Position card loaded', {
        sessionId: src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].auth.sessionId,
        instrumentId: instrumentId,
        closingPositionId: closedPosition.ClosingPositionId,
        closedPositionUniqueId: closedPositionId
      });
    }
  }, [isActive, closedPositionId, featureArea, instrument, closedPosition]);
  var Amount = closedPosition.Amount,
      BuyOrSell = closedPosition.BuyOrSell,
      OpenPrice = closedPosition.OpenPrice,
      ClosingPrice = closedPosition.ClosingPrice,
      TotalPL = closedPosition.TotalPL,
      TotalPLAccount = closedPosition.TotalPLAccount,
      PercentageChange = closedPosition.PercentageChange,
      ExecutionTimeClose = closedPosition.ExecutionTimeClose,
      ExecutionTimeOpen = closedPosition.ExecutionTimeOpen,
      CloseValue = closedPosition.CloseValue,
      CloseValueAccount = closedPosition.CloseValueAccount;
  var accountCurrency = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_7__["getAccountCurrency"](selectedAccount);

  var buySellFormatter = function buySellFormatter(buyOrSell) {
    return buyOrSell === 'Buy' ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Long') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Short');
  };

  var isListedOption = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isOption"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isIndexOption"](instrument);
  var shouldShowPremium = isListedOption || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isWarrant"](instrument);
  var shouldShowMarketOrPremiumValue = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isStructuredProduct"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isLegacyStock"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isBond"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isMutualFund"](instrument) || isListedOption;
  var marketOrPremiumLabel = shouldShowPremium ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Premium') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('MarketValue');
  var marketOrPremiumLabelCurrency = shouldShowPremium ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('PremiumInBaseCurrency') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('MarketValueInCurrency');
  var isStructuredProduct = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isStructuredProduct"](instrument);

  var dateTimeFormatter = function dateTimeFormatter(value) {
    return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_10__["default"].formatUserDateTime(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_10__["default"].createDateTime(value), {
      showSeconds: false
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_details__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "data-test-id": "closed-positions-details-card",
    onSetScrollRef: handleScrollRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Amount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["format"](Amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('L/S'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, buySellFormatter(BuyOrSell)), isStructuredProduct && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_detailsStructuredProduct__WEBPACK_IMPORTED_MODULE_18__["default"], {
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }), isListedOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_detailsOption__WEBPACK_IMPORTED_MODULE_17__["default"], {
    instrument: instrument,
    closedPosition: closedPosition,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClosedPositions_OpenPriceLabel'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_12__["default"], {
    price: OpenPrice,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClosePrice'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_12__["default"], {
    price: ClosingPrice,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_4__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('P/L'), instrument.CurrencyCode || ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-profit": TotalPL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["format"](TotalPL, 0), " ", instrument.CurrencyCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_4__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('PLInCurrency'), accountCurrency),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-profit": TotalPLAccount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["format"](TotalPLAccount, 0), " ", accountCurrency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('% Price'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-profit": PercentageChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["formatPercentage"](PercentageChange, 2))), shouldShowMarketOrPremiumValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: marketOrPremiumLabel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["format"](CloseValue, 0), " ", instrument.CurrencyCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_4__["formatString"](marketOrPremiumLabelCurrency, accountCurrency),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_9__["format"](CloseValueAccount, 0), " ", accountCurrency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('OpenTime'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, dateTimeFormatter(ExecutionTimeOpen)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TimeClose'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, dateTimeFormatter(ExecutionTimeClose)), src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isSRD"](instrument) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_positionDetailsItems_srdSettlementDate__WEBPACK_IMPORTED_MODULE_14__["default"], {
    srdSettlementDate: closedPosition.SrdSettlementDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionCard);

/***/ }),

/***/ "./src/frontend/components/cardCarousel/closedPositionCard/detailsOption.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_modules_closedPositions_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var _details_detailsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/cardCarousel/details/detailsItem.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\cardCarousel\\closedPositionCard\\detailsOption.js";










var DetailsOption = function DetailsOption(_ref) {
  var instrument = _ref.instrument,
      closedPosition = _ref.closedPosition;
  var FxOptionData = closedPosition.FxOptionData;
  var putCall = (FxOptionData == null ? void 0 : FxOptionData.PutCall) || instrument.PutCall;
  var expiryDate = (FxOptionData == null ? void 0 : FxOptionData.ExpiryDate) || instrument.ExpiryDate;
  var strike = (FxOptionData == null ? void 0 : FxOptionData.Strike) || instrument.StrikePrice;
  var putCallLabel = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFxOption"](instrument) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CardCarousel_Type') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CallPut');
  var isFxBinaryOption = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFxBinaryOption"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: putCallLabel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getPutCallText"](putCall, instrument)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ExpiryDate'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDate(expiryDate)), isFxBinaryOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Barrier'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, FxOptionData.LowerBarrier || FxOptionData.UpperBarrier), !isFxBinaryOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Strike'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getFormattedStrikePrice"](instrument, strike)));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsOption);

/***/ }),

/***/ "./src/frontend/components/cardCarousel/closedPositionCard/detailsStructuredProduct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/formattedPrice/formattedPrice.js");
/* harmony import */ var _details_detailsItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/cardCarousel/details/detailsItem.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\cardCarousel\\closedPositionCard\\detailsStructuredProduct.js";









var DetailsStructuredProduct = function DetailsStructuredProduct(_ref) {
  var instrument = _ref.instrument;
  var isWarrant = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isWarrant"](instrument);
  var isTurbo = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isTurbo"](instrument);
  var isCertificate = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isCertificate"](instrument);
  var turboDirection = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getTradePerspectiveText"](instrument);
  var strike = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getStrikePrice"](instrument);
  var lowerStrike = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getStrikePriceLower"](instrument);
  var lowerStrikeLabel = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getStrikePriceLowerLabel"](instrument);
  var upperStrike = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getStrikePriceUpper"](instrument);
  var upperStrikeLabel = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getStrikePriceUpperLabel"](instrument);
  var barrier = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getBarrier"](instrument);
  var lowerBarrier = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getBarrierLower"](instrument);
  var upperBarrier = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getBarrierUpper"](instrument);
  var financingLevel = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getFinancingLevel"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Issuer'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getIssuerName"](instrument)), isWarrant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CallPut'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, turboDirection), !isWarrant && turboDirection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Direction'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, turboDirection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ExpiryDate'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getFormattedExpiryDate"](instrument)), !isTurbo && strike && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "tst-pricecard-strike",
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Strike'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: strike,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })), lowerStrike && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "tst-pricecard-strike-lower",
    label: lowerStrikeLabel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: lowerStrike,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  })), upperStrike && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "tst-pricecard-strike-upper",
    label: upperStrikeLabel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: upperStrike,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), isTurbo && barrier && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Watchlist_Barrier_StopLoss'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: barrier,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), isCertificate && barrier && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Barrier'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: barrier,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })), lowerBarrier && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Watchlist_Barrier_Lower'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: lowerBarrier,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  })), upperBarrier && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Watchlist_Barrier_Upper'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: upperBarrier,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), financingLevel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Watchlist_FinancingLevel'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_formattedPrice_formattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: financingLevel,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsStructuredProduct);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/carousel/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_CREATE", function() { return TRIGGER_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_DESTROY", function() { return TRIGGER_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_SET_CAROUSEL_STEP", function() { return TRIGGER_SET_CAROUSEL_STEP; });
var TRIGGER_CREATE = 'closedPositions-carousel/trigger-create';
var TRIGGER_DESTROY = 'closedPositions-carousel/trigger-destroy';
var TRIGGER_SET_CAROUSEL_STEP = 'closedPositions-carousel/set-carousel-step';

/***/ }),

/***/ "./src/frontend/modules/closedPositions/carousel/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerCreate", function() { return triggerCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerDestroy", function() { return triggerDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerSetCarouselStep", function() { return triggerSetCarouselStep; });
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/actionTypes.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/sagas.js");





function triggerCreate(componentId, account, instrument, position) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["TRIGGER_CREATE"],
    componentId: componentId,
    account: account,
    instrument: instrument,
    position: position
  };
}
function triggerDestroy(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["TRIGGER_DESTROY"],
    componentId: componentId
  };
}
function triggerSetCarouselStep(componentId, step) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["TRIGGER_SET_CAROUSEL_STEP"],
    componentId: componentId,
    step: step
  };
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/carousel/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_components_cardCarousel_cardCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/cardCarousel/cardCarousel.js");
/* harmony import */ var src_frontend_components_cardCarousel_closedPositionCard_closedPositionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/cardCarousel/closedPositionCard/closedPositionCard.js");
/* harmony import */ var src_frontend_components_cardCarousel_priceCard_priceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/cardCarousel/priceCard/priceCard.js");
/* harmony import */ var src_frontend_components_cardCarousel_tradeSignalsCard_tradeSignalsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/cardCarousel/tradeSignalsCard/tradeSignalsCard.js");
/* harmony import */ var src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/workspace/childComponent/container.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_models_globals_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/globals/actions.js");
/* harmony import */ var src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/models/pricesSubscription/selectors.js");
/* harmony import */ var src_frontend_models_tradeSignals_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/models/tradeSignals/selectors.js");
/* harmony import */ var src_frontend_models_exchanges_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/models/exchanges/selectors.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_marketDataModel_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/models/marketDataModel/selectors.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/modules/closedPositions/selectors.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/queries.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/actions.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\carousel\\carousel.js";



























var ClosedPositionsCarousel = function ClosedPositionsCarousel(props) {
  var componentId = props.componentId,
      resizeTimestamp = props.resizeTimestamp,
      instrument = props.instrument,
      closedPositionId = props.closedPositionId,
      height = props.height,
      closedPosition = props.closedPosition,
      onTriggerMenu = props.onTriggerMenu;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var actionLabel = instrument && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__["isTradable"](instrument) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Trade') : null;
  var step = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return _selectors__WEBPACK_IMPORTED_MODULE_20__["getCarouselStep"](state, componentId);
  });
  var selectedAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return _selectors__WEBPACK_IMPORTED_MODULE_20__["getSelectedAccount"](state, componentId);
  });
  var defaultAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_17__["getDefaultAccount"]);
  var priceSubscriptionId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return _selectors__WEBPACK_IMPORTED_MODULE_20__["getCarouselPriceSubscriptionId"](state, componentId);
  });
  var hasPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_14__["getStatus"](state, priceSubscriptionId) === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_19__["SUBSCRIBED"];
  });
  var price = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_14__["getData"](state, priceSubscriptionId);
  });
  var priceSourceName = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_models_exchanges_selectors__WEBPACK_IMPORTED_MODULE_16__["getPriceSourceName"](state, price == null ? void 0 : price.PriceSource);
  });
  var isTradeSignalsAllowed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(src_frontend_models_tradeSignals_selectors__WEBPACK_IMPORTED_MODULE_15__["tradeSignalsAllowedSelector"]);
  var fieldGroups = _queries__WEBPACK_IMPORTED_MODULE_23__["getFieldGroupsByInstrument"](instrument);
  var marketData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_models_marketDataModel_selectors__WEBPACK_IMPORTED_MODULE_18__["getFieldGroupsById"](state, src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_9__["getId"](instrument), fieldGroups);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (closedPosition) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_24__["triggerCreate"])(componentId, defaultAccount, instrument, closedPosition));
    }

    return function () {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_24__["triggerDestroy"])(componentId));
    };
  }, [dispatch, componentId, defaultAccount, instrument, closedPosition]);
  var handleStepChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (cardStep) {
    return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_24__["triggerSetCarouselStep"])(componentId, cardStep));
  }, [dispatch, componentId]);
  var handleTriggerAction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(src_frontend_models_globals_actions__WEBPACK_IMPORTED_MODULE_13__["showTradeTicket"])({
      selectedAccount: selectedAccount,
      uic: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_9__["getUic"](instrument),
      assetType: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_9__["getAssetType"](instrument),
      putCall: instrument == null ? void 0 : instrument.PutCall,
      saveCurrentTicketData: false
    }, src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"]));
  }, [dispatch, instrument, selectedAccount]);
  var handleTriggerMenu = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (evt) {
    return onTriggerMenu(evt);
  }, [onTriggerMenu]);

  if (!instrument || !closedPosition) {
    return null;
  }

  var chartCardProps = {
    chartId: componentId + "-carousel-chartCard",
    instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_9__["getId"](instrument),
    isActive: step === _constants__WEBPACK_IMPORTED_MODULE_22__["steps"].CHART_CARD,
    featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_cardCarousel_cardCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    step: step,
    height: height,
    account: defaultAccount,
    instrument: instrument,
    price: price,
    isPendingSubscription: !hasPrice,
    hasAction: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__["isTradable"](instrument),
    actionLabel: actionLabel,
    priceSourceName: price && priceSourceName,
    onTriggerAction: handleTriggerAction,
    onStepChange: handleStepChange,
    onTriggerMenu: handleTriggerMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_cardCarousel_closedPositionCard_closedPositionCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isActive: step === _constants__WEBPACK_IMPORTED_MODULE_22__["steps"].POSITIONS_CARD,
    featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"],
    selectedAccount: selectedAccount,
    closedPosition: closedPosition,
    closedPositionId: closedPositionId,
    instrument: instrument,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "carousal-chart-card",
    childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_7__["CHART_CARD"],
    parentId: componentId,
    props: {
      resizeTimestamp: resizeTimestamp
    },
    componentProps: chartCardProps,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_cardCarousel_priceCard_priceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    instrument: instrument,
    price: price,
    marketData: marketData,
    isActive: step === _constants__WEBPACK_IMPORTED_MODULE_22__["steps"].PRICE_CARD,
    featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }), isTradeSignalsAllowed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_cardCarousel_tradeSignalsCard_tradeSignalsCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    instrument: instrument,
    resizeTimestamp: resizeTimestamp,
    featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_TRADE_SIGNALS"],
    isActive: step === _constants__WEBPACK_IMPORTED_MODULE_22__["steps"].TRADE_SIGNALS_CARD,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionsCarousel);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/carousel/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldGroupsByInstrument", function() { return getFieldGroupsByInstrument; });
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/marketDataModel/fieldGroups/fieldGroups.js");



var getFieldGroupsByInstrument = function getFieldGroupsByInstrument(instrument) {
  return src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_0__["isSrdEtf"](instrument) ? [src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__["PERFORMANCE"]] : [];
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/carousel/sagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/redux-tale/es/effects.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/log/index.js");
/* harmony import */ var src_frontend_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/sagas.js");
/* harmony import */ var src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/marketDataModel/queries.js");
/* harmony import */ var src_frontend_models_marketDataModel_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/marketDataModel/actions.js");
/* harmony import */ var src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/pricesSubscription/selectors.js");
/* harmony import */ var src_frontend_models_pricesSubscription_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/pricesSubscription/actions.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_workspace_moduleLifecycle_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/workspace/moduleLifecycle/effects.js");
/* harmony import */ var src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/workspace/component/actions.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/closedPositions/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/closedPositions/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/actionTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/queries.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchMarketData),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onCreate),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onDestroy),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onActivate),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onDeactivate),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onSetCarouselStep);


















var log = Object(src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_3__["getLog"])('closedPositionsCarousel.sagas');

function fetchMarketData(instrument) {
  var fieldGroups;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchMarketData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_5__["isMarketDataSupported"](instrument)) {
            _context.next = 6;
            break;
          }

          fieldGroups = _queries__WEBPACK_IMPORTED_MODULE_17__["getFieldGroupsByInstrument"](instrument);
          log.debug('fetch market data', {
            fieldGroups: fieldGroups
          });

          if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(fieldGroups)) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_models_marketDataModel_actions__WEBPACK_IMPORTED_MODULE_6__["fetchMarketData"](instrument, fieldGroups));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function onCreate(_ref) {
  var componentId, account, instrument, position, priceSubscriptionId, args, carouselStep;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onCreate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          componentId = _ref.componentId, account = _ref.account, instrument = _ref.instrument, position = _ref.position;
          priceSubscriptionId = src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_7__["getUniquePriceId"]('card-carousel');
          _context2.next = 4;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_13__["setCarouselPriceSubscriptionId"](componentId, priceSubscriptionId));

        case 4:
          if (instrument) {
            _context2.next = 7;
            break;
          }

          log.error('Null instrument provided at onCreate', {
            componentId: componentId,
            account: account,
            priceSubscriptionId: priceSubscriptionId,
            position: position
          });
          return _context2.abrupt("return");

        case 7:
          args = getPriceSubscriptionArgs(account, instrument, position);
          _context2.next = 10;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_models_pricesSubscription_actions__WEBPACK_IMPORTED_MODULE_8__["create"]({
            id: priceSubscriptionId,
            args: args
          }));

        case 10:
          _context2.next = 12;
          return fetchMarketData(instrument);

        case 12:
          _context2.next = 14;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_14__["getCarouselStep"], componentId);

        case 14:
          carouselStep = _context2.sent;
          _context2.next = 17;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__["addChildComponent"]({
            componentType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"],
            id: componentId,
            childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"],
            isChildVisible: carouselStep === _constants__WEBPACK_IMPORTED_MODULE_16__["steps"].CHART_CARD
          }));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function onDestroy(_ref2) {
  var componentId, priceSubscriptionId;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onDestroy$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          componentId = _ref2.componentId;
          _context3.next = 3;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_14__["getCarouselPriceSubscriptionId"], componentId);

        case 3:
          priceSubscriptionId = _context3.sent;
          _context3.next = 6;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_models_pricesSubscription_actions__WEBPACK_IMPORTED_MODULE_8__["remove"](priceSubscriptionId));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function onActivate(_ref3) {
  var componentId, priceSubscriptionId, priceSubscription;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onActivate$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          componentId = _ref3.componentId;
          _context4.next = 3;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_14__["getCarouselPriceSubscriptionId"], componentId);

        case 3:
          priceSubscriptionId = _context4.sent;
          _context4.next = 6;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_7__["getSubscription"], priceSubscriptionId);

        case 6:
          priceSubscription = _context4.sent;

          if (!priceSubscription) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_models_pricesSubscription_actions__WEBPACK_IMPORTED_MODULE_8__["subscribe"](priceSubscriptionId));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function onDeactivate(_ref4) {
  var componentId, priceSubscriptionId;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onDeactivate$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          componentId = _ref4.componentId;
          _context5.next = 3;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_14__["getCarouselPriceSubscriptionId"], componentId);

        case 3:
          priceSubscriptionId = _context5.sent;

          if (!priceSubscriptionId) {
            _context5.next = 7;
            break;
          }

          _context5.next = 7;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_models_pricesSubscription_actions__WEBPACK_IMPORTED_MODULE_8__["unsubscribe"](priceSubscriptionId));

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function getPriceSubscriptionArgs(account, instrument, position) {
  var accountArgs = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["getAccountArgs"](account);

  var fxOptionsData = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(position, 'FxOptionData', {}); // These additional arguments need to be manually unset again so that subscription modify does not mix existing args


  var subscriptionArgs = {
    ExpiryDate: fxOptionsData.ExpiryDate || undefined,
    PutCall: fxOptionsData.PutCall || undefined,
    CashSettled: fxOptionsData.CashSettled || undefined,
    UpperBarrier: fxOptionsData.UpperBarrier || undefined,
    LowerBarrier: fxOptionsData.LowerBarrier || undefined,
    StrikePrice: fxOptionsData.Strike || undefined,
    ForwardDate: fxOptionsData.ValueDate || position.ValueDate || undefined
  };
  var AssetType = instrument.AssetType,
      Uic = instrument.Uic;
  return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaults({
    AssetType: AssetType,
    Uic: Uic,
    FieldGroups: ['PriceInfo', 'PriceInfoDetails', 'InstrumentPriceDetails', 'HistoricalChanges', 'MarketDepth', 'Quote']
  }, subscriptionArgs, accountArgs);
}

function onSetCarouselStep(_ref5) {
  var componentId, step, currentCarouselStep;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onSetCarouselStep$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          componentId = _ref5.componentId, step = _ref5.step;
          _context6.next = 3;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_14__["getCarouselStep"], componentId);

        case 3:
          currentCarouselStep = _context6.sent;

          if (!(currentCarouselStep === step)) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return");

        case 6:
          if (!(step === _constants__WEBPACK_IMPORTED_MODULE_16__["steps"].CHART_CARD)) {
            _context6.next = 11;
            break;
          }

          _context6.next = 9;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__["showChildComponent"]({
            componentType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"],
            id: componentId,
            childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"]
          }));

        case 9:
          _context6.next = 13;
          break;

        case 11:
          _context6.next = 13;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__["hideChildComponent"]({
            componentType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"],
            id: componentId,
            childRef: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CHART_CARD"]
          }));

        case 13:
          _context6.next = 15;
          return Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_13__["setCarouselStep"](componentId, step));

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

Object(src_frontend_sagas__WEBPACK_IMPORTED_MODULE_4__["addSagas"])([Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_CREATE"], onCreate), Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_DESTROY"], onDestroy), Object(redux_tale_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_SET_CAROUSEL_STEP"], onSetCarouselStep), src_frontend_workspace_moduleLifecycle_effects__WEBPACK_IMPORTED_MODULE_11__["takeEveryActivate"](src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CLOSED_POSITIONS"], onActivate), src_frontend_workspace_moduleLifecycle_effects__WEBPACK_IMPORTED_MODULE_11__["takeEveryDeactivate"](src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_10__["CLOSED_POSITIONS"], onDeactivate)]);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/closedPositionDetailsDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var _details_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/details/container.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\closedPositionDetailsDialog.js";






var WIDTH = 405;

function ClosedPositionDetailsDialog(props) {
  var onHide = props.onHide,
      isVisible = props.isVisible,
      isFullHeight = props.isFullHeight;

  if (!isVisible) {
    return false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: WIDTH,
    showUnderlay: true,
    onHide: onHide,
    isFullHeight: isFullHeight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "positions-detail grid grid--y grid--fit-fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('PositionDetails')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_details_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: props.error,
    componentId: props.componentId,
    clientKey: props.clientKey,
    shouldShowClientName: props.shouldShowClientName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionDetailsDialog);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/actions.js");
/* harmony import */ var _closedPositionDetailsDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/closedPositionDetailsDialog.js");





function mapStateToProps(state, props) {
  return {
    isVisible: _selectors__WEBPACK_IMPORTED_MODULE_1__["hasData"](state, props.componentId),
    error: _selectors__WEBPACK_IMPORTED_MODULE_1__["errorSelector"](state, props.componentId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHide: function onHide() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["hideClosedPositionDetailsDialog"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_closedPositionDetailsDialog__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/details/closedPositionDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_components_clientName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/clientName/index.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/netting/types.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/header/header.js");
/* harmony import */ var _summaryDetail_summaryDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/summaryDetail.js");
/* harmony import */ var _plCosts_plCosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/plCosts.js");
/* harmony import */ var _profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/profitLossItem/profitLossItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\details\\closedPositionDetails.js";










function ClosedPositionDetails(props) {
  var closedPositionDetailPL = props.closedPositionDetailPL,
      closedPositionSummary = props.closedPositionSummary,
      closedPositionSummaryDetail = props.closedPositionSummaryDetail,
      closedPositionUniqueId = props.closedPositionUniqueId,
      closedPositionInstrumentPLCosts = props.closedPositionInstrumentPLCosts,
      error = props.error,
      instrument = props.instrument,
      currentNettingProfile = props.currentNettingProfile,
      shouldShowClientName = props.shouldShowClientName,
      clientKey = props.clientKey;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (!closedPositionSummary) {
      return;
    }

    var ClosingPositionId = closedPositionSummary.ClosingPositionId,
        OpeningPositionId = closedPositionSummary.OpeningPositionId;
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__["AREA_CLOSE_POSITION_DETAILS"], 'Module loaded', {
      closedPositionUniqueId: closedPositionUniqueId,
      closingPositionId: ClosingPositionId,
      openingPositionId: OpeningPositionId
    });
  }, [closedPositionSummary, closedPositionUniqueId]);
  var content;

  if (closedPositionDetailPL) {
    var totalCost = closedPositionDetailPL.TotalCost;
    var totalCostInBaseCurrency = closedPositionDetailPL.TotalCostInBaseCurrency;
    var conversionProfitLoss = closedPositionDetailPL.ProfitLossCurrencyConversion || 0;
    var tradeProfitLoss = closedPositionDetailPL.TradeProfitLoss || 0;
    var tradeProfitLossBaseCurrency = closedPositionDetailPL.TradeProfitLossBaseCurrency || 0;
    var totalProfitLoss = tradeProfitLoss + totalCost;
    var totalProfitLossBaseCurrency = tradeProfitLossBaseCurrency + totalCostInBaseCurrency + conversionProfitLoss;
    var groupClass = 'kv--group kv--lines';
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid-cell",
      "data-test-id": "closed-position-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, shouldShowClientName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_clientName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clientKey: clientKey,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 42
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "positions-detail-summary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "positions-detail-summary-data kv kv--split kv--lines",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_header_header__WEBPACK_IMPORTED_MODULE_5__["InstrumentInfo"], {
      instrument: instrument,
      position: closedPositionSummary,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_header_header__WEBPACK_IMPORTED_MODULE_5__["ClosedPositionSummary"], {
      positionSummaryData: closedPositionSummary,
      instrument: instrument,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_summaryDetail_summaryDetail__WEBPACK_IMPORTED_MODULE_6__["SummaryDetail"], {
      position: closedPositionSummaryDetail,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plCosts_plCosts__WEBPACK_IMPORTED_MODULE_7__["PlCosts"], {
      position: closedPositionInstrumentPLCosts,
      instrument: instrument,
      currentNettingProfile: currentNettingProfile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradePL'),
      profitLoss: tradeProfitLoss,
      profitLossBase: tradeProfitLossBaseCurrency,
      position: closedPositionDetailPL,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Conversion P/L'),
      profitLoss: conversionProfitLoss,
      plDecimal: 2,
      plCurrency: closedPositionDetailPL.ProfitLossCurrency,
      position: closedPositionDetailPL,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PLTotalInclCosts'),
      profitLoss: totalProfitLoss,
      profitLossBase: totalProfitLossBaseCurrency,
      position: closedPositionDetailPL,
      kvClass: groupClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }));
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "position-details-error grid grid--grail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('FailedToFetchPositionDetails'))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid grid--scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 12
    }
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionDetails);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/details/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_netting_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/netting/selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/selectors.js");
/* harmony import */ var _closedPositionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/details/closedPositionDetails.js");





function mapStateToProps(state, props) {
  var componentId = props.componentId,
      clientKey = props.clientKey;
  return {
    instrument: _selectors__WEBPACK_IMPORTED_MODULE_2__["instrumentSelector"](state, componentId, clientKey),
    closedPositionSummary: _selectors__WEBPACK_IMPORTED_MODULE_2__["positionSummarySelector"](state, componentId, clientKey),
    closedPositionSummaryDetail: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionSummaryDetailSelector"](state, componentId, clientKey),
    closedPositionInstrumentPLCosts: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionInstrumentPLCostsSelector"](state, componentId, clientKey),
    closedPositionDetailPL: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionDetailPLSelector"](state, componentId, clientKey),
    closedPositionUniqueId: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionUniqueId"](state, componentId),
    currentNettingProfile: src_frontend_models_netting_selectors__WEBPACK_IMPORTED_MODULE_1__["getCurrentProfile"](state, {
      clientKey: clientKey
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_closedPositionDetails__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/header/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentInfo", function() { return InstrumentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedPositionSummary", function() { return ClosedPositionSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/positions/queries.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/instrument/instrument.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\header\\header.js";











function InstrumentInfo(props) {
  var instrument = props.instrument,
      position = props.position;
  var showSecondaryInfo = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isFxOption"](instrument);
  var optionData = showSecondaryInfo ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(position, 'FxOptionData', null) : null;

  if (optionData && optionData.Strike) {
    optionData = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults({
      StrikePrice: optionData.Strike
    }, optionData);
  }

  var DisplayHint = instrument.DisplayHint;
  var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetType"](instrument);
  var tooltip = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getToolTip"](instrument);
  var primaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getName"](instrument);
  var secondaryInfo = showSecondaryInfo && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getInstrumentSecondaryInfo"](instrument, optionData, true);
  var secondaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getSecondaryName"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tooltip: tooltip,
    assetType: assetType,
    displayHint: DisplayHint,
    secondaryInfo: secondaryInfo,
    primaryName: primaryName,
    showDescription: true,
    secondaryName: secondaryName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
}
function ClosedPositionSummary(props) {
  var positionSummaryData = props.positionSummaryData,
      instrument = props.instrument;
  var Amount = positionSummaryData.Amount,
      OpenPrice = positionSummaryData.OpenPrice;
  var AssetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetType"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, Amount !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "kv-key grid-cell g--1of2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Position')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "kv-val grid-cell g--1of2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isContractOption"]({
    AssetType: AssetType
  }) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isCfdOption"]({
    AssetType: AssetType
  }) ? src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_6__["getLSToOpenClose"](positionSummaryData, instrument) : '', src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__["format"](Amount), " @", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_10__["PriceLabel"], {
    price: OpenPrice,
    format: instrument.Format,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }))))));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostData", function() { return CostData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\costData.js";

function CostData(props) {
  var showConversion = props.showConversion,
      isEstimated = props.isEstimated,
      pLCost = props.pLCost,
      pLCostInBaseCurrency = props.pLCostInBaseCurrency;
  var estimatedValueClassName = isEstimated ? 'estimate' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: estimatedValueClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, pLCost)), showConversion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: estimatedValueClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, pLCostInBaseCurrency)));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostListItem", function() { return CostListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/spine/templateHelper.js");
/* harmony import */ var _costData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costData.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\costListItem.js";




var getFormattedNumberInInstrumentCurrency = function getFormattedNumberInInstrumentCurrency(value, position) {
  if (!value) {
    return;
  }

  var formattedValue = src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__["default"].formatNumber(value, position.InstrumentCurrencyDecimal);
  return formattedValue + " " + position.InstrumentCurrency;
};

var getFormattedNumberInBaseCurrency = function getFormattedNumberInBaseCurrency(value, position) {
  if (!value) {
    return;
  }

  var formattedValue = src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__["default"].formatNumber(value, position.BaseCurrencyDecimal);
  return formattedValue + " " + position.ProfitLossCurrency;
};

function CostListItem(_ref) {
  var label = _ref.label,
      costValues = _ref.costValues,
      position = _ref.position;
  var openPLCost = costValues.openPLCost,
      closedPLCost = costValues.closedPLCost,
      openPLCostBaseCurrency = costValues.openPLCostBaseCurrency,
      closedPLCostBaseCurrency = costValues.closedPLCostBaseCurrency;
  var isEstimatedOpenValue = position.IsEstimatedOpenValue;
  var isEstimatedCloseValue = position.IsEstimatedCloseValue;
  var showConversion = position.ShowConversion;
  var openCost = getFormattedNumberInInstrumentCurrency(openPLCost, position);
  var closedCost = getFormattedNumberInInstrumentCurrency(closedPLCost, position);
  var openCostBaseCurrency = getFormattedNumberInBaseCurrency(openPLCostBaseCurrency, position);
  var closedCostBaseCurrency = getFormattedNumberInBaseCurrency(closedPLCostBaseCurrency, position);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, openPLCost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costData__WEBPACK_IMPORTED_MODULE_2__["CostData"], {
    showConversion: showConversion,
    isEstimated: isEstimatedOpenValue,
    pLCost: openCost,
    pLCostInBaseCurrency: openCostBaseCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, closedPLCost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costData__WEBPACK_IMPORTED_MODULE_2__["CostData"], {
    showConversion: showConversion,
    isEstimated: isEstimatedCloseValue,
    pLCost: closedCost,
    pLCostInBaseCurrency: closedCostBaseCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  })));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/plCosts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlCosts", function() { return PlCosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_netting_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/netting/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/netting/types.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var _costListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costListItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\plCosts.js";









var EMPTY_CONVERSION_RATE = '-';

function getConversionLabel(position) {
  var conversionText = src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Conversion');

  if (position.IsSingleAccount || position.InstrumentCurrency === position.AccountCurrency || position.AccountCurrency === position.ProfitLossCurrency) {
    return conversionText + " " + position.InstrumentCurrency + " > " + position.ProfitLossCurrency;
  }

  return conversionText + " " + position.InstrumentCurrency + " > " + position.AccountCurrency + " > " + position.ProfitLossCurrency;
}

function getOpenConversionRate(position, currentNettingProfile, instrument) {
  if (src_frontend_models_netting_queries__WEBPACK_IMPORTED_MODULE_4__["isPositionOpenConversionRateShown"](currentNettingProfile, instrument)) {
    return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](position.OpenConversionRate, 8);
  }

  return EMPTY_CONVERSION_RATE;
}

function PlCosts(_ref) {
  var position = _ref.position,
      currentNettingProfile = _ref.currentNettingProfile,
      instrument = _ref.instrument;
  var isInstrumentPLCost = position.IsInstrumentPLCost;

  if (!(isInstrumentPLCost || position.ShowConversion || position.ShowMarketValue)) {
    return false;
  }

  var openConversionRate = position.OpenConversionRate ? getOpenConversionRate(position, currentNettingProfile, instrument) : EMPTY_CONVERSION_RATE;
  var closeConversionRate = position.CloseConversionRate ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](position.CloseConversionRate, 8) : EMPTY_CONVERSION_RATE;
  var conversionLabel = getConversionLabel(position);
  var isEstimatedOpenConversionRateClass = position.IsEstimatedOpenConversionRate ? 'estimate' : '';
  var isEstimatedCloseConversionRateClass = position.IsEstimatedCloseConversionRate ? 'estimate' : '';
  var additionalTransactionCosts = position.AdditionalTransactionCosts;
  var commission = position.Commission;
  var stampDuty = position.StampDuty;
  var exchangeFee = position.ExchangeFee;
  var marketValue = position.MarketValue;
  var marketValueLabel = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__["isOption"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__["isWarrant"](instrument) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Premium') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_Market_Value');
  var openConversionRateClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('kv-val grid-cell g--1of3', isEstimatedOpenConversionRateClass);
  var closeConversionRateClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('kv-val grid-cell g--1of3', isEstimatedCloseConversionRateClass);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "positions-detail-body kv kv--split",
    "data-test-id": "closed-position-pl-costs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ProfitLoss')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_Open')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_PositionDetail_Close'))), position.ShowConversion && (openConversionRate || closeConversionRate) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, conversionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: openConversionRateClasses,
    "data-test-id": "open-conversion-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, openConversionRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: closeConversionRateClasses,
    "data-test-id": "closed-conversion-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, closeConversionRate)), commission && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Commission'),
    costValues: commission,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), stampDuty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('StampDuty'),
    costValues: stampDuty,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), marketValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: marketValueLabel,
    costValues: marketValue,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }), exchangeFee && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ExchangeFee'),
    costValues: exchangeFee,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), additionalTransactionCosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('PositionDetailsDialog_AdditionalTransactionCosts'),
    costValues: additionalTransactionCosts,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLabel", function() { return PriceLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\priceLabel\\priceLabel.js";


function PriceLabel(props) {
  var price = props.price,
      format = props.format;
  var parts = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["formatPriceParts"](price, format);
  var prefix = parts.Pre + parts.First + parts.Pips;
  var result;

  if (parts.DeciPips) {
    result = [prefix, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sub", {
      key: "deciPips",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 27
      }
    }, parts.DeciPips)];
  } else {
    result = [prefix + parts.DeciPips + parts.Post];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, result);
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/profitLossItem/profitLossItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossItem", function() { return ProfitLossItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\profitLossItem\\profitLossItem.js";



function ProfitLossItem(props) {
  var header = props.header,
      profitLoss = props.profitLoss,
      profitLossBase = props.profitLossBase,
      kvClass = props.kvClass,
      position = props.position,
      plCurrency = props.plCurrency,
      plDecimal = props.plDecimal;

  if (!profitLoss) {
    return false;
  }

  var instrCurrency = plCurrency || position.InstrumentCurrency;
  var baseCurrency = position.ProfitLossCurrency;
  var formattedProfitLossBaseCurrency;
  var formattedProfitLoss = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](profitLoss, plDecimal || position.InstrumentCurrencyDecimal);

  if (position.ShowConversion && profitLossBase) {
    formattedProfitLossBaseCurrency = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](profitLossBase, position.BaseCurrencyDecimal);
  }

  var profitLossLabel = formattedProfitLoss + " " + instrCurrency;
  var result;

  if (formattedProfitLossBaseCurrency) {
    var profitLossBaseLabel = "(" + formattedProfitLossBaseCurrency + " " + baseCurrency + ")";
    result = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "pl",
      "data-profit": profitLoss,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, profitLossLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      key: "space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "plBase",
      "data-profit": profitLossBase,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, profitLossBaseLabel)];
  } else {
    result = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "pl",
      "data-profit": profitLoss,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, profitLossLabel)];
  }

  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('positions-detail-body kv kv--wrap', kvClass);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key kv-key--header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, header)));
}
ProfitLossItem.defaultProps = {
  kvClass: ''
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/listItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListItem", function() { return PriceListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\summaryDetail\\listItem.js";

function ListItem(props) {
  var label = props.label,
      value = props.value,
      title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    "data-test-id": label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, value));
}
function PriceListItem(props) {
  var label = props.label,
      value = props.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, value));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/summaryDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDetail", function() { return SummaryDetail; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/positions/queries.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js");
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/listItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\summaryDetail\\summaryDetail.js";









function SummaryDetail(_ref) {
  var position = _ref.position;

  var getFormattedDate = function getFormattedDate(openApiDate) {
    if (typeof openApiDate !== 'undefined') {
      return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDate(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(openApiDate));
    }
  };

  var getFormattedUserDateTime = function getFormattedUserDateTime(openApiDate) {
    if (typeof openApiDate !== 'undefined') {
      return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDateTime(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(openApiDate));
    }
  };

  var getBarrierEventText = function getBarrierEventText() {
    if (position.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__["FX_ONE_TOUCH_OPTION"] || position.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__["FX_NO_TOUCH_OPTION"]) {
      return position.FxOptionData.BarrierEventOccurred ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ValueYes') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ValueNo');
    }

    return '';
  };

  var positionId = position.OpeningPositionId + ", " + position.ClosingPositionId;
  var accountDisplayNameInfo = position.AccountDisplayName + " " + position.AccountCurrency;
  var accountIdInfo = position.AccountId + " " + position.AccountCurrency;
  var openDateTime = getFormattedUserDateTime(position.ExecutionTimeOpen);
  var closedDateTime = getFormattedUserDateTime(position.ExecutionTimeClose);
  var expiryDate = getFormattedDate(position.ExpiryDate);
  var openingIndexRatio = position.OpeningIndexRatio ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["formatNoRounding"](position.OpeningIndexRatio) : null;
  var closingIndexRatio = position.ClosingIndexRatio ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["formatNoRounding"](position.ClosingIndexRatio) : null;
  var noticeDate = getFormattedDate(position.NoticeDate);
  var openValueDate = getFormattedDate(position.ValueDateOpen);
  var closedValueDate = getFormattedDate(position.ValueDateClose);
  var srdSettlementDate = getFormattedDate(position.SrdSettlementDate);
  var barrierEventOccurred = position.FxOptionData ? getBarrierEventText() : '';
  var expiryCut = position.ShowFxOptionFields && position.FxOptionData ? src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_4__["getExpiryCutText"](position.FxOptionData.ExpiryCut) : '';
  var closePriceLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_7__["PriceLabel"], {
    price: position.ClosingPrice,
    format: position.DisplayAndFormat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  });
  var shouldShowAccountDisplayName = position.AccountId && !position.IsSingleAccount && position.AccountId !== position.AccountDisplayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "positions-detail-body kv kv--lines kv--wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position ID'),
    value: positionId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), shouldShowAccountDisplayName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Account'),
    value: accountDisplayNameInfo,
    title: position.AccountDisplayName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), position.AccountId && !position.IsSingleAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountID'),
    value: accountIdInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), position.AccountGroupName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountGroup'),
    value: position.AccountGroupName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_Opened'),
    value: openDateTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_Closed'),
    value: closedDateTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }), expiryDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_Expiry'),
    value: expiryDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), openingIndexRatio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_OpenIndexRatio'),
    value: openingIndexRatio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), closingIndexRatio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_CloseIndexRatio'),
    value: closingIndexRatio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), noticeDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NoticeDate'),
    value: noticeDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }), openValueDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OpenValueDate'),
    value: openValueDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }), closedValueDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedValueDate'),
    value: closedValueDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), srdSettlementDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_Column_Settlement_Date_Title'),
    value: srdSettlementDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }), expiryCut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OptionStyle'),
    value: expiryCut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }), position.ShowExchange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Exchange'),
    value: position.ExchangeName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }), barrierEventOccurred && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Barrier Event'),
    value: barrierEventOccurred,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["PriceListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_ClosedPrice'),
    value: closePriceLabel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }));
}
SummaryDetail.propTypes = {
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositions.new.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/accountSelector/index.js");
/* harmony import */ var src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/contextMenu/index.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/contextMenu/menu/actionMenuActions.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/contextMenu/actions/productPage.js");
/* harmony import */ var src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/blocks/matchMedia/matchMediaContext.js");
/* harmony import */ var src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/blocks/matchMedia/queries.js");
/* harmony import */ var src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/blocks/resizable/resizable.js");
/* harmony import */ var src_frontend_components_dataDisclaimer_dataDisclaimer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/dataDisclaimer/dataDisclaimer.js");
/* harmony import */ var src_frontend_components_cardCarousel_queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/cardCarousel/queries.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var _closedPositionDetails__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/modules/closedPositions/carousel/carousel.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var _grid_columnDefinitions_new_phone__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/columnDefinitions.new.phone.js");




var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositions.new.phone.js";


























var EMPTY_ARRAY = [];

var ClosedPositions = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ClosedPositions, _React$PureComponent);

  function ClosedPositions() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "elRef", react__WEBPACK_IMPORTED_MODULE_5__["createRef"]());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "state", {
      closedPositionId: '',
      resizeTimestamp: _this.props.resizeTimestamp,
      viewport: {
        width: 0,
        height: 0
      },
      menu: {
        instrument: null,
        closedPosition: null,
        accountId: _this.props.selectedAccount.id,
        isVisible: false
      },
      carousel: {
        instrument: null,
        closedPosition: null,
        isVisible: false
      }
    });

    return _this;
  }

  var _proto = ClosedPositions.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["AREA_CLOSED_POSITIONS"], 'Closed Positions opened');
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var nextState = {};

    if (nextProps.resizeTimestamp > this.state.resizeTimestamp) {
      nextState.resizeTimestamp = nextProps.resizeTimestamp;
    }

    if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(nextState)) {
      this.setState(nextState);
    }
  };

  _proto.handleAccountSelect = function handleAccountSelect(accountId) {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        selectedAccount = _this$props.selectedAccount,
        onSelectAccount = _this$props.onSelectAccount;

    if (selectedAccount.id !== accountId) {
      this.handleCarouselHide();
      onSelectAccount(componentId, accountId);
    }
  };

  _proto.handleHeaderSort = function handleHeaderSort(sort) {
    this.props.onSortChange(this.props.componentId, sort);
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["AREA_CLOSED_POSITIONS"], 'Columns sorted', {
      column: sort.id
    });
  };

  _proto.handleRowSelect = function handleRowSelect(evt, _ref) {
    var _this2 = this;

    var id = _ref.id,
        data = _ref.data;

    if (!data.instrument) {
      return;
    }

    var onSelectInstrument = this.props.onSelectInstrument;
    var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_23__["getKey"](data.instrument);
    onSelectInstrument(this.props.componentId, instrumentKey);
    var _this$state = this.state,
        closedPositionId = _this$state.closedPositionId,
        carousel = _this$state.carousel;

    if (id === closedPositionId && carousel.isVisible) {
      this.handleCarouselHide();
    } else {
      this.setState({
        carousel: {
          instrument: data.instrument,
          closedPosition: data.closedPosition,
          isVisible: true
        },
        closedPositionId: id
      }, function () {
        _this2.setState({
          resizeTimestamp: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.now()
        });
      });
    }
  };

  _proto.handleRowPress = function handleRowPress(evt, _ref2) {
    var id = _ref2.id,
        data = _ref2.data;

    if (!data.instrument) {
      return;
    }

    var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_23__["getKey"](data.instrument);
    this.props.onSelectInstrument(this.props.componentId, instrumentKey);
    this.setState(function (oldState, props) {
      return {
        menu: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState.menu, {
          instrument: data.instrument,
          closedPosition: data.closedPosition,
          accountId: props.selectedAccount.id,
          isVisible: true
        }),
        closedPositionId: id
      };
    });
  };

  _proto.handleTriggerMenu = function handleTriggerMenu() {
    var _this$state2 = this.state,
        closedPositionId = _this$state2.closedPositionId,
        carousel = _this$state2.carousel;
    this.handleActionMenuShow(closedPositionId, carousel);
  };

  _proto.handleActionMenuHide = function handleActionMenuHide() {
    this.setState(function (oldState) {
      return {
        menu: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, oldState.menu, {
          isVisible: false,
          instrument: null
        })
      };
    });
  };

  _proto.handleActionMenuShow = function handleActionMenuShow(closedPositionId, _ref3) {
    var closedPosition = _ref3.closedPosition,
        instrument = _ref3.instrument;
    this.handleCarouselHide();
    this.setState(function (state, props) {
      return {
        closedPositionId: closedPositionId,
        menu: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.defaults({
          instrument: instrument,
          closedPosition: closedPosition,
          accountId: props.selectedAccount.id,
          isVisible: true
        }, state.menu)
      };
    });
  };

  _proto.handleCarouselHide = function handleCarouselHide() {
    var _this3 = this;

    this.setState({
      closedPositionId: '',
      carousel: {
        instrument: null,
        closedPosition: null,
        isVisible: false
      }
    }, function () {
      // trigger grid resize _after_ carousel is showing, as otherwise
      // a race conditon can occur between the parent node reflowing
      // and <Resizable/> updating itself, leading to a wrong height
      // being read
      _this3.setState({
        resizeTimestamp: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.now()
      });
    });
  };

  _proto.getActionMenu = function getActionMenu(menu) {
    var _closedPosition$Accou;

    var closedPosition = menu.closedPosition,
        instrument = menu.instrument,
        isVisible = menu.isVisible,
        accountId = menu.accountId;
    var closedPositionId = this.state.closedPositionId;
    var closedPositionAccountId = (_closedPosition$Accou = closedPosition == null ? void 0 : closedPosition.AccountId) != null ? _closedPosition$Accou : null;
    var fxOptionData = closedPosition == null ? void 0 : closedPosition.FxOptionData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenu"], {
      fxOptionData: fxOptionData,
      instrument: instrument,
      closedPositionId: closedPositionId,
      closedPositionAccountId: closedPositionAccountId,
      accountId: accountId,
      isVisible: isVisible,
      onHide: this.handleActionMenuHide,
      key: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["MenuItems"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__["ACTION_TRADE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__["ACTION_CLOSED_POSITION_DETAILS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__["ACTION_CHART"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__["ACTION_ALERT_ADD"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_12__["ACTION_TRADING_CONDITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_24__["default"].appFeatures.isProductPageInPGo,
      action: src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_13__["PRODUCT_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 21
      }
    })));
  };

  _proto.handleResize = function handleResize(viewport) {
    this.setState({
      viewport: viewport
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props2 = this.props,
        componentId = _this$props2.componentId,
        positions = _this$props2.positions,
        isSingleAccount = _this$props2.isSingleAccount,
        selectedAccount = _this$props2.selectedAccount,
        isLoading = _this$props2.isLoading,
        sort = _this$props2.sort,
        isBGJointAccountClient = _this$props2.isBGJointAccountClient;
    var _this$state3 = this.state,
        closedPositionId = _this$state3.closedPositionId,
        resizeTimestamp = _this$state3.resizeTimestamp,
        viewport = _this$state3.viewport,
        menu = _this$state3.menu,
        carousel = _this$state3.carousel;
    var carouselHeight = src_frontend_components_cardCarousel_queries__WEBPACK_IMPORTED_MODULE_18__["getCarouselHeight"](viewport, this.elRef.current);
    var paddingBottom = src_frontend_components_cardCarousel_queries__WEBPACK_IMPORTED_MODULE_18__["getPaddingBottom"](carouselHeight, this.elRef.current);
    var style = carousel.isVisible ? {
      paddingBottom: paddingBottom
    } : null;
    var scrollOffset = 0;
    var hasPositions = positions.length !== 0;

    var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isInstant: true,
      isVisible: isLoading,
      isTransparent: true,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 45
      }
    });

    var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_dataDisclaimer_dataDisclaimer__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 65
      }
    });

    var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_closedPositionDetails__WEBPACK_IMPORTED_MODULE_25__["default"], {
      componentId: _constants__WEBPACK_IMPORTED_MODULE_26__["DIALOG_ID"],
      isFullHeight: true,
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 41
      }
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_14__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 13
      }
    }, function (_ref4) {
      var breakpointName = _ref4.breakpointName;
      var isNarrow = src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_15__["isNarrow"](breakpointName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_16__["default"], {
        resizeTimestamp: resizeTimestamp,
        onResize: _this4.handleResize,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 25
        }
      }, function (_ref5) {
        var width = _ref5.parentViewport.width;
        var cols = _grid_columnDefinitions_new_phone__WEBPACK_IMPORTED_MODULE_29__["getColumnDefinitions"]({
          isBGJointAccountClient: isBGJointAccountClient,
          isNarrow: isNarrow,
          selectedAccount: selectedAccount
        }, width);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          ref: _this4.elRef,
          className: "closed-positions grid grid--y grid--fit-fill",
          "data-test-id": "new-closed-positions",
          style: style,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 37
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "grid-cell g--fit",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 41
          }
        }, !isSingleAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "grid grid--main-center",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 49
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "grid-cell",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 53
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
          selectedAccountId: selectedAccount.id,
          onChange: _this4.handleAccountSelect,
          isShowCurrency: true,
          isShowGroups: true,
          isEnableGroups: true,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 57
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "grid grid--scroll",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 41
          }
        }, _ref6, !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: componentId,
          resizeTimestamp: resizeTimestamp,
          rows: positions,
          cols: cols,
          scrollOffset: scrollOffset,
          selectedRow: closedPositionId,
          keepGroupsExpanded: true,
          sort: sort // callbacks
          ,
          onHeaderSort: _this4.handleHeaderSort,
          onRowSelect: _this4.handleRowSelect,
          onRowPress: _this4.handleRowPress,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 49
          }
        }), hasPositions && _this4.getActionMenu(menu), carousel.isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
          parent: _this4.elRef.current,
          onHide: _this4.handleCarouselHide,
          isNormalHeight: true,
          showUnderlay: false,
          isAutoHide: false,
          resizeTimestamp: resizeTimestamp,
          type: "card",
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 49
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_carousel_carousel__WEBPACK_IMPORTED_MODULE_27__["default"], {
          componentId: componentId,
          instrument: carousel.instrument,
          height: carouselHeight,
          closedPosition: carousel.closedPosition,
          closedPositionId: closedPositionId,
          resizeTimestamp: resizeTimestamp,
          onTriggerMenu: _this4.handleTriggerMenu,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 53
          }
        }))), !carousel.isVisible && _ref7, _ref8);
      });
    });
  };

  return ClosedPositions;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ClosedPositions, "defaultProps", {
  positions: EMPTY_ARRAY,
  selectedAccount: {
    BaseCurrency: '',
    BaseCurrencyDecimals: 0
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(ClosedPositions));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/container.new.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_workspace_module_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/workspace/module/actions.js");
/* harmony import */ var _closedPositions_new_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositions.new.phone.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/selectors.js");








function mapStateToProps() {
  var getPositions = _selectors__WEBPACK_IMPORTED_MODULE_6__["createGetPositions"]();
  return function (state, ownProps) {
    var componentId = ownProps.componentId;

    var _closedPositionsSelec = _selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentState"](state, componentId),
        visibleColumnIds = _closedPositionsSelec.visibleColumnIds;

    return {
      isSingleAccount: src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__["isSingleAccount"](state),
      selectedAccount: _selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedAccount"](state, componentId),
      positions: getPositions(state, componentId),
      isLoading: _selectors__WEBPACK_IMPORTED_MODULE_6__["getIsLoading"](state, componentId),
      visibleColumnIds: visibleColumnIds,
      sort: _selectors__WEBPACK_IMPORTED_MODULE_6__["getSort"](state, componentId),
      columnsInfo: _selectors__WEBPACK_IMPORTED_MODULE_6__["getSavedColumnsInfo"](state, componentId),
      isBGJointAccountClient: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__["isBGJointAccountClient"](state)
    };
  };
}

var mapDispatchToProps = {
  onSelectInstrument: src_frontend_workspace_module_actions__WEBPACK_IMPORTED_MODULE_3__["setModuleLinkedInstrument"],
  onSelectAccount: _actions__WEBPACK_IMPORTED_MODULE_5__["selectAccount"],
  onSortChange: _actions__WEBPACK_IMPORTED_MODULE_5__["updateSortOrder"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_closedPositions_new_phone__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/columnDefinitions.new.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeValue", function() { return normalizeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericCompare", function() { return numericCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionCompareFunction", function() { return getPositionCompareFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instrumentColumn", function() { return instrumentColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountIdColumn", function() { return accountIdColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPriceColumn", function() { return openPriceColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePriceColumn", function() { return closePriceColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeTimeColumn", function() { return closeTimeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnDefinitions", function() { return getColumnDefinitions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/positions/queries.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/defaultHeaderRenderer.js");
/* harmony import */ var src_frontend_components_reactGrid_blocks_defaultCellRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/defaultCellRenderer.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridBlocks.js");
/* harmony import */ var src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/instrument/instrument.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridSortUtils.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/closedPositions/types.js");
/* harmony import */ var _labelFunctions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/labelFunctions.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\grid\\columnDefinitions.new.phone.js";



















var normalizeValue = function normalizeValue(value) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(value) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(value) ? 0 : value;
};
var numericCompare = function numericCompare(a, b) {
  return normalizeValue(a) - normalizeValue(b);
};
var getPositionCompareFunction = function getPositionCompareFunction(getter) {
  return function (rowA, rowB) {
    var valueA = getter(rowA.data.closedPosition);
    var valueB = getter(rowB.data.closedPosition);
    return numericCompare(valueA, valueB);
  };
};
var instrumentColumn = function instrumentColumn(_ref) {
  var isAvailable = _ref.isAvailable;
  return {
    id: 's_instrument',
    verticalAlign: 'center',
    isAvailable: isAvailable,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Instrument'),
    priority: 1,
    minWidth: 92,
    maxWidth: 1000,
    align: 'start',
    header: src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_5__["default"],
    isFixedStart: true,
    template: function template(row) {
      var _row$data = row.data,
          instrument = _row$data.instrument,
          closedPosition = _row$data.closedPosition;

      if (instrument && closedPosition) {
        var _fxOptionsData, _fxOptionsData2;

        var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_11__["getAssetType"](row.data.instrument);
        var tooltip = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__["getToolTip"](instrument);
        var primaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__["getName"](instrument);

        var fxOptionsData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(closedPosition, 'FxOptionData', {});

        fxOptionsData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
          StrikePrice: (_fxOptionsData = fxOptionsData) == null ? void 0 : _fxOptionsData.Strike,
          ValueDate: ((_fxOptionsData2 = fxOptionsData) == null ? void 0 : _fxOptionsData2.ValueDate) || (closedPosition == null ? void 0 : closedPosition.ValueDate)
        }, fxOptionsData);
        var showSecondaryInfo = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_4__["isFxForward"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_4__["isFxOption"](instrument);
        var secondaryInfo = showSecondaryInfo && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_10__["getInstrumentSecondaryInfo"](instrument, fxOptionsData, true);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__["default"], {
          displayHint: instrument.DisplayHint,
          assetType: assetType,
          tooltip: tooltip,
          primaryName: primaryName,
          secondaryInfo: secondaryInfo,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }
        });
      }

      return '';
    },
    sort: {
      id: 'symbol'
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getInstrumentName"]
  };
};
var accountIdColumn = function accountIdColumn(_ref2) {
  var isBGJointAccountClient = _ref2.isBGJointAccountClient,
      isNarrow = _ref2.isNarrow,
      isSingleMode = _ref2.isSingleMode;
  return {
    id: isSingleMode ? 's_account_id' : 'd_account_id',
    primaryTitle: src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_9__["getAccountLabel"](),
    isAvailable: isBGJointAccountClient && !isNarrow,
    width: 135,
    sort: {
      id: 'AccountDisplayName'
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getAccountDisplayName"]
  };
};

var amountColumn = function amountColumn(_ref3) {
  var isAvailable = _ref3.isAvailable;
  return {
    id: 's_amount',
    isAvailable: isAvailable,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Amount'),
    width: 62,
    align: 'end',
    sort: {
      id: 'Amount',
      fields: 'data.closedPosition.Amount',
      direction: src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_12__["SORT_DIRECTION_DESC"],
      compareFunction: getPositionCompareFunction(src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_3__["getAmount"])
    },
    isNumeric: true,
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getShortAmount"],
    template: src_frontend_components_reactGrid_blocks_defaultCellRenderer__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
};

var totalPLInAccountCurrencyColumn = function totalPLInAccountCurrencyColumn(props, landscape) {
  if (landscape === void 0) {
    landscape = false;
  }

  return {
    id: 's_total_pl_account',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('PL') + " (" + props.selectedAccount.BaseCurrency + ")",
    align: 'end',
    width: landscape ? 120 : 102,
    isAvailable: props.isAvailable,
    sort: {
      id: 'TotalPLAccount',
      fields: 'data.closedPosition.TotalPLAccount',
      direction: src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_12__["SORT_DIRECTION_DESC"]
    },
    template: function template(row) {
      var data = row.data,
          info = row.info,
          column = row.column;
      var label = _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getShortTotalPLInAccountCurrency"](row);

      if (info.isDivider) {
        var _info$summaries;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
          className: "t-num c--center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 17
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_7__["ProfitLabel"], {
          value: (_info$summaries = info.summaries) == null ? void 0 : _info$summaries.TotalPLAccount,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 21
          }
        }, label));
      }

      var value = data.closedPosition.TotalPLAccount;
      return Object(src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_7__["AlphaBeta"])({
        column: column,
        value: label,
        dataValue: String(value),
        title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Total_PL_ccy_Title'),
        isNumericAlpha: true
      });
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["createGetTotalPLInAccountCurrency"](props.selectedAccount)
  };
};

var buySellColumn = function buySellColumn(_ref4) {
  var isAvailable = _ref4.isAvailable;
  return {
    id: 's_buysell',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('L/S'),
    width: 60,
    isAvailable: isAvailable,
    align: 'center',
    sort: {
      id: 'BuyOrSell',
      fields: 'data.closedPosition.BuyOrSell'
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getBuySell"]
  };
};

var openPriceColumn = function openPriceColumn(_ref5) {
  var isAvailable = _ref5.isAvailable;
  return {
    id: 's_open_price',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClosedPositions_Open'),
    isAvailable: isAvailable,
    width: 84,
    align: 'end',
    sort: {
      id: 'OpenPrice',
      fields: 'data.closedPosition.OpenPrice',
      direction: src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_12__["SORT_DIRECTION_DESC"]
    },
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_7__["PriceLabel"], {
        price: row.data.closedPosition.OpenPrice,
        format: row.data.instrument.Format,
        className: "t-num c--center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }
      });
    },
    // export raw OpenPrice
    itemToData: function itemToData(row) {
      return row.data.closedPosition.OpenPrice;
    },
    exportAsNumber: true
  };
};
var closePriceColumn = function closePriceColumn(_ref6) {
  var isAvailable = _ref6.isAvailable;
  return {
    id: 's_close_price',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Close'),
    width: 84,
    align: 'end',
    isAvailable: isAvailable,
    sort: {
      id: 'ClosingPrice',
      fields: 'data.closedPosition.ClosingPrice',
      direction: src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_12__["SORT_DIRECTION_DESC"]
    },
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_7__["PriceLabel"], {
        price: row.data.closedPosition.ClosingPrice,
        format: row.data.instrument.Format,
        className: "t-num c--center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }
      });
    },
    // export raw ClosingPrice
    itemToData: function itemToData(row) {
      return row.data.closedPosition.ClosingPrice;
    },
    exportAsNumber: true
  };
};
var closeTimeColumn = function closeTimeColumn(_ref7) {
  var isAvailable = _ref7.isAvailable;
  return {
    id: 's_close_time',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TimeClose'),
    primaryTooltip: function primaryTooltip() {
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('CloseTime_Title');
    },
    isAvailable: isAvailable,
    align: 'end',
    width: 170,
    sort: {
      id: 'ExecutionTimeClose',
      fields: 'data.closedPosition.ExecutionTimeClose'
    },
    itemToLabel: _labelFunctions__WEBPACK_IMPORTED_MODULE_17__["getCloseTime"]
  };
};
var BREAKPOINT_LANDSCAPE = 500;
var BREAKPOINT_CLOSETIME_COLUMN = 736; // Only show close time column if >= iPhone X

var getLandscapeColumns = function getLandscapeColumns(columnsProps, width) {
  var closeTimeColumnProps = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
    isAvailable: width > BREAKPOINT_CLOSETIME_COLUMN
  }, columnsProps);

  return [instrumentColumn(columnsProps), accountIdColumn(columnsProps), buySellColumn(columnsProps), amountColumn(columnsProps), openPriceColumn(columnsProps), closePriceColumn(columnsProps), totalPLInAccountCurrencyColumn(columnsProps, true), closeTimeColumn(closeTimeColumnProps)];
};

var getPortraitColumns = function getPortraitColumns(columnsProps) {
  return [instrumentColumn(columnsProps), amountColumn(columnsProps), totalPLInAccountCurrencyColumn(columnsProps)];
};

var getColumnDefinitions = function getColumnDefinitions(props, width) {
  var columnsProps = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
    isAvailable: true
  }, props);

  return width > BREAKPOINT_LANDSCAPE ? getLandscapeColumns(columnsProps, width) : getPortraitColumns(columnsProps);
};

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/7.js.map