(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/frontend/components/reporting/openCloseFilter.js":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var _openCloseFilterItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reporting/openCloseFilterItem.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reporting/propTypes.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reporting\\openCloseFilter.js";







var OpenCloseFilter = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(OpenCloseFilter, _React$PureComponent);

  function OpenCloseFilter() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = OpenCloseFilter.prototype;

  _proto.handleTap = function handleTap(openCloseItem) {
    this.props.onFilterChange(openCloseItem.key);
  };

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.props.openCloseOptions, function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_openCloseFilterItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: option.key,
        onTap: _this.handleTap,
        openCloseItem: option,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      });
    }));
  };

  return OpenCloseFilter;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(OpenCloseFilter, "propTypes", {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  openCloseOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape(_propTypes__WEBPACK_IMPORTED_MODULE_7__["openCloseItemProps"])).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(OpenCloseFilter));

/***/ }),

/***/ "./src/frontend/components/reporting/openCloseFilterItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_modules_reporting_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/reporting/queries.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_blocks_legacyCheckbox_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/legacyCheckbox/checkbox.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/reporting/propTypes.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reporting\\openCloseFilterItem.js";









var OpenCloseFilterItem = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(OpenCloseFilterItem, _React$PureComponent);

  function OpenCloseFilterItem() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = OpenCloseFilterItem.prototype;

  _proto.handleChange = function handleChange() {
    this.props.onTap(this.props.openCloseItem);
  };

  _proto.render = function render() {
    var openCloseItem = this.props.openCloseItem;
    var isChecked = openCloseItem.isChecked,
        key = openCloseItem.key,
        sum = openCloseItem.sum;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onTap: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "reporting-openclose-row grid grid--series",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid grid--seriessm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell g--fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_legacyCheckbox_checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isChecked: isChecked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell g--fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, src_frontend_modules_reporting_queries__WEBPACK_IMPORTED_MODULE_4__["getOpenCloseLabel"](key))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", {
      className: "t-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_8__["format"](sum, 2)))));
  };

  return OpenCloseFilterItem;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(OpenCloseFilterItem, "propTypes", {
  onTap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  openCloseItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(_propTypes__WEBPACK_IMPORTED_MODULE_9__["openCloseItemProps"]).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(OpenCloseFilterItem));

/***/ }),

/***/ "./src/frontend/components/transactionDetails/allBookings/allBookings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/details/detailsTitle.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/transactionDetails/queries.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionDetails\\allBookings\\allBookings.js";











var AllBookings = function AllBookings(_ref) {
  var bookings = _ref.bookings,
      account = _ref.account;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('All_bookings')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Net_amount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: _queries__WEBPACK_IMPORTED_MODULE_8__["getBookingsNetAmount"](bookings),
    decimals: account.CurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CurrencyConversionCost'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: _queries__WEBPACK_IMPORTED_MODULE_8__["getTotalCurrencyConversionCost"](bookings),
    decimals: account.CurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AllBookings);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/bookingDetails/bookingDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_models_aggregatedAmounts_amountTypeNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/aggregatedAmounts/amountTypeNames.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/details/detailsTitle.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/transactionDetails/utils.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionDetails\\bookingDetails\\bookingDetails.js";













var BookingDetails = function BookingDetails(_ref) {
  var booking = _ref.booking,
      detailsData = _ref.detailsData,
      account = _ref.account;
  var BkAmountType = booking.BkAmountType,
      BkAmountId = booking.BkAmountId,
      BkAmountTypeId = booking.BkAmountTypeId,
      AssetType = booking.AssetType,
      Date = booking.Date,
      ValueDate = booking.ValueDate,
      Amount = booking.Amount,
      AmountAccountCurrency = booking.AmountAccountCurrency,
      ConversionRateAccountCurrency = booking.ConversionRateAccountCurrency,
      ConversionRate = booking.ConversionRate,
      Currency = booking.Currency,
      AccountCurrency = booking.AccountCurrency;
  var InstrumentValueDate = detailsData.ValueDate;
  var showConversionFigures = Currency !== AccountCurrency;
  var conversionCurrencies = Currency + AccountCurrency;
  var showValueDate = ValueDate !== InstrumentValueDate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, src_frontend_models_aggregatedAmounts_amountTypeNames__WEBPACK_IMPORTED_MODULE_3__["getTextById"](BkAmountTypeId, BkAmountType, AssetType), ' ', src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_2__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_Booking_amount_ID'), BkAmountId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_Posting_Date'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"](Date)), showValueDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_ValueDate'),
    className: "tst-value-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"](ValueDate)), showConversionFigures && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Amount'),
    className: "tst-amount",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: Amount,
    decimals: account.CurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_2__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Conversion_rate_with_currencies'), conversionCurrencies),
    className: "tst-conversion-rate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: ConversionRate,
    decimals: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CurrencyConversionCost'),
    className: "tst-conversion-cost",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: ConversionRateAccountCurrency,
    decimals: account.CurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Booked_Amount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: AmountAccountCurrency,
    decimals: account.CurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BookingDetails);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeEventTypes", function() { return TradeEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToOpenOrToClose", function() { return ToOpenOrToClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeTypes", function() { return TradeTypes; });
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/localization.js");

var TradeEventTypes = {
  Bought: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Bought'),
  Sold: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Sold'),
  TransferIn: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Transfer_in'),
  TransferOut: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Transfer_out'),
  Unknown: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Unknown_buy_sell')
};
var ToOpenOrToClose = {
  ToOpen: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradesExecuted_to_open'),
  ToClose: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradesExecuted_to_close')
};
var TradeTypes = {
  Assignment: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_Assignment'),
  AutoAssignment: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_AutoAssignment'),
  AutoExcercise: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_AutoExercise'),
  Expiry: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_Expiry'),
  Limit: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_Limit'),
  LimitNotice: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_LimitNotice'),
  Market: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_Market'),
  MarketStopOut: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_MarketStopOut'),
  NotAvailable: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_NotAvailable'),
  Stop: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_Stop'),
  StopBid: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_StopBid'),
  StopLimit: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_StopLimit'),
  StopNotice: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_StopNotice'),
  StopOffer: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_StopOffer'),
  StopTraded: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradeType_StopTraded')
};

/***/ }),

/***/ "./src/frontend/components/transactionDetails/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var _transactionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/transactionDetails/transactionDetails.js");





function mapStateToProps(state, ownProps) {
  var _ownProps$details$dat;

  var accountId = ownProps.accountId || ((_ownProps$details$dat = ownProps.details.data) == null ? void 0 : _ownProps$details$dat.AccountId) || '';
  return {
    account: src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_2__["getAccountById"](state, accountId)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_transactionDetails__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/components/transactionDetails/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/components/transactionDetails/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/info/info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/productIcon/productIcon.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/details/detailsTitle.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/transactionDetails/queries.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/transactionDetails/utils.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionDetails\\info\\info.js";












var Info = function Info(_ref) {
  var detailsData = _ref.detailsData;
  var AssetType = detailsData.AssetType,
      TradeDate = detailsData.TradeDate,
      TransactionType = detailsData.TransactionType,
      Event = detailsData.Event,
      Amount = detailsData.Amount,
      Price = detailsData.Price,
      BookedAmountAccountCurrency = detailsData.BookedAmountAccountCurrency;
  var combinedInstrumentName = _queries__WEBPACK_IMPORTED_MODULE_7__["getCombinedInstrumentName"](detailsData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, combinedInstrumentName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    assetType: AssetType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), "\xA0", combinedInstrumentName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Date'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_9__["formatDateTime"](TradeDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Transaction_Type'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, TransactionType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Event'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, Event), Amount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Amount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: Amount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  })), Price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Price'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: Price,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CashAmount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: BookedAmountAccountCurrency,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/optionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_TOUCH", function() { return ONE_TOUCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_TOUCH", function() { return NO_TOUCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BINARY_CALL", function() { return BINARY_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BINARY_PUT", function() { return BINARY_PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOCK_OUT_CALL", function() { return KNOCK_OUT_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOCK_IN_CALL", function() { return KNOCK_IN_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOCK_OUT_PUT", function() { return KNOCK_OUT_PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNOCK_IN_PUT", function() { return KNOCK_IN_PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONE", function() { return NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() { return UNKNOWN; });
var CALL = 'Call';
var PUT = 'Put';
var ONE_TOUCH = 'OneTouch';
var NO_TOUCH = 'NoTouch';
var BINARY_CALL = 'BinaryCall';
var BINARY_PUT = 'BinaryPut';
var KNOCK_OUT_CALL = 'KnockOutCall';
var KNOCK_IN_CALL = 'KnockInCall';
var KNOCK_OUT_PUT = 'KnockOutPut';
var KNOCK_IN_PUT = 'KnockInPut';
var NONE = 'None';
var UNKNOWN = 'Unknown';
var OptionTypes = {
  CALL: CALL,
  PUT: PUT,
  ONE_TOUCH: ONE_TOUCH,
  NO_TOUCH: NO_TOUCH,
  BINARY_CALL: BINARY_CALL,
  BINARY_PUT: BINARY_PUT,
  KNOCK_OUT_CALL: KNOCK_OUT_CALL,
  KNOCK_IN_CALL: KNOCK_IN_CALL,
  KNOCK_OUT_PUT: KNOCK_OUT_PUT,
  KNOCK_IN_PUT: KNOCK_IN_PUT,
  NONE: NONE,
  UNKNOWN: UNKNOWN
};

/***/ }),

/***/ "./src/frontend/components/transactionDetails/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadCost", function() { return getSpreadCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradeId", function() { return getTradeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCurrencyConversionCost", function() { return getTotalCurrencyConversionCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsExportParams", function() { return getDetailsExportParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookingsNetAmount", function() { return getBookingsNetAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupedCosts", function() { return getGroupedCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotAssignedBookings", function() { return getNotAssignedBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInflationLinked", function() { return isInflationLinked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionTypeText", function() { return getOptionTypeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCombinedInstrumentName", function() { return getCombinedInstrumentName; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var _optionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/transactionDetails/optionTypes.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");






var getSpreadCost = function getSpreadCost(detailsData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(detailsData, 'SpreadCostAccountCurrency', '-');
};
var getTradeId = function getTradeId(detailsData) {
  return detailsData == null ? void 0 : detailsData.TradeId;
};
var getTotalCurrencyConversionCost = function getTotalCurrencyConversionCost(bookings) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sumBy(bookings, 'ConversionRateAccountCurrency');
};
var getDetailsExportParams = function getDetailsExportParams(tradeId) {
  return {
    // report export endpoint expects OAPI style params
    TradeId: tradeId,
    FilterType: 'RelatedTradeId',
    FilterValue: tradeId
  };
};
var getBookingsNetAmount = function getBookingsNetAmount(bookings) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sumBy(bookings, 'AmountAccountCurrency');
};
var getGroupedCosts = function getGroupedCosts(bookings) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(bookings).filter(function (booking) {
    return booking.CostClass !== 'NotAssigned' && booking.CostSubClass !== 'NotAssigned';
  }).groupBy(function (booking) {
    return booking.CostClass + booking.CostSubClass;
  }).toArray().sortBy(['CostSubClass', 'CostClass']).value();
};
var getNotAssignedBookings = function getNotAssignedBookings(bookings) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(bookings, {
    CostClass: 'NotAssigned',
    CostSubClass: 'NotAssigned'
  });
};
var isInflationLinked = function isInflationLinked(details) {
  var indexRatio = details == null ? void 0 : details.IndexRatio;
  return src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isBond"](details) && indexRatio && indexRatio !== 1 || false;
};
var getOptionTypeText = function getOptionTypeText(optionType) {
  switch (optionType) {
    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["CALL"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Call');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["PUT"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Put');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["ONE_TOUCH"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('OneTouch');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["NO_TOUCH"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('NoTouch');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["BINARY_PUT"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('BinaryPut');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["BINARY_CALL"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('BinaryCall');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["KNOCK_OUT_CALL"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('KnockOutCall');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["KNOCK_IN_CALL"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('KnockInCall');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["KNOCK_OUT_PUT"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('KnockOutPut');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["KNOCK_IN_PUT"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('KnockInPut');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["NONE"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('None');

    case _optionTypes__WEBPACK_IMPORTED_MODULE_4__["UNKNOWN"]:
      return src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Unknown');
  }
};
var getCombinedInstrumentName = function getCombinedInstrumentName(_ref) {
  var AssetType = _ref.AssetType,
      InstrumentDescription = _ref.InstrumentDescription,
      InstrumentSymbol = _ref.InstrumentSymbol;
  return InstrumentDescription && InstrumentSymbol ? src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["getAssetTypeName"]({
    AssetType: AssetType
  }) + " " + InstrumentDescription + " (" + InstrumentSymbol + ")" : '';
};

/***/ }),

/***/ "./src/frontend/components/transactionDetails/tradeDetails/tradeDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/productIcon/productIcon.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/details/detailsTitle.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/transactionDetails/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/transactionDetails/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/transactionDetails/queries.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionDetails\\tradeDetails\\tradeDetails.js";
















var TradeDetails = function TradeDetails(_ref) {
  var detailsData = _ref.detailsData,
      spreadCost = _ref.spreadCost;
  var showSpreadCost = spreadCost !== 0;
  var combinedInstrumentName = _queries__WEBPACK_IMPORTED_MODULE_12__["getCombinedInstrumentName"](detailsData);
  var isFxOption = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFxOption"]({
    AssetType: detailsData.AssetType
  }) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFxOneTouchOption"]({
    AssetType: detailsData.AssetType
  }) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFxNoTouchOption"]({
    AssetType: detailsData.AssetType
  });
  var isCfd = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isCfd"]({
    AssetType: detailsData.AssetType
  }) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isCfdIndexOption"]({
    AssetType: detailsData.AssetType
  });
  var showType = (isFxOption || isCfd || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isContractOption"]({
    AssetType: detailsData.AssetType
  })) && detailsData.OptionEventType;
  var type = showType && (_queries__WEBPACK_IMPORTED_MODULE_12__["getOptionTypeText"](detailsData.OptionEventType) || detailsData.OptionEventType);
  var showIndexRatio = _queries__WEBPACK_IMPORTED_MODULE_12__["isInflationLinked"](detailsData);
  var venue = isFxOption || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isFx"]({
    AssetType: detailsData.AssetType
  }) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('SaxoBankOTC') : detailsData.Venue;
  var bs = _constants__WEBPACK_IMPORTED_MODULE_11__["TradeEventTypes"][detailsData.TradeEventType] + " (" + _constants__WEBPACK_IMPORTED_MODULE_11__["ToOpenOrToClose"][detailsData.ToOpenOrClose] + ") " + (isFxOption ? '' : _constants__WEBPACK_IMPORTED_MODULE_11__["TradeTypes"][detailsData.TradeType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    assetType: detailsData.AssetType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), "\xA0", combinedInstrumentName), showType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Type'),
    className: "tst-type",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, type), detailsData.Strike !== undefined && detailsData.Strike !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Strike'),
    className: "tst-strike",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: detailsData.Strike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), detailsData.ExpiryDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Expiry'),
    className: "tst-expiry",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_10__["formatDateTime"](detailsData.ExpiryDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_TradeTime'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_10__["formatDateTime"](detailsData.TradeExecutionTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('B_S'),
    className: "tst-bs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, bs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Amount'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: detailsData.Amount,
    decimals: detailsData.AccountCurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_Price'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: detailsData.Price,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  })), showIndexRatio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_IndexRatio'),
    className: "tst-index-ratio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: detailsData.IndexRatio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Traded_value'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: detailsData.TradedValue,
    decimals: detailsData.AccountCurrencyDecimals,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_Exchange'),
    className: "tst-venue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, detailsData.ExchangeDescription, " (", venue, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradesExecuted_ValueDate'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"](detailsData.ValueDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Trade_ID'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, detailsData.TradeId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('OrderId'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, detailsData.OrderId), showSpreadCost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('SpreadMarkupCost'),
    className: "tst-spread-cost",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_9__["formatString"]('{0} ({1})', src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_8__["format"](spreadCost, detailsData.AccountCurrencyDecimals), detailsData.AccountCurrency)));
};

/* harmony default export */ __webpack_exports__["default"] = (TradeDetails);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/tradeExecutedTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var _optionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/components/transactionDetails/optionTypes.js");



/***/ }),

/***/ "./src/frontend/components/transactionDetails/transactionDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/scrollable/scrollable.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sheet/sheetActions.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_modules_reporting_reportExportButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/reporting/reportExportButton/index.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/blocks/details/detailsTitle.js");
/* harmony import */ var src_frontend_atoms_note__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/atoms/note/index.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/transactionDetails/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/transactionDetails/utils.js");
/* harmony import */ var _tradeDetails_tradeDetails__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeDetails/tradeDetails.js");
/* harmony import */ var _bookingDetails_bookingDetails__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/components/transactionDetails/bookingDetails/bookingDetails.js");
/* harmony import */ var _allBookings_allBookings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/components/transactionDetails/allBookings/allBookings.js");
/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/components/transactionDetails/info/info.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\transactionDetails\\transactionDetails.js";



























var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_15__["default"], {
  isVisible: true,
  isInstant: true,
  isSubtle: true,
  isTransparent: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 19
  }
});

var TransactionDetails = function TransactionDetails(props) {
  var details = props.details,
      account = props.account,
      componentId = props.componentId,
      title = props.title,
      isInDialog = props.isInDialog,
      isDetailsLoading = props.isDetailsLoading,
      isError = props.isError,
      resizeTimestamp = props.resizeTimestamp;

  var detailsData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(details, 'data');

  var content;
  var exportButton;

  if (isDetailsLoading) {
    content = _ref;
  } else if (isError) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "data-test-id": "details-error",
      message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('NoDataAvailable'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    });
  } else {
    var bookings = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(details, 'bookings');

    var groupedCosts = _queries__WEBPACK_IMPORTED_MODULE_18__["getGroupedCosts"](bookings);
    var notAssignedBookings = _queries__WEBPACK_IMPORTED_MODULE_18__["getNotAssignedBookings"](bookings);
    var spreadCost = _queries__WEBPACK_IMPORTED_MODULE_18__["getSpreadCost"](detailsData); // account groups do not have a ClientId, so take the ClientId from the first account in the group instead

    var clientId = account.ClientId || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(account, 'Accounts.0.ClientId');

    var accountWithCurrency = src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_10__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Account_with_currency'), account.Currency);
    var reportGeneratedTime = src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_10__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Report_generated_time'), _utils__WEBPACK_IMPORTED_MODULE_19__["formatDateTime"](details.updateTime));
    var tradeId = _queries__WEBPACK_IMPORTED_MODULE_18__["getTradeId"](detailsData);
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
      position: "top",
      isVertical: true,
      isScrollable: true,
      "data-test-id": "details-data",
      gutter: "medium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      resizeTimestamp: resizeTimestamp,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: accountWithCurrency,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, account.DisplayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientID'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    }, clientId))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, tradeId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tradeDetails_tradeDetails__WEBPACK_IMPORTED_MODULE_20__["default"], {
      detailsData: detailsData,
      spreadCost: spreadCost,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_info_info__WEBPACK_IMPORTED_MODULE_23__["default"], {
      detailsData: detailsData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(notAssignedBookings, function (booking) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_bookingDetails_bookingDetails__WEBPACK_IMPORTED_MODULE_21__["default"], {
        booking: booking,
        detailsData: detailsData,
        account: account,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      });
    })), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(groupedCosts, function (costBucket) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
        isStretch: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_detailsTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 33
        }
      }, _utils__WEBPACK_IMPORTED_MODULE_19__["getCostBucketName"](costBucket))), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(costBucket, function (booking) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_bookingDetails_bookingDetails__WEBPACK_IMPORTED_MODULE_21__["default"], {
          booking: booking,
          detailsData: detailsData,
          account: account,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 33
          }
        });
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_allBookings_allBookings__WEBPACK_IMPORTED_MODULE_22__["default"], {
      bookings: bookings,
      account: account,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_5__["StackItem"], {
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_note__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 25
      }
    }, reportGeneratedTime))));
    exportButton = tradeId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_modules_reporting_reportExportButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      componentId: componentId,
      account: account,
      format: "pdf",
      template: "TradeDetails",
      params: _queries__WEBPACK_IMPORTED_MODULE_18__["getDetailsExportParams"](tradeId),
      isOapiReport: true,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_16__["AREA_TRADES_EXECUTED"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Export'));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "grid grid--y",
    "data-test-id": "transaction-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, isInDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "grid-cell g--fit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, title), content, exportButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_sheet_sheetActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 30
    }
  }, exportButton));
};

TransactionDetails.defaultProps = {
  isInDialog: true,
  isDetailsLoading: false
};
/* harmony default export */ __webpack_exports__["default"] = (TransactionDetails);

/***/ }),

/***/ "./src/frontend/components/transactionDetails/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCostBucketName", function() { return getCostBucketName; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _tradeExecutedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/transactionDetails/tradeExecutedTypes.js");




function formatDate(date) {
  return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_1__["default"].formatUserDate(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_1__["default"].createDateTime(date));
}
function formatDateTime(date) {
  return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_1__["default"].formatUserDateTime(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_1__["default"].createDateTime(date), {
    showSeconds: true
  });
}
var costBucketsMapping = {
  AncillaryCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_AncillaryCosts'),
  IncidentalCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_IncidentalCosts'),
  NotAssigned: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_NotAssigned'),
  OneOffCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_OneOffCosts'),
  OngoingCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_OngoingCosts'),
  TransactionCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_TransactionCosts'),
  ProductCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_ProductCosts'),
  ServiceCosts: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_ServiceCosts'),
  ThirdPartyPayments: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_ThirdPartyPayments'),
  ThirdpartyPayments: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_ThirdPartyPayments')
};
function getCostBucketName(costBucket) {
  var _$head = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(costBucket),
      CostClass = _$head.CostClass,
      CostSubClass = _$head.CostSubClass;

  var title = costBucketsMapping[CostSubClass] || CostSubClass;
  var subtitle = costBucketsMapping[CostClass] || CostClass;

  if (title === subtitle) {
    return title;
  }

  return title + " (" + subtitle + ")";
}

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeEventTypes", function() { return TradeEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOrClose", function() { return OpenOrClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountClass", function() { return AmountClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS_DIALOG_WIDTH", function() { return DETAILS_DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DIALOG_WIDTH", function() { return FILTER_DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DIALOG_HEIGHT", function() { return FILTER_DIALOG_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return PAGE_SIZE; });
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/localization.js");

var TradeEventTypes = {
  Bought: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Bought'),
  Sold: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Sold'),
  TransferIn: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Transfer_in'),
  TransferOut: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Transfer_out'),
  Unknown: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('Unknown_buy_sell')
};
var OpenOrClose = {
  ToOpen: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradesExecuted_openclose_open'),
  ToClose: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('TradesExecuted_openclose_close')
};
var AmountClass = {
  OngoingCharges: 'OngoingCharges',
  TransactionCosts: 'TransactionCosts'
};
var DETAILS_DIALOG_WIDTH = 379;
var FILTER_DIALOG_WIDTH = 400;
var FILTER_DIALOG_HEIGHT = 590; // number of trades per page (if paging is used)

var PAGE_SIZE = 50;

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/detailsButton/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/tradesExecuted/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/tradesExecuted/actions.js");
/* harmony import */ var _detailsButton_app___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/tradesExecuted/detailsButton/detailsButton.default.js");





function mapStateToProps(state, ownProps) {
  var componentId = ownProps.componentId,
      tradeId = ownProps.tradeId,
      accountId = ownProps.accountId;

  var _tradesExecutedSelect = _selectors__WEBPACK_IMPORTED_MODULE_1__["getComponentState"](state, componentId),
      details = _tradesExecutedSelect.details;

  return {
    componentId: componentId,
    details: details,
    tradeId: tradeId,
    accountId: accountId
  };
}

var mapDispatchToProps = {
  onUpdateDetails: _actions__WEBPACK_IMPORTED_MODULE_2__["updateDetails"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_detailsButton_app___WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/detailsButton/detailsButton.default.js":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/icon/icon.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_components_transactionDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/transactionDetails/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/tradesExecuted/constants.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\tradesExecuted\\detailsButton\\detailsButton.default.js";















var DetailsButton = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(DetailsButton, _React$Component);

  function DetailsButton(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      isDialogOpening: false
    };
    return _this;
  }

  var _proto = DetailsButton.prototype;

  _proto.handleButtonTap = function handleButtonTap() {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        tradeId = _this$props.tradeId,
        accountId = _this$props.accountId,
        tradeDate = _this$props.tradeDate,
        onUpdateDetails = _this$props.onUpdateDetails;
    onUpdateDetails({
      componentId: componentId,
      tradeId: tradeId,
      accountId: accountId,
      tradeDate: tradeDate
    });
    this.setState({
      isDialogOpening: true,
      prevUpdateTime: this.props.details.updateTime
    });
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["AREA_TRADES_EXECUTED_DETAILS"], 'Module loaded', {
      sessionId: src_frontend_config__WEBPACK_IMPORTED_MODULE_12__["default"].auth.sessionId
    });
  };

  _proto.handleOnHide = function handleOnHide() {
    this.setState({
      isDialogOpening: false
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        details = _this$props2.details,
        componentId = _this$props2.componentId,
        tradeId = _this$props2.tradeId,
        accountId = _this$props2.accountId;

    var detailsData = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(details, 'data');

    var _this$state = this.state,
        isDialogOpening = _this$state.isDialogOpening,
        prevUpdateTime = _this$state.prevUpdateTime;
    var isLoading = !detailsData && isDialogOpening;
    var title = src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Trades_executed_details');
    var isError = detailsData == null ? void 0 : detailsData.error;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isVisible: isLoading,
      isInstant: true,
      size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_13__["SMALL"],
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onTap: this.handleButtonTap,
      className: "btn--clear btn--inline c--reset",
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Trades_executed_details'),
      "data-test-id": "btn-trades-details-" + tradeId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "info",
      isBlock: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    })), isDialogOpening && detailsData && details.updateTime > prevUpdateTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
      showUnderlay: true,
      cardOptions: {
        isFullHeight: true
      },
      onHide: this.handleOnHide,
      width: _constants__WEBPACK_IMPORTED_MODULE_15__["DETAILS_DIALOG_WIDTH"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_transactionDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
      componentId: componentId,
      accountId: accountId,
      details: details,
      title: title,
      isError: isError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    })));
  };

  return DetailsButton;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(DetailsButton, "propTypes", {
  componentId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  details: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    updateTime: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    bookings: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
  }),
  tradeId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  accountId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  onUpdateDetails: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  tradeDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(DetailsButton));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/filters/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/tradesExecuted/selectors.js");
/* harmony import */ var _filters_app___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/tradesExecuted/filters/filters.default.js");





function mapStateToProps() {
  var getAssetTypes = _selectors__WEBPACK_IMPORTED_MODULE_2__["createGetAssetTypesMap"]();
  var getOpenCloseOptions = _selectors__WEBPACK_IMPORTED_MODULE_2__["createGetOpenCloseOptions"]();
  var getBookedAmountCurrency = _selectors__WEBPACK_IMPORTED_MODULE_2__["createGetBookedAmountCurrency"]();
  var getEntitiesToShow = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__["createGetEntitiesToShow"]();
  return function (state, ownProps) {
    var componentId = ownProps.componentId;

    var _selectors$getCompone = _selectors__WEBPACK_IMPORTED_MODULE_2__["getComponentState"](state, componentId),
        accountId = _selectors$getCompone.accountId,
        rangeId = _selectors$getCompone.rangeId,
        startDate = _selectors$getCompone.startDate,
        endDate = _selectors$getCompone.endDate,
        isLoading = _selectors$getCompone.isLoading,
        data = _selectors$getCompone.data;

    return {
      componentId: componentId,
      accountId: accountId,
      rangeId: rangeId,
      startDate: startDate,
      endDate: endDate,
      assetTypes: getAssetTypes(state, componentId),
      openCloseOptions: getOpenCloseOptions(state, componentId),
      data: data,
      isLoading: isLoading,
      bookedAmountCurrency: getBookedAmountCurrency(state, componentId),
      accounts: getEntitiesToShow(state, {
        excludeGroups: true
      })
    };
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_filters_app___WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/filters/filters.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_components_accountBalancesSelector_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/accountBalancesSelector/container.js");
/* harmony import */ var src_frontend_modules_reporting_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/reporting/queries.js");
/* harmony import */ var src_frontend_components_reporting_dateRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reporting/dateRange.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reporting_openCloseFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/reporting/openCloseFilter.js");
/* harmony import */ var src_frontend_components_reporting_assetTypesFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/reporting/assetTypesFilter.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_components_reporting_propTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/reporting/propTypes.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_modules_reporting_reportExport__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/reporting/reportExport/index.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_modules_reporting_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/reporting/constants.js");
/* harmony import */ var src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/accountSelector/index.js");
/* harmony import */ var src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/blocks/matchMedia/queries.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/blocks/scrollable/scrollable.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\tradesExecuted\\filters\\filters.default.js";

























var Filters = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Filters, _React$PureComponent);

  function Filters() {
    var _this;

    _this = _React$PureComponent.call(this) || this;
    _this.state = {
      isShowingExportPopup: false
    };
    return _this;
  }

  var _proto = Filters.prototype;

  _proto.handleExportButtonTap = function handleExportButtonTap() {
    this.setState({
      isShowingExportPopup: true
    });
  };

  _proto.handleHideModulePopup = function handleHideModulePopup() {
    this.setState({
      isShowingExportPopup: false
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        isLoading = _this$props.isLoading,
        accountId = _this$props.accountId,
        rangeId = _this$props.rangeId,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate,
        assetTypes = _this$props.assetTypes,
        data = _this$props.data,
        onAccountChange = _this$props.onAccountChange,
        onDateRangeChange = _this$props.onDateRangeChange,
        onAssetTypeSelect = _this$props.onAssetTypeSelect,
        onChangeOpenClose = _this$props.onChangeOpenClose,
        openCloseOptions = _this$props.openCloseOptions,
        bookedAmountCurrency = _this$props.bookedAmountCurrency,
        isInDialog = _this$props.isInDialog,
        showHeader = _this$props.showHeader,
        showSimpleAccountSelector = _this$props.showSimpleAccountSelector;
    var isShowingExportPopup = this.state.isShowingExportPopup;
    var minDate = src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_11__["default"].createDate(src_frontend_modules_reporting_constants__WEBPACK_IMPORTED_MODULE_18__["MIN_DATE"]);
    var header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "sep sep--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Filter'));
    var accountSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      className: "reporting-filter-legend form-legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Account')), showSimpleAccountSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onChange: onAccountChange,
      selectedAccountId: accountId,
      isFullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }), !showSimpleAccountSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_accountBalancesSelector_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "tst-account-balances-selector",
      componentId: componentId,
      onSelect: onAccountChange,
      accountId: accountId,
      showClient: true,
      showGroups: true,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_13__["AREA_TRADES_EXECUTED"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }));
    var dateRangeSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      className: "reporting-filter-legend form-legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Period')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reporting_dateRange__WEBPACK_IMPORTED_MODULE_7__["default"], {
      predefinedRanges: src_frontend_modules_reporting_queries__WEBPACK_IMPORTED_MODULE_6__["getPredefinedRanges"](),
      onChange: onDateRangeChange,
      rangeId: rangeId,
      minDate: minDate,
      startDate: startDate,
      endDate: endDate,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_13__["AREA_TRADES_EXECUTED"],
      dialogType: Object(src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_20__["isAppSmall"])() ? 'card' : 'popup',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }));
    var assetTypeSelector = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      key: "asset-types",
      className: "reporting-filter-legend grid grid--fill-fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      className: "form-legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Asset_Types'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell g--cross-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      className: "t-meta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_21__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('BookedAmountWithCurrency'), bookedAmountCurrency)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reporting_assetTypesFilter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "asset-types-filter",
      onFilterChange: onAssetTypeSelect,
      assetTypes: assetTypes,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      key: "open-close",
      className: "reporting-filter-legend form-legend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Open_space_Close')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid grid--series grid--y",
      key: "spacing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reporting_openCloseFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onFilterChange: onChangeOpenClose,
      openCloseOptions: openCloseOptions,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: "btn--primary",
      onTap: this.handleExportButtonTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Export'))))];
    var exportPopup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onHide: this.handleHideModulePopup,
      width: src_frontend_modules_reporting_constants__WEBPACK_IMPORTED_MODULE_18__["REPORT_DIALOG_WIDTH"],
      height: src_frontend_modules_reporting_constants__WEBPACK_IMPORTED_MODULE_18__["REPORT_DIALOG_HEIGHT"],
      showUnderlay: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_modules_reporting_reportExport__WEBPACK_IMPORTED_MODULE_14__["default"], {
      componentId: componentId + "-reportExport",
      template: "TradesExecuted",
      reportTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('MA_TradesExecuted_Title'),
      reportDescription: src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('MA_TradesExecuted_Description'),
      accountId: accountId,
      rangeId: rangeId,
      minDate: minDate,
      startDate: startDate,
      endDate: endDate,
      isOapiReport: true,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_13__["AREA_TRADES_EXECUTED"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }));

    if (isInDialog) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_23__["default"], {
        className: "grid grid--y grid--series sheet--full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "grid-cell g--fit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('Filter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_25__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_24__["default"], {
        className: "grid grid--y grid--series grid--fit-all",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 25
        }
      }, accountSelector, dateRangeSelector, !isLoading && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(data) && assetTypeSelector, isShowingExportPopup && exportPopup)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid grid--scroll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }, showHeader && header, accountSelector, dateRangeSelector, !isLoading && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(data) && assetTypeSelector, isShowingExportPopup && exportPopup));
  };

  return Filters;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Filters, "propTypes", {
  componentId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  accountId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  rangeId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  assetTypes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(src_frontend_components_reporting_propTypes__WEBPACK_IMPORTED_MODULE_12__["assetTypeItemProps"])).isRequired,
  openCloseOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(src_frontend_components_reporting_propTypes__WEBPACK_IMPORTED_MODULE_12__["openCloseItemProps"])).isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onAssetTypeSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDateRangeChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onAccountChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onChangeOpenClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  bookedAmountCurrency: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  isInDialog: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showSimpleAccountSelector: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Filters, "defaultProps", {
  showHeader: true
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_17__["bindHandlers"])(Filters));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/grid/columnDefinitions.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColumnDefinitions", function() { return createColumnDefinitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reporting_reportingInstrument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reporting/reportingInstrument.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/defaultHeaderRenderer.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var _detailsButton_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/tradesExecuted/detailsButton/container.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/tradesExecuted/constants.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\tradesExecuted\\grid\\columnDefinitions.default.js";











var createColumnDefinitions = function createColumnDefinitions(_ref) {
  var bookedAmountProperty = _ref.bookedAmountProperty,
      bookedAmountCurrency = _ref.bookedAmountCurrency,
      componentId = _ref.componentId;
  return [{
    id: 'instrumentDescription',
    minWidth: 200,
    maxWidth: 350,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Instrument'),
    priority: 1,
    template: function template(_ref2) {
      var data = _ref2.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_reporting_reportingInstrument__WEBPACK_IMPORTED_MODULE_3__["default"], {
        reportingInstrument: {
          AssetType: data.AssetType,
          Description: data.InstrumentDescription
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      });
    },
    sort: {
      id: 'instrumentDescription',
      fields: 'data.InstrumentDescription'
    }
  }, {
    id: 'tradeDate',
    width: 110,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Trade_date'),
    priority: 2,
    header: src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_5__["default"],
    template: function template(_ref3) {
      var data = _ref3.data;
      return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_4__["default"].formatUserDate(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_4__["default"].createDateTime(data.TradeDate));
    },
    sort: {
      id: 'tradeDate',
      fields: 'data.TradeDate'
    }
  }, {
    id: 'tradeEventType',
    width: 70,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('B_S'),
    priority: 3,
    template: function template(_ref4) {
      var data = _ref4.data;
      return _constants__WEBPACK_IMPORTED_MODULE_9__["TradeEventTypes"][data.TradeEventType];
    },
    sort: {
      id: 'tradeEventType',
      fields: 'data.TradeEventType'
    }
  }, {
    id: 'toOpenOrClose',
    width: src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isTabletApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isPhoneApp ? 130 : 90,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Open_Close'),
    priority: 4,
    template: function template(_ref5) {
      var data = _ref5.data;
      return _constants__WEBPACK_IMPORTED_MODULE_9__["OpenOrClose"][data.ToOpenOrClose];
    },
    sort: {
      id: 'toOpenOrClose',
      fields: 'data.ToOpenOrClose'
    }
  }, {
    id: 'amount',
    width: 90,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Amount'),
    priority: 5,
    template: function template(_ref6) {
      var data = _ref6.data;
      return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](data.Amount);
    },
    sort: {
      id: 'amount',
      fields: 'data.Amount'
    }
  }, {
    id: 'price',
    width: 90,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('TradesExecuted_Price'),
    priority: 6,
    template: function template(_ref7) {
      var data = _ref7.data;
      return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](data.Price);
    },
    sort: {
      id: 'price',
      fields: 'data.Price'
    }
  }, {
    id: 'tradedValue',
    width: 125,
    align: 'end',
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Traded_value'),
    priority: 8,
    template: function template(_ref8) {
      var data = _ref8.data;
      return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](data.TradedValue, data.AccountCurrencyDecimals);
    },
    sort: {
      id: 'tradedValue',
      fields: 'data.TradedValue'
    }
  }, {
    id: 'bookedAmount',
    width: src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isTabletApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isPhoneApp ? 190 : 150,
    align: 'end',
    primaryTitle: src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_7__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('BookedAmountWithCurrency'), bookedAmountCurrency),
    priority: 7,
    template: function template(_ref9) {
      var data = _ref9.data;
      return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](data[bookedAmountProperty], data.AccountCurrencyDecimals);
    },
    sort: {
      id: 'bookedAmount',
      fields: "data." + bookedAmountProperty
    }
  }, {
    id: 'details',
    primaryTitle: '',
    width: src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isTabletApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isPhoneApp ? 40 : 25,
    priority: src_frontend_config__WEBPACK_IMPORTED_MODULE_6__["default"].isPhoneApp ? 1 : 3,
    isNotSortable: true,
    template: function template(_ref10) {
      var data = _ref10.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detailsButton_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        componentId: componentId,
        tradeId: data.TradeId,
        accountId: data.AccountId,
        tradeDate: data.TradeDate,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }
      });
    }
  }];
};

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/grid/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/workspace/component/actions.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/tradesExecuted/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/tradesExecuted/actions.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/tradesExecuted/grid/grid.js");









function mapStateToProps() {
  var getFilteredData = _selectors__WEBPACK_IMPORTED_MODULE_5__["createGetFilteredData"]();
  var getBookedAmountCurrency = _selectors__WEBPACK_IMPORTED_MODULE_5__["createGetBookedAmountCurrency"]();
  return function (state, ownProps) {
    var componentId = ownProps.componentId;

    var _workspaceSelectors$g = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_2__["getComponentUserSettings"](state, componentId),
        $skip = _workspaceSelectors$g.$skip;

    var _tradesExecutedSelect = _selectors__WEBPACK_IMPORTED_MODULE_5__["getComponentState"](state, componentId),
        isLoading = _tradesExecutedSelect.isLoading,
        accountId = _tradesExecutedSelect.accountId,
        sort = _tradesExecutedSelect.sort;

    return {
      componentId: componentId,
      filteredData: getFilteredData(state, componentId),
      account: src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_4__["getAccountById"](state, accountId),
      isLoading: isLoading,
      sort: sort,
      bookedAmountCurrency: getBookedAmountCurrency(state, componentId),
      $skip: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultTo(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toNumber($skip), 0)
    };
  };
}

var mapDispatchToProps = {
  onSortChange: _actions__WEBPACK_IMPORTED_MODULE_6__["changeSort"],
  onUpdateComponentUserSettings: src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_3__["updateComponentUserSettings"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_grid__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/grid/grid.js":
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridSortUtils.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_paging_paging__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/paging/paging.js");
/* harmony import */ var _columnDefinitions_app___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/tradesExecuted/grid/columnDefinitions.default.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\tradesExecuted\\grid\\grid.js";












var Grid = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Grid, _React$PureComponent);

  function Grid() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Grid.prototype;

  _proto.handleHeaderSort = function handleHeaderSort(sort) {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        onSortChange = _this$props.onSortChange,
        onUpdateComponentUserSettings = _this$props.onUpdateComponentUserSettings; // sort will be persisted in container action

    onSortChange({
      componentId: componentId,
      sort: sort
    }); // go back to start of data set when changing sorting

    onUpdateComponentUserSettings(componentId, {
      $skip: 0
    });
  };

  _proto.handleNext = function handleNext() {
    var _this$props2 = this.props,
        pageSize = _this$props2.pageSize,
        filteredData = _this$props2.filteredData,
        $skip = _this$props2.$skip,
        onUpdateComponentUserSettings = _this$props2.onUpdateComponentUserSettings,
        componentId = _this$props2.componentId;
    onUpdateComponentUserSettings(componentId, {
      $skip: $skip + pageSize >= filteredData.length ? $skip : $skip + pageSize
    }); // paging buttons are at the bottom, so scroll to top when paging

    window.scrollTo(0, 0);
  };

  _proto.handlePrevious = function handlePrevious() {
    var _this$props3 = this.props,
        pageSize = _this$props3.pageSize,
        $skip = _this$props3.$skip,
        onUpdateComponentUserSettings = _this$props3.onUpdateComponentUserSettings,
        componentId = _this$props3.componentId;
    onUpdateComponentUserSettings(componentId, {
      $skip: $skip - pageSize < 0 ? 0 : $skip - pageSize
    }); // paging buttons are at the bottom, so scroll to top when paging

    window.scrollTo(0, 0);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        isLoading = _this$props4.isLoading,
        filteredData = _this$props4.filteredData,
        resizeTimestamp = _this$props4.resizeTimestamp,
        account = _this$props4.account,
        componentId = _this$props4.componentId,
        sort = _this$props4.sort,
        bookedAmountCurrency = _this$props4.bookedAmountCurrency,
        isHeightFill = _this$props4.isHeightFill,
        pageSize = _this$props4.pageSize,
        $skip = _this$props4.$skip;

    if (isLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isVisible: true,
        isInstant: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 20
        }
      });
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(filteredData)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_9__["default"], {
        message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('no_data_for_period_account'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }
      });
    }

    var bookedAmountProperty = account.IsAccount ? 'BookedAmountAccountCurrency' : 'BookedAmountClientCurrency'; // paging

    var rows = filteredData;
    var hasNext;
    var hasPrevious;
    var hasPaging = pageSize > 0;
    var columnDefinitions = Object(_columnDefinitions_app___WEBPACK_IMPORTED_MODULE_12__["createColumnDefinitions"])({
      bookedAmountProperty: bookedAmountProperty,
      bookedAmountCurrency: bookedAmountCurrency,
      componentId: componentId
    });

    if (hasPaging) {
      var sortedData = filteredData;

      if (sort) {
        var sortColumn = src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_7__["getSortedColumn"](sort, columnDefinitions);

        if (sortColumn) {
          sortedData = src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_7__["sortRows"](filteredData, sort, {
            sort: src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_7__["getColumnSort"](sortColumn.sort)
          });
        }
      }

      rows = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.slice(sortedData, $skip, $skip + pageSize);
      hasNext = $skip + pageSize < filteredData.length;
      hasPrevious = $skip > 0;
    }

    var gridContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "data-test-id": "trades-grid",
      rows: rows,
      cols: columnDefinitions,
      onHeaderSort: this.handleHeaderSort,
      sort: sort,
      resizeTimestamp: resizeTimestamp,
      isHeightFill: isHeightFill,
      isSelectable: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    });

    if (!hasPaging) {
      return gridContent;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid grid--y grid--serieslg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }
    }, gridContent), hasPaging && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_paging_paging__WEBPACK_IMPORTED_MODULE_11__["default"], {
      showNext: hasNext,
      showPrevious: hasPrevious,
      onNext: this.handleNext,
      onPrevious: this.handlePrevious,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    })));
  };

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Grid, "propTypes", {
  componentId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  filteredData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  account: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  resizeTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onUpdateComponentUserSettings: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  bookedAmountCurrency: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  isHeightFill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  $skip: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Grid, "defaultProps", {
  isLoading: true,
  isHeightFill: false,
  pageSize: 0,
  $skip: 0
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__["bindHandlers"])(Grid));

/***/ }),

/***/ "./src/frontend/modules/tradesExecuted/tradesExecuted.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/scrollable/scrollable.js");
/* harmony import */ var src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/resizable/resizable.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_modules_reporting_reportFooterLine_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/reporting/reportFooterLine/container.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/icon/icon.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var _filters_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/tradesExecuted/filters/container.js");
/* harmony import */ var _grid_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/tradesExecuted/grid/container.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\tradesExecuted\\tradesExecuted.default.js";













var DEFAULT_SCREEN_THRESHOLD_WIDTH = 1024;

var TradesExecuted = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TradesExecuted, _React$PureComponent);

  function TradesExecuted(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.setEl = function (ref) {
      _this.el = ref;
    };

    _this.state = {
      isFilterDialogVisible: false
    };
    return _this;
  }

  var _proto = TradesExecuted.prototype;

  _proto.componentDidMount = function componentDidMount() {
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["AREA_TRADES_EXECUTED"], 'Module loaded', {
      sessionId: src_frontend_config__WEBPACK_IMPORTED_MODULE_12__["default"].auth.sessionId
    });
  };

  _proto.handleSetAnchor = function handleSetAnchor(ref) {
    this.anchorEl = ref;
  };

  _proto.handleAccountChange = function handleAccountChange(accountId) {
    var _this$props = this.props,
        rangeId = _this$props.rangeId,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate,
        onChangeInputParams = _this$props.onChangeInputParams,
        componentId = _this$props.componentId;
    onChangeInputParams({
      componentId: componentId,
      rangeId: rangeId,
      startDate: startDate,
      endDate: endDate,
      accountId: accountId
    });
  };

  _proto.handleDateRangeChange = function handleDateRangeChange(rangeId, startDate, endDate) {
    var _this$props2 = this.props,
        accountId = _this$props2.accountId,
        onChangeInputParams = _this$props2.onChangeInputParams,
        componentId = _this$props2.componentId;
    onChangeInputParams({
      componentId: componentId,
      rangeId: rangeId,
      startDate: startDate,
      endDate: endDate,
      accountId: accountId
    });
  };

  _proto.handleAssetTypeSelect = function handleAssetTypeSelect(assetType) {
    var _this$props3 = this.props,
        onAssetTypeSelect = _this$props3.onAssetTypeSelect,
        componentId = _this$props3.componentId;
    onAssetTypeSelect({
      componentId: componentId,
      assetType: assetType
    });
  };

  _proto.handleChangeOpenClose = function handleChangeOpenClose(openCloseKey) {
    var _this$props4 = this.props,
        onChangeOpenClose = _this$props4.onChangeOpenClose,
        componentId = _this$props4.componentId;
    onChangeOpenClose({
      componentId: componentId,
      openCloseKey: openCloseKey
    });
  };

  _proto.handleFilterButtonTap = function handleFilterButtonTap() {
    this.setState({
      isFilterDialogVisible: true
    });
  };

  _proto.handleFilterDialogHide = function handleFilterDialogHide() {
    this.setState({
      isFilterDialogVisible: false
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      type: "filter",
      isBlock: true,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 41
      }
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resizeTimestamp: this.props.resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, function (resizableProps) {
      var _this2$props = _this2.props,
          componentId = _this2$props.componentId,
          resizeTimestamp = _this2$props.resizeTimestamp,
          updateTime = _this2$props.updateTime;
      var width = resizableProps.parentViewport.width;
      var isFilterDialogVisible = _this2.state.isFilterDialogVisible;
      var tradesExecutedSidebar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "reporting-sidebar sep sep--right grid-cell",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_filters_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        componentId: componentId,
        onAssetTypeSelect: _this2.handleAssetTypeSelect,
        onDateRangeChange: _this2.handleDateRangeChange,
        onAccountChange: _this2.handleAccountChange,
        onChangeOpenClose: _this2.handleChangeOpenClose,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 29
        }
      }));
      var isShowNarrowView = width && resizableProps.parentViewport.width <= DEFAULT_SCREEN_THRESHOLD_WIDTH;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        "data-test-id": "trades-executed-legacy",
        className: "grid grid--fit-fill",
        ref: _this2.setEl,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }
      }, isShowNarrowView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "reporting-filterbar sep sep--right grid-cell",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onTap: _this2.handleFilterButtonTap,
        onDomRef: _this2.handleSetAnchor,
        className: "btn--clear",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 37
        }
      }, _ref)), !isShowNarrowView && tradesExecutedSidebar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "grid grid--y grid--fill-fit tst-tradesexecutedgrid",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_grid_container__WEBPACK_IMPORTED_MODULE_14__["default"], {
        componentId: componentId,
        resizeTimestamp: resizeTimestamp,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 33
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: "grid-cell",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_modules_reporting_reportFooterLine_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disclaimerKey: "TradesExecuted",
        updateTime: updateTime,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 37
        }
      }))), isShowNarrowView && isFilterDialogVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
        anchor: _this2.anchorEl,
        position: "bottom",
        align: "left",
        onHide: _this2.handleFilterDialogHide,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 37
        }
      }, tradesExecutedSidebar)));
    });
  };

  return TradesExecuted;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TradesExecuted, "propTypes", {
  componentId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  resizeTimestamp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  updateTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  accountId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  rangeId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  onAssetTypeSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onChangeOpenClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onChangeInputParams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(TradesExecuted));

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/8.js.map