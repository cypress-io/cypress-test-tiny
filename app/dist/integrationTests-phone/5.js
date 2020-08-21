(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/frontend/components/instrumentTradeSignals/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/components/instrumentTradeSignals/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/modules/productPage/actionBar/actionBar.js":
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
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_modules_alertsDialog_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/alertsDialog/constants.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/atoms/toolbar/index.js");
/* harmony import */ var src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/blocks/icon/icon.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_components_tradingConditionsButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/tradingConditionsButton/index.js");
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_components_navigation_navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/navigation/navigator/index.js");
/* harmony import */ var src_frontend_components_router_queries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/router/queries.js");
/* harmony import */ var src_frontend_components_favoritesToggle_favoritesToggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/components/favoritesToggle/favoritesToggle.js");
/* harmony import */ var src_frontend_app_common_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/app/common/routes/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var _productPageToolbar_relatedProductIcon_relatedProductIcon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/relatedProductIcon/relatedProductIcon.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/modules/productPage/queries.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\actionBar\\actionBar.js";
























/**
 * @property {object} instrument - passed instrument object
 */

var ActionBar = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ActionBar, _React$PureComponent);

  function ActionBar() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ActionBar.prototype;

  _proto.handleTapAddAlert = function handleTapAddAlert() {
    var _this$props = this.props,
        onAddAlert = _this$props.onAddAlert,
        instrumentId = _this$props.instrumentId;
    onAddAlert({
      alertType: src_frontend_modules_alertsDialog_constants__WEBPACK_IMPORTED_MODULE_10__["PRICE_ALERTS"],
      instrumentId: instrumentId,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["AREA_PRODUCT_PAGE"]
    });
  };

  _proto.handleInstrumentSelected = function handleInstrumentSelected(instrument) {
    var _this$props2 = this.props,
        onLaunchTradeTicket = _this$props2.onLaunchTradeTicket,
        isTradeTicketHeader = _this$props2.isTradeTicketHeader;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_15__["getId"](instrument);
    onLaunchTradeTicket({
      instrumentId: instrumentId,
      isShowHeader: isTradeTicketHeader,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["AREA_PRODUCT_PAGE"],
      launchWithoutRoute: true
    });
  };

  _proto.handleTradeButtonTap = function handleTradeButtonTap() {
    var _this$props3 = this.props,
        onLaunchTradeTicket = _this$props3.onLaunchTradeTicket,
        instrumentId = _this$props3.instrumentId,
        isTradeTicketHeader = _this$props3.isTradeTicketHeader;
    onLaunchTradeTicket({
      instrumentId: instrumentId,
      isShowHeader: isTradeTicketHeader,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["AREA_PRODUCT_PAGE"],
      launchWithoutRoute: true
    });
  };

  _proto.handleTradingConditionDataLoaded = function handleTradingConditionDataLoaded() {
    var _this$props4 = this.props,
        accountId = _this$props4.accountId,
        instrumentId = _this$props4.instrumentId,
        onTradingConditionShow = _this$props4.onTradingConditionShow;
    onTradingConditionShow({
      instrumentId: instrumentId,
      accountId: accountId,
      initialFeatureTrackingReason: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__["AREA_PRODUCT_PAGE"]
    }, src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isProApp);
  };

  _proto.handleFavoriteToggle = function handleFavoriteToggle() {
    var _this$props5 = this.props,
        instrument = _this$props5.instrument,
        onFavoriteToggle = _this$props5.onFavoriteToggle;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_15__["getId"](instrument);
    onFavoriteToggle(instrumentId);
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props6 = this.props,
        instrument = _this$props6.instrument,
        instrumentId = _this$props6.instrumentId,
        accountId = _this$props6.accountId,
        accounts = _this$props6.accounts,
        relatedInstruments = _this$props6.relatedInstruments,
        isInstrumentPreferred = _this$props6.isInstrumentPreferred,
        isFavorite = _this$props6.isFavorite,
        isTradeButtonAtEnd = _this$props6.isTradeButtonAtEnd,
        legalAssetTypes = _this$props6.legalAssetTypes;
    var showAddAlertButton = !src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isSpaApp && !src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isInvestorApp && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_14__["isPriceAlertsAllowed"](instrument);
    var isInstrumentTradable = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_14__["isTradable"](instrument);
    var showTradingConditionsButton = src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].appFeatures.isTradingConditionsEnabled && isInstrumentTradable;
    var allowedRelatedInstruments = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_16__["getTradableInstruments"](accounts, relatedInstruments);
    var tradeButtonOptions = _queries__WEBPACK_IMPORTED_MODULE_25__["getTradeButtonText"](instrument, isInstrumentPreferred, isInstrumentTradable, legalAssetTypes);
    var tradeUrl = src_frontend_components_router_queries__WEBPACK_IMPORTED_MODULE_20__["createUrl"](src_frontend_app_common_routes__WEBPACK_IMPORTED_MODULE_22__["TRADE"], {
      instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_15__["getId"](instrument)
    });
    var showFavoriteIcon = !src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isSpaApp;
    var favoriteIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_favoritesToggle_favoritesToggle__WEBPACK_IMPORTED_MODULE_21__["default"], {
      instrument: instrument,
      isFavorite: isFavorite,
      "data-test-id": "product-page-favorite",
      onFavoriteToggle: this.handleFavoriteToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    });
    var tradeButton = src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isInvestorApp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_navigation_navigator__WEBPACK_IMPORTED_MODULE_19__["default"], {
      to: tradeUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data-test-id": "product-page-trade",
      isInline: true,
      isWide: true,
      isPrimary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Trade'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "js-help-globaltrade",
      isPrimary: true,
      isInline: true,
      isEnabled: tradeButtonOptions.isEnabled,
      "data-test-id": "product-page-toolbar-trade",
      onTap: this.handleTradeButtonTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, tradeButtonOptions.text);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, showFavoriteIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, favoriteIcon), showAddAlertButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onTap: this.handleTapAddAlert,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
      type: "alarm",
      "data-test-id": "product-page-toolbar-add-alert",
      isAction: true,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('PriceAlerts_Context_Add'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 29
      }
    }))), !isTradeButtonAtEnd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }, tradeButton), showTradingConditionsButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_tradingConditionsButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      isInline: true,
      isIconStyle: true,
      instrumentId: instrumentId,
      accountId: accountId,
      onDataLoaded: this.handleTradingConditionDataLoaded,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    })), !src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isInvestorApp && !src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isSpaApp && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(allowedRelatedInstruments, function (relatedInstrument, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_productPageToolbar_relatedProductIcon_relatedProductIcon__WEBPACK_IMPORTED_MODULE_24__["default"], {
        key: index,
        index: index,
        instrument: relatedInstrument,
        onInstrumentSelect: _this.handleInstrumentSelected,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 29
        }
      });
    }), isTradeButtonAtEnd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 21
      }
    }, tradeButton));
  };

  return ActionBar;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ActionBar, "defaultProps", {
  onAddAlert: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop,
  onFavoriteToggle: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop,
  onLaunchTradeTicket: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop,
  isFavorite: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_7__["bindHandlers"])(ActionBar));

/***/ }),

/***/ "./src/frontend/modules/productPage/actionBar/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var _actionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/productPage/actionBar/actionBar.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    legalAssetTypes: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__["getLegalAssetTypes"](state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_actionBar__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/analysis/analysis.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Analysis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_theme_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/theme/constants.js");
/* harmony import */ var src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/pricesSubscription/queries.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_blocks_illustration_illustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/illustration/illustration.js");
/* harmony import */ var src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/titleBar/index.js");
/* harmony import */ var src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/infoTooltip/index.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var _analystRatingBar_analystRatingBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/productPage/analystRatingBar/analystRatingBar.js");
/* harmony import */ var _analystGrid_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/productPage/analystGrid/container.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\analysis\\analysis.default.js";












function Analysis(props) {
  var componentId = props.componentId,
      resizeTimestamp = props.resizeTimestamp,
      marketData = props.marketData,
      instrument = props.instrument,
      price = props.price,
      theme = props.theme;
  var lastTradedPrice = src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_3__["getLastTraded"](price);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_6__["TitleBar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_6__["TitleBarSection"], {
    align: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_6__["TitleBarSection"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "product-page__illustration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_illustration_illustration__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: theme === src_frontend_models_theme_constants__WEBPACK_IMPORTED_MODULE_2__["THEME_ID_BLACK"] ? 'tipranks_logo_dark_bg' : 'tipranks_logo_light_bg',
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_9__["MEDIUM"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-test-id": "tip-ranks-info-button",
    title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Tipranks'),
    text: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TipranksInfo'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_6__["TitleBarSection"], {
    align: "end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_analystRatingBar_analystRatingBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    marketData: marketData,
    instrument: instrument,
    currentPrice: lastTradedPrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_analystGrid_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    componentId: componentId,
    resizeTimestamp: resizeTimestamp,
    instrument: instrument,
    showAnalystLink: false,
    showTooltip: true,
    "data-test-id": "analyst-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/analystGrid/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var src_frontend_modules_analystGridsSection_analysts_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/analystGridsSection/analysts/selectors.js");
/* harmony import */ var src_frontend_modules_analystGridsSection_analystGrid_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/analystGridsSection/analystGrid/container.js");
/* harmony import */ var src_frontend_modules_analystGridsSection_analystGrid_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/analystGridsSection/analystGrid/selectors.js");






var mapStateToProps = function mapStateToProps() {
  var getAnalystGridRowData = src_frontend_modules_analystGridsSection_analystGrid_selectors__WEBPACK_IMPORTED_MODULE_4__["createGetAnalystGridRowData"](false);
  return function (state, props) {
    var componentId = props.componentId;

    var _workspaceSelectors$g = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__["getComponentUserSettings"](state, componentId),
        modelId = _workspaceSelectors$g.modelId;

    var analystsData = getAnalystGridRowData(state, modelId);
    var analystsCount = src_frontend_modules_analystGridsSection_analysts_selectors__WEBPACK_IMPORTED_MODULE_2__["getAnalystsCount"](state, modelId);
    return {
      analystsData: analystsData,
      analystsCount: analystsCount,
      isError: src_frontend_modules_analystGridsSection_analysts_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsError"](state, modelId),
      isReady: src_frontend_modules_analystGridsSection_analysts_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsReady"](state, modelId)
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(src_frontend_modules_analystGridsSection_analystGrid_container__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/analystRatingBar/analystRatingBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnalystRatingBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_keyInfo_keyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/keyInfo/keyInfo.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_blocks_keyInfo_keyInfoTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/keyInfo/keyInfoTitle.js");
/* harmony import */ var src_frontend_blocks_keyInfo_keyInfoDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/keyInfo/keyInfoDescription.js");
/* harmony import */ var src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/keyInfo/keyInfoHighlight.js");
/* harmony import */ var src_frontend_blocks_formattedCurrencyValue_formattedCurrencyValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/formattedCurrencyValue/formattedCurrencyValue.js");
/* harmony import */ var src_frontend_blocks_formattedPercentageValue_formattedPercentageValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/formattedPercentageValue/formattedPercentageValue.js");
/* harmony import */ var src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/formattedNumber/formattedNumber.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_blocks_layout_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/layout/constants.js");
/* harmony import */ var src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/instruments/currencies/queries.js");
/* harmony import */ var src_frontend_components_consensus_consensusText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/consensus/consensusText.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/productPage/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/productPage/constants.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\analystRatingBar\\analystRatingBar.js";
















function AnalystRatingBar(props) {
  var marketData = props.marketData,
      currentPrice = props.currentPrice,
      instrument = props.instrument;

  var _productPageQueries$g = _queries__WEBPACK_IMPORTED_MODULE_14__["getAnalystData"](marketData),
      TargetPrice = _productPageQueries$g.TargetPrice,
      LowTargetPrice = _productPageQueries$g.LowTargetPrice,
      HighTargetPrice = _productPageQueries$g.HighTargetPrice,
      Buy = _productPageQueries$g.Buy,
      Sell = _productPageQueries$g.Sell,
      Hold = _productPageQueries$g.Hold,
      UpsidePct = _productPageQueries$g.UpsidePct,
      Consensus = _productPageQueries$g.Consensus;

  var currencyDecimals = src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_12__["getCurrencyDecimals"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: src_frontend_blocks_layout_constants__WEBPACK_IMPORTED_MODULE_11__["STRETCH"],
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_3__["LARGE"],
    "data-test-id": "analyst-rating-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_consensus_consensusText__WEBPACK_IMPORTED_MODULE_13__["default"], {
    consensus: Consensus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystConsensus')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "(", src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystConsensus_Buy'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: Buy,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  })), ",\xA0", src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystConsensus_Hold'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: Hold,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  })), ",\xA0", src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystConsensus_Sell'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: Sell,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  })), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedCurrencyValue_formattedCurrencyValue__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: TargetPrice,
    instrument: instrument,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystOneYearTargetPrice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystHighestTargetPrice'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: HighTargetPrice,
    decimals: currencyDecimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  })), ",\xA0", src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AnalystLowestTargetPrice'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: LowTargetPrice,
    decimals: currencyDecimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isPositive: UpsidePct > 0,
    isNegative: UpsidePct < 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedPercentageValue_formattedPercentageValue__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: UpsidePct,
    decimals: _constants__WEBPACK_IMPORTED_MODULE_15__["PERCENTAGE_DECIMALS"],
    isRatio: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('OneYearUpside')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CurrentPrice'), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_keyInfo_keyInfoHighlight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_formattedNumber_formattedNumber__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: currentPrice,
    decimals: currencyDecimals,
    showEmptyValue: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }))))));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/financials/columnDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColumnDefinitions", function() { return createColumnDefinitions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/defaultHeaderRenderer.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/infoTooltip/index.js");
/* harmony import */ var src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/emptyValue/emptyValue.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/productPage/financials/constants.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\financials\\columnDefinitions.js";









var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 59
  }
});

var getReportingPeriodColumns = function getReportingPeriodColumns(reportingPeriods) {
  var totalNumberOfColumns = reportingPeriods.length;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(reportingPeriods, function (result, value, index) {
    var isAvailable = totalNumberOfColumns - _constants__WEBPACK_IMPORTED_MODULE_6__["NUMBER_OF_REPORTING_PERIODS_TO_DISPLAY"] <= index;
    result.push({
      id: _constants__WEBPACK_IMPORTED_MODULE_6__["REPORTINGPERIOD_COLUMN"] + "-" + value,
      minWidth: 70,
      maxWidth: 170,
      primaryTitle: value,
      align: 'end',
      priority: reportingPeriods.length - index,
      isAvailable: isAvailable,
      header: src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_2__["default"],
      itemToLabel: function itemToLabel(_ref) {
        var data = _ref.data;
        return data[value] || _ref2;
      }
    });
    return result;
  }, []);
};

var createColumnDefinitions = function createColumnDefinitions(reportingPeriods) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([{
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["FINANCIALS_COLUMN"],
    minWidth: 155,
    maxWidth: 250,
    align: 'start',
    priority: 0,
    template: function template(_ref3) {
      var data = _ref3.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "t-truncate",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }, data.name);
    }
  }, {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["TOOLTIP_COLUMN"],
    width: 34,
    align: 'left',
    priority: 0,
    template: function template(_ref4) {
      var data = _ref4.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "grid",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: data.name,
        text: data.tooltipText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }));
    }
  }, {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["UNIT_COLUMN"],
    width: 68,
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Unit'),
    align: 'left',
    priority: 0,
    header: src_frontend_components_reactGrid_blocks_defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_2__["default"],
    itemToLabel: function itemToLabel(_ref5) {
      var data = _ref5.data;
      return data.unit;
    }
  }], getReportingPeriodColumns(reportingPeriods));
};

/***/ }),

/***/ "./src/frontend/modules/productPage/financials/financials.js":
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/productPage/financials/queries.js");
/* harmony import */ var _columnDefinitions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/productPage/financials/columnDefinitions.js");
/* harmony import */ var _groupingDefinitions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/productPage/financials/groupingDefinitions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/productPage/financials/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\financials\\financials.js";













var Financials = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Financials, _React$PureComponent);

  function Financials() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      expandedSections: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "grouping", _groupingDefinitions__WEBPACK_IMPORTED_MODULE_13__["createGroupDefinition"]());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "columns", _columnDefinitions__WEBPACK_IMPORTED_MODULE_12__["createColumnDefinitions"](_queries__WEBPACK_IMPORTED_MODULE_11__["getReportingPeriods"](_this.props.marketData, false)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "getRows", Object(reselect__WEBPACK_IMPORTED_MODULE_5__["defaultMemoize"])(function (marketData) {
      return _queries__WEBPACK_IMPORTED_MODULE_11__["getFinancialsFromMarketData"](marketData);
    }));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleSectionExpand", function (evt, row) {
      var _$defaults;

      var id = row.id,
          isExpanded = row.info.isExpanded;
      var expandedSections = _this.state.expandedSections;

      _this.setState({
        expandedSections: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.defaults((_$defaults = {}, _$defaults[id] = !isExpanded, _$defaults), expandedSections)
      });
    });

    return _this;
  }

  var _proto = Financials.prototype;

  _proto.render = function render() {
    var expandedSections = this.state.expandedSections;
    var _this$props = this.props,
        marketData = _this$props.marketData,
        resizeTimestamp = _this$props.resizeTimestamp;
    var financialsRows = this.getRows(marketData);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "t-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_10__["default"].getText('Financials')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "data-test-id": "product-page-financials",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      rows: financialsRows,
      cols: this.columns,
      grouping: this.grouping,
      keepGroupsExpanded: true,
      isSectioned: true,
      isSelectable: false,
      resizeTimestamp: resizeTimestamp,
      expandedGroups: expandedSections,
      onSectionExpand: this.handleSectionExpand,
      "data-test-id": "fundamentals-grid",
      isHeightFill: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    })));
  };

  return Financials;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Financials);

/***/ }),

/***/ "./src/frontend/modules/productPage/financials/groupingDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGroupDefinition", function() { return createGroupDefinition; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/productPage/financials/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/productPage/financials/queries.js");



var createGroupDefinition = function createGroupDefinition() {
  return [{
    groupingFunction: function groupingFunction(row) {
      return row.data.parentKey;
    },
    groupingObjectFunction: function groupingObjectFunction(name, rows) {
      var row = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(rows);

      var info = row.info,
          data = row.data;
      return {
        id: name,
        info: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
          sectionHeader: _queries__WEBPACK_IMPORTED_MODULE_2__["getGroupingHeaderText"](data.parentKey)
        }, {
          isTapable: true
        }, info),
        rows: rows
      };
    }
  }];
};

/***/ }),

/***/ "./src/frontend/modules/productPage/financials/types.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/frontend/modules/productPage/fundamentals/allocations/allocations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/allocationChart/constants.js");
/* harmony import */ var src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/allocationChart/allocationChart.js");
/* harmony import */ var src_frontend_components_allocationChart_allocationChartsGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/allocationChart/allocationChartsGroup.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/productPage/fundamentals/allocations/queries.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\fundamentals\\allocations\\allocations.js";









var Allocations = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Allocations, _React$PureComponent);

  function Allocations() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Allocations.prototype;

  _proto.getFundamentalAllocationCharts = function getFundamentalAllocationCharts() {
    var _this$props = this.props,
        resizeTimestamp = _this$props.resizeTimestamp,
        marketData = _this$props.marketData;
    var countryAllocationChartData = _queries__WEBPACK_IMPORTED_MODULE_8__["getRevenueExposureCountriesChartData"](marketData);
    var segmentsAllocationChartData = _queries__WEBPACK_IMPORTED_MODULE_8__["getRevenueExposureSegmentsChartData"](marketData);
    var exposureCountryAllocationChart = !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(countryAllocationChartData) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "exposure-by-country-allocation-chart",
      resizeTimestamp: resizeTimestamp,
      data: countryAllocationChartData,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Revenue_Exposure_By_Country'),
      valueType: src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT"],
      isPercentageValueRatio: false,
      "data-test-id": "exposure-by-country-allocation-chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    });
    var segmentsAllocationChart = !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(segmentsAllocationChartData) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "segments-allocation-chart",
      resizeTimestamp: resizeTimestamp,
      data: segmentsAllocationChartData,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Business_Segments'),
      valueType: src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT"],
      isPercentageValueRatio: false,
      "data-test-id": "segments-allocation-chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    });
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([exposureCountryAllocationChart, segmentsAllocationChart]);
  };

  _proto.render = function render() {
    var resizeTimestamp = this.props.resizeTimestamp;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChartsGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resizeTimestamp: resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, this.getFundamentalAllocationCharts());
  };

  return Allocations;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Allocations);

/***/ }),

/***/ "./src/frontend/modules/productPage/fundamentals/allocations/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevenueExposure", function() { return getRevenueExposure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevenueExposureCountriesChartData", function() { return getRevenueExposureCountriesChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevenueExposureSegmentsChartData", function() { return getRevenueExposureSegmentsChartData; });
/* harmony import */ var src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/marketDataModel/queries.js");
/* harmony import */ var src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/marketDataModel/fieldGroups/fieldGroups.js");
/* harmony import */ var src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/allocationChart/queries.js");



var getRevenueExposure = function getRevenueExposure(marketData) {
  return src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_0__["getDataByFieldGroup"](marketData, src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_1__["REVENUE_EXPOSURE"]);
};
var getRevenueExposureCountriesChartData = function getRevenueExposureCountriesChartData(marketData) {
  var revenueExposureData = getRevenueExposure(marketData);
  return revenueExposureData && src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_2__["filterAllocationChartData"](revenueExposureData.Countries);
};
var getRevenueExposureSegmentsChartData = function getRevenueExposureSegmentsChartData(marketData) {
  var revenueExposureData = getRevenueExposure(marketData);
  return revenueExposureData && src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_2__["filterAllocationChartData"](revenueExposureData.Segments);
};

/***/ }),

/***/ "./src/frontend/modules/productPage/fundamentals/fundamentals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fundamentals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var _financials_financials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/productPage/financials/financials.js");
/* harmony import */ var _allocations_allocations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/productPage/fundamentals/allocations/allocations.js");
/* harmony import */ var _allocations_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/productPage/fundamentals/allocations/queries.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\fundamentals\\fundamentals.js";









function Fundamentals(props) {
  var marketData = props.marketData,
      resizeTimestamp = props.resizeTimestamp;

  if (!marketData) {
    return null;
  }

  var isAllocationChartsShown = !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(_allocations_queries__WEBPACK_IMPORTED_MODULE_8__["getRevenueExposure"](marketData));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].appFeatures.isRevenueExposureChartEnabled && isAllocationChartsShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_allocations_allocations__WEBPACK_IMPORTED_MODULE_7__["default"], {
    marketData: marketData,
    resizeTimestamp: resizeTimestamp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_financials_financials__WEBPACK_IMPORTED_MODULE_6__["default"], {
    marketData: marketData,
    resizeTimestamp: resizeTimestamp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/generalInfo/generalInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeneralInfo; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_layout_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/layout/constants.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_components_expandableText_expandableText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/expandableText/expandableText.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/productPage/generalInfo/queries.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\generalInfo\\generalInfo.js";












function GeneralInfo(_ref) {
  var _this = this;

  var marketData = _ref.marketData,
      instrument = _ref.instrument,
      componentId = _ref.componentId,
      isInset = _ref.isInset,
      dialogParent = _ref.dialogParent;

  var _queries$getInfoFromM = _queries__WEBPACK_IMPORTED_MODULE_11__["getInfoFromMarketData"](marketData, instrument),
      description = _queries$getInfoFromM.description,
      detailsItems = _queries$getInfoFromM.detailsItems;

  var getDetails = function getDetails(item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isVertical: true,
      key: item.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: item.key,
      "data-test-id": item.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(item.value) && item.value.Value ? item.value.Value : item.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "t-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('General_Information')))), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "product-page-general-info-text",
    isInset: isInset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_expandableText_expandableText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: description,
    "data-test-id": "product-page-general-info-showmore",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: src_frontend_blocks_layout_constants__WEBPACK_IMPORTED_MODULE_3__["WRAP"],
    "data-test-id": "product-page-general-info",
    isInset: isInset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(detailsItems, function (item) {
    return getDetails({
      key: item.key,
      value: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(item.value) ? item.value({
        instrument: instrument,
        componentId: componentId,
        dialogParent: dialogParent
      }) : item.value
    });
  })));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentChart/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_SERIES_DEFAULT_TIME_RANGE_DEFAULT", function() { return PRICE_SERIES_DEFAULT_TIME_RANGE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_SERIES_DEFAULT_TIME_RANGE_BOND", function() { return PRICE_SERIES_DEFAULT_TIME_RANGE_BOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_SERIES_DEFAULT_TIME_RANGE_INVESTOR", function() { return PRICE_SERIES_DEFAULT_TIME_RANGE_INVESTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROWTH_SERIES_DEFAULT_TIME_RANGE", function() { return GROWTH_SERIES_DEFAULT_TIME_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INV_PRICE_SERIES_RANGES_TO_EXCLUDE", function() { return INV_PRICE_SERIES_RANGES_TO_EXCLUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PGO_PRICE_SERIES_RANGES_TO_EXCLUDE", function() { return PGO_PRICE_SERIES_RANGES_TO_EXCLUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROWTH_SERIES_RANGES_TO_EXCLUDE", function() { return GROWTH_SERIES_RANGES_TO_EXCLUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGENDS_SECTION_PRICE", function() { return LEGENDS_SECTION_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGENDS_SECTION_PREV_CLOSE", function() { return LEGENDS_SECTION_PREV_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGENDS_SECTION_VOLUME", function() { return LEGENDS_SECTION_VOLUME; });
var PRICE_SERIES_DEFAULT_TIME_RANGE_DEFAULT = '1D';
var PRICE_SERIES_DEFAULT_TIME_RANGE_BOND = '6M';
var PRICE_SERIES_DEFAULT_TIME_RANGE_INVESTOR = 'YTD';
var GROWTH_SERIES_DEFAULT_TIME_RANGE = '1Y';
var INV_PRICE_SERIES_RANGES_TO_EXCLUDE = ['3M', '6M', '3Y', '5Y'];
var PGO_PRICE_SERIES_RANGES_TO_EXCLUDE = ['3M', '3Y'];
var GROWTH_SERIES_RANGES_TO_EXCLUDE = ['1D', '1W'];
var LEGENDS_SECTION_PRICE = 'price';
var LEGENDS_SECTION_PREV_CLOSE = 'prev-close';
var LEGENDS_SECTION_VOLUME = 'volume';

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentChart/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_modules_chart_sagas_chartDataSagaActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/chart/sagas/chartDataSagaActions.js");
/* harmony import */ var src_frontend_modules_chart_chartDataSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/chart/chartDataSelectors.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var _instrumentChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/productPage/instrumentChart/instrumentChart.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  var componentId = ownProps.componentId;
  return {
    dataSeriesType: src_frontend_modules_chart_chartDataSelectors__WEBPACK_IMPORTED_MODULE_2__["getDataSeriesType"](state, componentId),
    clientCurrency: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_3__["getClientCurrency"](state)
  };
};

var mapDispatchToProps = {
  onAddInstrumentToChart: src_frontend_modules_chart_sagas_chartDataSagaActions__WEBPACK_IMPORTED_MODULE_1__["addInstrumentToChart"],
  onRemoveInstrumentFromChart: src_frontend_modules_chart_sagas_chartDataSagaActions__WEBPACK_IMPORTED_MODULE_1__["removeInstrumentFromChart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_instrumentChart__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentChart/instrumentChart.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _saxo_openui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/openui/src/index.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/blocks/overflowable/overflowable.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_modules_chart_containers_singleInstrumentChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/chart/containers/singleInstrumentChart.js");
/* harmony import */ var src_frontend_modules_chart_chartInstrumentSubscriptions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/chart/chartInstrumentSubscriptions.js");
/* harmony import */ var src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/chart/services/timeRangeService.js");
/* harmony import */ var src_frontend_modules_chart_chartDataQueries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/chart/chartDataQueries.js");
/* harmony import */ var src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/modules/chart/constants.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_blocks_buttonGroup_buttonGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/blocks/buttonGroup/buttonGroup.js");
/* harmony import */ var src_frontend_blocks_buttonGroup_buttonGroupItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/blocks/buttonGroup/buttonGroupItem.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_utils_perfLog_constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/utils/perfLog/constants.js");
/* harmony import */ var src_frontend_blocks_matchMedia_matchMedia__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/blocks/matchMedia/matchMedia.js");
/* harmony import */ var src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/blocks/matchMedia/queries.js");
/* harmony import */ var _options_createOptions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/productPage/instrumentChart/options/createOptions.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/modules/productPage/instrumentChart/queries.js");




var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\instrumentChart\\instrumentChart.js";




























var isGrowthSeries = function isGrowthSeries(instrument) {
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].appFeatures.isGrowthSeriesChartEnabled && src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_25__["isEtfOrFund"](instrument);
};

var getDataSeriesType = function getDataSeriesType(instrument) {
  return isGrowthSeries(instrument) ? src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_20__["DATA_SERIES_GROWTH"] : src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_20__["DATA_SERIES_PRICE"];
};

var isRangeSupported = function isRangeSupported(instrument, timeRangeId) {
  var seriesType = getDataSeriesType(instrument);
  var supportedRanges = _queries__WEBPACK_IMPORTED_MODULE_30__["getFilteredRanges"](seriesType);
  return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.some(supportedRanges, {
    id: timeRangeId
  });
};

var InstrumentChart = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InstrumentChart, _React$Component);

  function InstrumentChart() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "getInitialTimeRangeId", function () {
      var isBond = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_25__["isBond"](_this.props.instrument);
      return _queries__WEBPACK_IMPORTED_MODULE_30__["getDefaultTimeRange"](getDataSeriesType(_this.props.instrument), isBond);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "getInitialTimeRangePeriod", function () {
      var seriesType = getDataSeriesType(_this.props.instrument);

      var timeRangeId = _this.getInitialTimeRangeId();

      return src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_18__["getTimeRange"](timeRangeId, seriesType);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "state", {
      timeRangeId: _this.getInitialTimeRangeId(),
      selectedTimeRangePeriod: _this.getInitialTimeRangePeriod(),
      // https://github.com/yannickcr/eslint-plugin-react/issues/1759
      // eslint-disable-next-line react/no-unused-state
      isTimeRangeChanged: false
    });

    return _this;
  }

  var _proto = InstrumentChart.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleAddInstrumentToChart();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        instrument = _this$props.instrument,
        onRemoveInstrumentFromChart = _this$props.onRemoveInstrumentFromChart;
    var _this$state = this.state,
        timeRangeId = _this$state.timeRangeId,
        period = _this$state.selectedTimeRangePeriod.period;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getId"](instrument);
    var prevInstrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getId"](prevProps.instrument);
    var prevPeriod = prevState.selectedTimeRangePeriod.period;
    var prevTimeRangeId = prevState.timeRangeId; // Instrument and TimeRange both are updated

    var hasBothChanged = prevTimeRangeId !== timeRangeId && instrument !== prevProps.instrument;
    var hasPrevInstrumentId = !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(prevInstrumentId);

    if (hasBothChanged) {
      if (hasPrevInstrumentId) {
        onRemoveInstrumentFromChart(componentId, prevInstrumentId, prevPeriod);
      }

      this.handleAddInstrumentToChart();
    } else if (prevTimeRangeId !== timeRangeId) {
      onRemoveInstrumentFromChart(componentId, instrumentId, prevPeriod);
      this.handleAddInstrumentToChart();
    } else if (instrument !== prevProps.instrument) {
      if (hasPrevInstrumentId) {
        onRemoveInstrumentFromChart(componentId, prevInstrumentId, period);
      }

      this.handleAddInstrumentToChart();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props2 = this.props,
        componentId = _this$props2.componentId,
        instrument = _this$props2.instrument,
        onRemoveInstrumentFromChart = _this$props2.onRemoveInstrumentFromChart;
    var period = this.state.selectedTimeRangePeriod.period;
    onRemoveInstrumentFromChart(componentId, src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getId"](instrument), period);
  };

  _proto.handleAddInstrumentToChart = function handleAddInstrumentToChart() {
    this.props.onAddInstrumentToChart({
      chartId: this.props.componentId,
      instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getId"](this.props.instrument),
      period: this.state.selectedTimeRangePeriod.period,
      immediate: true,
      dataSeriesType: getDataSeriesType(this.props.instrument),
      timeRange: this.state.selectedTimeRangePeriod.timeRange
    });
  };

  _proto.handleChartTimeRangeChange = function handleChartTimeRangeChange(newTimeRangeId) {
    var timeRangeId = this.state.timeRangeId;
    var dataSeriesType = this.props.dataSeriesType;

    if (timeRangeId !== newTimeRangeId) {
      var newTimeRangePeriod = src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_18__["getTimeRange"](newTimeRangeId, dataSeriesType);
      this.setState({
        timeRangeId: newTimeRangeId,
        selectedTimeRangePeriod: newTimeRangePeriod,
        // https://github.com/yannickcr/eslint-plugin-react/issues/1759
        // eslint-disable-next-line react/no-unused-state
        isTimeRangeChanged: true
      });

      if (this.props.onTimeRangeChange) {
        this.props.onTimeRangeChange(newTimeRangeId);
      }
    }
  };

  _proto.getLabel = function getLabel() {
    var _this$props3 = this.props,
        dataSeriesType = _this$props3.dataSeriesType,
        clientCurrency = _this$props3.clientCurrency;

    if (src_frontend_modules_chart_chartDataQueries__WEBPACK_IMPORTED_MODULE_19__["isGrowthSeries"](dataSeriesType)) {
      var formattedGrowthAmount = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_12__["format"](src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_20__["GROWTH_SERIES_AMOUNT"]);
      return src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_10__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_9__["default"].getText('Investor_GrowthCurrency{0}{1}'), formattedGrowthAmount, clientCurrency);
    }

    return src_frontend_localization__WEBPACK_IMPORTED_MODULE_9__["default"].getText('ProductPage_Investor_Price');
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        componentId = _this$props4.componentId,
        instrument = _this$props4.instrument,
        resizeTimestamp = _this$props4.resizeTimestamp,
        dataSeriesType = _this$props4.dataSeriesType;
    var _this$state2 = this.state,
        timeRangeId = _this$state2.timeRangeId,
        selectedTimeRangePeriod = _this$state2.selectedTimeRangePeriod;
    var isGrowthDataSeries = src_frontend_modules_chart_chartDataQueries__WEBPACK_IMPORTED_MODULE_19__["isGrowthSeries"](dataSeriesType);
    var chartClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'chart--growth-series': isGrowthDataSeries
    });
    var conditionalChartProps = {};

    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isInvestorApp || isGrowthDataSeries) {
      lodash__WEBPACK_IMPORTED_MODULE_4___default.a.assignIn(conditionalChartProps, {
        hideIndicativePricesText: true
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_matchMedia_matchMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }, function (_ref) {
      var breakpointName = _ref.breakpointName;
      var isAppSmall = src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_28__["isAppSmall"](breakpointName);
      var isInvestorTablet = src_frontend_config__WEBPACK_IMPORTED_MODULE_8__["default"].isInvestorApp && !_saxo_openui__WEBPACK_IMPORTED_MODULE_7__["detect"].os.desktop && !isAppSmall;

      if (isInvestorTablet || isAppSmall) {
        _options_createOptions__WEBPACK_IMPORTED_MODULE_29__["default"].cursorType = 'crosshair';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, isGrowthDataSeries && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "secondary",
        isCenter: true,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 37
        }
      }, _this2.getLabel())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        "data-test-id": "overview-time-ranges",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        resizeTimestamp: resizeTimestamp,
        isSliderButtonsHidden: true,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "t-center",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_buttonGroup_buttonGroup__WEBPACK_IMPORTED_MODULE_23__["default"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 41
        }
      }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(_queries__WEBPACK_IMPORTED_MODULE_30__["getFilteredRanges"](dataSeriesType), function (range) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_buttonGroup_buttonGroupItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
          "data-test-id": "button-group-item",
          key: range.id,
          isSelected: timeRangeId === range.id,
          onTap: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.partial(_this2.handleChartTimeRangeChange, range.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 53
          }
        }, range.text);
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "chart-container",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_modules_chart_containers_singleInstrumentChart__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        chartId: componentId,
        createOptions: _options_createOptions__WEBPACK_IMPORTED_MODULE_29__["default"],
        setupChartSubscriptions: Object(src_frontend_modules_chart_chartInstrumentSubscriptions__WEBPACK_IMPORTED_MODULE_17__["getSetupInstrumentSubscriptions"])(),
        resizeTimestamp: resizeTimestamp,
        instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getId"](instrument),
        selectedTimeRangePeriod: selectedTimeRangePeriod,
        className: chartClassName,
        logArea: src_frontend_utils_perfLog_constants__WEBPACK_IMPORTED_MODULE_26__["OVERVIEW_CHART_LOAD"]
      }, conditionalChartProps, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 37
        }
      })))));
    });
  };

  return InstrumentChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(InstrumentChart, "getDerivedStateFromProps", function (nextProps, state) {
  var isSupportedRange = isRangeSupported(nextProps.instrument, state.timeRangeId);

  if (isSupportedRange && state.isTimeRangeChanged) {
    return null;
  }

  var isBond = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_25__["isBond"](nextProps.instrument);
  var seriesType = getDataSeriesType(nextProps.instrument);
  var timeRangeId = _queries__WEBPACK_IMPORTED_MODULE_30__["getDefaultTimeRange"](seriesType, isBond);
  return {
    timeRangeId: timeRangeId,
    selectedTimeRangePeriod: src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_18__["getTimeRange"](timeRangeId, seriesType)
  };
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_11__["bindHandlers"])(InstrumentChart));

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentChart/options/createOptions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_modules_chart_options_chartCreationOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/chart/options/chartCreationOptions.js");




var appCursorType = function appCursorType() {
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isDesktopApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isProApp ? 'trackball' : 'crosshair';
};

/* harmony default export */ __webpack_exports__["default"] = (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
  interactions: {
    canZoom: false,
    canPan: false,
    canDragXAxis: false,
    canDragYAxis: false
  },
  selectable: false,
  showPriceLines: !src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp,
  showCrosshair: !src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp,
  paddingInPercent: 0,
  showBreadcrumbs: false,
  defaultPlotType: 'line',
  isInteractive: false,
  cursorType: src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp ? 'trackball' : appCursorType()
}, Object(src_frontend_modules_chart_options_chartCreationOptions__WEBPACK_IMPORTED_MODULE_2__["baseOptions"])()));

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentChart/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldExcludeYTD", function() { return shouldExcludeYTD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredRanges", function() { return getFilteredRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTimeRange", function() { return getDefaultTimeRange; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/chart/services/timeRangeService.js");
/* harmony import */ var src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/chart/constants.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/productPage/instrumentChart/constants.js");





var shouldExcludeYTD = function shouldExcludeYTD(dataSeriesType) {
  // For growth series 1D and 1W are not supported, so has to be >1M (Feb) to plot YTD
  var isFirstMonthOfTheYear = new Date().getMonth() === 0;
  return dataSeriesType === src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_2__["DATA_SERIES_GROWTH"] && isFirstMonthOfTheYear;
};

var getRangesToExclude = function getRangesToExclude(dataSeriesType) {
  if (dataSeriesType === src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_2__["DATA_SERIES_GROWTH"]) {
    if (shouldExcludeYTD(dataSeriesType)) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat(_constants__WEBPACK_IMPORTED_MODULE_4__["GROWTH_SERIES_RANGES_TO_EXCLUDE"], 'YTD');
    }

    return _constants__WEBPACK_IMPORTED_MODULE_4__["GROWTH_SERIES_RANGES_TO_EXCLUDE"];
  }

  var excludedPriceSeriesRanges = [];

  if (src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].isInvestorApp) {
    excludedPriceSeriesRanges = _constants__WEBPACK_IMPORTED_MODULE_4__["INV_PRICE_SERIES_RANGES_TO_EXCLUDE"];
  }

  if (src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].isPhoneApp) {
    excludedPriceSeriesRanges = _constants__WEBPACK_IMPORTED_MODULE_4__["PGO_PRICE_SERIES_RANGES_TO_EXCLUDE"];
  }

  return excludedPriceSeriesRanges;
};

var getFilteredRanges = function getFilteredRanges(dataSeriesType) {
  return src_frontend_modules_chart_services_timeRangeService__WEBPACK_IMPORTED_MODULE_1__["getFilteredRanges"](getRangesToExclude(dataSeriesType), dataSeriesType);
};

var getDefaultTimeRangeForGo = function getDefaultTimeRangeForGo(isBond) {
  return isBond ? _constants__WEBPACK_IMPORTED_MODULE_4__["PRICE_SERIES_DEFAULT_TIME_RANGE_BOND"] : _constants__WEBPACK_IMPORTED_MODULE_4__["PRICE_SERIES_DEFAULT_TIME_RANGE_DEFAULT"];
};

var getDefaultTimeRange = function getDefaultTimeRange(dataSeriesType, isBond) {
  if (dataSeriesType === src_frontend_modules_chart_constants__WEBPACK_IMPORTED_MODULE_2__["DATA_SERIES_GROWTH"]) {
    return _constants__WEBPACK_IMPORTED_MODULE_4__["GROWTH_SERIES_DEFAULT_TIME_RANGE"];
  }

  return src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].isInvestorApp ? _constants__WEBPACK_IMPORTED_MODULE_4__["PRICE_SERIES_DEFAULT_TIME_RANGE_INVESTOR"] : getDefaultTimeRangeForGo(isBond);
};

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentInfo/instrumentInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_atoms_flag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/atoms/flag/index.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/currencies/queries.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/sizes.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\instrumentInfo\\instrumentInfo.js";







function InstrumentInfo(props) {
  var showSecondaryInfo = props.showSecondaryInfo,
      instrument = props.instrument;
  var secondaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getSecondaryName"](instrument);
  var currency = src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_4__["getCurrencyLabel"](instrument);
  var countryCode = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getCountryCode"](instrument);
  var secondaryInfo = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_3__["getInstrumentSecondaryInfo"](instrument, null, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "t-center",
    "data-test-id": props['data-test-id'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_atoms_flag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    countryIsoCode: countryCode,
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_5__["SMALL"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), secondaryName, " ", currency && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u2022 ", currency), showSecondaryInfo && secondaryInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " \u2022 ", secondaryInfo));
}

/* harmony default export */ __webpack_exports__["default"] = (InstrumentInfo);

/***/ }),

/***/ "./src/frontend/modules/productPage/instrumentName/instrumentName.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/components/productIcon/productIcon.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sizes.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\instrumentName\\instrumentName.js";










var InstrumentName = function InstrumentName(props) {
  var instrument = props.instrument;
  var dataTestId = props['data-test-id'];
  var name = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_4__["getName"](instrument);
  var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_5__["getAssetType"](instrument);
  var displayHint = instrument.DisplayHint;
  var tooltip = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_6__["getAssetTypeName"](instrument, {
    tooltip: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "t-center",
    "data-test-id": dataTestId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    "data-test-id": "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    assetType: assetType,
    displayHint: displayHint,
    title: tooltip,
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_7__["LARGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), ' ', name));
};

/* harmony default export */ __webpack_exports__["default"] = (InstrumentName);

/***/ }),

/***/ "./src/frontend/modules/productPage/issueDetails/issueDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueDetails; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/emptyValue/emptyValue.js");
/* harmony import */ var src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/layout/layout.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/details/details.js");
/* harmony import */ var src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/details/detailsItem.js");
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/matchMedia/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_frontend_models_pricesSubscription_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/pricesSubscription/types.js");
/* harmony import */ var src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/blocks/matchMedia/matchMediaContext.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/productPage/issueDetails/queries.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\issueDetails\\issueDetails.js";















function IssueDetails(_ref) {
  var _this = this;

  var marketData = _ref.marketData,
      instrument = _ref.instrument,
      price = _ref.price,
      priceSourceName = _ref.priceSourceName;

  var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_emptyValue_emptyValue__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 52
    }
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_13__["default"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, function (_ref2) {
    var breakpointName = _ref2.breakpointName;
    var details = _queries__WEBPACK_IMPORTED_MODULE_14__["getDetailsFromMarketData"](marketData, instrument, price, priceSourceName);

    var detailsItems = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(details);

    var getDetailsItem = function getDetailsItem(item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_detailsItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: item.key,
        label: item.key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, item.value ? item.value : _ref3);
    };

    var isNarrow = src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_10__["isNarrow"](breakpointName);
    var detailsSections = isNarrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(detailsItems, getDetailsItem)) : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(details, function (column, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_details_details__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(column, getDetailsItem));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "stretch",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "t-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "secondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('IssueDetails')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "stretch",
      "data-test-id": "product-page-issue-details",
      isInset: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, detailsSections));
  });
}

/***/ }),

/***/ "./src/frontend/modules/productPage/marketDepth/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/settings/actions/userSettingsActions.js");
/* harmony import */ var src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/settings/userSettingKeys.js");
/* harmony import */ var src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/settings/selectors/settingsSelectors.js");
/* harmony import */ var _marketDepth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/productPage/marketDepth/marketDepth.js");







var mapStateToProps = function mapStateToProps(state) {
  var globalSettings = src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_4__["getUserSetting"](state, src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]);

  var userSettings = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({}, globalSettings);

  var isMarketDepthExpanded = userSettings.isMarketDepthExpanded,
      isMarketDepthExpandedMore = userSettings.isMarketDepthExpandedMore;
  return {
    isMarketDepthExpanded: isMarketDepthExpanded,
    isMarketDepthExpandedMore: isMarketDepthExpandedMore
  };
};

var mapDispatchToProps = {
  onSetUserSetting: src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_2__["setUserSetting"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_marketDepth__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/marketDepth/marketDepth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_pricesSubscription_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/pricesSubscription/types.js");
/* harmony import */ var src_frontend_components_marketDepth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/marketDepth/index.js");
/* harmony import */ var src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/settings/userSettingKeys.js");




var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\marketDepth\\marketDepth.js";









var ProductPageMarketDepth = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ProductPageMarketDepth, _React$Component);

  function ProductPageMarketDepth() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProductPageMarketDepth.prototype;

  _proto.handleIsExpanded = function handleIsExpanded(isExpandedKey, isExpandedValue) {
    var onSetUserSetting = this.props.onSetUserSetting;
    onSetUserSetting(isExpandedKey, isExpandedValue);
  };

  _proto.handleSetMarketDepthIsExpanded = function handleSetMarketDepthIsExpanded(isExpanded) {
    this.handleIsExpanded(src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_11__["ProductPageIsMarketDepthExpanded"], isExpanded);
  };

  _proto.handleSetMarketDepthIsExpandedMore = function handleSetMarketDepthIsExpandedMore(isExpandedMore) {
    this.handleIsExpanded(src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_11__["ProductPageIsMarketDepthExpandedMore"], isExpandedMore);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isMarketDepthExpanded = _this$props.isMarketDepthExpanded,
        isMarketDepthExpandedMore = _this$props.isMarketDepthExpandedMore,
        onSetUserSetting = _this$props.onSetUserSetting,
        marketDepthProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["isMarketDepthExpanded", "isMarketDepthExpandedMore", "onSetUserSetting"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_marketDepth__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, marketDepthProps, {
      dataTestId: "product-page-market-depth",
      isSlim: true,
      isOverviewMode: true,
      isControlsVisible: true,
      onSetIsExpanded: this.handleSetMarketDepthIsExpanded,
      onSetIsExpandedMore: this.handleSetMarketDepthIsExpandedMore,
      isExpanded: isMarketDepthExpanded,
      isExpandedMore: isMarketDepthExpandedMore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }));
  };

  return ProductPageMarketDepth;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ProductPageMarketDepth, "defaultProps", {
  isMarketDepthExpanded: true,
  isMarketDepthExpandedMore: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(ProductPageMarketDepth));

/***/ }),

/***/ "./src/frontend/modules/productPage/overview/allocations/allocations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/allocationChart/constants.js");
/* harmony import */ var src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/allocationChart/allocationChart.js");
/* harmony import */ var src_frontend_components_allocationChart_allocationChartsGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/allocationChart/allocationChartsGroup.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/productPage/overview/allocations/queries.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\overview\\allocations\\allocations.js";









var Allocations = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Allocations, _React$PureComponent);

  function Allocations() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Allocations.prototype;

  _proto.getAllocationCharts = function getAllocationCharts() {
    var _this$props = this.props,
        resizeTimestamp = _this$props.resizeTimestamp,
        marketData = _this$props.marketData;
    var sectorAllocationChartData = _queries__WEBPACK_IMPORTED_MODULE_8__["getSectorAllocationChartData"](marketData);
    var assetAllocationChartData = _queries__WEBPACK_IMPORTED_MODULE_8__["getAssetAllocationChartData"](marketData);
    var countryWeightAllocationChartData = _queries__WEBPACK_IMPORTED_MODULE_8__["getCountryWeightAllocationChartData"](marketData);
    var sectorAllocationChart = !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(sectorAllocationChartData) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "sector-allocation-chart",
      resizeTimestamp: resizeTimestamp,
      data: sectorAllocationChartData,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Sector_Allocation'),
      valueType: src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT"],
      isPercentageValueRatio: false,
      "data-test-id": "sector-allocation-chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    });
    var assetAllocationChart = !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(assetAllocationChartData) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "asset-allocation-chart",
      resizeTimestamp: resizeTimestamp,
      data: assetAllocationChartData,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Asset_Allocation'),
      valueType: src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT"],
      isPercentageValueRatio: false,
      "data-test-id": "asset-allocation-chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    });
    var countryWeightAllocationChart = !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(countryWeightAllocationChartData) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "country-weight-allocation-chart",
      resizeTimestamp: resizeTimestamp,
      data: countryWeightAllocationChartData,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Country_Weight_Allocation'),
      valueType: src_frontend_components_allocationChart_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT"],
      isPercentageValueRatio: false,
      "data-test-id": "country-weight-allocation-chart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    });
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact([assetAllocationChart, countryWeightAllocationChart, sectorAllocationChart]);
  };

  _proto.render = function render() {
    var resizeTimestamp = this.props.resizeTimestamp;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_allocationChart_allocationChartsGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resizeTimestamp: resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, this.getAllocationCharts());
  };

  return Allocations;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Allocations);

/***/ }),

/***/ "./src/frontend/modules/productPage/overview/allocations/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectorAllocationChartData", function() { return getSectorAllocationChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetAllocationChartData", function() { return getAssetAllocationChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryWeightAllocationChartData", function() { return getCountryWeightAllocationChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAllocationsData", function() { return hasAllocationsData; });
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/marketDataModel/queries.js");
/* harmony import */ var src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/marketDataModel/fieldGroups/fieldGroups.js");
/* harmony import */ var src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/allocationChart/queries.js");




var getSectorAllocationChartData = function getSectorAllocationChartData(marketData) {
  var sectorAllocationData = src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_1__["getDataByFieldGroup"](marketData, src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__["SECTOR_ALLOCATIONS"]);
  return src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_3__["filterAllocationChartData"](sectorAllocationData);
};
var getAssetAllocationChartData = function getAssetAllocationChartData(marketData) {
  var assetAllocationData = src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_1__["getDataByFieldGroup"](marketData, src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__["ASSET_ALLOCATIONS"]);
  return src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_3__["filterAllocationChartData"](assetAllocationData);
};
var getCountryWeightAllocationChartData = function getCountryWeightAllocationChartData(marketData) {
  var countryWeightAllocationData = src_frontend_models_marketDataModel_queries__WEBPACK_IMPORTED_MODULE_1__["getDataByFieldGroup"](marketData, src_frontend_models_marketDataModel_fieldGroups_fieldGroups__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_WEIGHT_ALLOCATIONS"]);
  return src_frontend_components_allocationChart_queries__WEBPACK_IMPORTED_MODULE_3__["filterAllocationChartData"](countryWeightAllocationData);
};
var hasAllocationsData = function hasAllocationsData(instrument, marketData) {
  return src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_0__["isEtfOrFund"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_0__["isSrdEtf"](instrument) || getSectorAllocationChartData(marketData) || getAssetAllocationChartData(marketData) || getCountryWeightAllocationChartData(marketData);
};

/***/ }),

/***/ "./src/frontend/modules/productPage/overview/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_tradeSignals_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/tradeSignals/selectors.js");
/* harmony import */ var src_frontend_models_platformConfiguration_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/platformConfiguration/selectors.js");
/* harmony import */ var src_frontend_models_linkedInstrument_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/linkedInstrument/selectors.js");
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/productPage/overview/overview.js");








var mapStateToProps = function mapStateToProps() {
  var getComponentVisibleChildren = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__["createGetComponentVisibleChildren"]();
  return function (state, ownProps) {
    var userSettings = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__["getComponentUserSettings"](state, ownProps.componentId);
    var linkedInstrumentKey = src_frontend_models_linkedInstrument_selectors__WEBPACK_IMPORTED_MODULE_5__["getLinkedInstrumentKey"](state, userSettings.linkingChannel);
    var userSettingsInstrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_2__["getKeyFromId"](userSettings.instrumentId); // this logic is simplistic, but purposefully so in order to match the
    // equivalent in the onActivate saga

    var selectedInstrumentKey = userSettingsInstrumentKey || linkedInstrumentKey;
    return {
      isTradeSignalsAllowed: Object(src_frontend_models_tradeSignals_selectors__WEBPACK_IMPORTED_MODULE_3__["tradeSignalsAllowedSelector"])(state),
      componentVisibleChildren: getComponentVisibleChildren(state, ownProps.componentId),
      mappedSections: src_frontend_models_platformConfiguration_selectors__WEBPACK_IMPORTED_MODULE_4__["getMappedSectionsForComponent"](state, selectedInstrumentKey)
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, null)(_overview__WEBPACK_IMPORTED_MODULE_6__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/overview/overview.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overview; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_components_instrumentTradeSignals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/instrumentTradeSignals/index.js");
/* harmony import */ var src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/workspace/childComponent/container.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/resizable/resizable.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_pricesSubscription_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/pricesSubscription/types.js");
/* harmony import */ var src_frontend_models_marketDataModel_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/marketDataModel/types.js");
/* harmony import */ var src_frontend_models_platformConfiguration_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/platformConfiguration/types.js");
/* harmony import */ var _instrumentChart_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/productPage/instrumentChart/container.js");
/* harmony import */ var _productPageNews_productPageNews_lazy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/productPage/productPageNews/productPageNews.lazy.js");
/* harmony import */ var _productPageTradeSignal_productPageTradeSignal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/productPage/productPageTradeSignal/productPageTradeSignal.js");
/* harmony import */ var _generalInfo_generalInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/productPage/generalInfo/generalInfo.js");
/* harmony import */ var _issueDetails_issueDetails__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/productPage/issueDetails/issueDetails.js");
/* harmony import */ var _marketDepth_container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/productPage/marketDepth/container.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/modules/productPage/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/modules/productPage/constants.js");
/* harmony import */ var _allocations_allocations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/modules/productPage/overview/allocations/allocations.js");
/* harmony import */ var _allocations_queries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/modules/productPage/overview/allocations/queries.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\overview\\overview.js";
























var Overview = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Overview, _React$PureComponent);

  function Overview() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Overview.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        componentId = _this$props.componentId,
        instrument = _this$props.instrument,
        marketData = _this$props.marketData,
        resizeTimestamp = _this$props.resizeTimestamp,
        isTradeSignalsAllowed = _this$props.isTradeSignalsAllowed,
        account = _this$props.account,
        price = _this$props.price,
        selectedTimeRangeId = _this$props.selectedTimeRangeId,
        componentVisibleChildren = _this$props.componentVisibleChildren,
        mappedSections = _this$props.mappedSections,
        onTimeRangeChange = _this$props.onTimeRangeChange,
        dialogParent = _this$props.dialogParent,
        priceSourceName = _this$props.priceSourceName;
    var chartId = _queries__WEBPACK_IMPORTED_MODULE_20__["getChartId"](componentId);
    var showNews = _queries__WEBPACK_IMPORTED_MODULE_20__["showNews"](instrument);
    var showMarketDepth = _queries__WEBPACK_IMPORTED_MODULE_20__["showMarketDepth"](price, instrument);
    var showIssueDetails = _queries__WEBPACK_IMPORTED_MODULE_20__["showIssueDetails"](instrument, marketData);
    var showGeneralInfo = _queries__WEBPACK_IMPORTED_MODULE_20__["showGeneralInfo"](instrument) && _queries__WEBPACK_IMPORTED_MODULE_20__["hasGeneralInfoData"](marketData);
    var isAllocationChartsShown = _allocations_queries__WEBPACK_IMPORTED_MODULE_23__["hasAllocationsData"](instrument, marketData);
    var showInstrumentTradeSignal = isTradeSignalsAllowed && !src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].isInvestorApp && !src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isShowProductPageTradeSignalSection;
    var showTradeSignalsGridSection = isTradeSignalsAllowed && src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.isShowProductPageTradeSignalSection && !src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].isInvestorApp;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, showMarketDepth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_marketDepth_container__WEBPACK_IMPORTED_MODULE_19__["default"], {
      resizeTimestamp: resizeTimestamp,
      featureArea: _constants__WEBPACK_IMPORTED_MODULE_21__["FEATURE_AREA"],
      instrument: instrument,
      account: account,
      price: price,
      componentId: componentId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_instrumentChart_container__WEBPACK_IMPORTED_MODULE_14__["default"], {
      componentId: chartId,
      instrument: instrument,
      resizeTimestamp: resizeTimestamp,
      selectedTimeRangeId: selectedTimeRangeId,
      onTimeRangeChange: onTimeRangeChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }), showTradeSignalsGridSection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_productPageTradeSignal_productPageTradeSignal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      componentVisibleChildren: componentVisibleChildren,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 29
      }
    }))), showInstrumentTradeSignal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resizeTimestamp: resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, function (_ref) {
      var parentViewport = _ref.parentViewport;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_instrumentTradeSignals__WEBPACK_IMPORTED_MODULE_3__["default"], {
        componentId: componentId,
        instrument: instrument,
        parentViewport: parentViewport,
        isActive: true,
        showHeader: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 29
        }
      });
    }), showNews && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_productPageNews_productPageNews_lazy__WEBPACK_IMPORTED_MODULE_15__["default"], {
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      componentVisibleChildren: componentVisibleChildren,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }))), showGeneralInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_generalInfo_generalInfo__WEBPACK_IMPORTED_MODULE_17__["default"], {
      componentId: componentId,
      marketData: marketData,
      instrument: instrument,
      isInset: !src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].isInvestorApp,
      dialogParent: dialogParent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 25
      }
    })), isAllocationChartsShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_allocations_allocations__WEBPACK_IMPORTED_MODULE_22__["default"], {
      marketData: marketData,
      resizeTimestamp: resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    }))), showIssueDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_issueDetails_issueDetails__WEBPACK_IMPORTED_MODULE_18__["default"], {
      instrument: instrument,
      marketData: marketData,
      price: price,
      priceSourceName: priceSourceName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 29
      }
    }))), lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(mappedSections.Sections, function (section) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: section.Id,
        childRef: section.Id,
        parentId: componentId,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }
      });
    }));
  };

  return Overview;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./src/frontend/modules/productPage/productPage.default.js":
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
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/layout/layout.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_components_marketStatusBar_marketStatusBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/marketStatusBar/marketStatusBar.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_components_noInstrumentMessage_noInstrumentMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/noInstrumentMessage/noInstrumentMessage.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_tabs_tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/blocks/tabs/tab.js");
/* harmony import */ var src_frontend_blocks_tabs_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/blocks/tabs/tabs.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/atoms/toolbar/index.js");
/* harmony import */ var src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/blocks/scrollable/scrollable.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_components_priceBar_priceBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/components/priceBar/priceBar.js");
/* harmony import */ var src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/blocks/overflowable/overflowable.js");
/* harmony import */ var src_frontend_components_dropTarget_container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/components/dropTarget/container.js");
/* harmony import */ var src_frontend_models_drag_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/models/drag/constants.js");
/* harmony import */ var src_frontend_models_drag_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/models/drag/types.js");
/* harmony import */ var src_frontend_models_drag_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_drag_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var src_frontend_blocks_matchMedia_resizeableMatchMediaContextProvider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/blocks/matchMedia/resizeableMatchMediaContextProvider.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/modules/productPage/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/productPage/queries.js");
/* harmony import */ var _overview_container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/modules/productPage/overview/container.js");
/* harmony import */ var _fundamentals_fundamentals__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/modules/productPage/fundamentals/fundamentals.js");
/* harmony import */ var _analysis_analysis_app___WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/frontend/modules/productPage/analysis/analysis.default.js");
/* harmony import */ var _productPageToolbar_container__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/container.js");
/* harmony import */ var _productPageToolbar_instrumentInput_instrumentInput__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/instrumentInput/instrumentInput.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPage.default.js";

































var ProductPage = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ProductPage, _React$PureComponent);

  function ProductPage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      focusTimestamp: Date.now()
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "parentRef", react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef());

    return _this;
  }

  var _proto = ProductPage.prototype;

  _proto.handleTabChange = function handleTabChange(tabId) {
    var _this$props = this.props,
        selectedSectionId = _this$props.selectedSectionId,
        onTabChange = _this$props.onTabChange;

    if (tabId !== selectedSectionId) {
      onTabChange(tabId);
    }
  };

  _proto.getTabs = function getTabs(showFundamentals, showAnalysis) {
    var selectedSectionId = this.props.selectedSectionId;
    var tabList = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_tabs_tab__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: "tab-summary",
      "data-test-id": "tab-overview",
      id: _constants__WEBPACK_IMPORTED_MODULE_28__["OVERVIEW_TAB"],
      isActive: selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["OVERVIEW_TAB"],
      onSelect: this.handleTabChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__["default"].getText('ProductPage_Summary'))];

    if (showAnalysis) {
      tabList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_tabs_tab__WEBPACK_IMPORTED_MODULE_15__["default"], {
        key: "tab-analysis",
        "data-test-id": "tab-analysis",
        id: _constants__WEBPACK_IMPORTED_MODULE_28__["ANALYSIS_TAB"],
        isActive: selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["ANALYSIS_TAB"],
        onSelect: this.handleTabChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__["default"].getText('ProductPage_Analysis')));
    }

    if (showFundamentals) {
      tabList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_tabs_tab__WEBPACK_IMPORTED_MODULE_15__["default"], {
        key: "tab-fundamentals",
        "data-test-id": "tab-fundamentals",
        id: _constants__WEBPACK_IMPORTED_MODULE_28__["FUNDAMENTALS_TAB"],
        isActive: selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["FUNDAMENTALS_TAB"],
        onSelect: this.handleTabChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__["default"].getText('ProductPage_Fundamentals')));
    }

    return tabList;
  };

  _proto.getPageContent = function getPageContent() {
    var _this$props2 = this.props,
        componentId = _this$props2.componentId,
        instrumentId = _this$props2.instrumentId,
        isTradeTicketHeader = _this$props2.isTradeTicketHeader,
        selectedSectionId = _this$props2.selectedSectionId,
        theme = _this$props2.theme,
        instrument = _this$props2.instrument,
        price = _this$props2.price,
        priceSourceName = _this$props2.priceSourceName,
        account = _this$props2.account,
        marketData = _this$props2.marketData,
        resizeTimestamp = _this$props2.resizeTimestamp,
        onInstrumentChange = _this$props2.onInstrumentChange,
        onTimeRangeChange = _this$props2.onTimeRangeChange,
        selectedTimeRangeId = _this$props2.selectedTimeRangeId,
        isPageError = _this$props2.isPageError,
        isMarketDataPending = _this$props2.isMarketDataPending,
        isLoading = _this$props2.isLoading;
    var showMarketStatusBar = _queries__WEBPACK_IMPORTED_MODULE_29__["showMarketStatusBar"](instrument);
    var showFundamentals = _queries__WEBPACK_IMPORTED_MODULE_29__["showFinancials"](instrument) && _queries__WEBPACK_IMPORTED_MODULE_29__["hasFinancialsData"](marketData);
    var showAnalysis = _queries__WEBPACK_IMPORTED_MODULE_29__["showAnalysis"](instrument, marketData);
    var tabs = this.getTabs(showFundamentals, showAnalysis);
    var isSingleTab = tabs.length === 1;
    var isError = isPageError;
    var isReady = !isMarketDataPending && !isError && !isLoading;
    var content = null;

    if (isError) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isCover: true,
        message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__["default"].getText('Data_Load_Error'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }
      }));
    } else if (!isReady) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isVisible: true,
        isSubtle: true,
        isTransparent: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }
      }));
    } else if (isReady) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_matchMedia_resizeableMatchMediaContextProvider__WEBPACK_IMPORTED_MODULE_26__["default"], {
        resizeTimestamp: resizeTimestamp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_productPageToolbar_container__WEBPACK_IMPORTED_MODULE_33__["default"], {
        componentId: componentId,
        isTradeTicketHeader: isTradeTicketHeader,
        instrumentId: instrumentId,
        instrument: instrument,
        resizeTimestamp: Date.now(),
        onInstrumentChange: onInstrumentChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isFlushTop: !src_frontend_config__WEBPACK_IMPORTED_MODULE_20__["default"].isPhoneApp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_components_priceBar_priceBar__WEBPACK_IMPORTED_MODULE_21__["default"], {
        price: price,
        instrument: instrument,
        marketData: marketData,
        resizeTimestamp: Date.now(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 29
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isFlushTop: true,
        isInset: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, showMarketStatusBar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_components_marketStatusBar_marketStatusBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        price: price,
        account: account,
        instrument: instrument,
        priceSourceName: priceSourceName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 33
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 25
        }
      }, !isSingleTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_22__["default"], {
        resizeTimestamp: resizeTimestamp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "t-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_tabs_tabs__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 41
        }
      }, tabs)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 25
        }
      }, selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["OVERVIEW_TAB"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_overview_container__WEBPACK_IMPORTED_MODULE_30__["default"], {
        componentId: componentId,
        instrument: instrument,
        account: account,
        price: price,
        marketData: marketData,
        resizeTimestamp: resizeTimestamp,
        selectedTimeRangeId: selectedTimeRangeId,
        onTimeRangeChange: onTimeRangeChange,
        dialogParent: this.parentRef.current,
        priceSourceName: priceSourceName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 33
        }
      }), showAnalysis && selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["ANALYSIS_TAB"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_analysis_analysis_app___WEBPACK_IMPORTED_MODULE_32__["default"], {
        componentId: componentId,
        resizeTimestamp: resizeTimestamp,
        instrument: instrument,
        marketData: marketData,
        price: price,
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 37
        }
      }), showFundamentals && selectedSectionId === _constants__WEBPACK_IMPORTED_MODULE_28__["FUNDAMENTALS_TAB"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fundamentals_fundamentals__WEBPACK_IMPORTED_MODULE_31__["default"], {
        marketData: marketData,
        resizeTimestamp: resizeTimestamp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 37
        }
      }))));
    }

    return content;
  };

  _proto.getFindInstrumentContent = function getFindInstrumentContent() {
    var focusTimestamp = this.state.focusTimestamp;
    var _this$props3 = this.props,
        componentId = _this$props3.componentId,
        onInstrumentChange = _this$props3.onInstrumentChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid grid--y grid--fit-fill",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_18__["Toolbar"], {
      "data-test-id": "product-page-toolbar",
      isFill: true,
      isInset: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_18__["ToolbarItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_productPageToolbar_instrumentInput_instrumentInput__WEBPACK_IMPORTED_MODULE_34__["default"], {
      componentId: componentId,
      focusTimestamp: focusTimestamp,
      onInstrumentChange: onInstrumentChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_components_noInstrumentMessage_noInstrumentMessage__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    })));
  };

  _proto.showFindInstrument = function showFindInstrument() {
    var instrument = this.props.instrument;
    return src_frontend_config__WEBPACK_IMPORTED_MODULE_20__["default"].isProApp && !instrument;
  };

  _proto.handleDrop = function handleDrop(componentId, payload) {
    if (payload.data.instrument) {
      this.props.onInstrumentChange(payload.data.instrument);
    }
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        isSheet = _this$props4.isSheet,
        componentId = _this$props4.componentId;
    var productPageContent = null;

    if (this.showFindInstrument()) {
      productPageContent = this.getFindInstrumentContent();
    } else {
      productPageContent = isSheet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "grid grid--y",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "grid-cell g--fit",
        "data-test-id": "product-overview-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_17__["default"].getText('ProductOverview')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "grid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "grid-cell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "tst-product-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 33
        }
      }, this.getPageContent()))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "tst-product-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }
      }, this.getPageContent()));
    }

    productPageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "grid",
      ref: this.parentRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 13
      }
    }, productPageContent);
    return src_frontend_config__WEBPACK_IMPORTED_MODULE_20__["default"].appFeatures.isNewDraggingStrategyEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(src_frontend_components_dropTarget_container__WEBPACK_IMPORTED_MODULE_23__["default"], {
      acceptableDataTypes: [src_frontend_models_drag_constants__WEBPACK_IMPORTED_MODULE_24__["INSTRUMENTS"]],
      componentId: componentId,
      onDrop: this.handleDrop,
      isGrid: true,
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_27__["PRODUCT_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 13
      }
    }, productPageContent) : productPageContent;
  };

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ProductPage, "defaultProps", {
  resizeTimestamp: 0,
  selectedSectionId: _constants__WEBPACK_IMPORTED_MODULE_28__["OVERVIEW_TAB"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_14__["bindHandlers"])(ProductPage));

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageNews/productPageNews.lazy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyProductPageNews; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageNews\\productPageNews.lazy.js";

var LazyContainer = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](function () {
  if (false) {}

  return __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "./src/frontend/modules/productPage/productPageNews/productPageNews.default.js"));
});
function LazyProductPageNews(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LazyContainer, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_modules_alertsDialog_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/alertsDialog/actions.js");
/* harmony import */ var src_frontend_modules_tradingConditionsDialog_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/tradingConditionsDialog/actions.js");
/* harmony import */ var src_frontend_modules_proTradeTicket_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/proTradeTicket/actions.js");
/* harmony import */ var src_frontend_models_favoriteInstruments_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/favoriteInstruments/actions.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var _productPageToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/productPageToolbar.js");









var mapStateToProps = function mapStateToProps() {
  var getRelatedDataById = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_6__["createGetRelatedDataById"]();
  return function (state, props) {
    var instrument = props.instrument;
    var accountId = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_5__["getDefaultAccountIdForInstrument"](state, instrument);
    var relatedInstruments = getRelatedDataById(state, instrument.id);
    var isInstrumentPreferred = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_6__["isPreferred"](state, instrument.AssetType);
    var accounts = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_5__["getAccounts"](state);
    return {
      accountId: accountId,
      accounts: accounts,
      relatedInstruments: relatedInstruments,
      isInstrumentPreferred: isInstrumentPreferred
    };
  };
};

var mapDispatchToProps = {
  onAddAlert: src_frontend_modules_alertsDialog_actions__WEBPACK_IMPORTED_MODULE_1__["showAlertsDialog"],
  onLaunchTradeTicket: src_frontend_modules_proTradeTicket_actions__WEBPACK_IMPORTED_MODULE_3__["triggerLaunchTicket"],
  onTradingConditionShow: src_frontend_modules_tradingConditionsDialog_actions__WEBPACK_IMPORTED_MODULE_2__["launchTradingConditionsDialog"],
  onFavoriteToggle: src_frontend_models_favoriteInstruments_actions__WEBPACK_IMPORTED_MODULE_4__["toggleFavorite"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_productPageToolbar__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/instrumentInput/instrumentInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstrumentInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_components_instrumentsSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/components/instrumentsSearch/index.js");
/* harmony import */ var src_frontend_components_instrument_instrumentDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/instrument/instrumentDescription.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_components_instrument_instrumentSecondaryInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/instrument/instrumentSecondaryInfo.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageToolbar\\instrumentInput\\instrumentInput.js";






function InstrumentInput(_ref) {
  var componentId = _ref.componentId,
      instrument = _ref.instrument,
      focusTimestamp = _ref.focusTimestamp,
      onInstrumentChange = _ref.onInstrumentChange;
  var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_3__["getKey"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid grid--fit-all grid--series grid--cross-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid-cell g--fit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_instrumentsSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isShowInstrument: true,
    isIncludeNonTradable: true,
    focusTimestamp: focusTimestamp,
    componentId: componentId,
    selectedInstrumentKey: instrumentKey,
    isShowNotAllowedInstruments: true,
    onInstrumentSelected: onInstrumentChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })), instrument && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_instrument_instrumentDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    instrument: instrument,
    isBold: false,
    showCurrency: true,
    showFlag: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_instrument_instrumentSecondaryInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    instrument: instrument,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })));
}

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/productPageNarrowToolbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_components_router_backButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/router/backButton/index.js");
/* harmony import */ var src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/overflowable/overflowable.js");
/* harmony import */ var src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/toolbar/index.js");
/* harmony import */ var src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/atoms/titleBar/index.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var _instrumentInfo_instrumentInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/productPage/instrumentInfo/instrumentInfo.js");
/* harmony import */ var _instrumentName_instrumentName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/productPage/instrumentName/instrumentName.js");
/* harmony import */ var _actionBar_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/productPage/actionBar/container.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageToolbar\\productPageNarrowToolbar.js";














var ProductPageNarrowToolbar = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ProductPageNarrowToolbar, _React$PureComponent);

  function ProductPageNarrowToolbar() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProductPageNarrowToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        resizeTimestamp = _this$props.resizeTimestamp,
        instrument = _this$props.instrument,
        instrumentId = _this$props.instrumentId,
        onAddAlert = _this$props.onAddAlert,
        accountId = _this$props.accountId,
        accounts = _this$props.accounts,
        relatedInstruments = _this$props.relatedInstruments,
        onLaunchTradeTicket = _this$props.onLaunchTradeTicket,
        isInstrumentPreferred = _this$props.isInstrumentPreferred,
        isTradeTicketHeader = _this$props.isTradeTicketHeader,
        isFavorite = _this$props.isFavorite,
        onTradingConditionShow = _this$props.onTradingConditionShow,
        onFavoriteToggle = _this$props.onFavoriteToggle;
    var isTradable = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["isTradable"](instrument);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isInset: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_7__["TitleBar"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_7__["TitleBarSection"], {
      align: "start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isInvestorApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_router_backButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 54
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_7__["TitleBarSection"], {
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_instrumentName_instrumentName__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "data-test-id": "pp-toolbar-instName",
      instrument: instrument,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_titleBar__WEBPACK_IMPORTED_MODULE_7__["TitleBarSection"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_instrumentInfo_instrumentInfo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "data-test-id": "pp-toolbar-instInfo",
      instrument: instrument,
      showSecondaryInfo: src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isPhoneApp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })), (!src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isInvestorApp && !src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isSpaApp || isTradable) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "data-test-id": "pp-toolbar-actionbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      resizeTimestamp: resizeTimestamp,
      isSliderButtonsHidden: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
      isCenter: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_actionBar_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
      instrumentId: instrumentId,
      instrument: instrument,
      onAddAlert: onAddAlert,
      accountId: accountId,
      accounts: accounts,
      relatedInstruments: relatedInstruments,
      onLaunchTradeTicket: onLaunchTradeTicket,
      isInstrumentPreferred: isInstrumentPreferred,
      isFavorite: isFavorite,
      isTradeTicketHeader: isTradeTicketHeader,
      onTradingConditionShow: onTradingConditionShow,
      onFavoriteToggle: onFavoriteToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    })))));
  };

  return ProductPageNarrowToolbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductPageNarrowToolbar);

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/productPageToolbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var _productPageNarrowToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/productPageNarrowToolbar.js");
/* harmony import */ var _productPageWideToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/productPageWideToolbar.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageToolbar\\productPageToolbar.js";









var ProductPageToolbar = function ProductPageToolbar(props) {
  var componentId = props.componentId,
      resizeTimestamp = props.resizeTimestamp,
      instrumentId = props.instrumentId,
      instrument = props.instrument,
      isInstrumentPreferred = props.isInstrumentPreferred,
      accountId = props.accountId,
      accounts = props.accounts,
      relatedInstruments = props.relatedInstruments,
      isTradeTicketHeader = props.isTradeTicketHeader,
      isFavorite = props.isFavorite,
      onAddAlert = props.onAddAlert,
      onLaunchTradeTicket = props.onLaunchTradeTicket,
      onTradingConditionShow = props.onTradingConditionShow,
      onFavoriteToggle = props.onFavoriteToggle,
      _props$onInstrumentCh = props.onInstrumentChange,
      onInstrumentChange = _props$onInstrumentCh === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.noop : _props$onInstrumentCh;
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isInvestorApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isSpaApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isPhoneApp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_productPageNarrowToolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resizeTimestamp: resizeTimestamp,
    instrumentId: instrumentId,
    instrument: instrument,
    isInstrumentPreferred: isInstrumentPreferred,
    accountId: accountId,
    accounts: accounts,
    relatedInstruments: relatedInstruments,
    isTradeTicketHeader: isTradeTicketHeader,
    isFavorite: isFavorite,
    onAddAlert: onAddAlert,
    onLaunchTradeTicket: onLaunchTradeTicket,
    onTradingConditionShow: onTradingConditionShow,
    onFavoriteToggle: onFavoriteToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_productPageWideToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    componentId: componentId,
    resizeTimestamp: resizeTimestamp,
    instrumentId: instrumentId,
    instrument: instrument,
    isInstrumentPreferred: isInstrumentPreferred,
    accountId: accountId,
    accounts: accounts,
    relatedInstruments: relatedInstruments,
    isTradeTicketHeader: isTradeTicketHeader,
    onAddAlert: onAddAlert,
    onLaunchTradeTicket: onLaunchTradeTicket,
    onTradingConditionShow: onTradingConditionShow,
    onInstrumentChange: onInstrumentChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPageToolbar);

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/productPageWideToolbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/toolbar/index.js");
/* harmony import */ var src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/instrument/instrument.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/currencies/queries.js");
/* harmony import */ var src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/layout/layoutSection.js");
/* harmony import */ var src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/overflowable/overflowable.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var _actionBar_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/productPage/actionBar/container.js");
/* harmony import */ var _instrumentInput_instrumentInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/productPage/productPageToolbar/instrumentInput/instrumentInput.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageToolbar\\productPageWideToolbar.js";













/**
 * @property {object} instrument - passed instrument object
 */

var ProductPageWideToolbar = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ProductPageWideToolbar, _React$PureComponent);

  function ProductPageWideToolbar() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProductPageWideToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        instrumentId = _this$props.instrumentId,
        instrument = _this$props.instrument,
        accountId = _this$props.accountId,
        accounts = _this$props.accounts,
        relatedInstruments = _this$props.relatedInstruments,
        isInstrumentPreferred = _this$props.isInstrumentPreferred,
        onInstrumentChange = _this$props.onInstrumentChange,
        resizeTimestamp = _this$props.resizeTimestamp,
        isTradeTicketHeader = _this$props.isTradeTicketHeader,
        onLaunchTradeTicket = _this$props.onLaunchTradeTicket,
        onAddAlert = _this$props.onAddAlert,
        onTradingConditionShow = _this$props.onTradingConditionShow;
    var instrumentProps = {
      assetType: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getAssetType"](instrument),
      displayHint: instrument.DisplayHint,
      primaryName: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["getName"](instrument),
      secondaryName: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["getSecondaryName"](instrument),
      currency: src_frontend_models_instruments_currencies_queries__WEBPACK_IMPORTED_MODULE_9__["getCurrencyLabel"](instrument),
      secondaryInfo: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["getInstrumentSecondaryInfo"](instrument, {}, true),
      countryCode: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["getCountryCode"](instrument),
      isWrap: true,
      showDescription: true,
      tooltip: src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_8__["getToolTip"](instrument)
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isInset: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_overflowable_overflowable__WEBPACK_IMPORTED_MODULE_11__["default"], {
      resizeTimestamp: resizeTimestamp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
      "data-test-id": "product-page-toolbar",
      isFill: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, !src_frontend_config__WEBPACK_IMPORTED_MODULE_4__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, instrumentProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 50
      }
    })), src_frontend_config__WEBPACK_IMPORTED_MODULE_4__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_instrumentInput_instrumentInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
      componentId: componentId,
      instrument: instrument,
      onInstrumentChange: onInstrumentChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_actionBar_container__WEBPACK_IMPORTED_MODULE_14__["default"], {
      isTradeButtonAtEnd: true,
      instrumentId: instrumentId,
      instrument: instrument,
      onAddAlert: onAddAlert,
      accountId: accountId,
      accounts: accounts,
      relatedInstruments: relatedInstruments,
      onLaunchTradeTicket: onLaunchTradeTicket,
      isInstrumentPreferred: isInstrumentPreferred,
      isTradeTicketHeader: isTradeTicketHeader,
      onTradingConditionShow: onTradingConditionShow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }))));
  };

  return ProductPageWideToolbar;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ProductPageWideToolbar, "defaultProps", {
  resizeTimestamp: Date.now()
});

/* harmony default export */ __webpack_exports__["default"] = (ProductPageWideToolbar);

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageToolbar/relatedProductIcon/relatedProductIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/atoms/toolbar/index.js");
/* harmony import */ var src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/productIcon/productIcon.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageToolbar\\relatedProductIcon\\relatedProductIcon.js";









var RelatedProductIcon = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(RelatedProductIcon, _React$PureComponent);

  function RelatedProductIcon() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = RelatedProductIcon.prototype;

  _proto.handleInstrumentIconTap = function handleInstrumentIconTap() {
    var _this$props = this.props,
        instrument = _this$props.instrument,
        onInstrumentSelect = _this$props.onInstrumentSelect;
    onInstrumentSelect(instrument);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        instrument = _this$props2.instrument,
        index = _this$props2.index;
    var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_6__["getAssetType"](instrument);
    var tooltip = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__["getAssetTypeName"](instrument, {
      tooltip: true
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_toolbar__WEBPACK_IMPORTED_MODULE_3__["ToolbarItem"], {
      align: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onTap: this.handleInstrumentIconTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isAction: true,
      isMono: true,
      "data-test-id": "related-instrument-" + (index + 1),
      assetType: assetType,
      displayHint: instrument.DisplayHint,
      title: tooltip,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    })));
  };

  return RelatedProductIcon;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_8__["bindHandlers"])(RelatedProductIcon));

/***/ }),

/***/ "./src/frontend/modules/productPage/productPageTradeSignal/productPageTradeSignal.js":
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/productPage/constants.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\productPage\\productPageTradeSignal\\productPageTradeSignal.js";









function ProductPageTradeSignals(props) {
  var componentVisibleChildren = props.componentVisibleChildren,
      componentId = props.componentId,
      resizeTimestamp = props.resizeTimestamp;

  if (!componentVisibleChildren[_constants__WEBPACK_IMPORTED_MODULE_7__["CHILD_MODULES"].TRADE_SIGNALS]) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "product-page-trade-signals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "secondary",
    isCenter: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Trade_Signals'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_layout_layoutSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isFlushTop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_workspace_childComponent_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    childRef: _constants__WEBPACK_IMPORTED_MODULE_7__["CHILD_MODULES"].TRADE_SIGNALS,
    parentId: componentId,
    componentProps: {
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      showInstrument: false,
      showContextMenu: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPageTradeSignals);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/5.js.map