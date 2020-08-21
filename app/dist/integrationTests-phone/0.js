(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/frontend/components/contextMenu/actions/menuActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_CHAIN", function() { return OPTIONS_CHAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_STRATEGIES", function() { return OPTION_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE", function() { return TRADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS", function() { return NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_ADD", function() { return ALERT_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSED_POSITION_DETAILS", function() { return CLOSED_POSITION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOGOUT", function() { return APP_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SETTINGS", function() { return APP_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MODULE_PICKER", function() { return APP_MODULE_PICKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPTH_TRADER", function() { return DEPTH_TRADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COLUMN", function() { return REMOVE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TIME_AND_SALES", function() { return ACTION_TIME_AND_SALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LINKED_MODULES", function() { return UPDATE_LINKED_MODULES; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_modules_closedPositions_closedPositionDetails_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/actions.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_modules_logoutDialog_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/logoutDialog/constants.js");
/* harmony import */ var src_frontend_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/store.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_modules_optionsChain_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/optionsChain/selectors.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var src_frontend_models_orders_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/orders/queries.js");
/* harmony import */ var src_frontend_models_linkedInstrument_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/linkedInstrument/actions.js");
/* harmony import */ var src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/workspace/dialog/actions.js");
/* harmony import */ var src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/workspace/component/actions.js");
/* harmony import */ var src_frontend_modules_alertsDialog_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/alertsDialog/actions.js");
/* harmony import */ var src_frontend_modules_alertsDialog_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/alertsDialog/constants.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_modules_depthTrader_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/depthTrader/actions.js");
/* harmony import */ var src_frontend_modules_proTradeTicket_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/proTradeTicket/actions.js");
/* harmony import */ var src_frontend_modules_optionStrategiesTicket_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/actions.js");
/* harmony import */ var src_frontend_modules_timeAndSales_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/timeAndSales/actions.js");
/* harmony import */ var src_frontend_components_router_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/router/actions.js");
/* harmony import */ var src_frontend_app_common_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/app/common/routes/index.js");
/* harmony import */ var src_frontend_modules_timeAndSales_queries__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/modules/timeAndSales/queries.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/models/tradeModel/direction/directions.js");
/* harmony import */ var src_frontend_modules_optionStrategiesTicket_strategyTypes_strategyTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/strategyTypes/strategyTypes.js");
/* harmony import */ var src_frontend_modules_optionStrategiesTicket_selectors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/selectors.js");
/* harmony import */ var src_frontend_modules_optionStrategiesTicket_queries__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var src_frontend_modules_closedPositions_constants__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");
/* harmony import */ var src_frontend_app_common_queries__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./src/frontend/app/common/queries.js");
/**
 * New actions not to be added here
 * Instead new actions must be grouped according to module
 * Example: trade ticket actions in tradeTicket.js
 * See TFS #918625
 */


































 // NOTE - Don't add new actions to this file, add module specific files for actions.

var OPTIONS_CHAIN = {
  id: 'optionschain',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('OptionsChain'),
  performAction: function performAction(_ref) {
    var instrument = _ref.instrument;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getId"](instrument);
    var store = Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])();

    if (!src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp) {
      store.dispatch(src_frontend_models_linkedInstrument_actions__WEBPACK_IMPORTED_MODULE_10__["setLinkedInstrument"](instrument));
    }

    store.dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__["triggerShowWorkspaceDialog"]({
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__["OPTIONS_CHAIN"],
      userSettings: {
        instrumentId: instrumentId
      }
    }));
  },
  isAllowed: function isAllowed(_ref2) {
    var instrument = _ref2.instrument,
        isClientViewSubModule = _ref2.isClientViewSubModule;
    return instrument && (src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isDesktopApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isInvestorApp) && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["isTradableAsOption"](instrument) && src_frontend_modules_optionsChain_selectors__WEBPACK_IMPORTED_MODULE_6__["isOptionsChainAvailable"](Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().getState()) && !isClientViewSubModule;
  }
};
var OPTION_STRATEGIES = {
  id: 'optionstrategies',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('OptionStrategies'),
  performAction: function performAction(_ref3) {
    var account = _ref3.account,
        order = _ref3.order,
        instrument = _ref3.instrument,
        featureArea = _ref3.featureArea;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getId"](instrument);
    var legs;
    var strategyType;
    var selectedAccountId;

    if (order && src_frontend_modules_optionStrategiesTicket_queries__WEBPACK_IMPORTED_MODULE_29__["isSupportedAssetType"](order.AssetType)) {
      if (src_frontend_models_orders_queries__WEBPACK_IMPORTED_MODULE_9__["isOptionStrategy"](order)) {
        legs = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(order.rows, function (element) {
          return src_frontend_models_orders_queries__WEBPACK_IMPORTED_MODULE_9__["getLegData"](element);
        });
      } else {
        legs = [src_frontend_models_orders_queries__WEBPACK_IMPORTED_MODULE_9__["getLegData"](order)];
      }
    } else if (src_frontend_modules_optionStrategiesTicket_queries__WEBPACK_IMPORTED_MODULE_29__["isSupportedAssetType"](instrument.AssetType)) {
      strategyType = src_frontend_modules_optionStrategiesTicket_strategyTypes_strategyTypes__WEBPACK_IMPORTED_MODULE_27__["CUSTOM"].type;
      legs = [{
        Uic: null,
        AssetType: instrument.AssetType,
        Ratio: 1,
        BuySell: src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_26__["BUY"],
        OptionData: {
          ExpiryDate: instrument.ExpiryDate,
          PutCall: instrument.PutCall,
          StrikePrice: instrument.StrikePrice
        }
      }];
    }

    if (account && account.IsAccount) {
      selectedAccountId = account.AccountId;
    } else if (order && order.AccountId) {
      selectedAccountId = order.AccountId;
    }

    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_optionStrategiesTicket_actions__WEBPACK_IMPORTED_MODULE_18__["triggerLaunchTicket"]({
      instrumentId: instrumentId,
      legs: legs,
      strategyType: strategyType,
      featureArea: featureArea,
      selectedAccountId: selectedAccountId
    }));
  },
  isAllowed: function isAllowed(_ref4) {
    var instrument = _ref4.instrument,
        isClientViewSubModule = _ref4.isClientViewSubModule;
    return src_frontend_modules_optionStrategiesTicket_queries__WEBPACK_IMPORTED_MODULE_29__["isTicketEnabled"]() && src_frontend_modules_optionStrategiesTicket_selectors__WEBPACK_IMPORTED_MODULE_28__["isInstrumentSupported"](Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().getState(), instrument) && !isClientViewSubModule;
  }
};
var TRADE = {
  id: 'trade',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('NewTrade'),
  isPrimary: true,
  performAction: function performAction(_ref5) {
    var instrument = _ref5.instrument,
        accountId = _ref5.accountId,
        optionData = _ref5.optionData,
        featureArea = _ref5.featureArea;
    var position;

    if (optionData) {
      position = {
        PositionBase: {
          OptionsData: optionData
        }
      };
    }

    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_proTradeTicket_actions__WEBPACK_IMPORTED_MODULE_17__["triggerLaunchTicketByAssetType"]({
      instrument: instrument,
      accountId: accountId,
      position: position,
      featureArea: featureArea
    }));
  },
  isAllowed: function isAllowed(_ref6) {
    var instrument = _ref6.instrument,
        clientKey = _ref6.clientKey;

    if (!instrument) {
      return false;
    }

    var state = Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().getState();
    return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_8__["isPreferred"](state, instrument.AssetType) && src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_25__["getHasAccountForInstrument"](state, instrument, clientKey) && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["isTradable"](instrument) && (src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].appFeatures.isOptionsTicketSupported || !src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__["isFxOption"](instrument));
  }
};
var NEWS = {
  id: 'news',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('News'),
  performAction: function performAction(_ref7) {
    var instrument = _ref7.instrument;

    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp) {
      Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__["triggerShowWorkspaceDialog"]({
        moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__["NEWS"],
        userSettings: {
          selectedInstrument: instrument
        }
      }));
    } else {
      Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_12__["setSelectedTabInAnyPanel"]('news'));
    }
  },
  isAllowed: function isAllowed(_ref8) {
    var isClientViewSubModule = _ref8.isClientViewSubModule;
    // prefiltering a news module not actually supported in PRO at current moment
    return !src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp && !isClientViewSubModule;
  }
};
var ALERT_ADD = {
  id: 'alertadd',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('PriceAlerts_Context_Add'),
  performAction: function performAction(_ref9) {
    var instrument = _ref9.instrument;
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_alertsDialog_actions__WEBPACK_IMPORTED_MODULE_13__["showAlertsDialog"]({
      alertType: src_frontend_modules_alertsDialog_constants__WEBPACK_IMPORTED_MODULE_14__["PRICE_ALERTS"],
      instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getId"](instrument)
    }));
  },
  isAllowed: function isAllowed(_ref10) {
    var instrument = _ref10.instrument,
        isClientViewSubModule = _ref10.isClientViewSubModule;
    return instrument && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["isPriceAlertsAllowed"](instrument) && !isClientViewSubModule;
  }
};
var CLOSED_POSITION_DETAILS = {
  id: 'closedposdetails',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Position Details'),
  performAction: function performAction(_ref11) {
    var closedPositionId = _ref11.closedPositionId,
        positionAccountId = _ref11.positionAccountId,
        clientKey = _ref11.clientKey;
    return Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_closedPositions_closedPositionDetails_actions__WEBPACK_IMPORTED_MODULE_1__["getClosedPositionDetails"](src_frontend_modules_closedPositions_constants__WEBPACK_IMPORTED_MODULE_33__["DIALOG_ID"], closedPositionId, positionAccountId, clientKey));
  },
  isAllowed: function isAllowed(_ref12) {
    var closedPositionId = _ref12.closedPositionId;
    return Boolean(closedPositionId); // not require to be traded, detail should be shown for all instrument
  }
};
var APP_LOGOUT = {
  id: 'applogout',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Masthead_Logout'),
  performAction: function performAction() {
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__["triggerShowWorkspaceDialog"]({
      shouldForceSameWindow: true,
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__["LOGOUT"],
      componentProps: {
        logoutMode: src_frontend_modules_logoutDialog_constants__WEBPACK_IMPORTED_MODULE_3__["DIALOG_MODE_LOGOUT"]
      }
    }));
  },
  isAllowed: function isAllowed() {
    return !(src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp && src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].auth.isWindows);
  }
};
var APP_SETTINGS = {
  id: 'appsettings',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Settings'),
  performAction: function performAction() {
    if (src_frontend_app_common_queries__WEBPACK_IMPORTED_MODULE_34__["isRoutingEnabled"]()) {
      Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_components_router_actions__WEBPACK_IMPORTED_MODULE_20__["triggerNavigation"](src_frontend_app_common_routes__WEBPACK_IMPORTED_MODULE_21__["SETTINGS"]));
    } else {
      Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__["triggerShowWorkspaceDialog"]({
        shouldForceSameWindow: true,
        moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__["SETTINGS"]
      }));
    }
  }
};
var APP_MODULE_PICKER = {
  id: 'appmodulepicker',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('ModuleMenu'),
  performAction: function performAction() {
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_11__["triggerShowWorkspaceDialog"]({
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_15__["MODULE_PICKER"]
    }));
  },
  isAllowed: function isAllowed() {
    return src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp;
  }
};
var DEPTH_TRADER = {
  id: 'depthtrader',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('DepthTrader'),
  performAction: function performAction(_ref13) {
    var instrument = _ref13.instrument,
        accountId = _ref13.accountId,
        amount = _ref13.amount;
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_depthTrader_actions__WEBPACK_IMPORTED_MODULE_16__["triggerLaunch"]({
      instrumentId: src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getId"](instrument),
      accountId: accountId,
      amount: amount
    }));
  },
  isAllowed: function isAllowed(_ref14) {
    var instrument = _ref14.instrument,
        isClientViewSubModule = _ref14.isClientViewSubModule;

    if (!instrument) {
      return false;
    }

    var state = Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().getState();
    return src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp && src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].appFeatures.isDepthTraderEnabled && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["isTradable"](instrument) && src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_25__["getHasAccountForInstrument"](state, instrument) && !isClientViewSubModule && (src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__["isLegacyStock"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__["isSRD"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__["isLegacyCfdStock"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_23__["isFuture"](instrument));
  }
};
var REMOVE_COLUMN = {
  id: 'removecolumn',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('RemoveColumn'),
  isAllowed: function isAllowed(_ref15) {
    var columnsInfo = _ref15.columnsInfo,
        columns = _ref15.columns;
    return Boolean(columnsInfo) || Boolean(columns);
  }
};
var ACTION_TIME_AND_SALES = {
  id: 'timeandsales',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('TimeAndSales'),
  performAction: function performAction(_ref16) {
    var instrument = _ref16.instrument;
    var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getKey"](instrument);
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_modules_timeAndSales_actions__WEBPACK_IMPORTED_MODULE_19__["triggerLaunch"](instrumentKey));
  },
  isAllowed: function isAllowed(_ref17) {
    var instrument = _ref17.instrument,
        isClientViewSubModule = _ref17.isClientViewSubModule;

    if (!instrument || !src_frontend_modules_timeAndSales_queries__WEBPACK_IMPORTED_MODULE_22__["isTimeAndSalesAvailable"]()) {
      return;
    }

    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getId"](instrument);
    var instrumentData = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_8__["getDataById"](Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().getState(), instrumentId);
    var isInstrumentSupported = src_frontend_modules_timeAndSales_queries__WEBPACK_IMPORTED_MODULE_22__["isInstrumentSupported"](instrumentData);
    var isUnderlyingInstrumentSupported = src_frontend_modules_timeAndSales_queries__WEBPACK_IMPORTED_MODULE_22__["isUnderlyingInstrumentSupported"](instrumentData);
    return (isInstrumentSupported || isUnderlyingInstrumentSupported) && !isClientViewSubModule;
  }
};
var UPDATE_LINKED_MODULES = {
  id: 'updatelinkedmodules',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('UpdateLinkedModules'),
  performAction: function performAction(_ref18) {
    var instrument = _ref18.instrument,
        linkingChannel = _ref18.linkingChannel;
    var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_7__["getKey"](instrument);
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_4__["default"])().dispatch(src_frontend_models_linkedInstrument_actions__WEBPACK_IMPORTED_MODULE_10__["setLinkedInstrument"](instrumentKey, null, linkingChannel));
  },
  isAllowed: function isAllowed(_ref19) {
    var instrument = _ref19.instrument;
    return instrument && src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].isProApp;
  }
};

/***/ }),

/***/ "./src/frontend/components/contextMenu/actions/productPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_PAGE", function() { return PRODUCT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMIC_PRODUCT_PAGE", function() { return DYNAMIC_PRODUCT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_PRODUCT_PAGE", function() { return NAVIGATE_TO_PRODUCT_PAGE; });
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/store.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_modules_productPage_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/productPage/actions.js");





var PRODUCT_PAGE = {
  id: 'product-page',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('ProductOverview'),
  performAction: function performAction(actionData) {
    var instrument = actionData.instrument;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_2__["getId"](instrument);
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_1__["default"])().dispatch(src_frontend_modules_productPage_actions__WEBPACK_IMPORTED_MODULE_4__["triggerLaunchProductPage"]({
      instrumentId: instrumentId
    }));
  },
  isAllowed: function isAllowed(actionData) {
    var instrument = actionData.instrument,
        isClientViewSubModule = actionData.isClientViewSubModule;
    return Boolean(instrument) && !isClientViewSubModule;
  }
};
var DYNAMIC_PRODUCT_PAGE = {
  id: 'dynamic-product-page',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('ProductOverview'),
  performAction: function performAction(actionData) {
    var instrument = actionData.instrument;
    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_2__["getId"](instrument);
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_1__["default"])().dispatch(src_frontend_modules_productPage_actions__WEBPACK_IMPORTED_MODULE_4__["triggerLaunchProductPage"]({
      instrumentId: instrumentId,
      isProductPageSheet: true
    }));
  },
  isAllowed: function isAllowed(actionData) {
    var instrument = actionData.instrument,
        isClientViewSubModule = actionData.isClientViewSubModule;
    return Boolean(instrument) && !isClientViewSubModule;
  }
};
var NAVIGATE_TO_PRODUCT_PAGE = {
  id: 'navigate-to-product-page',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_0__["default"].getText('GoToProductOverview'),
  performAction: function performAction(actionData) {
    var instrumentId = actionData.instrumentId;
    Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_1__["default"])().dispatch(src_frontend_modules_productPage_actions__WEBPACK_IMPORTED_MODULE_4__["triggerLaunchProductPage"]({
      instrumentId: instrumentId
    }));
  },
  isAllowed: function isAllowed(actionData) {
    return Boolean(actionData.shouldNavigate && actionData.instrumentId);
  }
};

/***/ }),

/***/ "./src/frontend/components/contextMenu/actions/tradingConditions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADING_CONDITIONS", function() { return TRADING_CONDITIONS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/store.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_modules_tradingConditionsDialog_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/tradingConditionsDialog/actions.js");
/* harmony import */ var src_frontend_modules_tradingConditionsDialog_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/tradingConditionsDialog/constants.js");
/* harmony import */ var src_frontend_models_tradingConditions_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/tradingConditions/selectors.js");
/* harmony import */ var src_frontend_models_tradingCosts_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/tradingCosts/selectors.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_frontend_models_accounts_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/accounts/types.js");
/* harmony import */ var src_frontend_models_tradingConditions_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/tradingConditions/actions.js");
/* harmony import */ var src_frontend_models_tradingCosts_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/tradingCosts/actions.js");
/* harmony import */ var src_frontend_workspace_moduleDialogTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/workspace/moduleDialogTypes.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
















var TRADING_CONDITIONS = {
  id: 'tradingconditions',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Trading_Conditions'),
  performAction: function performAction(actionData) {
    if (!actionData) {
      return;
    }

    var store = Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var instrument = actionData.instrument,
        account = actionData.account,
        isClientViewSubModule = actionData.isClientViewSubModule;
    var clientKey = actionData.clientKey;

    if (!clientKey) {
      clientKey = src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_15__["getClientKey"](store.getState());
    }

    var instrumentId = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__["getId"](instrument);

    var accountId = actionData.accountId || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(account, 'AccountId');

    accountId = src_frontend_models_tradingConditions_selectors__WEBPACK_IMPORTED_MODULE_8__["getValidAccount"](store.getState(), accountId, instrumentId, clientKey);
    store.dispatch(src_frontend_models_tradingConditions_actions__WEBPACK_IMPORTED_MODULE_12__["fetch"](instrumentId, accountId, clientKey));
    store.dispatch(src_frontend_models_tradingCosts_actions__WEBPACK_IMPORTED_MODULE_13__["fetch"](instrumentId, accountId, undefined, undefined, clientKey));
    /**
     * Temporary fix to prevent context menu loading
     * which is being worked upon
     * See TFS #868637
     */

    var skipPromiseResolution = false;

    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp) {
      skipPromiseResolution = true;
    }

    var customModuleConfig = isClientViewSubModule ? {
      dialogType: src_frontend_workspace_moduleDialogTypes__WEBPACK_IMPORTED_MODULE_14__["WINDOW"]
    } : undefined;
    return Promise.all([!skipPromiseResolution && src_frontend_models_tradingConditions_selectors__WEBPACK_IMPORTED_MODULE_8__["getIsReadyPromise"](instrumentId, accountId), !skipPromiseResolution && src_frontend_models_tradingCosts_selectors__WEBPACK_IMPORTED_MODULE_9__["getIsReadyPromise"](instrumentId, accountId)]).finally(function () {
      Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_2__["default"])().dispatch(src_frontend_modules_tradingConditionsDialog_actions__WEBPACK_IMPORTED_MODULE_6__["launchTradingConditionsDialog"]({
        instrumentId: instrumentId,
        accountId: accountId,
        isHeaderShown: !src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isProApp,
        initialFeatureTrackingReason: src_frontend_modules_tradingConditionsDialog_constants__WEBPACK_IMPORTED_MODULE_7__["FEATURE_TRACKING_REASON_CONTEXT_MENU"],
        clientKey: clientKey,
        shouldShowClientName: isClientViewSubModule
      }, src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isProApp, undefined, customModuleConfig));
    });
  },
  isAllowed: function isAllowed(actionData) {
    var instrument = actionData.instrument;
    return instrument && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["isTradable"](instrument) && src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].appFeatures.isTradingConditionsEnabled;
  }
};

/***/ }),

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

/***/ "./src/frontend/components/instrumentSearchResultList/container.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var src_frontend_models_watchlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/watchlist/selectors.js");
/* harmony import */ var _instrumentSearchResultList_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/instrumentSearchResultList/instrumentSearchResultList.default.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    userDefinedWatchlists: src_frontend_models_watchlist_selectors__WEBPACK_IMPORTED_MODULE_2__["getEmptyAndUserDefined"](state),
    individualLinkingChannelsInUse: src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_1__["getIndividualLinkingChannelsInUse"](state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_instrumentSearchResultList_default__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/components/instrumentSearchResultList/instrumentSearchResultList.default.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_components_reactGrid_config_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/config/plugins.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_keyboardNavigation_keyboardNavigationPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/keyboardNavigation/keyboardNavigationPlugin.js");
/* harmony import */ var src_frontend_blocks_focusManager_focusManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/focusManager/focusManager.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/touchable/eventTypes.js");
/* harmony import */ var src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/keyable/constants.js");
/* harmony import */ var src_frontend_components_reactGrid_list_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/reactGrid/list/list.js");
/* harmony import */ var src_frontend_components_reactGrid_config_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/reactGrid/config/items.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/contextMenu/menu/menuItems.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/components/contextMenu/menu/contextMenuItem.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_moduleContextMenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/contextMenu/menu/moduleContextMenuItem.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/contextMenu/menu/moduleContextMenuActions.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/contextMenu/actions/menuActions.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/contextMenu/actions/tradingConditions.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridRowPlugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/contextMenu/contextMenuGridRowPlugin.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_linkedInstrument_linkingChannels__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/models/linkedInstrument/linkingChannels.js");
/* harmony import */ var src_frontend_models_linkedInstrument_queries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/models/linkedInstrument/queries.js");
/* harmony import */ var src_frontend_blocks_keyable_keyable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/blocks/keyable/keyable.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/components/contextMenu/actions/productPage.js");
/* harmony import */ var src_frontend_components_reactGrid_types_rowTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/components/reactGrid/types/rowTypes.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/components/contextMenu/menu/types.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/blocks/dialog/types.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/components/instrumentSearchResultList/constants.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\instrumentSearchResultList\\instrumentSearchResultList.default.js";






























var SearchResultList = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(SearchResultList, _React$PureComponent);

  function SearchResultList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      minHeight: 0,
      hasCardContextMenu: false
    });

    return _this;
  }

  var _proto = SearchResultList.prototype;

  _proto.getLinkingContextMenuItem = function getLinkingContextMenuItem(individualLinkingChannelsInUse) {
    var _this2 = this;

    // Use default channel if there are no linked components
    var individualChannels = individualLinkingChannelsInUse.length ? individualLinkingChannelsInUse : [src_frontend_models_linkedInstrument_linkingChannels__WEBPACK_IMPORTED_MODULE_23__["DEFAULT"]];
    var isSingleAction = individualChannels.length === 1; // Add All channels option if there are more than one individual channel in use

    var channels = isSingleAction ? individualChannels : lodash__WEBPACK_IMPORTED_MODULE_4___default.a.union(individualChannels, [src_frontend_models_linkedInstrument_linkingChannels__WEBPACK_IMPORTED_MODULE_23__["ALL"]]);

    var contextMenuItems = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.chain(channels).map(function (linkingChannel) {
      var overrides = isSingleAction ? {} : {
        id: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["UPDATE_LINKED_MODULES"].id + "_" + linkingChannel,
        label: src_frontend_models_linkedInstrument_queries__WEBPACK_IMPORTED_MODULE_24__["getChannelLabelText"](linkingChannel)
      };
      return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.defaults(overrides, {
        performAction: function performAction(_ref) {
          var instrument = _ref.instrument;
          return src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["UPDATE_LINKED_MODULES"].performAction({
            instrument: instrument,
            linkingChannel: linkingChannel
          });
        }
      }, src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["UPDATE_LINKED_MODULES"]);
    }).map(function (action) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: action.id,
        action: action,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 30
        }
      });
    }).value();

    if (isSingleAction) {
      return contextMenuItems[0];
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["UPDATE_LINKED_MODULES"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__["default"], {
      showClose: true,
      showBack: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, contextMenuItems));
  };

  _proto.handleGetActionsData = function handleGetActionsData(_ref2, menuTarget) {
    var id = _ref2.id,
        info = _ref2.info;
    var featureArea = this.props.featureArea;
    var instrument = info.instrument;

    if (!instrument) {
      return;
    }

    var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_22__["getKey"](instrument);
    return {
      id: id,
      instrumentKey: instrumentKey,
      isOptionRoot: instrument.isRoot,
      anchor: menuTarget,
      featureArea: featureArea
    };
  };

  _proto.handleGetIsAllowed = function handleGetIsAllowed(item) {
    return item && !item.info.isMore && !item.info.instrument.isParent;
  };

  _proto.handleContextMenuHide = function handleContextMenuHide(isCard) {
    var _this3 = this;

    if (isCard) {
      this.setState({
        minHeight: 0,
        hasCardContextMenu: false
      }, function () {
        // notify about dialog size change
        if (_this3.props.onResize) {
          _this3.props.onResize();
        }
      });
    }
  };

  _proto.handleContextMenuResize = function handleContextMenuResize(dialog, isCard) {
    var _this4 = this;

    if (isCard) {
      // the outer popup has an inner border and the card menu has
      // a top border, so to perfectly fit one inside the other
      // we need to remove 2px from the card height
      this.setState({
        minHeight: dialog.getSize() - 2,
        hasCardContextMenu: true
      }, function () {
        // notify about dialog size change
        if (_this4.props.onResize) {
          _this4.props.onResize();
        }
      });
    }
  };

  _proto.handleKeyboardComplete = function handleKeyboardComplete(key, hasChanged, evt) {
    // do not prevent ArrowUp event if nothing has changed during navigation
    if (key === src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__["ARROW_UP_KEY"] && !hasChanged) {
      return;
    }

    evt.preventDefault();
  };

  _proto.handleEscapeDown = function handleEscapeDown(evt) {
    // wait for escape up
    evt.stopPropagation();
  };

  _proto.handleEscapeUp = function handleEscapeUp(evt) {
    // we close dialog only in case focus is not on list
    evt.stopPropagation();
    evt.preventDefault();

    if (!this.state.hasCardContextMenu) {
      var onEscape = this.props.onEscape;

      if (onEscape) {
        onEscape(evt);
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        height = _this$props.height,
        className = _this$props.className,
        focusRef = _this$props.focusRef,
        children = _this$props.children,
        selectedItem = _this$props.selectedItem,
        individualLinkingChannelsInUse = _this$props.individualLinkingChannelsInUse,
        isImmediateHide = _this$props.isImmediateHide,
        isAutoFocus = _this$props.isAutoFocus,
        isContextMenuEnabled = _this$props.isContextMenuEnabled,
        featureArea = _this$props.featureArea,
        resizeTimestamp = _this$props.resizeTimestamp,
        isIconContextMenuEnabled = _this$props.isIconContextMenuEnabled,
        isCardContextMenuEnabled = _this$props.isCardContextMenuEnabled,
        isScrollEnabled = _this$props.isScrollEnabled,
        onPressArrowUp = _this$props.onPressArrowUp,
        onItemTap = _this$props.onItemTap,
        onItemSelect = _this$props.onItemSelect,
        onGetItemHeight = _this$props.onGetItemHeight,
        onItemExpand = _this$props.onItemExpand,
        onScrollEnd = _this$props.onScrollEnd,
        onResize = _this$props.onResize,
        userDefinedWatchlists = _this$props.userDefinedWatchlists,
        onContextMenuAction = _this$props.onContextMenuAction;
    var minHeight = this.state.minHeight;
    var linkingContextMenuItem = this.getLinkingContextMenuItem(individualLinkingChannelsInUse || []);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()('grid', className);
    var contextMenuItems = [linkingContextMenuItem, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["TRADE"].id,
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["TRADE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_moduleContextMenuItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
      key: "addtowatchlist",
      id: "addtowatchlist",
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_30__["WATCHLIST"],
      actionType: src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_18__["ADD_TO_WATCHLIST"],
      contextMenuData: {
        customWatchlists: userDefinedWatchlists
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["OPTION_STRATEGIES"].id,
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["OPTION_STRATEGIES"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["ALERT_ADD"].id,
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["ALERT_ADD"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_20__["TRADING_CONDITIONS"].id,
      action: src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_20__["TRADING_CONDITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    })];

    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_14__["default"].isProApp) {
      contextMenuItems = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.concat(contextMenuItems, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["NEWS"].id,
        action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["NEWS"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_moduleContextMenuItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
        key: "chartmodule",
        id: "chartmodule",
        moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_30__["CHART"],
        actionType: src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_18__["SHOW_CHART"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["DEPTH_TRADER"].id,
        action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["DEPTH_TRADER"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["OPTIONS_CHAIN"].id,
        action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["OPTIONS_CHAIN"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["ACTION_TIME_AND_SALES"].id,
        action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_19__["ACTION_TIME_AND_SALES"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_contextMenuItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_26__["PRODUCT_PAGE"].id,
        action: src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_26__["PRODUCT_PAGE"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 17
        }
      })]);
    }

    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: classes,
      style: {
        minHeight: minHeight
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_list_list__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "data-test-id": this.props['data-test-id'],
      className: "list list--lines",
      itemHeight: _constants__WEBPACK_IMPORTED_MODULE_31__["SEARCH_RESULT_ITEM_HEIGHT"],
      selectedItem: selectedItem,
      resizeTimestamp: resizeTimestamp,
      height: height,
      isScrollEnabled: isScrollEnabled,
      isVirtualLayout: true,
      onContentResize: onResize,
      onScrollEnd: onScrollEnd,
      onItemSelect: onItemSelect,
      onItemTap: onItemTap,
      onGetItemHeight: onGetItemHeight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_config_items__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 21
      }
    }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_config_plugins__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_plugins_keyboardNavigation_keyboardNavigationPlugin__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isEnabled: !src_frontend_config__WEBPACK_IMPORTED_MODULE_14__["default"].isTabletApp,
      focusRef: focusRef,
      isAutoFocus: false,
      featureArea: featureArea // $FlowExpectedError - see https://github.com/facebook/flow/issues/4756
      ,
      onRowDoubleTap: onItemSelect // $FlowExpectedError - see https://github.com/facebook/flow/issues/4756
      ,
      onRowExpand: onItemExpand,
      onPressArrowUp: onPressArrowUp,
      onComplete: this.handleKeyboardComplete,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridRowPlugin__WEBPACK_IMPORTED_MODULE_21__["default"], {
      isCapture: true,
      isEnabled: isContextMenuEnabled,
      isKeyboardEnabled: !src_frontend_config__WEBPACK_IMPORTED_MODULE_14__["default"].isTabletApp,
      isImmediateHide: isImmediateHide,
      shouldFetchInstrument: true,
      isCardFitToParent: false,
      featureArea: featureArea,
      triggerEvents: [src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__["TAP"], src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__["CONTEXT_MENU"], src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__["ENTER_KEY"]],
      onPreshow: this.handleContextMenuResize,
      onResize: this.handleContextMenuResize,
      onAction: onContextMenuAction,
      onHide: this.handleContextMenuHide,
      onGetIsAllowed: this.handleGetIsAllowed,
      onGetActionsData: this.handleGetActionsData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 25
      }
    }, isIconContextMenuEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__["default"], {
      isTargetAnchor: true,
      targetEvent: src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__["TAP"],
      targetClassName: "product-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 33
      }
    }, contextMenuItems), isCardContextMenuEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__["default"], {
      targetEvent: src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__["TAP"],
      type: "card",
      targetClassName: "instr",
      isKeyboardEnabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 33
      }
    }, contextMenuItems), isCardContextMenuEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__["default"], {
      targetEvent: src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__["ENTER_KEY"],
      type: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 33
      }
    }, contextMenuItems), !src_frontend_config__WEBPACK_IMPORTED_MODULE_14__["default"].isTabletApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu_menu_menuItems__WEBPACK_IMPORTED_MODULE_15__["default"], {
      targetEvent: src_frontend_blocks_touchable_eventTypes__WEBPACK_IMPORTED_MODULE_10__["CONTEXT_MENU"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 33
      }
    }, contextMenuItems)))));

    if (!src_frontend_config__WEBPACK_IMPORTED_MODULE_14__["default"].isTabletApp) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_focusManager_focusManager__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "grid",
        isResetOnEscape: false,
        hasFocusOutline: false,
        isAutoFocus: isAutoFocus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_keyable_keyable__WEBPACK_IMPORTED_MODULE_25__["default"], {
        keyEvent: src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__["KEY_EVENT_UP"],
        preventDefault: false,
        onEscape: this.handleEscapeUp,
        isEnabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_keyable_keyable__WEBPACK_IMPORTED_MODULE_25__["default"], {
        keyEvent: src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_11__["KEY_EVENT_DOWN"],
        preventDefault: false,
        onEscape: this.handleEscapeDown,
        isEnabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 25
        }
      }, content)));
    }

    return content;
  };

  return SearchResultList;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SearchResultList, "defaultProps", {
  isAutoFocus: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__["bindHandlers"])(SearchResultList));

/***/ }),

/***/ "./src/frontend/components/reactGrid/plugins/contextMenu/contextMenuGridRowPlugin.js":
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
/* harmony import */ var src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/contextMenu/index.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_contextMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/contextMenu/menu/contextMenu.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/contextMenu/menu/types.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_focusManager_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/focusManager/utils.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/dialog/types.js");
/* harmony import */ var src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_frontend_blocks_dialog_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_rowTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/reactGrid/types/rowTypes.js");
/* harmony import */ var _reactGridRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridRow.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/constants.js");
/* harmony import */ var _defaultPluginRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/defaultPluginRow.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/contextMenu/utils.js");




var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reactGrid\\plugins\\contextMenu\\contextMenuGridRowPlugin.js";















// eslint-disable-next-line flowtype/require-readonly-react-props
var ContextMenuGridRowPlugin = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ContextMenuGridRowPlugin, _React$Component);

  function ContextMenuGridRowPlugin() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "state", {
      isContextMenuEnabled: true
    });

    return _this;
  }

  ContextMenuGridRowPlugin.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var isScrolling = props.isScrolling;
    var isContextMenuEnabled = !isScrolling;

    if (state.isContextMenuEnabled !== isContextMenuEnabled) {
      return {
        isContextMenuEnabled: isContextMenuEnabled
      };
    }

    return null;
  };

  var _proto = ContextMenuGridRowPlugin.prototype;

  _proto.handleHide = function handleHide(isCard) {
    var _this$props = this.props,
        parentEl = _this$props.parentEl,
        onHide = _this$props.onHide;

    if (parentEl) {
      src_frontend_blocks_focusManager_utils__WEBPACK_IMPORTED_MODULE_11__["resetFocus"](parentEl);
    }

    if (onHide) {
      onHide(isCard);
    }
  };

  _proto.handleGetIsAllowed = function handleGetIsAllowed(actionData, evt) {
    var _this$props2 = this.props,
        selectedRow = _this$props2.selectedRow,
        rowsData = _this$props2.rowsData,
        onGetIsAllowed = _this$props2.onGetIsAllowed;
    var row = _utils__WEBPACK_IMPORTED_MODULE_17__["getTriggerRow"](evt, selectedRow, rowsData);

    if (!row) {
      return true;
    } // disable context menu on dividers and non selectable rows by default


    if (row.info.isDivider || row.info.isSelectable === false) {
      return false;
    }

    if (onGetIsAllowed) {
      return onGetIsAllowed(row);
    }

    return true;
  };

  _proto.handleGetActionData = function handleGetActionData(actionData, target, evt) {
    var _this$props3 = this.props,
        selectedRow = _this$props3.selectedRow,
        rowsData = _this$props3.rowsData,
        onGetActionsData = _this$props3.onGetActionsData;
    var row = _utils__WEBPACK_IMPORTED_MODULE_17__["getTriggerRow"](evt, selectedRow, rowsData);

    if (onGetActionsData && row) {
      return onGetActionsData(row, evt);
    }

    return row;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        componentId = _this$props4.componentId,
        rows = _this$props4.rows,
        rowsData = _this$props4.rowsData,
        parentEl = _this$props4.parentEl,
        triggerEvents = _this$props4.triggerEvents,
        nextPlugin = _this$props4.nextPlugin,
        featureArea = _this$props4.featureArea,
        isCapture = _this$props4.isCapture,
        isImmediateHide = _this$props4.isImmediateHide,
        isKeyboardEnabled = _this$props4.isKeyboardEnabled,
        shouldDisplayWhenNoActions = _this$props4.shouldDisplayWhenNoActions,
        shouldPreventDefault = _this$props4.shouldPreventDefault,
        shouldStopPropagation = _this$props4.shouldStopPropagation,
        shouldFetchInstrument = _this$props4.shouldFetchInstrument,
        shouldForcePosition = _this$props4.shouldForcePosition,
        isScrollingEnabled = _this$props4.isScrollingEnabled,
        isCardFitToParent = _this$props4.isCardFitToParent,
        children = _this$props4.children,
        onAction = _this$props4.onAction,
        onPreshow = _this$props4.onPreshow,
        onResize = _this$props4.onResize;
    var isContextMenuEnabled = this.state.isContextMenuEnabled; // We should improve performance by setting up on context menu and recognize item through event

    var contextMenuRows = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(rows, function (row, rowIndex) {
      var rowData = rowsData[rowIndex];
      return (
        /*#__PURE__*/
        // $FlowFixMe - Need to tighten up react grid RenderedRow type
        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_defaultPluginRow__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: rowIndex
        }, rowData, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }
        }), row)
      );
    });

    var content = contextMenuRows;

    if (nextPlugin) {
      content = react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](nextPlugin, {
        rows: contextMenuRows,
        rowsData: rowsData
      });
    }

    var style = {
      height: '100%',
      width: '100%'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenu"], {
      componentId: componentId + "_rowPlugin",
      parentEl: parentEl,
      isCardFitToParent: isCardFitToParent,
      isEnabled: isContextMenuEnabled,
      isImmediateHide: isImmediateHide,
      isKeyboardEnabled: isKeyboardEnabled,
      triggerEvents: triggerEvents,
      shouldPreventDefault: shouldPreventDefault,
      shouldStopPropagation: shouldStopPropagation,
      shouldFetchInstrument: shouldFetchInstrument,
      shouldDisplayWhenNoActions: shouldDisplayWhenNoActions,
      isScrollingEnabled: isScrollingEnabled,
      featureArea: featureArea,
      onGetActionsData: this.handleGetActionData,
      onGetIsAllowed: this.handleGetIsAllowed,
      isCapture: isCapture,
      forcePosition: shouldForcePosition,
      onAction: onAction,
      onPreshow: onPreshow,
      onResize: onResize,
      onHide: this.handleHide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_6__["MenuTarget"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, content)));
  };

  return ContextMenuGridRowPlugin;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ContextMenuGridRowPlugin, "defaultProps", {
  isEnabled: true,
  isCapture: false,
  shouldDisplayWhenNoActions: false,
  shouldFetchInstrument: false,
  shouldForcePosition: false,
  triggerEvents: src_frontend_components_contextMenu_menu_contextMenu__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps.triggerEvents,
  type: _constants__WEBPACK_IMPORTED_MODULE_15__["ROW_PLUGIN_TYPE"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__["bindHandlers"])(ContextMenuGridRowPlugin));

/***/ }),

/***/ "./src/frontend/components/reactGrid/plugins/contextMenu/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowIdFromEvent", function() { return getRowIdFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerRow", function() { return getTriggerRow; });
/* harmony import */ var jqueryAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/libs/jqueryAll.js");
/* harmony import */ var jqueryAll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jqueryAll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/keyable/constants.js");
/* harmony import */ var _list_listLayout_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reactGrid/list/listLayout/constants.js");
/* harmony import */ var _types_rowTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/reactGrid/types/rowTypes.js");





/**
 * Find closest row for event
 */

var getRowIdFromEvent = function getRowIdFromEvent(evt) {
  var element = jqueryAll__WEBPACK_IMPORTED_MODULE_0___default()(evt.target).closest("." + _list_listLayout_constants__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_ITEM_CLASS_NAME"]);
  return String(element.first().attr('data-id'));
};
/**
 * Find row for trigger event, defaults to selectedRow if event is KeyboardEvent
 */

var getTriggerRow = function getTriggerRow(evt, selectedRow, rowsData) {
  var rowId = getRowIdFromEvent(evt);

  var row = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(rowsData, {
    id: rowId
  });

  if (evt.type === src_frontend_blocks_keyable_constants__WEBPACK_IMPORTED_MODULE_2__["KEY_EVENT_DOWN"] && selectedRow) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(rowsData, {
      id: selectedRow
    });
  }

  return row;
};

/***/ }),

/***/ "./src/frontend/models/multiLegPricesSubscription/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_RATE", function() { return REFRESH_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
var REFRESH_RATE = 500;
var END_POINT = {
  serviceGroup: 'trade',
  uri: 'v1/prices/multiLeg/subscriptions'
};
var TYPE = 'multiLegPrices';
var META = {
  Legs: {
    __key__: 'LegId',
    __keepArray__: true
  }
};

/***/ }),

/***/ "./src/frontend/models/multiLegPricesSubscription/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscription", function() { return getSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptions", function() { return getSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArguments", function() { return getArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategyDirection", function() { return getStrategyDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategyType", function() { return getStrategyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferencePrice", function() { return getReferencePrice; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/tradeModel/direction/directions.js");
/* harmony import */ var src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/subscriptions/queries.js");
/* harmony import */ var src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/subscriptions/selectors.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/multiLegPricesSubscription/config.js");






var getSubscription = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_3__["createGetSubscription"](_config__WEBPACK_IMPORTED_MODULE_5__["TYPE"]);
var getSubscriptions = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_3__["createGetSubscriptions"](_config__WEBPACK_IMPORTED_MODULE_5__["TYPE"]);
var getData = function getData(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getData"](getSubscription(state, id));
};
var getStatus = function getStatus(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getStatus"](getSubscription(state, id));
};
var getArguments = function getArguments(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getArguments"](getSubscription(state, id));
};
var getStrategyDirection = function getStrategyDirection(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getData(state, componentId), ['BuySell'], src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_1__["BUY"]);
};
var getStrategyType = function getStrategyType(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getData(state, componentId), ['StrategyType']);
};
var getReferencePrice = function getReferencePrice(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getData(state, componentId), ['Quote', 'ReferencePrice']);
};

/***/ }),

/***/ "./src/frontend/models/orders/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUMENT_SNAPSHOT_COMPLETED", function() { return INSTRUMENT_SNAPSHOT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ORDERS_ERROR", function() { return ADD_ORDERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ORDERS_ERRORS", function() { return SET_ORDERS_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ORDER_ERROR", function() { return REMOVE_ORDER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_CANCEL_ORDERS", function() { return TRIGGER_CANCEL_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_ORDERS_FINISHED", function() { return CANCEL_ORDERS_FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_FETCH_DETAILS", function() { return TRIGGER_FETCH_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FETCH_DETAILS_STATUS_PENDING", function() { return SET_FETCH_DETAILS_STATUS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FETCH_DETAILS_STATUS_COMPLETE", function() { return SET_FETCH_DETAILS_STATUS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ORDER_DETAILS", function() { return REMOVE_ORDER_DETAILS; });
var INSTRUMENT_SNAPSHOT_COMPLETED = 'orders/instrument-snapshot-completed';
var ADD_ORDERS_ERROR = 'orders/add-orders-error';
var SET_ORDERS_ERRORS = 'orders/set-orders-errors';
var REMOVE_ORDER_ERROR = 'orders/remove-order-error';
var TRIGGER_CANCEL_ORDERS = 'orders/sagas/cancel-orders';
var CANCEL_ORDERS_FINISHED = 'orders/sagas/cancel-orders-finished';
var TRIGGER_FETCH_DETAILS = 'orders/trigger-fetch-details';
var SET_FETCH_DETAILS_STATUS_PENDING = 'orders/set-fetch-details-status-pending';
var SET_FETCH_DETAILS_STATUS_COMPLETE = 'orders/set-fetch-details-status-complete';
var REMOVE_ORDER_DETAILS = 'orders/remove-order-details';

/***/ }),

/***/ "./src/frontend/models/orders/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/orders/actionTypes.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/orders/types.js");





var initialState = {
  isInstrumentSnapshotCompleted: false,
  ordersErrors: {},
  orderDetails: {}
};

var handleOrderDetailsFetch = function handleOrderDetailsFetch(state, action, status) {
  var _extends2;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
    orderDetails: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.orderDetails, (_extends2 = {}, _extends2[action.orderId] = {
      data: action.data,
      error: action.error,
      status: status
    }, _extends2))
  });
};

var reducer = function reducer(state, action) {
  var _extends3;

  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["INSTRUMENT_SNAPSHOT_COMPLETED"]:
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        isInstrumentSnapshotCompleted: true
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["ADD_ORDERS_ERROR"]:
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        ordersErrors: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ordersErrors, (_extends3 = {}, _extends3[action.orderId] = action.error, _extends3))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_ORDERS_ERRORS"]:
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        ordersErrors: action.errors
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ORDER_ERROR"]:
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        ordersErrors: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(state.ordersErrors, action.orderId)
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_FETCH_DETAILS_STATUS_PENDING"]:
      return handleOrderDetailsFetch(state, action, src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__["PENDING"]);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_FETCH_DETAILS_STATUS_COMPLETE"]:
      return handleOrderDetailsFetch(state, action, src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__["SUCCESS"]);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ORDER_DETAILS"]:
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        orderDetails: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(state.orderDetails, action.orderId)
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  orders: reducer
});

/***/ }),

/***/ "./src/frontend/models/orders/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsInstrumentSnapshotCompleted", function() { return getIsInstrumentSnapshotCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdersErrors", function() { return getOrdersErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderError", function() { return getOrderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataByAccountAndInstrument", function() { return getDataByAccountAndInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataById", function() { return getDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterOrder", function() { return getMasterOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDetailsById", function() { return getOrderDetailsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPriceFromLegs", function() { return getCurrentPriceFromLegs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDetailsStatusById", function() { return getOrderDetailsStatusById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsOrderDetailsStatusPendingById", function() { return getIsOrderDetailsStatusPendingById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDetailsErrorById", function() { return getOrderDetailsErrorById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSwitchInstrument", function() { return getSwitchInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedPosition", function() { return getRelatedPosition; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var src_frontend_models_positionsSubscription_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/positionsSubscription/selectors.js");
/* harmony import */ var src_frontend_utils_selectorCreators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/selectorCreators.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_frontend_modules_optionStrategiesTicket_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/orders/types.js");
/* harmony import */ var _subscription_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/orders/subscription/selectors.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/models/orders/queries.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/models/orders/reducer.js");
















var DEFAULT_ORDERS = [];
var getState = function getState(state) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(state, 'orders', _reducer__WEBPACK_IMPORTED_MODULE_15__["initialState"]);
};
var getIsInstrumentSnapshotCompleted = function getIsInstrumentSnapshotCompleted(state) {
  return getState(state).isInstrumentSnapshotCompleted;
};
var getOrdersErrors = function getOrdersErrors(state) {
  return getState(state).ordersErrors;
};
var getOrderError = function getOrderError(state, orderId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getOrdersErrors(state), orderId);
};

var getOrderDetails = function getOrderDetails(state) {
  return getState(state).orderDetails;
};

var getDataByAccountAndInstrument = Object(src_frontend_utils_selectorCreators__WEBPACK_IMPORTED_MODULE_9__["createIfEqualSameRefSelector"])(Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(function (state, account) {
  return _subscription_selectors__WEBPACK_IMPORTED_MODULE_13__["getData"](state, account == null ? void 0 : account.ClientKey);
}, function (state, account) {
  return src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_3__["getAccountMap"](state, account == null ? void 0 : account.ClientKey);
}, function (state, account) {
  return account;
}, function (state, account, instrument) {
  return instrument;
}, function (orders, accountsMap, account, instrument) {
  if (!account || !instrument) {
    return DEFAULT_ORDERS;
  }

  var uic = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_5__["getUic"](instrument);
  var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_5__["getAssetType"](instrument);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(orders, function (order) {
    return order.Uic === uic && order.AssetType === assetType && src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_4__["belongsToAccount"](accountsMap[order.AccountId], account);
  });
}));
function getDataById(state, orderId, clientKey) {
  var orders = _subscription_selectors__WEBPACK_IMPORTED_MODULE_13__["getData"](state, clientKey);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(orders, orderId);
}
function getMasterOrder(state, orderId, clientKey) {
  var orders = _subscription_selectors__WEBPACK_IMPORTED_MODULE_13__["getData"](state, clientKey);

  var currentOrder = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(orders, orderId);

  if (!currentOrder) {
    return;
  }

  if (_queries__WEBPACK_IMPORTED_MODULE_14__["isMasterOrder"](currentOrder)) {
    return currentOrder;
  }

  var relatedOrderIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(currentOrder.RelatedOpenOrders, 'OrderId');

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(orders, function (order) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(relatedOrderIds, order.OrderId) && _queries__WEBPACK_IMPORTED_MODULE_14__["isMasterOrder"](order);
  });
}
var getOrderDetailsById = function getOrderDetailsById(state, orderId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getOrderDetails(state), [orderId, 'data']);
};
function getCurrentPriceFromLegs(state, legs) {
  var orderId = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(legs, [0, 'OrderId']);

  var legData = getDataById(state, orderId);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(legData, ['MultiLegOrderDetails', 'CurrentPrice']);
}
var getOrderDetailsStatusById = function getOrderDetailsStatusById(state, orderId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getOrderDetails(state), [orderId, 'status']);
};
var getIsOrderDetailsStatusPendingById = function getIsOrderDetailsStatusPendingById(state, orderId) {
  var orderDetailsStatus = getOrderDetailsStatusById(state, orderId);
  return !orderDetailsStatus || orderDetailsStatus === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__["PENDING"];
};
var getOrderDetailsErrorById = function getOrderDetailsErrorById(state, orderId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getOrderDetails(state), [orderId, 'error']);
};
function getSwitchInstrument(state, order) {
  if (!order || !order.SwitchInstrumentUic) {
    return;
  }

  var instrumentKey = {
    uic: order.SwitchInstrumentUic,
    assetType: src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_7__["MUTUAL_FUND"]
  };
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_6__["getDataByKey"](state, instrumentKey);
}
function getRelatedPosition(state, subscriptionId, order) {
  if (!order || !order.RelatedPositionId) {
    return;
  }

  return src_frontend_models_positionsSubscription_selectors__WEBPACK_IMPORTED_MODULE_8__["getPosition"](state, subscriptionId, order.RelatedPositionId);
}

/***/ }),

/***/ "./src/frontend/models/orders/subscription/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_RATE", function() { return REFRESH_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
var REFRESH_RATE = 1000;
var META = {
  __key__: 'OrderId',
  __obj__: {
    RelatedOpenOrders: {
      __key__: 'OrderId',
      __keepArray__: true
    }
  }
};
var END_POINT = {
  serviceGroup: 'port',
  uri: 'v1/orders/subscriptions'
};
var TYPE = 'orders';

/***/ }),

/***/ "./src/frontend/models/orders/subscription/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergedSubscription", function() { return getMergedSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergedSubscriptions", function() { return getMergedSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscription", function() { return getSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArguments", function() { return getArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientKey", function() { return getClientKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return isReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsSubscriptionReadyPromise", function() { return getIsSubscriptionReadyPromise; });
/* harmony import */ var src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/utils/connectPromise.js");
/* harmony import */ var src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/subscriptions/queries.js");
/* harmony import */ var src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/subscriptions/selectors.js");
/* harmony import */ var src_frontend_utils_subscriptions_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/subscriptions/utils.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/orders/subscription/config.js");







var getMergedSubscription = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_2__["createGetSubscription"](_config__WEBPACK_IMPORTED_MODULE_6__["TYPE"]);
var getMergedSubscriptions = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_2__["createGetSubscriptions"](_config__WEBPACK_IMPORTED_MODULE_6__["TYPE"]);
var getSubscription = function getSubscription(state, clientKey) {
  if (clientKey === void 0) {
    clientKey = src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getClientKey"](state);
  }

  var subscriptionKey = src_frontend_utils_subscriptions_utils__WEBPACK_IMPORTED_MODULE_3__["getMergedSubscriptionId"](clientKey);
  return getMergedSubscription(state, subscriptionKey);
};
var getData = function getData(state, clientKey) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_1__["getData"](getSubscription(state, clientKey));
};
var getStatus = function getStatus(state, clientKey) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_1__["getStatus"](getSubscription(state, clientKey));
};
var getArguments = function getArguments(state, clientKey) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_1__["getArguments"](getSubscription(state, clientKey));
};
var getClientKey = function getClientKey(state, subscriptionKey) {
  var _subscriptionsQueries;

  return (_subscriptionsQueries = src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_1__["getArguments"](getMergedSubscription(state, subscriptionKey))) == null ? void 0 : _subscriptionsQueries.ClientKey;
};
var isReady = function isReady(state, clientKey) {
  var status = getStatus(state, clientKey);
  return status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["SUBSCRIBED"] || status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["ERROR"];
};
var getIsSubscriptionReadyPromise = function getIsSubscriptionReadyPromise(clientKey) {
  return Object(src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state) {
    if (isReady(state, clientKey)) {
      return {
        isSuccess: true
      };
    }
  });
};

/***/ }),

/***/ "./src/frontend/models/positionsSubscription/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_RATE", function() { return REFRESH_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
var REFRESH_RATE = 2000;
var META = {
  __key__: 'PositionId',
  __obj__: {
    PositionBase: {
      RelatedOpenOrders: {
        __key__: 'OrderId',
        __keepArray__: true
      }
    }
  }
};
var END_POINT = {
  serviceGroup: 'port',
  uri: 'v1/positions/subscriptions'
};
var TYPE = 'positions';

/***/ }),

/***/ "./src/frontend/models/positionsSubscription/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptionKey", function() { return getSubscriptionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetPositionIdFromSubscriptionKey", function() { return getNetPositionIdFromSubscriptionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubscriptionForComponent", function() { return isSubscriptionForComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var DELIMITER = '#';
var getSubscriptionKey = function getSubscriptionKey(netPositionId, accountId, componentId) {
  return "" + netPositionId + DELIMITER + accountId + DELIMITER + componentId;
};
var getNetPositionIdFromSubscriptionKey = function getNetPositionIdFromSubscriptionKey(subscriptionKey) {
  return subscriptionKey.split(DELIMITER)[0];
};
var isSubscriptionForComponent = function isSubscriptionForComponent(subscriptionKey, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.endsWith(subscriptionKey, "" + DELIMITER + componentId);
};

/***/ }),

/***/ "./src/frontend/models/positionsSubscription/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsSubscription", function() { return getPositionsSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsSubscriptions", function() { return getPositionsSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsSubscriptionsData", function() { return getPositionsSubscriptionsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsSubscriptionsForComponent", function() { return getPositionsSubscriptionsForComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSubscriptionsForComponent", function() { return getActiveSubscriptionsForComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetSubscription", function() { return createGetSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArguments", function() { return getArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositionAvailable", function() { return isPositionAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositionUnavailable", function() { return isPositionUnavailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositionReady", function() { return isPositionReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsPositionReadyPromise", function() { return getIsPositionReadyPromise; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/subscriptions/selectors.js");
/* harmony import */ var src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/subscriptions/queries.js");
/* harmony import */ var src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/connectPromise.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/positionsSubscription/config.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/positionsSubscription/queries.js");







var getPositionsSubscription = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_1__["createGetSubscription"](_config__WEBPACK_IMPORTED_MODULE_5__["TYPE"]);
var getPositionsSubscriptions = src_frontend_utils_subscriptions_selectors__WEBPACK_IMPORTED_MODULE_1__["createGetSubscriptions"](_config__WEBPACK_IMPORTED_MODULE_5__["TYPE"]);
var getPositionsSubscriptionsData = function getPositionsSubscriptionsData(state) {
  return getPositionsSubscriptions(state);
};
var getPositionsSubscriptionsForComponent = function getPositionsSubscriptionsForComponent(state, componentId) {
  var positionsSubscriptions = getPositionsSubscriptions(state);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(positionsSubscriptions, function (value, key) {
    return _queries__WEBPACK_IMPORTED_MODULE_6__["isSubscriptionForComponent"](key, componentId);
  });
};
var getActiveSubscriptionsForComponent = function getActiveSubscriptionsForComponent(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(getPositionsSubscriptions(state), function (value, key) {
    return Boolean(value.status) && _queries__WEBPACK_IMPORTED_MODULE_6__["isSubscriptionForComponent"](key, componentId);
  });
};
var createGetSubscription = function createGetSubscription(subscriberId) {
  return function (state) {
    return getPositionsSubscription(state, subscriberId);
  };
};
var getData = function getData(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getData"](getPositionsSubscription(state, id));
};
var getStatus = function getStatus(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getStatus"](getPositionsSubscription(state, id));
};
var getArguments = function getArguments(state, id) {
  return src_frontend_utils_subscriptions_queries__WEBPACK_IMPORTED_MODULE_2__["getArguments"](getPositionsSubscription(state, id));
};
var getPosition = function getPosition(state, id, positionId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getData(state, id), positionId);
};
var isPositionAvailable = function isPositionAvailable(state, id) {
  var status = getStatus(state, id);
  var data = getData(state, id);
  return Boolean(status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["SUBSCRIBED"] && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data));
};
var isPositionUnavailable = function isPositionUnavailable(state, id) {
  var status = getStatus(state, id);
  var data = getData(state, id);
  return status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["SUBSCRIBED"] && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(data) || status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["ERROR"];
};
var isPositionReady = function isPositionReady(state, id) {
  return isPositionAvailable(state, id) || isPositionUnavailable(state, id);
};
var getIsPositionReadyPromise = function getIsPositionReadyPromise(subscriberId) {
  return Object(src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    if (isPositionAvailable(state, subscriberId)) {
      return {
        isSuccess: true
      };
    }

    if (isPositionUnavailable(state, subscriberId)) {
      return {
        isError: true
      };
    }
  });
};

/***/ }),

/***/ "./src/frontend/models/tradingConditions/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADING_CONDITIONS_DATA_PENDING", function() { return FETCH_TRADING_CONDITIONS_DATA_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADING_CONDITIONS_DATA_COMPLETE", function() { return FETCH_TRADING_CONDITIONS_DATA_COMPLETE; });
var FETCH = 'trading-conditions/fetch';
var FETCH_TRADING_CONDITIONS_DATA_PENDING = 'trading-conditions/fetch-trading-conditions-pending';
var FETCH_TRADING_CONDITIONS_DATA_COMPLETE = 'trading-conditions/fetch-trading-conditions-complete';

/***/ }),

/***/ "./src/frontend/models/tradingConditions/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPending", function() { return setPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComplete", function() { return setComplete; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/tradingConditions/actionTypes.js");

/**
 * Initiate saga for fetching trading condition data from openapi
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @function fetch
 */

function fetch(instrumentId, accountId, clientKey) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"],
    instrumentId: instrumentId,
    accountId: accountId,
    clientKey: clientKey
  };
}
/**
 * After initiating saga for fetching trading condition put isPending flag as true
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @function setPending
 */

function setPending(instrumentId, accountId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRADING_CONDITIONS_DATA_PENDING"],
    instrumentId: instrumentId,
    accountId: accountId
  };
}
/**
 * Set the data/error on state when fetching gets complete
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {data} string - data recieved from openapi
 * @param {error} string - error recieved from openapi
 * @function setComplete
 */

function setComplete(_ref) {
  var instrumentId = _ref.instrumentId,
      accountId = _ref.accountId,
      data = _ref.data,
      error = _ref.error;
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRADING_CONDITIONS_DATA_COMPLETE"],
    instrumentId: instrumentId,
    accountId: accountId,
    data: data,
    error: error
  };
}

/***/ }),

/***/ "./src/frontend/models/tradingConditions/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradingConditionsData", function() { return getTradingConditionsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBinaryTradingConditionsData", function() { return getBinaryTradingConditionsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnderlyingTradingConditionsData", function() { return getUnderlyingTradingConditionsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTickSize", function() { return getTickSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadData", function() { return shouldLoadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadTime", function() { return getLoadTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasData", function() { return hasData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorData", function() { return getErrorData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsError", function() { return getIsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsReadyPromise", function() { return getIsReadyPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidAccount", function() { return getValidAccount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var src_frontend_models_accounts_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/accounts/selectors.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/connectPromise.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/tradingConditions/queries.js");






 // #886518 retrofit the better paterns used in tradingCosts/selectors into this file
// (e.g. the logic and name of getIsError)

/**
 * Returns the complete state of trading conditions.
 */

var getTradingConditions = function getTradingConditions(state) {
  return state.tradingConditions;
};
/**
 * Returns the complete object of trading conditions data by key in state.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */


var getTradingConditionsByIds = function getTradingConditionsByIds(state, instrumentId, accountId) {
  var key = _queries__WEBPACK_IMPORTED_MODULE_6__["getKey"](instrumentId, accountId);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditions(state), key);
};
/**
 * Returns the data object of selected trading condition.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */


var getTradingConditionsData = function getTradingConditionsData(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), ['data', 'tradingCondition'], null);
};
/**
 * Returns the data object of selected trading condition.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */

var getBinaryTradingConditionsData = function getBinaryTradingConditionsData(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), ['data', 'binaryTradingCondition'], null);
};
var getUnderlyingTradingConditionsData = function getUnderlyingTradingConditionsData(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), ['data', 'underlyingTradingCondition'], null);
};
var getTickSize = function getTickSize(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), ['data', 'tickSize']);
};
/**
 * Trading conditions data for instruments with a tick size scheme needs to be
 * refreshed each time the trading conditions is requested.
 *
 * - returns true if data is unavailable or if the instrument has a tick size scheme.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */

var shouldLoadData = function shouldLoadData(state, instrumentId, accountId, clientKey) {
  var instrument = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_1__["getDataById"](state, instrumentId, clientKey);
  var conditions = getTradingConditionsByIds(state, instrumentId, accountId);

  if (!instrument || !conditions) {
    return true;
  }

  return Boolean(instrument.TickSizeScheme);
};
var getLoadTime = function getLoadTime(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), 'loadTime');
};
/**
 * Checks whether state have instrument as well as tradingcondition data.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {clientKey?} string - optional client key
 */

var hasData = function hasData(state, instrumentId, accountId, clientKey) {
  var instrumentData = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_1__["getDataById"](state, instrumentId, clientKey);
  return Boolean(instrumentData && (!instrumentData.IsTradable || getTradingConditionsData(state, instrumentId, accountId)));
};
/**
 * Checks whether trading condition data for selected key is loading or not
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */

var isPending = function isPending(state, instrumentId, accountId) {
  var tradingConditionData = getTradingConditionsByIds(state, instrumentId, accountId);
  return tradingConditionData && tradingConditionData.status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__["PENDING"];
};
/**
 * In case of error from openapi, it will return the error data
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */

var getErrorData = function getErrorData(state, instrumentId, accountId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingConditionsByIds(state, instrumentId, accountId), 'error', null);
};
/**
 * check whether open api returns error or not after response has been fetched.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 */

var getIsError = function getIsError(state, instrumentId, accountId) {
  return Boolean(!isPending(state, instrumentId, accountId) && getErrorData(state, instrumentId, accountId) && !getTradingConditionsData(state, instrumentId, accountId));
};
/**
 * Returns the connect promise used to show loader when data is loading
 */

var getIsReadyPromise = function getIsReadyPromise(instrumentId, accountId) {
  return Object(src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
    return {
      isSuccess: !isPending(state, instrumentId, accountId) && Boolean(getTradingConditionsData(state, instrumentId, accountId)),
      isError: getIsError(state, instrumentId, accountId)
    };
  });
};
var getValidAccount = function getValidAccount(state, accountId, instrumentId, clientKey) {
  var instrumentData = src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_1__["getDataById"](state, instrumentId, clientKey);
  var tradableAccounts = src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_3__["getTradableAccountsForInstrument"](src_frontend_models_accounts_selectors__WEBPACK_IMPORTED_MODULE_2__["default"].getAccountGroups(state, clientKey), instrumentData);
  var isValidAccount = accountId && Boolean(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(tradableAccounts, function (tradableAccount) {
    return tradableAccount.AccountId === accountId && !tradableAccount.IsGroup;
  }));
  return isValidAccount ? accountId : src_frontend_models_accounts_selectors__WEBPACK_IMPORTED_MODULE_2__["default"].getDefaultCurrencyAccountIdForInstrument(state, instrumentData, clientKey);
};

/***/ }),

/***/ "./src/frontend/models/tradingCosts/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADING_COSTS_DATA_PENDING", function() { return FETCH_TRADING_COSTS_DATA_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRADING_COSTS_DATA_COMPLETE", function() { return FETCH_TRADING_COSTS_DATA_COMPLETE; });
var FETCH = 'trading-costs/fetch';
var FETCH_TRADING_COSTS_DATA_PENDING = 'trading-costs/fetch-trading-costs-pending';
var FETCH_TRADING_COSTS_DATA_COMPLETE = 'trading-costs/fetch-trading-costs-complete';

/***/ }),

/***/ "./src/frontend/models/tradingCosts/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPending", function() { return setPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComplete", function() { return setComplete; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/tradingCosts/actionTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/tradingCosts/constants.js");


/**
 * Initiate saga for fetching trading costs data from openapi
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 * @function fetch
 */

function fetch(instrumentId, accountId, amount, holdingPeriod, clientKey) {
  if (amount === void 0) {
    amount = _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_TRADING_COSTS_AMOUNT"];
  }

  if (holdingPeriod === void 0) {
    holdingPeriod = _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_TRADING_COSTS_HOLDING_PERIOD"];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH"],
    instrumentId: instrumentId,
    accountId: accountId,
    amount: amount,
    holdingPeriod: holdingPeriod,
    clientKey: clientKey
  };
}
/**
 * After initiating saga for fetching trading costs put isPending flag as true
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 * @function setPending
 */

function setPending(instrumentId, accountId, amount, holdingPeriod) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRADING_COSTS_DATA_PENDING"],
    instrumentId: instrumentId,
    accountId: accountId,
    amount: amount,
    holdingPeriod: holdingPeriod
  };
}
/**
 * Set the data/error on state when fetching gets complete
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 * @param {data} object - data recieved from openapi
 * @param {error} object - error recieved from openapi
 * @function setComplete
 */

function setComplete(_ref) {
  var instrumentId = _ref.instrumentId,
      accountId = _ref.accountId,
      amount = _ref.amount,
      holdingPeriod = _ref.holdingPeriod,
      data = _ref.data,
      error = _ref.error;
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRADING_COSTS_DATA_COMPLETE"],
    instrumentId: instrumentId,
    accountId: accountId,
    amount: amount,
    holdingPeriod: holdingPeriod,
    data: data,
    error: error
  };
}

/***/ }),

/***/ "./src/frontend/models/tradingCosts/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLongCosts", function() { return getLongCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortCosts", function() { return getShortCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommissionRule", function() { return getCommissionRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAmount", function() { return isValidAmount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/tradingConditions/constants.js");
/* harmony import */ var src_frontend_models_tradingConditions_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/tradingConditions/queries.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");




/**
 * Returns a key for trading costs which is the result of concatenating the arguments
 * @param {string} instrumentId - selected instrumentId
 * @param {string} accountId - selected accountid
 * @param {number} amount - selected amount
 * @param {number} holdingPeriod - selected holding period (in days)
 * @returns {string} - the key, or null if any of the arguments doesn't exist
 */

var getKey = function getKey(instrumentId, accountId, amount, holdingPeriod) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(instrumentId) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(accountId) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(amount) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(holdingPeriod)) {
    return null;
  }

  return instrumentId + "-" + accountId + "-" + amount + "-" + holdingPeriod;
};
/**
 * Returns the long leg of costs data
 * @param {object} costsData - the data object from the openAPI response
 * @returns {object} - cost data, or null if it doesn't exist
 */

var getLongCosts = function getLongCosts(costsData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(costsData, ['Cost', 'Long'], null);
};
/**
 * Returns the short leg of costs data
 * @param {object} costsData - the data object from the openAPI response
 * @returns {object} - cost data, or null if it doesn't exist
 */

var getShortCosts = function getShortCosts(costsData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(costsData, ['Cost', 'Short'], null);
};
/**
 * Returns the value of a commission rule
 * @param {object} commissionRule
 * @returns {number} - commission rule value
 */

var getCommissionRule = function getCommissionRule(commissionRule, instrument) {
  var BaseCommission = commissionRule.BaseCommission,
      MinCommission = commissionRule.MinCommission,
      MaxCommission = commissionRule.MaxCommission,
      RateOnAmount = commissionRule.RateOnAmount,
      PerUnitRate = commissionRule.PerUnitRate,
      MinSpread = commissionRule.MinSpread,
      Currency = commissionRule.Currency;

  if (BaseCommission) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_BASE_COMMISSION"],
      amount: BaseCommission,
      currency: Currency
    };
  }

  if (MaxCommission) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_MAX_COMMISSION"],
      amount: MaxCommission,
      currency: Currency
    };
  }

  if (MinCommission) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_MIN_COMMISSION"],
      amount: MinCommission,
      currency: Currency
    };
  }

  if (RateOnAmount) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_RATE_ON_AMOUNT"],
      amount: RateOnAmount,
      currency: Currency,
      isFx: instrument && src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isFx"](instrument)
    };
  }

  if (PerUnitRate) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_PER_UNIT_RATE"],
      amount: PerUnitRate,
      currency: Currency,
      unit: src_frontend_models_tradingConditions_queries__WEBPACK_IMPORTED_MODULE_2__["getAmountLabel"](instrument)
    };
  }

  if (MinSpread) {
    return {
      type: src_frontend_models_tradingConditions_constants__WEBPACK_IMPORTED_MODULE_1__["COMMISSION_TYPE_MIN_SPREAD"],
      amount: MinSpread,
      currency: Currency
    };
  }
};
/**
 * Returns true if the specified amount is valid for trading costs
 * @param {number} amount
 * @returns {boolean} - true if valid, false otherwise
 */

var isValidAmount = function isValidAmount(amount) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFinite(amount) && amount > 0;
};

/***/ }),

/***/ "./src/frontend/models/tradingCosts/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradingCostsData", function() { return getTradingCostsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasData", function() { return hasData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorData", function() { return getErrorData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsReadyPromise", function() { return getIsReadyPromise; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/connectPromise.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/tradingCosts/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/tradingCosts/constants.js");






/**
 * Returns the complete state of trading costs.
 */

var getTradingCosts = function getTradingCosts(state) {
  return state.tradingCosts;
};
/**
 * Returns the complete object of trading costs data by key in state.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */


var getTradingCostsByIds = function getTradingCostsByIds(state, instrumentId, accountId, amount, holdingPeriod) {
  var key = _queries__WEBPACK_IMPORTED_MODULE_4__["getKey"](instrumentId, accountId, amount, holdingPeriod);
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingCosts(state), key);
};
/**
 * Returns the data object of selected trading costs.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */


var getTradingCostsData = function getTradingCostsData(state, instrumentId, accountId, amount, holdingPeriod) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingCostsByIds(state, instrumentId, accountId, amount, holdingPeriod), 'data', null);
};
/**
 * Checks whether state has tradingCosts data
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */

var hasData = function hasData(state, instrumentId, accountId, amount, holdingPeriod) {
  if (amount === void 0) {
    amount = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_AMOUNT"];
  }

  if (holdingPeriod === void 0) {
    holdingPeriod = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_HOLDING_PERIOD"];
  }

  return !src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].appFeatures.isCostCalculatorEnabled || // pretend availability to avoid blocking TC dialog
  Boolean(getTradingCostsData(state, instrumentId, accountId, amount, holdingPeriod));
};
/**
 * Checks whether trading Costs data for selected key is loading or not
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */

var isPending = function isPending(state, instrumentId, accountId, amount, holdingPeriod) {
  if (amount === void 0) {
    amount = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_AMOUNT"];
  }

  if (holdingPeriod === void 0) {
    holdingPeriod = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_HOLDING_PERIOD"];
  }

  var tradingCostsData = getTradingCostsByIds(state, instrumentId, accountId, amount, holdingPeriod);
  return tradingCostsData && tradingCostsData.status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_3__["PENDING"];
};
/**
 * In case of error from openapi, it will return the error data
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */

var getErrorData = function getErrorData(state, instrumentId, accountId, amount, holdingPeriod) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getTradingCostsByIds(state, instrumentId, accountId, amount, holdingPeriod), 'error', null);
};
/**
 * check whether open api returns error or not after response has been fetched.
 * @param {instrumentId} string - selected instrumentId
 * @param {accountId} string - selected accountid
 * @param {amount} number - selected amount
 * @param {holdingPeriod} number - selected holding period (in days)
 */

var isError = function isError(state, instrumentId, accountId, amount, holdingPeriod) {
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].appFeatures.isCostCalculatorEnabled && // pretend no error to avoid blocking TC dialog
  !isPending(state, instrumentId, accountId, amount, holdingPeriod) && Boolean(getErrorData(state, instrumentId, accountId, amount, holdingPeriod));
};
/**
 * Returns the connect promise used to show loader when data is loading
 */

var getIsReadyPromise = function getIsReadyPromise(instrumentId, accountId, amount, holdingPeriod) {
  if (amount === void 0) {
    amount = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_AMOUNT"];
  }

  if (holdingPeriod === void 0) {
    holdingPeriod = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TRADING_COSTS_HOLDING_PERIOD"];
  }

  return Object(src_frontend_utils_connectPromise__WEBPACK_IMPORTED_MODULE_1__["default"])(function (state) {
    return {
      isSuccess: hasData(state, instrumentId, accountId, amount, holdingPeriod),
      isError: isError(state, instrumentId, accountId, amount, holdingPeriod)
    };
  });
};

/***/ }),

/***/ "./src/frontend/modules/alertsDialog/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_ALERTS_FORM", function() { return SUBMIT_ALERTS_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ADD_ALERT_PENDING", function() { return SET_ADD_ALERT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ADD_ALERT_SUCCESS", function() { return SET_ADD_ALERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ADD_ALERT_ERROR", function() { return SET_ADD_ALERT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_INSTRUMENT_CHANGE", function() { return TRIGGER_INSTRUMENT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_HIDE_ALERTS_DIALOG", function() { return TRIGGER_HIDE_ALERTS_DIALOG; });
var SUBMIT_ALERTS_FORM = 'alerts-dialog/submit-form';
var SET_ADD_ALERT_PENDING = 'alerts-dialog/set-add-alert-pending';
var SET_ADD_ALERT_SUCCESS = 'alerts-dialog/set-add-alert-success';
var SET_ADD_ALERT_ERROR = 'alerts-dialog/set-add-alert-error';
var TRIGGER_INSTRUMENT_CHANGE = 'alerts-dialog/trigger-instrument-change';
var TRIGGER_HIDE_ALERTS_DIALOG = 'alerts-dialog/trigger-hide-alerts-dialog';

/***/ }),

/***/ "./src/frontend/modules/alertsDialog/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertsDialog", function() { return showAlertsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAlertsDialog", function() { return hideAlertsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerInstrumentChange", function() { return triggerInstrumentChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAlertForm", function() { return submitAlertForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddAlertPending", function() { return setAddAlertPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddAlertSuccess", function() { return setAddAlertSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddAlertError", function() { return setAddAlertError; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/workspace/dialog/actions.js");
/* harmony import */ var src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/windows/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/alertsDialog/actionTypes.js");





function showAlertsDialog(userSettings, dialogProps, featureTrackingData, parentWindowId) {
  if (parentWindowId === void 0) {
    parentWindowId = src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_3__["getWindowId"]();
  }

  var addAlertDialogConfig = {
    featureArea: userSettings.featureArea
  };

  var editAlertDialogConfig = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    isSingleton: true,
    // Edit Alert Dialog must be a singleton
    singletonKeyProps: ['alertId']
  }, addAlertDialogConfig);

  return src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_2__["triggerShowWorkspaceDialog"]({
    moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_1__["ALERTS_DIALOG"],
    userSettings: userSettings,
    featureTrackingData: featureTrackingData,
    windowId: parentWindowId,
    customModuleConfig: userSettings.alertId ? editAlertDialogConfig : addAlertDialogConfig,
    dialogProps: dialogProps
  });
}
function hideAlertsDialog(componentId, workspaceId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["TRIGGER_HIDE_ALERTS_DIALOG"],
    componentId: componentId,
    workspaceId: workspaceId
  };
}
function triggerInstrumentChange(componentId, instrumentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["TRIGGER_INSTRUMENT_CHANGE"],
    componentId: componentId,
    instrumentId: instrumentId
  };
}
function submitAlertForm(componentId, workspaceId, formData) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SUBMIT_ALERTS_FORM"],
    componentId: componentId,
    workspaceId: workspaceId,
    formData: formData
  };
}
function setAddAlertPending(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_ADD_ALERT_PENDING"],
    componentId: componentId
  };
}
function setAddAlertSuccess(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_ADD_ALERT_SUCCESS"],
    componentId: componentId
  };
}
function setAddAlertError(componentId, error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_ADD_ALERT_ERROR"],
    componentId: componentId,
    error: error
  };
}

/***/ }),

/***/ "./src/frontend/modules/alertsDialog/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_ALERTS", function() { return PRICE_ALERTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_BID_TICK", function() { return TYPE_BID_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_ASK_TICK", function() { return TYPE_ASK_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRADED", function() { return TYPE_TRADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_PERCENT_CHANGE", function() { return TYPE_PERCENT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_DEFAULT_ROWS", function() { return COMMENTS_DEFAULT_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_EXTENDED_ROWS", function() { return COMMENTS_EXTENDED_ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ge", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "le", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_INCREMENTS_RADIUS", function() { return PRICE_INCREMENTS_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertValue", function() { return alertValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expiryDate", function() { return expiryDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUMENTS_SEARCH_FILTERS", function() { return INSTRUMENTS_SEARCH_FILTERS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");



var PRICE_ALERTS = 'price-alerts';
var TYPE_BID_TICK = 'BidTick';
var TYPE_ASK_TICK = 'AskTick';
var TYPE_TRADED = 'Traded';
var TYPE_PERCENT_CHANGE = 'PercentChange';
var COMMENTS_DEFAULT_ROWS = 1;
var COMMENTS_EXTENDED_ROWS = 4;
var ge = String.fromCharCode(8805); // ≥

var le = String.fromCharCode(8804); // ≤

var PRICE_INCREMENTS_RADIUS = 50;
var alertValue = 'ALERT_VALUE';
var expiryDate = 'EXPIRY_DATE';
var INSTRUMENTS_SEARCH_FILTERS = {
  assetTypes: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reject(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["ALL_ASSETS"], function (assetType) {
    return src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["queryAssetTypeArray"]([assetType], [src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_2__["isStructuredProduct"]]);
  })
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_GET_CLOSED_POSITION_DETAILS", function() { return TRIGGER_GET_CLOSED_POSITION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLOSED_POSITION_DETAILS_PENDING", function() { return SET_CLOSED_POSITION_DETAILS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVED_CLOSED_POSITION_DETAILS", function() { return RECEIVED_CLOSED_POSITION_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_CLOSED_POSITION_DETAILS_FAILURE", function() { return REQUEST_CLOSED_POSITION_DETAILS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_DATA_CLOSED_POSITION_DETAILS", function() { return CLEAR_DATA_CLOSED_POSITION_DETAILS; });
var TRIGGER_GET_CLOSED_POSITION_DETAILS = 'positionDetails/get-closed-position-details';
var SET_CLOSED_POSITION_DETAILS_PENDING = 'positionDetails/set-closed-position-details-pending';
var RECEIVED_CLOSED_POSITION_DETAILS = 'positionDetails/received-closed-position-details';
var REQUEST_CLOSED_POSITION_DETAILS_FAILURE = 'positionDetails/request-closed-position-details-failure';
var CLEAR_DATA_CLOSED_POSITION_DETAILS = 'positionDetails/clear-closed-position-details';

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideClosedPositionDetailsDialog", function() { return hideClosedPositionDetailsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosedPositionDetails", function() { return getClosedPositionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClosedPositionDetailsPending", function() { return setClosedPositionDetailsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receivePositionDetails", function() { return receivePositionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestClosedPositionDetailsFailure", function() { return requestClosedPositionDetailsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPositionDetails", function() { return clearPositionDetails; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/actionTypes.js");


function hideClosedPositionDetailsDialog() {
  return clearPositionDetails(_constants__WEBPACK_IMPORTED_MODULE_0__["DIALOG_ID"]);
}
function getClosedPositionDetails(componentId, closedPositionId, accountId, clientKey) {
  return {
    componentId: componentId,
    closedPositionId: closedPositionId,
    accountId: accountId,
    clientKey: clientKey,
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_GET_CLOSED_POSITION_DETAILS"]
  };
}
function setClosedPositionDetailsPending(componentId) {
  return {
    componentId: componentId,
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CLOSED_POSITION_DETAILS_PENDING"]
  };
}
function receivePositionDetails(componentId, data) {
  return {
    componentId: componentId,
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["RECEIVED_CLOSED_POSITION_DETAILS"],
    data: data
  };
}
function requestClosedPositionDetailsFailure(componentId, error) {
  return {
    componentId: componentId,
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["REQUEST_CLOSED_POSITION_DETAILS_FAILURE"],
    error: error
  };
}
function clearPositionDetails(componentId) {
  return {
    componentId: componentId,
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLEAR_DATA_CLOSED_POSITION_DETAILS"]
  };
}
/**
 * Returns a position asynchronously. The method returns a promise.
 *
 * @param {string} closedPositionId - The position unique Id
 * @param {object} [account] - The account for the position. This is
 *                             necessary as some values are conversions
 *                             from instrument to account or client currency.
 *
 */

/***/ }),

/***/ "./src/frontend/modules/closedPositions/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SORT", function() { return DEFAULT_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_ID", function() { return DIALOG_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ID_KEY", function() { return ACCOUNT_ID_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROW_DISPLAY_MODE_KEY", function() { return ROW_DISPLAY_MODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_COMPONENT_KEY", function() { return SORT_COMPONENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOWN_COLUMN_NAMES_KEY", function() { return SHOWN_COLUMN_NAMES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS_INFO_KEY", function() { return COLUMNS_INFO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_PICKER_WIDTH", function() { return COLUMN_PICKER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLUMN_SORT", function() { return DEFAULT_COLUMN_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLUMN_SORT_REVERSED", function() { return DEFAULT_COLUMN_SORT_REVERSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUMENT_COLUMNS", function() { return INSTRUMENT_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_COLUMNS", function() { return SECTION_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUMENT_COLUMN", function() { return INSTRUMENT_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_COLUMN", function() { return ACCOUNT_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_COLUMN", function() { return CURRENCY_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_COLUMN", function() { return AMOUNT_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_PRICE_COLUMN", function() { return OPEN_PRICE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_PRICE_COLUMN", function() { return CLOSE_PRICE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERCENTAGE_CHANGE_COLUMN", function() { return PERCENTAGE_CHANGE_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_PL_ACCOUNT_COLUMN", function() { return TOTAL_PL_ACCOUNT_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_ACCOUNT_COLUMN", function() { return VALUE_ACCOUNT_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_TIME_COLUMN", function() { return CLOSE_TIME_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTLEMENT_DATE_COLUMN", function() { return SETTLEMENT_DATE_COLUMN; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/windows/selectors.js");
/* harmony import */ var _grid_labelFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/labelFunctions.js");



var DEFAULT_SORT = {
  id: 'default',
  compareFunction: _grid_labelFunctions__WEBPACK_IMPORTED_MODULE_2__["getDefaultGridSortCompareFunction"]
};
var DIALOG_ID = "closedPositionDialog" + Object(src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_1__["getWindowId"])();
var ACCOUNT_ID_KEY = 'closedPositionsLastUsedAccount';
var ROW_DISPLAY_MODE_KEY = 'closedPositionsRowDisplayMode';
var SORT_COMPONENT_KEY = 'closedPositionsSortKey';
var SHOWN_COLUMN_NAMES_KEY = 'closedPositionsShownColumnNames';
var COLUMNS_INFO_KEY = 'columnsInfo';
var COLUMN_PICKER_WIDTH = 400;
var DEFAULT_COLUMN_SORT = {
  id: 'ExecutionTimeClose'
};
var DEFAULT_COLUMN_SORT_REVERSED = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, DEFAULT_COLUMN_SORT, {
  isHighLow: true
});
var INSTRUMENT_COLUMNS = ['s_instrument', 'd_instrument'];
var SECTION_COLUMNS = ['s_total_pl_account', 'd_total_pl_account', 's_trade_pl_account', 'd_trade_pl_account'];
var INSTRUMENT_COLUMN = 'instrument';
var ACCOUNT_COLUMN = 'account';
var CURRENCY_COLUMN = 'currency';
var AMOUNT_COLUMN = 'amount';
var OPEN_PRICE_COLUMN = 'open_price';
var CLOSE_PRICE_COLUMN = 'close_price';
var PERCENTAGE_CHANGE_COLUMN = 'percentage_change';
var TOTAL_PL_ACCOUNT_COLUMN = 'total_pl_account';
var VALUE_ACCOUNT_COLUMN = 'value_account';
var CLOSE_TIME_COLUMN = 'close_time';
var SETTLEMENT_DATE_COLUMN = 'settlement_date';

/***/ }),

/***/ "./src/frontend/modules/closedPositions/formatters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentFormatter", function() { return percentFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeFormatter", function() { return dateTimeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberValueFormatter", function() { return numberValueFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amountFormatter", function() { return amountFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountCurrencyFormatter", function() { return accountCurrencyFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortNumberValueFormatter", function() { return shortNumberValueFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buySellFormatter", function() { return buySellFormatter; });
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");



 // Formatters

var percentFormatter = function percentFormatter(value) {
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["formatPercentage"](value, 2);
};
var dateTimeFormatter = function dateTimeFormatter(value) {
  var when = src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].createDateTime(value);
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].isInvestorApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].isSpaApp ? src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].formatUserTime(when, {
    showSeconds: true
  }) : src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].formatUserDateTime(when, {
    showSeconds: false
  });
};
var numberValueFormatter = function numberValueFormatter(value) {
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](value, 2
  /* position.DisplayAndFormat.Decimals */
  );
};
var amountFormatter = function amountFormatter(value) {
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](value);
};
var accountCurrencyFormatter = function accountCurrencyFormatter(value) {
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](value, 2
  /* decimals */
  );
};
var shortNumberValueFormatter = function shortNumberValueFormatter(value) {
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["format"](value, 0);
}; // OpenAPI returns BuySell, but requirements refer to L/S (Long or Short)

var buySellFormatter = function buySellFormatter(buyOrSell) {
  return buyOrSell === 'Buy' ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Long') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Short');
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/labelFunctions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentName", function() { return getInstrumentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountDisplayName", function() { return getAccountDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuySell", function() { return getBuySell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmount", function() { return getAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortAmount", function() { return getShortAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseTime", function() { return getCloseTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettlementDate", function() { return getSettlementDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenTime", function() { return getOpenTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPercentChange", function() { return getPercentChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseValueInAccountCurrency", function() { return getCloseValueInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseValue", function() { return getCloseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradePL", function() { return getTradePL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCost", function() { return getCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCostAccount", function() { return getCostAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetCostAmount", function() { return createGetCostAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPL", function() { return getTotalPL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortTotalPL", function() { return getShortTotalPL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionId", function() { return getPositionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversionPl", function() { return getConversionPl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTradePLInAccountCurrency", function() { return getTradePLInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetTradePLInAccountCurrency", function() { return createGetTradePLInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPLInAccountCurrency", function() { return getTotalPLInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortTotalPLInAccountCurrency", function() { return getShortTotalPLInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetTotalPLInAccountCurrency", function() { return createGetTotalPLInAccountCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenPrice", function() { return getOpenPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosePrice", function() { return getClosePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultGridSortCompareFunction", function() { return getDefaultGridSortCompareFunction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridSortUtils.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/formatters.js");







var getInstrumentName = function getInstrumentName(_ref) {
  var data = _ref.data;

  var instrument = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, 'instrument');

  if (instrument) {
    return src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_1__["getName"](instrument);
  }

  return '';
};
var getAccountDisplayName = function getAccountDisplayName(_ref2) {
  var account = _ref2.data.account;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(account, ['DisplayName']);
};
var getBuySell = function getBuySell(_ref3) {
  var closedPosition = _ref3.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["buySellFormatter"](closedPosition.BuyOrSell);
};
var getAmount = function getAmount(_ref4) {
  var closedPosition = _ref4.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["amountFormatter"](closedPosition.Amount);
};
var getShortAmount = function getShortAmount(_ref5) {
  var closedPosition = _ref5.data.closedPosition;
  var amount = closedPosition.Amount;

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(amount)) {
    return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["FORMATTED_EMPTY_VALUE"];
  }

  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["shortFormat"](amount);
};
var getCloseTime = function getCloseTime(_ref6) {
  var closedPosition = _ref6.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["dateTimeFormatter"](closedPosition.ExecutionTimeClose);
};
var getSettlementDate = function getSettlementDate(_ref7) {
  var _ref7$data = _ref7.data,
      closedPosition = _ref7$data.closedPosition,
      instrument = _ref7$data.instrument;
  var settlementDate = null;

  if (src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_5__["isSRD"](instrument)) {
    settlementDate = closedPosition.SrdSettlementDate ? src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_4__["default"].formatUserDate(closedPosition.SrdSettlementDate) : src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["FORMATTED_EMPTY_VALUE"];
  }

  return settlementDate;
};
var getOpenTime = function getOpenTime(_ref8) {
  var closedPosition = _ref8.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["dateTimeFormatter"](closedPosition.ExecutionTimeOpen);
};
var getPercentChange = function getPercentChange(_ref9) {
  var closedPosition = _ref9.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["percentFormatter"](closedPosition.PercentageChange);
};
var getCloseValueInAccountCurrency = function getCloseValueInAccountCurrency(_ref10) {
  var closedPosition = _ref10.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.CloseValueAccount);
};
var getCloseValue = function getCloseValue(_ref11) {
  var _ref11$data = _ref11.data,
      closedPosition = _ref11$data.closedPosition,
      instrument = _ref11$data.instrument;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNil(closedPosition.CloseValue) ? '' : _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.CloseValue) + " " + instrument.CurrencyCode;
};
var getTradePL = function getTradePL(_ref12) {
  var _ref12$data = _ref12.data,
      closedPosition = _ref12$data.closedPosition,
      instrument = _ref12$data.instrument;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.TradeProfitLoss) + " " + instrument.CurrencyCode;
};
var getCost = function getCost(_ref13) {
  var _ref13$data = _ref13.data,
      closedPosition = _ref13$data.closedPosition,
      instrument = _ref13$data.instrument;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.Cost) + " " + instrument.CurrencyCode;
};
var getCostAccount = function getCostAccount(selectedAccount, row) {
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["accountCurrencyFormatter"](row.data.closedPosition.CostAccount, selectedAccount.BaseCurrencyDecimals);
};
var createGetCostAmount = function createGetCostAmount(selectedAccount) {
  return function (row) {
    return getCostAccount(selectedAccount, row);
  };
};
var getTotalPL = function getTotalPL(_ref14) {
  var _ref14$data = _ref14.data,
      closedPosition = _ref14$data.closedPosition,
      instrument = _ref14$data.instrument;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.TotalPL) + " " + instrument.CurrencyCode;
};
var getShortTotalPL = function getShortTotalPL(_ref15) {
  var _ref15$data = _ref15.data,
      closedPosition = _ref15$data.closedPosition,
      instrument = _ref15$data.instrument;
  return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](closedPosition.TotalPL, 0) + " " + instrument.CurrencyCode;
};
var getPositionId = function getPositionId(_ref16) {
  var closedPosition = _ref16.data.closedPosition;
  return closedPosition.ClosingPositionId;
};
var getConversionPl = function getConversionPl(_ref17) {
  var closedPosition = _ref17.data.closedPosition;
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](closedPosition.ConversionPl);
};
var getTradePLInAccountCurrency = function getTradePLInAccountCurrency(selectedAccount, row) {
  var info = row.info,
      data = row.data;
  var closedPosition = data.closedPosition;

  if (info.isDivider) {
    return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](info.summaries.TradeProfitLossInBaseCurrency);
  }

  return _formatters__WEBPACK_IMPORTED_MODULE_6__["accountCurrencyFormatter"](closedPosition.TradeProfitLossInBaseCurrency, selectedAccount.BaseCurrencyDecimals);
};
var createGetTradePLInAccountCurrency = function createGetTradePLInAccountCurrency(selectedAccount) {
  return function (row) {
    return getTradePLInAccountCurrency(selectedAccount, row);
  };
};
var getTotalPLInAccountCurrency = function getTotalPLInAccountCurrency(selectedAccount, row) {
  var info = row.info,
      data = row.data;
  var closedPosition = data.closedPosition;

  if (info.isDivider) {
    return _formatters__WEBPACK_IMPORTED_MODULE_6__["numberValueFormatter"](info.summaries.TotalPLAccount);
  }

  return _formatters__WEBPACK_IMPORTED_MODULE_6__["accountCurrencyFormatter"](closedPosition.TotalPLAccount, selectedAccount.BaseCurrencyDecimals);
};
var getShortTotalPLInAccountCurrency = function getShortTotalPLInAccountCurrency(row) {
  return _formatters__WEBPACK_IMPORTED_MODULE_6__["shortNumberValueFormatter"](row.data.closedPosition.TotalPLAccount);
};
var createGetTotalPLInAccountCurrency = function createGetTotalPLInAccountCurrency(selectedAccount) {
  return function (row) {
    return getTotalPLInAccountCurrency(selectedAccount, row);
  };
};
var getOpenPrice = function getOpenPrice(_ref18) {
  var closedPosition = _ref18.data.closedPosition;
  return closedPosition.OpenPrice;
};
var getClosePrice = function getClosePrice(_ref19) {
  var closedPosition = _ref19.data.closedPosition;
  return closedPosition.ClosingPrice;
};
var getCurrency = function getCurrency(_ref20) {
  var instrument = _ref20.data.instrument;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(instrument, 'CurrencyCode', '');
};
var getDefaultGridSortCompareFunction = function getDefaultGridSortCompareFunction(rowA, rowB) {
  var executionTimeA = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(rowA, ['data', 'closedPosition', 'ExecutionTimeClose']);

  var executionTimeB = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(rowB, ['data', 'closedPosition', 'ExecutionTimeClose']);

  return src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__["compare"](executionTimeA, executionTimeB);
};

/***/ }),

/***/ "./src/frontend/modules/depthTrader/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_LAUNCH", function() { return TRIGGER_LAUNCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_RESET_TRADE_MODEL", function() { return TRIGGER_RESET_TRADE_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_PLACE_ORDER", function() { return TRIGGER_PLACE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_DISARM", function() { return TRIGGER_DISARM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_MODIFY_ORDER", function() { return TRIGGER_MODIFY_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_MODIFY_ORDER_SUBMIT", function() { return TRIGGER_MODIFY_ORDER_SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_MODIFY_ORDER_DISMISS", function() { return TRIGGER_MODIFY_ORDER_DISMISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_WAIT_AND_DISARM", function() { return TRIGGER_WAIT_AND_DISARM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_VALIDATIONS", function() { return SHOW_VALIDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_VALIDATIONS", function() { return HIDE_VALIDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_ARMED", function() { return SET_IS_ARMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FROZEN_TRADE_MODEL_PROPS", function() { return SET_FROZEN_TRADE_MODEL_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_CONFIRMATION_SHOWN", function() { return SET_IS_CONFIRMATION_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_DISCLAIMER_SHOWN", function() { return SET_IS_DISCLAIMER_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_DISCLAIMER_COMPLETE", function() { return SET_IS_DISCLAIMER_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
var TRIGGER_LAUNCH = 'depth-trader/trigger-launch';
var TRIGGER_RESET_TRADE_MODEL = 'depth-trader/trigger-reset-trade-model';
var TRIGGER_PLACE_ORDER = 'depth-trader/trigger-place-order';
var TRIGGER_DISARM = 'depth-trader/trigger-disarm';
var TRIGGER_MODIFY_ORDER = 'depth-trader/trigger-modify-order';
var TRIGGER_MODIFY_ORDER_SUBMIT = 'depth-trader/trigger-modify-order-submit';
var TRIGGER_MODIFY_ORDER_DISMISS = 'depth-trader/trigger-modify-order-dismiss';
var TRIGGER_WAIT_AND_DISARM = 'depth-trader/trigger-wait-and-disarm';
var SHOW_VALIDATIONS = 'depth-trader/show-validations';
var HIDE_VALIDATIONS = 'depth-trader/hide-validations';
var SET_IS_ARMED = 'depth-trader/set-is-armed';
var SET_FROZEN_TRADE_MODEL_PROPS = 'depth-trader/set-frozen-trade-model-props';
var SET_IS_CONFIRMATION_SHOWN = 'depth-trader/set-is-confirmation-shown';
var SET_IS_DISCLAIMER_SHOWN = 'depth-trader/set-is-disclaimer-shown';
var SET_IS_DISCLAIMER_COMPLETE = 'depth-trader/set-is-disclaimer-complete';
var DESTROY = 'depth-trader/destroy';

/***/ }),

/***/ "./src/frontend/modules/depthTrader/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerLaunch", function() { return triggerLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerResetTradeModel", function() { return triggerResetTradeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerPlaceOrder", function() { return triggerPlaceOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerModifyOrder", function() { return triggerModifyOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerModifyOrderSubmit", function() { return triggerModifyOrderSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showValidations", function() { return showValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideValidations", function() { return hideValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerDisarm", function() { return triggerDisarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsArmed", function() { return setIsArmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFrozenTradeModelProps", function() { return setFrozenTradeModelProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsConfirmationShown", function() { return setIsConfirmationShown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDisclaimers", function() { return showDisclaimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDisclaimers", function() { return hideDisclaimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetDisclaimers", function() { return resetDisclaimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeDisclaimers", function() { return completeDisclaimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony import */ var src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/windows/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/depthTrader/actionTypes.js");


function triggerLaunch(userSettings, launchedFrom) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_LAUNCH"],
    userSettings: userSettings,
    launchedFrom: launchedFrom,
    parentWindowId: src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_0__["getWindowId"]()
  };
}
function triggerResetTradeModel(tradeModelId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_RESET_TRADE_MODEL"],
    tradeModelId: tradeModelId
  };
}
function triggerPlaceOrder(componentId, tradeModelId, lastSeenPrice, direction, formAction) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_PLACE_ORDER"],
    componentId: componentId,
    tradeModelId: tradeModelId,
    lastSeenPrice: lastSeenPrice,
    direction: direction,
    formAction: formAction
  };
}
function triggerModifyOrder(tradeModelId, order, account) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_MODIFY_ORDER"],
    tradeModelId: tradeModelId,
    order: order,
    account: account,
    parentWindowId: src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_0__["getWindowId"]()
  };
}
function triggerModifyOrderSubmit(componentId, tradeModelId, lastSeenPrice) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_MODIFY_ORDER_SUBMIT"],
    componentId: componentId,
    tradeModelId: tradeModelId,
    lastSeenPrice: lastSeenPrice
  };
}
function showValidations(componentId, fields) {
  if (fields === void 0) {
    fields = [];
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SHOW_VALIDATIONS"],
    componentId: componentId,
    fields: fields
  };
}
function hideValidations(componentId, fields) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["HIDE_VALIDATIONS"],
    componentId: componentId,
    fields: fields
  };
}
function triggerDisarm(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_DISARM"],
    componentId: componentId
  };
}
function setIsArmed(componentId, isArmed) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_ARMED"],
    componentId: componentId,
    isArmed: isArmed
  };
}
function setFrozenTradeModelProps(componentId, tradeModel) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_FROZEN_TRADE_MODEL_PROPS"],
    componentId: componentId,
    tradeModel: tradeModel
  };
}
function setIsConfirmationShown(componentId, isConfirmationShown) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_CONFIRMATION_SHOWN"],
    componentId: componentId,
    isConfirmationShown: isConfirmationShown
  };
}
function showDisclaimers(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_DISCLAIMER_SHOWN"],
    componentId: componentId,
    isDisclaimerShown: true
  };
}
function hideDisclaimers(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_DISCLAIMER_SHOWN"],
    componentId: componentId,
    isDisclaimerShown: false
  };
}
function resetDisclaimers(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_DISCLAIMER_COMPLETE"],
    componentId: componentId,
    isDisclaimerComplete: false
  };
}
function completeDisclaimers(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_IS_DISCLAIMER_COMPLETE"],
    componentId: componentId,
    isDisclaimerComplete: true
  };
}
function destroy(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["DESTROY"],
    componentId: componentId
  };
}

/***/ }),

/***/ "./src/frontend/modules/optionStrategiesTicket/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEACTIVATE", function() { return DEACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_OPTION_ROOT_ID", function() { return SET_OPTION_ROOT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE", function() { return REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEGS", function() { return SET_LEGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEG_PUT_CALL", function() { return SET_LEG_PUT_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEG_BUY_SELL", function() { return SET_LEG_BUY_SELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEG_EXPIRY_DATE", function() { return SET_LEG_EXPIRY_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEG_STRIKE_PRICE", function() { return SET_LEG_STRIKE_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEG_RATIO", function() { return SET_LEG_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_LEG_PRICES", function() { return SUBSCRIBE_LEG_PRICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STRATEGY", function() { return GET_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STRATEGY_SUCCESS", function() { return GET_STRATEGY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STRATEGY_ERROR", function() { return GET_STRATEGY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACE_ORDER", function() { return PLACE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_ORDER", function() { return MODIFY_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_STATUS", function() { return SET_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNDERLYING_INSTRUMENT_KEY", function() { return SET_UNDERLYING_INSTRUMENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEGS_EXPOSURES", function() { return SET_LEGS_EXPOSURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_VALIDATIONS", function() { return SHOW_VALIDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_VALIDATIONS", function() { return HIDE_VALIDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_ALL_VALIDATIONS", function() { return HIDE_ALL_VALIDATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ACKNOWLEDGED_DISCLAIMERS", function() { return SET_ACKNOWLEDGED_DISCLAIMERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_BUY_SELL_REVERSE", function() { return TRIGGER_BUY_SELL_REVERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_PUT_CALL_REVERSE", function() { return TRIGGER_PUT_CALL_REVERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_EXPIRY_CHANGE", function() { return TRIGGER_EXPIRY_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_STRIKE_CHANGE", function() { return TRIGGER_STRIKE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_PUT_CALL_CHANGE", function() { return TRIGGER_PUT_CALL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_BUY_SELL_CHANGE", function() { return TRIGGER_BUY_SELL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_ADD_LEG", function() { return TRIGGER_ADD_LEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_REMOVE_LEG", function() { return TRIGGER_REMOVE_LEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_LAUNCH_TICKET", function() { return TRIGGER_LAUNCH_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HORIZONTAL_OFFSET", function() { return UPDATE_HORIZONTAL_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_SET_ORDER_QUANTITY", function() { return TRIGGER_SET_ORDER_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_INCREMENT_ORDER_QUANTITY", function() { return TRIGGER_INCREMENT_ORDER_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_DECREMENT_ORDER_QUANTITY", function() { return TRIGGER_DECREMENT_ORDER_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_SET_ORDER_PRICE", function() { return TRIGGER_SET_ORDER_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_INCREMENT_ORDER_PRICE", function() { return TRIGGER_INCREMENT_ORDER_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_DECREMENT_ORDER_PRICE", function() { return TRIGGER_DECREMENT_ORDER_PRICE; });
var DESTROY = 'option-strategies-ticket/destroy';
var DEACTIVATE = 'option-strategies-ticket/deactivate';
var SET_OPTION_ROOT_ID = 'option-strategies-ticket/set-option-root-id';
var UPDATE = 'option-strategies-ticket/update';
var REMOVE = 'option-strategies-ticket/remove';
var SET_LEGS = 'option-strategies-ticket/set-legs';
var SET_LEG_PUT_CALL = 'option-strategies-ticket/set-leg-put-call';
var SET_LEG_BUY_SELL = 'option-strategies-ticket/set-leg-buy-sell';
var SET_LEG_EXPIRY_DATE = 'option-strategies-ticket/set-leg-expiry-date';
var SET_LEG_STRIKE_PRICE = 'option-strategies-ticket/set-leg-strike-price';
var SET_LEG_RATIO = 'option-strategies-ticket/set-leg-ratio';
var SUBSCRIBE_LEG_PRICES = 'option-strategies-ticket/subscribe-leg-prices';
var GET_STRATEGY = 'option-strategies-ticket/get-strategy';
var GET_STRATEGY_SUCCESS = 'option-strategies-ticket/get-strategy-success';
var GET_STRATEGY_ERROR = 'option-strategies-ticket/get-strategy-error';
var PLACE_ORDER = 'option-strategies-ticket/place-oder';
var MODIFY_ORDER = 'option-strategies-ticket/modify-oder';
var SET_STATUS = 'option-strategies-ticket/set-status';
var SET_UNDERLYING_INSTRUMENT_KEY = 'option-strategies-ticket/set-underlying-instrument-key';
var SET_LEGS_EXPOSURES = 'option-strategies-ticket/set-legs-exposures';
var SHOW_VALIDATIONS = 'option-strategies-model/show-validations';
var HIDE_VALIDATIONS = 'option-strategies-model/hide-validations';
var HIDE_ALL_VALIDATIONS = 'option-strategies-model/hide-all-validations';
var SET_ACKNOWLEDGED_DISCLAIMERS = 'option-strategies-model/set-acknowledged-disclaimers';
var TRIGGER_BUY_SELL_REVERSE = 'option-strategies-ticket/trigger-buy-sell-reverse';
var TRIGGER_PUT_CALL_REVERSE = 'option-strategies-ticket/trigger-put-call-reverse';
var TRIGGER_EXPIRY_CHANGE = 'option-strategies-ticket/trigger-expiry-change';
var TRIGGER_STRIKE_CHANGE = 'option-strategies-ticket/trigger-strike-change';
var TRIGGER_PUT_CALL_CHANGE = 'option-strategies-ticket/trigger-put-call-change';
var TRIGGER_BUY_SELL_CHANGE = 'option-strategies-ticket/trigger-buy-sell-change';
var TRIGGER_ADD_LEG = 'option-strategies-ticket/trigger-add-leg';
var TRIGGER_REMOVE_LEG = 'option-strategies-ticket/trigger-remove-leg';
var TRIGGER_LAUNCH_TICKET = 'option-strategies-ticket/trigger-launch-ticket';
var UPDATE_HORIZONTAL_OFFSET = 'option-strategies-ticket/update-horizontal-offset';
var TRIGGER_SET_ORDER_QUANTITY = 'option-strategies-ticket/trigger-set-order-quantity';
var TRIGGER_INCREMENT_ORDER_QUANTITY = 'option-strategies-ticket/trigger-increment-order-quantity';
var TRIGGER_DECREMENT_ORDER_QUANTITY = 'option-strategies-ticket/trigger-decrement-order-quantity';
var TRIGGER_SET_ORDER_PRICE = 'options-strategies-ticket/trigger-set-order-price';
var TRIGGER_INCREMENT_ORDER_PRICE = 'options-strategies-ticket/trigger-increment-order-price';
var TRIGGER_DECREMENT_ORDER_PRICE = 'options-strategies-ticket/trigger-decrement-order-price';

/***/ }),

/***/ "./src/frontend/modules/optionStrategiesTicket/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerLaunchTicket", function() { return triggerLaunchTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeg", function() { return addLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeg", function() { return removeLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratioChange", function() { return ratioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expiryChange", function() { return expiryChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strikeChange", function() { return strikeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buySellChange", function() { return buySellChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putCallChange", function() { return putCallChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buySellReverse", function() { return buySellReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putCallReverse", function() { return putCallReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusWaiting", function() { return setStatusWaiting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusReady", function() { return setStatusReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusSuccess", function() { return setStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusError", function() { return setStatusError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusUnavailable", function() { return setStatusUnavailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUnderlyingInstrumentKey", function() { return setUnderlyingInstrumentKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegExpiryDate", function() { return setLegExpiryDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegStrikePrice", function() { return setLegStrikePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegPutCall", function() { return setLegPutCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegBuySell", function() { return setLegBuySell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegs", function() { return setLegs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegsExposures", function() { return setLegsExposures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategy", function() { return getStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLegPrices", function() { return subscribeLegPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategySuccess", function() { return getStrategySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategyError", function() { return getStrategyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptionRootId", function() { return setOptionRootId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOrderQuantity", function() { return setOrderQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOrderPrice", function() { return setOrderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrder", function() { return placeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyOrder", function() { return modifyOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateColumns", function() { return updateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHorizontalOffset", function() { return updateHorizontalOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementOrderQuantity", function() { return incrementOrderQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementOrderQuantity", function() { return decrementOrderQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementOrderPrice", function() { return incrementOrderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementOrderPrice", function() { return decrementOrderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showValidations", function() { return showValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideValidations", function() { return hideValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllValidations", function() { return hideAllValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAcknowledgedDisclaimers", function() { return setAcknowledgedDisclaimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedAccount", function() { return setSelectedAccount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/workspace/component/actions.js");
/* harmony import */ var src_frontend_models_accounts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/accounts/constants.js");
/* harmony import */ var src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/windows/selectors.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridColumnUtils.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/tradeModel/status/statusTypes.js");
/* harmony import */ var src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/settings/actions/userSettingsActions.js");
/* harmony import */ var src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/settings/userSettingKeys.js");
/* harmony import */ var src_frontend_components_disclaimer_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/disclaimer/types.js");
/* harmony import */ var src_frontend_components_disclaimer_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_disclaimer_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _strategyTypes_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/strategyTypes/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/types.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/actionTypes.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/constants.js");


















function destroy(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["DESTROY"],
    componentId: componentId
  };
} // Note that windowId needs to be passed explicitly if triggered from a saga

var triggerLaunchTicket = function triggerLaunchTicket(params, windowId) {
  if (windowId === void 0) {
    windowId = src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_4__["getWindowId"]();
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_LAUNCH_TICKET"],
    params: params,
    windowId: windowId
  };
};
var addLeg = function addLeg(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_ADD_LEG"],
    componentId: componentId
  };
};
var removeLeg = function removeLeg(componentId, legIndex) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_REMOVE_LEG"],
    componentId: componentId,
    legIndex: legIndex
  };
};
function ratioChange(componentId, legIndex, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEG_RATIO"],
    componentId: componentId,
    legIndex: legIndex,
    value: value
  };
}
function expiryChange(componentId, legIndex, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_EXPIRY_CHANGE"],
    componentId: componentId,
    legIndex: legIndex,
    value: value
  };
}
function strikeChange(componentId, legIndex, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_STRIKE_CHANGE"],
    componentId: componentId,
    legIndex: legIndex,
    value: value
  };
}
function buySellChange(componentId, legIndex, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_BUY_SELL_CHANGE"],
    componentId: componentId,
    legIndex: legIndex,
    value: value
  };
}
function putCallChange(componentId, legIndex, value) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_PUT_CALL_CHANGE"],
    componentId: componentId,
    legIndex: legIndex,
    value: value
  };
}
function buySellReverse(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_BUY_SELL_REVERSE"],
    componentId: componentId
  };
}
function putCallReverse(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_PUT_CALL_REVERSE"],
    componentId: componentId
  };
}
function setStatus(componentId, status, statusInfo) {
  if (statusInfo === void 0) {
    statusInfo = '';
  }

  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_STATUS"],
    componentId: componentId,
    status: status,
    statusInfo: statusInfo
  };
}
function setStatusWaiting(componentId) {
  return setStatus(componentId, src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__["WAITING"]);
}
function setStatusReady(componentId) {
  return setStatus(componentId, src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__["READY"]);
}
function setStatusSuccess(componentId, errorMessage) {
  return setStatus(componentId, src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__["SUCCESS"], errorMessage);
}
function setStatusError(componentId, error) {
  var errorMessage = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, ['message']) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, ['response', 'Message']) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, ['response', 'ErrorInfo', 'Message']);

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(errorMessage)) {
    errorMessage = src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ErrorOccured');
  }

  return setStatus(componentId, src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__["ERROR"], errorMessage);
}
function setStatusUnavailable(componentId, statusInfo) {
  return setStatus(componentId, src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_9__["UNAVAILABLE"], statusInfo);
}
function setUnderlyingInstrumentKey(componentId, underlyingInstrumentKey) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_UNDERLYING_INSTRUMENT_KEY"],
    componentId: componentId,
    underlyingInstrumentKey: underlyingInstrumentKey
  };
}
function setLegExpiryDate(componentId, legIndex, uic, expiryDate, strikePrice) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEG_EXPIRY_DATE"],
    componentId: componentId,
    legIndex: legIndex,
    uic: uic,
    expiryDate: expiryDate,
    strikePrice: strikePrice
  };
}
function setLegStrikePrice(componentId, legIndex, uic, strikePrice) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEG_STRIKE_PRICE"],
    componentId: componentId,
    legIndex: legIndex,
    uic: uic,
    strikePrice: strikePrice
  };
}
function setLegPutCall(componentId, legIndex, uic, putCall) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEG_PUT_CALL"],
    componentId: componentId,
    legIndex: legIndex,
    uic: uic,
    putCall: putCall
  };
}
function setLegBuySell(componentId, legIndex, buySell) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEG_BUY_SELL"],
    componentId: componentId,
    legIndex: legIndex,
    buySell: buySell
  };
}
function setLegs(componentId, legs) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEGS"],
    componentId: componentId,
    legs: legs
  };
}
function setLegsExposures(componentId, legsExposures) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_LEGS_EXPOSURES"],
    componentId: componentId,
    legsExposures: legsExposures
  };
}
function getStrategy(componentId, strategyType) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["GET_STRATEGY"],
    componentId: componentId,
    strategyType: strategyType,
    getStrategyStatus: src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__["PENDING"]
  };
}
function subscribeLegPrices(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SUBSCRIBE_LEG_PRICES"],
    componentId: componentId
  };
}
function getStrategySuccess(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["GET_STRATEGY_SUCCESS"],
    componentId: componentId,
    getStrategyStatus: src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__["SUCCESS"]
  };
}
function getStrategyError(componentId, error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["GET_STRATEGY_ERROR"],
    componentId: componentId,
    error: error,
    getStrategyStatus: src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_5__["ERROR"]
  };
}
function setOptionRootId(componentId, optionRootId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_OPTION_ROOT_ID"],
    componentId: componentId,
    optionRootId: optionRootId
  };
}
var setOrderQuantity = function setOrderQuantity(componentId, quantity) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_SET_ORDER_QUANTITY"],
    componentId: componentId,
    quantity: quantity
  };
};
var setOrderPrice = function setOrderPrice(componentId, orderPrice) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_SET_ORDER_PRICE"],
    componentId: componentId,
    orderPrice: orderPrice
  };
};
var placeOrder = function placeOrder(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["PLACE_ORDER"],
    componentId: componentId
  };
};
var modifyOrder = function modifyOrder(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["MODIFY_ORDER"],
    componentId: componentId
  };
};
function updateColumns(componentId, columnsInfo) {
  return function (dispatch, getState) {
    var state = getState();
    var nextColumnInfo = _selectors__WEBPACK_IMPORTED_MODULE_16__["getSavedColumnsInfo"](state, componentId);
    nextColumnInfo = src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_7__["mapNextColumnsInfo"](columnsInfo, nextColumnInfo);

    if (nextColumnInfo) {
      dispatch(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_2__["updateComponentUserSettings"](componentId, {
        columnsInfo: nextColumnInfo
      }));
      dispatch(src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_10__["setUserSetting"](src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_11__["OPTION_STRATEGIES_COLUMNS_INFO"], nextColumnInfo));
    }
  };
}
function updateHorizontalOffset(componentId, horizontalOffset) {
  return function (dispatch) {
    return dispatch(src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_2__["updateComponentUserSettings"](componentId, {
      horizontalOffset: horizontalOffset
    }));
  };
}
var incrementOrderQuantity = function incrementOrderQuantity(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_INCREMENT_ORDER_QUANTITY"],
    componentId: componentId
  };
};
var decrementOrderQuantity = function decrementOrderQuantity(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_DECREMENT_ORDER_QUANTITY"],
    componentId: componentId
  };
};
var incrementOrderPrice = function incrementOrderPrice(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_INCREMENT_ORDER_PRICE"],
    componentId: componentId
  };
};
var decrementOrderPrice = function decrementOrderPrice(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["TRIGGER_DECREMENT_ORDER_PRICE"],
    componentId: componentId
  };
};
var showValidations = function showValidations(componentId, fields) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SHOW_VALIDATIONS"],
    componentId: componentId,
    fields: fields
  };
};
var hideValidations = function hideValidations(componentId, fields) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["HIDE_VALIDATIONS"],
    componentId: componentId,
    fields: fields
  };
};
var hideAllValidations = function hideAllValidations(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["HIDE_ALL_VALIDATIONS"],
    componentId: componentId,
    fields: _constants__WEBPACK_IMPORTED_MODULE_17__["ALL_VALIDATION_FIELDS"]
  };
};
function setAcknowledgedDisclaimers(componentId, disclaimers) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_15__["SET_ACKNOWLEDGED_DISCLAIMERS"],
    componentId: componentId,
    disclaimers: disclaimers
  };
}
function setSelectedAccount(componentId, accountId) {
  var _workspaceComponentAc;

  return src_frontend_workspace_component_actions__WEBPACK_IMPORTED_MODULE_2__["updateComponentUserSettings"](componentId, (_workspaceComponentAc = {}, _workspaceComponentAc[src_frontend_models_accounts_constants__WEBPACK_IMPORTED_MODULE_3__["SELECTED_ACCOUNT_COMPONENT_KEY"]] = accountId, _workspaceComponentAc));
}

/***/ }),

/***/ "./src/frontend/modules/optionStrategiesTicket/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnderlyingInstrumentKey", function() { return getUnderlyingInstrumentKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegs", function() { return getLegs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegsExposures", function() { return getLegsExposures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeg", function() { return getLeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusInfo", function() { return getStatusInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrategyStatus", function() { return getStrategyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionRootId", function() { return getOptionRootId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionRoot", function() { return getOptionRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderId", function() { return getOrderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDetails", function() { return getOrderDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderQuantity", function() { return getOrderQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderType", function() { return getOrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnderlyingInstrumentReady", function() { return isUnderlyingInstrumentReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnderlyingPriceSubscriptionData", function() { return getUnderlyingPriceSubscriptionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnderlyingInstrument", function() { return getUnderlyingInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnderlyingPriceReady", function() { return isUnderlyingPriceReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsModify", function() { return getIsModify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return isReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsShowHeader", function() { return getIsShowHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentId", function() { return getInstrumentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrument", function() { return getInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsOrderNotFound", function() { return getIsOrderNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsStatusUnavailable", function() { return getIsStatusUnavailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsStatusSuccess", function() { return getIsStatusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetSelectedInstrumentKey", function() { return createGetSelectedInstrumentKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptionInstrument", function() { return getDefaultOptionInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUnexpectedError", function() { return getIsUnexpectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegsPriceSubscriptionData", function() { return getLegsPriceSubscriptionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatureTrackingAdditionalData", function() { return getFeatureTrackingAdditionalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedColumnsInfo", function() { return getSavedColumnsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpiryDates", function() { return getExpiryDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegsStrikes", function() { return getLegsStrikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstrumentPreferred", function() { return isInstrumentPreferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstrumentSupported", function() { return isInstrumentSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetLegRows", function() { return createGetLegRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetLegData", function() { return createGetLegData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetLegSignatureSelector", function() { return createGetLegSignatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrderPrice", function() { return getUserOrderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderPrice", function() { return getOrderPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPricePremiumDirection", function() { return getPricePremiumDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTradable", function() { return isTradable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShownValidations", function() { return getShownValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationResults", function() { return getValidationResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAccount", function() { return getSelectedAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAccountId", function() { return getSelectedAccountId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetValidationResult", function() { return createGetValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifyOrderChanged", function() { return isModifyOrderChanged; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/settings/selectors/settingsSelectors.js");
/* harmony import */ var src_frontend_utils_selectorCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/selectorCreators.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_components_validation_validationTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/validation/validationTypes.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_optionSpaces_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/optionSpaces/selectors.js");
/* harmony import */ var src_frontend_models_orders_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/models/orders/selectors.js");
/* harmony import */ var src_frontend_models_pricesSubscription_priceType_queries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/models/pricesSubscription/priceType/queries.js");
/* harmony import */ var src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/pricesSubscription/queries.js");
/* harmony import */ var src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/models/tradeModel/direction/directions.js");
/* harmony import */ var src_frontend_models_tradeModel_orderAmount_queries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/models/tradeModel/orderAmount/queries.js");
/* harmony import */ var src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/models/pricesSubscription/selectors.js");
/* harmony import */ var src_frontend_models_multiLegPricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/models/multiLegPricesSubscription/selectors.js");
/* harmony import */ var src_frontend_models_optionSpaces_queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/models/optionSpaces/queries.js");
/* harmony import */ var src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/models/tradeModel/status/statusTypes.js");
/* harmony import */ var src_frontend_models_tradeModel_orderType_orderTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/models/tradeModel/orderType/orderTypes.js");
/* harmony import */ var src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/models/accounts/queries.js");
/* harmony import */ var src_frontend_models_tradeModel_orderAmount_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/models/tradeModel/orderAmount/constants.js");
/* harmony import */ var src_frontend_models_tradeModel_duration_durationTypes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/models/tradeModel/duration/durationTypes.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var src_frontend_modules_proTradeTicket_expiryDateSelectInput_queries__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/modules/proTradeTicket/expiryDateSelectInput/queries.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/types.js");
/* eslint max-lines: "off" */


































var EMPTY_ARRAY = [];
var EMPTY_OBJECT = {};

var getComponents = function getComponents(state) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(state, ['optionStrategiesTicket', 'components'], EMPTY_OBJECT);
};

var getComponentState = function getComponentState(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponents(state), componentId, _constants__WEBPACK_IMPORTED_MODULE_32__["INITIAL_COMPONENT_STATE"]);
};

var getUnderlyingInstrumentKey = function getUnderlyingInstrumentKey(state, componentId) {
  return getComponentState(state, componentId).underlyingInstrumentKey;
};
var getLegs = function getLegs(state, componentId) {
  return getComponentState(state, componentId).legs;
};
var getLegsExposures = function getLegsExposures(state, componentId) {
  return getComponentState(state, componentId).legsExposures;
};
var getLeg = function getLeg(state, componentId, index) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.nth(getLegs(state, componentId), index);
};
var getStatus = function getStatus(state, componentId) {
  return getComponentState(state, componentId).status;
};
var getStatusInfo = function getStatusInfo(state, componentId) {
  return getComponentState(state, componentId).statusInfo;
};
var getStrategyStatus = function getStrategyStatus(state, componentId) {
  return getComponentState(state, componentId).getStrategyStatus;
};
var getOptionRootId = function getOptionRootId(state, componentId) {
  return getComponentState(state, componentId).optionRootId;
};
var getOptionRoot = function getOptionRoot(state, componentId) {
  return src_frontend_models_optionSpaces_selectors__WEBPACK_IMPORTED_MODULE_10__["getData"](state, getOptionRootId(state, componentId));
};
var getOrderId = function getOrderId(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), 'orderId');
};
var getOrderDetails = function getOrderDetails(state, componentId) {
  return src_frontend_models_orders_selectors__WEBPACK_IMPORTED_MODULE_11__["getOrderDetailsById"](state, getOrderId(state, componentId));
};
var getOrderQuantity = function getOrderQuantity(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), _constants__WEBPACK_IMPORTED_MODULE_32__["QUANTITY_SETTING_KEY"], 1);
};
var getOrderType = function getOrderType(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'orderType', src_frontend_models_tradeModel_orderType_orderTypes__WEBPACK_IMPORTED_MODULE_20__["LIMIT"]);
};
var getDurationType = function getDurationType(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'durationType', src_frontend_models_tradeModel_duration_durationTypes__WEBPACK_IMPORTED_MODULE_23__["DAY_ORDER"]);
};
var isUnderlyingInstrumentReady = function isUnderlyingInstrumentReady(state, componentId) {
  var instrumentKey = getUnderlyingInstrumentKey(state, componentId);
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__["isFetchedByKey"](state, instrumentKey);
};
var getUnderlyingPriceSubscriptionData = function getUnderlyingPriceSubscriptionData(state, componentId) {
  var underlyingPriceSubscriptionId = _queries__WEBPACK_IMPORTED_MODULE_31__["formatUnderlyingPriceSubscriptionId"](componentId);
  return src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_16__["getData"](state, underlyingPriceSubscriptionId);
};
var getUnderlyingInstrument = function getUnderlyingInstrument(state, componentId) {
  var underlyingInstrumentKey = getUnderlyingInstrumentKey(state, componentId);
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__["getDataByKey"](state, underlyingInstrumentKey);
};
var isUnderlyingPriceReady = function isUnderlyingPriceReady(state, componentId) {
  var underlyingPriceSubscriptionId = _queries__WEBPACK_IMPORTED_MODULE_31__["formatUnderlyingPriceSubscriptionId"](componentId);
  var price = getUnderlyingPriceSubscriptionData(state, componentId);
  var status = src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_16__["getStatus"](state, underlyingPriceSubscriptionId);
  var instrument = getUnderlyingInstrument(state, componentId); // The price is 'ready' if there's some price object for the same asset type and UIC. In this case we
  // don't care if we're subscribed, as it may be that we've changed a less important argument (e.g. amount).
  // When the UIC doesn't match, it could be that it's a 'no-price', where the UIC is 0. In that case we
  // need to make sure it's for the current instrument by checking if we're subscribed.

  return price && price.AssetType === instrument.AssetType && (price.Uic === instrument.Uic || src_frontend_models_pricesSubscription_priceType_queries__WEBPACK_IMPORTED_MODULE_12__["isNoPrice"](price) && status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_7__["SUBSCRIBED"]) && !src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_13__["isPending"](price) || status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_7__["ERROR"];
};
var getIsModify = function getIsModify(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), 'isModify', false);
};
var isReady = function isReady(state, componentId) {
  return isUnderlyingInstrumentReady(state, componentId) && isUnderlyingPriceReady(state, componentId) && (!getIsModify(state, componentId) || Boolean(getOrderDetails(state, componentId)));
};
var getIsShowHeader = function getIsShowHeader(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), 'isShowHeader', false);
};
var getInstrumentId = function getInstrumentId(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), 'instrumentId');
};
var getInstrument = function getInstrument(state, componentId) {
  var instrumentId = getInstrumentId(state, componentId);
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__["getDataById"](state, instrumentId);
};
var getIsOrderNotFound = function getIsOrderNotFound(state, componentId) {
  var legs = getLegs(state, componentId);

  var firstLegOrderId = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(legs), 'OrderId');

  return isReady(state, componentId) && getIsModify(state, componentId) && (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(legs) || !src_frontend_models_orders_selectors__WEBPACK_IMPORTED_MODULE_11__["getDataById"](state, firstLegOrderId));
};
var getIsStatusUnavailable = function getIsStatusUnavailable(state, componentId) {
  var status = getStatus(state, componentId);
  return status === src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_19__["UNAVAILABLE"];
};
var getIsStatusSuccess = function getIsStatusSuccess(state, componentId) {
  var status = getStatus(state, componentId);
  return status === src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_19__["SUCCESS"];
};
var createGetSelectedInstrumentKey = function createGetSelectedInstrumentKey() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getIsStatusUnavailable, getOptionRoot, getInstrument, function (isNotSupportedInstrument, optionRoot, instrument) {
    return isNotSupportedInstrument ? src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_26__["getKey"](instrument) : src_frontend_models_optionSpaces_queries__WEBPACK_IMPORTED_MODULE_18__["getDefaultOptionInstrumentKey"](optionRoot);
  });
};
var getDefaultOptionInstrument = function getDefaultOptionInstrument(state, componentId) {
  var optionRoot = getOptionRoot(state, componentId);
  var defaultOptionKey = src_frontend_models_optionSpaces_queries__WEBPACK_IMPORTED_MODULE_18__["getDefaultOptionInstrumentKey"](optionRoot);
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__["getDataByKey"](state, defaultOptionKey);
};

var getIsPriceError = function getIsPriceError(state, componentId) {
  var _getComponentState = getComponentState(state, componentId),
      priceSubscriptionId = _getComponentState.priceSubscriptionId;

  var status = src_frontend_models_pricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_16__["getStatus"](state, priceSubscriptionId);
  return status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_7__["ERROR"];
};

var getIsInstrumentError = function getIsInstrumentError(state, componentId) {
  var instrumentId = getInstrumentId(state, componentId);
  return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_27__["isError"](state, instrumentId);
};

var getIsUnexpectedError = function getIsUnexpectedError(state, componentId) {
  var isPriceError = getIsPriceError(state, componentId);
  var isInstrumentError = getIsInstrumentError(state, componentId);
  var status = getStatus(state, componentId);
  return isPriceError || isInstrumentError || status === src_frontend_models_tradeModel_status_statusTypes__WEBPACK_IMPORTED_MODULE_19__["UNEXPECTED_ERROR"];
};
var getLegsPriceSubscriptionData = function getLegsPriceSubscriptionData(state, componentId) {
  var legsPriceSubscriptionId = _queries__WEBPACK_IMPORTED_MODULE_31__["formatPriceSubscriptionId"](componentId);
  return src_frontend_models_multiLegPricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_17__["getData"](state, legsPriceSubscriptionId) || EMPTY_OBJECT;
};
var getFeatureTrackingAdditionalData = function getFeatureTrackingAdditionalData(state) {
  return {
    sessionId: src_frontend_config__WEBPACK_IMPORTED_MODULE_2__["default"].auth.sessionId,
    clientId: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_25__["getClientId"](state)
  };
};
var getSavedColumnsInfo = function getSavedColumnsInfo(state, componentId) {
  return src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId).columnsInfo;
};
var getExpiryDates = function getExpiryDates() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getOptionRoot, function (optionRoot) {
    return optionRoot ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(src_frontend_models_optionSpaces_queries__WEBPACK_IMPORTED_MODULE_18__["getExpiryDates"](optionRoot), function (expiry) {
      var text = src_frontend_modules_proTradeTicket_expiryDateSelectInput_queries__WEBPACK_IMPORTED_MODULE_29__["formatContractOptionExpiryDate"](expiry, optionRoot);
      return {
        value: expiry.Expiry,
        text: text
      };
    }) : EMPTY_ARRAY;
  });
};
var getLegsStrikes = function getLegsStrikes() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, getOptionRoot, function (legs, optionRoot) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(legs, function (result, leg) {
      var expiryDate = _queries__WEBPACK_IMPORTED_MODULE_31__["getLegExpiryDate"](leg);

      var strikes = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(src_frontend_models_optionSpaces_queries__WEBPACK_IMPORTED_MODULE_18__["getStrikePrices"](optionRoot, expiryDate), function (strike) {
        return {
          text: strike,
          value: strike
        };
      });

      result[leg.Uic] = optionRoot ? strikes : EMPTY_ARRAY;
      return result;
    }, {});
  });
};
var isInstrumentPreferred = function isInstrumentPreferred(state, instrument) {
  return src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["isAssetTypePreferred"](src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_26__["getAssetType"](instrument), src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_3__["getAssetTypePreferences"](state));
};
var isInstrumentSupported = function isInstrumentSupported(state, instrument) {
  var optionRootId = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["getRelatedOptionRootId"](instrument);
  var optionAssetType = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_24__["getRelatedOptionRootType"](instrument) || src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_26__["getAssetType"](instrument);
  return isInstrumentPreferred(state, instrument) && src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_26__["isAssetTypeLegal"](optionAssetType, src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_25__["getLegalAssetTypes"](state)) && _queries__WEBPACK_IMPORTED_MODULE_31__["isInstrumentTypeSupported"](instrument) && src_frontend_models_optionSpaces_selectors__WEBPACK_IMPORTED_MODULE_10__["getCanParticipateInMultiLegOrder"](state, optionRootId);
};
var createGetLegRows = function createGetLegRows() {
  return Object(src_frontend_utils_selectorCreators__WEBPACK_IMPORTED_MODULE_4__["createIfEqualSameRefSelector"])(Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, getOptionRoot, getExpiryDates(), getLegsExposures, getLegsStrikes(), getLegsPriceSubscriptionData, function (legs, optionRoot, expiries, legsExposures, legsStrikes, legsPrices) {
    if (legsPrices === void 0) {
      legsPrices = EMPTY_OBJECT;
    }

    var PriceSource = src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_13__["getSource"](legsPrices);

    var rows = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(legs, function (leg, id) {
      var legPrices = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(legsPrices.Legs, {
        Uic: leg.Uic
      }) || EMPTY_OBJECT;
      return {
        id: id,
        data: {
          priceData: {
            PriceSource: PriceSource
          },
          expiries: expiries,
          strikes: legsStrikes[leg.Uic],
          legExposure: legsExposures[leg.Uic],
          leg: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
            Quote: legPrices.Quote,
            Greeks: legPrices.Greeks
          }, leg)
        }
      };
    });

    var delayedByMinutes = src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_13__["getDelay"](legsPrices);
    var isMarketOpen = src_frontend_models_pricesSubscription_queries__WEBPACK_IMPORTED_MODULE_13__["getIsMarketOpen"](legsPrices);
    var isNoAccess = src_frontend_models_pricesSubscription_priceType_queries__WEBPACK_IMPORTED_MODULE_12__["isNoAccess"](legsPrices);
    rows.push({
      id: _constants__WEBPACK_IMPORTED_MODULE_32__["ADD_LEG_ROW_ID"],
      data: {
        legRowsCount: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.size(rows),
        delayedByMinutes: delayedByMinutes,
        isMarketOpen: isMarketOpen,
        isNoAccess: isNoAccess,
        priceSourceName: PriceSource,
        leg: {
          Quote: legsPrices.Quote,
          Greeks: legsPrices.Greeks
        }
      }
    });
    return rows;
  }));
};
var createGetLegData = function createGetLegData() {
  return Object(src_frontend_utils_selectorCreators__WEBPACK_IMPORTED_MODULE_4__["createIfEqualSameRefSelector"])(Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(createGetLegRows(), function (rows) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(rows).reject(function (row) {
      return row.id === _constants__WEBPACK_IMPORTED_MODULE_32__["ADD_LEG_ROW_ID"];
    }).map('data').value();
  }));
};
var createGetLegSignatureSelector = function createGetLegSignatureSelector() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, function (legs) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(legs, function (leg) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(leg, ['BuySell', 'Uic', 'Ratio']);
    });
  });
};
var getUserOrderPrice = function getUserOrderPrice(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), _constants__WEBPACK_IMPORTED_MODULE_32__["ORDER_PRICE_SETTING_KEY"]);
};
var getOrderPrice = function getOrderPrice(state, componentId) {
  return getUserOrderPrice(state, componentId) || 0;
};
var getPricePremiumDirection = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getOrderPrice, src_frontend_models_multiLegPricesSubscription_selectors__WEBPACK_IMPORTED_MODULE_17__["getStrategyDirection"], function (orderPrice, strategyDirection) {
  switch (strategyDirection) {
    case src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_14__["BUY"]:
      return orderPrice >= 0 ? _constants__WEBPACK_IMPORTED_MODULE_32__["PREMIUM_DIRECTION"].DEBIT : _constants__WEBPACK_IMPORTED_MODULE_32__["PREMIUM_DIRECTION"].CREDIT;

    case src_frontend_models_tradeModel_direction_directions__WEBPACK_IMPORTED_MODULE_14__["SELL"]:
      return orderPrice >= 0 ? _constants__WEBPACK_IMPORTED_MODULE_32__["PREMIUM_DIRECTION"].CREDIT : _constants__WEBPACK_IMPORTED_MODULE_32__["PREMIUM_DIRECTION"].DEBIT;

    default:
      return null;
  }
});
var isTradable = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegsPriceSubscriptionData, src_frontend_models_pricesSubscription_priceType_queries__WEBPACK_IMPORTED_MODULE_12__["isTradable"]);
var getShownValidations = function getShownValidations(state, componentId) {
  var _getComponentState2 = getComponentState(state, componentId),
      shownValidations = _getComponentState2.shownValidations;

  return shownValidations;
};
var isLegsCountValid = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, function (legs) {
  return _queries__WEBPACK_IMPORTED_MODULE_31__["isLegsCountValid"](legs) ? null : src_frontend_components_validation_validationTypes__WEBPACK_IMPORTED_MODULE_8__["error"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('OptionStrategies_IncorrectNumberOfLegs'));
});
var areLegsUnique = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, function (legs) {
  return _queries__WEBPACK_IMPORTED_MODULE_31__["areLegsUnique"](legs) ? null : src_frontend_components_validation_validationTypes__WEBPACK_IMPORTED_MODULE_8__["error"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('OptionStrategies_NotUniqueLegs'));
});
var areLegsRatiosValid = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLegs, function (legs) {
  return _queries__WEBPACK_IMPORTED_MODULE_31__["areLegRatiosValid"](legs) ? null : src_frontend_components_validation_validationTypes__WEBPACK_IMPORTED_MODULE_8__["error"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('OptionStrategies_InvalidRatioCombination'));
});
var getValidationResults = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(validateOrderQuantity, isLegsCountValid, areLegsUnique, areLegsRatiosValid, function () {
  for (var _len = arguments.length, validations = new Array(_len), _key = 0; _key < _len; _key++) {
    validations[_key] = arguments[_key];
  }

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.zipObject([_constants__WEBPACK_IMPORTED_MODULE_32__["QUANTITY_FIELD"], _constants__WEBPACK_IMPORTED_MODULE_32__["LEGS_COUNT"], _constants__WEBPACK_IMPORTED_MODULE_32__["LEGS_UNIQUE"], _constants__WEBPACK_IMPORTED_MODULE_32__["LEGS_RATIO_VALID"]], validations);
});

function validateOrderQuantity(state, componentId) {
  var orderType = getOrderType(state, componentId);
  var orderPrice = getOrderPrice(state, componentId);
  var orderQuantity = getOrderQuantity(state, componentId);
  var optionRoot = getOptionRoot(state, componentId) || {};
  return src_frontend_models_tradeModel_orderAmount_queries__WEBPACK_IMPORTED_MODULE_15__["validateOrderAmount"](orderQuantity, optionRoot, orderPrice, orderType, null, src_frontend_models_tradeModel_orderAmount_constants__WEBPACK_IMPORTED_MODULE_22__["MAX_AMOUNT"], false);
}

var getPersistedAccountId = function getPersistedAccountId(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_6__["getComponentUserSettings"](state, componentId), _constants__WEBPACK_IMPORTED_MODULE_32__["SELECTED_ACCOUNT_COMPONENT_KEY"]);
};

var getAccountId = function getAccountId(state, componentId) {
  var accountId = getPersistedAccountId(state, componentId); // Ensure the account id is always sent back as a string
  // Needed accounts may be stored as a number.

  accountId = accountId && String(accountId);

  if (!accountId || !src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__["getAccountById"](state, accountId)) {
    accountId = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__["getDefaultAccountIdIncludingSummary"](state);
  } // when a client only have one account, we want to be sure that we are not using summary id


  var accounts = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__["getAccountsList"](state);

  if (accounts.length < 3) {
    accountId = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(accounts, {
      IsAccount: true
    }), 'AccountId');
  }

  return accountId;
};

var getSelectedAccount = function getSelectedAccount(state, componentId) {
  var isModify = getIsModify(state, componentId);

  if (isModify) {
    var orderDetails = getOrderDetails(state, componentId);

    if (orderDetails && orderDetails.AccountId) {
      return src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__["getAccountById"](state, orderDetails.AccountId);
    }
  }

  var optionRoot = getOptionRoot(state, componentId);
  var selectedAccountId = getAccountId(state, componentId);
  return src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_9__["getDefaultAccountForInstrument"](state, optionRoot, undefined, selectedAccountId);
};
var getSelectedAccountId = function getSelectedAccountId(state, componentId) {
  var isModify = getIsModify(state, componentId);

  if (isModify) {
    var orderDetails = getOrderDetails(state, componentId);

    if (orderDetails && orderDetails.AccountId) {
      return orderDetails.AccountId;
    }
  }

  return src_frontend_models_accounts_queries__WEBPACK_IMPORTED_MODULE_21__["getAccountId"](getSelectedAccount(state, componentId));
};
var createGetValidationResult = function createGetValidationResult() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getValidationResults, getShownValidations, function (validationResults, shownValidations) {
    return function (validationName) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(shownValidations, validationName)) {
        return validationResults[validationName];
      }

      return null;
    };
  });
};
var isModifyOrderChanged = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getOrderDetails, getOrderPrice, getOrderQuantity, function (orderDetails, orderPrice, orderQuantity) {
  return !(orderDetails && orderDetails.Price === orderPrice && orderDetails.Amount === orderQuantity);
});

/***/ }),

/***/ "./src/frontend/modules/optionStrategiesTicket/strategyTypes/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strategyTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/optionStrategiesTicket/strategyTypes/strategyTypes.js");


/***/ }),

/***/ "./src/frontend/modules/optionsChain/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_ID", function() { return COMPONENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_ASSET_TYPES", function() { return OPTION_ASSET_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FX_OPTION_STRATEGY_ASSET_TYPES", function() { return FX_OPTION_STRATEGY_ASSET_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCHANGES_WITH_GREEKS", function() { return EXCHANGES_WITH_GREEKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_GROUP_DEFAULT", function() { return COLUMN_GROUP_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_GROUP_GREEKS", function() { return COLUMN_GROUP_GREEKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_GROUP_VANILLA_OPTION", function() { return COLUMN_GROUP_VANILLA_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMN_GROUP_BINARY_OPTION", function() { return COLUMN_GROUP_BINARY_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CULL_RATIO", function() { return CULL_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRY_HEIGHT", function() { return EXPIRY_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIKE_HEIGHT", function() { return STRIKE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIKE_LIMIT_DEFAULT", function() { return STRIKE_LIMIT_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIKE_LIMIT_ALL", function() { return STRIKE_LIMIT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFLOG_LOAD", function() { return PERFLOG_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_INSTRUMENT_NOT_FOUND", function() { return ERROR_INSTRUMENT_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_OPTION_NOT_AVAILABLE", function() { return ERROR_OPTION_NOT_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_UNKNOWN", function() { return ERROR_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUMENTS_SEARCH_FILTERS", function() { return INSTRUMENTS_SEARCH_FILTERS; });
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");


var COMPONENT_ID = 'options-chain'; // Prefixes used to differentiate columns on each side of the strike.

var CALL = 'Call';
var PUT = 'Put';
var OPTION_ASSET_TYPES = [src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_VANILLA_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_BINARY_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_NO_TOUCH_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_ONE_TOUCH_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["STOCK_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["STOCK_INDEX_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FUTURES_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["CFD_INDEX_OPTION"]];
var FX_OPTION_STRATEGY_ASSET_TYPES = [src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_VANILLA_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_NO_TOUCH_OPTION"], src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_1__["FX_ONE_TOUCH_OPTION"]];
var EXCHANGES_WITH_GREEKS = ['OPRA', 'CME', 'CBOT', 'COMEX', 'NYMEX', 'EUREX', 'EUR_PAR1', 'EUR_PAR2', 'EUR_AMS2'];
var COLUMN_GROUP_DEFAULT = 'default';
var COLUMN_GROUP_GREEKS = 'greeks';
var COLUMN_GROUP_VANILLA_OPTION = 'FxVanillaOption';
var COLUMN_GROUP_BINARY_OPTION = 'FxBinaryOption'; // Grid

var CULL_RATIO = 0.5;
var EXPIRY_HEIGHT = src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].isProApp ? 21 : 18;
var STRIKE_HEIGHT = src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].isProApp ? 21 : 25; // Default strike limit

var STRIKE_LIMIT_DEFAULT = src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].isPhoneApp ? 4 : 6; // Maximum number of strikes per expiry that can be subscribed to. This is used
// when All strikes has been selected by the user.

var STRIKE_LIMIT_ALL = 100;
var PERFLOG_LOAD = 'optionsChainLoad';
var ERROR_INSTRUMENT_NOT_FOUND = 'ERROR_INSTRUMENT_NOT_FOUND';
var ERROR_OPTION_NOT_AVAILABLE = 'ERROR_OPTION_NOT_AVAILABLE';
var ERROR_UNKNOWN = 'ERROR_UNKNOWN';
var INSTRUMENTS_SEARCH_FILTERS = {
  assetTypes: OPTION_ASSET_TYPES
};

/***/ }),

/***/ "./src/frontend/modules/optionsChain/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumns", function() { return getColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentInfo", function() { return getInstrumentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnderlyingPriceSubscriptionId", function() { return getUnderlyingPriceSubscriptionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOptionsChainAvailable", function() { return isOptionsChainAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowedFxOptionStrategy", function() { return isAllowedFxOptionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetType", function() { return getAssetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnGroup", function() { return getColumnGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetExpiries", function() { return createGetExpiries; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var _subscription_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/optionsChain/subscription/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/optionsChain/constants.js");








function getSettings(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(state, ['optionsChain', 'settings', componentId], {});
}
function getColumns(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(state, ['optionsChain', 'columns', componentId], []);
}
function getInstrumentInfo(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(getSettings(state, componentId), 'instrumentInfo');
}
function getUnderlyingPriceSubscriptionId(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(getSettings(state, componentId), 'underlyingPriceSubscriptionId');
}

function getExpiries(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(state, ['optionsChain', 'expiries', componentId], {});
}

var isOptionsChainAvailable = function isOptionsChainAvailable(state) {
  if (!src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].appFeatures.isOptionsChainEnabled) {
    return false;
  }

  return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(getLegalOptionAssetTypes(state));
};

function getLegalOptionAssetTypes(state) {
  var allowedAssetTypes = src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_4__["getLegalAssetTypes"](state);
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.intersection(allowedAssetTypes, _constants__WEBPACK_IMPORTED_MODULE_7__["OPTION_ASSET_TYPES"]);
}

function getLegalOptionAssetTypesForInstrument(state, instrument) {
  if (!instrument) {
    return [];
  }

  var legalOptionAssetTypes = getLegalOptionAssetTypes(state);
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.intersection(legalOptionAssetTypes, instrument.TradableAs);
}

var isAllowedFxOptionStrategy = function isAllowedFxOptionStrategy(state, instrument) {
  var legalAssetTypes = getLegalOptionAssetTypesForInstrument(state, instrument);

  var legalFxOptionAssetTypes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.intersection(_constants__WEBPACK_IMPORTED_MODULE_7__["FX_OPTION_STRATEGY_ASSET_TYPES"], legalAssetTypes);

  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.difference(_constants__WEBPACK_IMPORTED_MODULE_7__["FX_OPTION_STRATEGY_ASSET_TYPES"], legalFxOptionAssetTypes));
};

function getStrikeUic(strikeData, subscriptionArgs) {
  if (subscriptionArgs.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_5__["FX_VANILLA_OPTION"] || subscriptionArgs.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_5__["FX_BINARY_OPTION"]) {
    return subscriptionArgs.Identifier;
  }

  return strikeData.Uic;
}
/**
 * Calculates "Return (if Buy)" based on the Ask price.
 *
 * @param  {Number} askPrice
 * @return {Number}
 */


function getReturnIfBuy(askPrice) {
  if (askPrice === 0) {
    return 0;
  }

  return 1 / askPrice - 1;
}

var getAssetType = function getAssetType(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(_subscription_selectors__WEBPACK_IMPORTED_MODULE_6__["getArguments"](state, componentId), ['AssetType']);
};
/**
 * Selector that returns the column group for use with the column picker.
 *
 * - FX vanilla and FX binaries have individual sets of columns.
 * - All other instruments use the default set up columns.
 * - Except for US ETO's who also have greeks in addition to the default columns.
 */

function getColumnGroup(state, componentId) {
  var settings = getSettings(state, componentId);
  var assetType = getAssetType(state, componentId);

  if (assetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_5__["FX_VANILLA_OPTION"]) {
    return _constants__WEBPACK_IMPORTED_MODULE_7__["COLUMN_GROUP_VANILLA_OPTION"];
  }

  if (assetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_5__["FX_BINARY_OPTION"]) {
    return _constants__WEBPACK_IMPORTED_MODULE_7__["COLUMN_GROUP_BINARY_OPTION"];
  }

  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(_constants__WEBPACK_IMPORTED_MODULE_7__["EXCHANGES_WITH_GREEKS"], settings.exchangeId)) {
    return _constants__WEBPACK_IMPORTED_MODULE_7__["COLUMN_GROUP_GREEKS"];
  }

  return _constants__WEBPACK_IMPORTED_MODULE_7__["COLUMN_GROUP_DEFAULT"];
}
var createGetExpiries = function createGetExpiries() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getExpiries, _subscription_selectors__WEBPACK_IMPORTED_MODULE_6__["getData"], _subscription_selectors__WEBPACK_IMPORTED_MODULE_6__["getArguments"], getSettings, function (expiries, subscriptionData, subscriptionArgs, settings) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chain(subscriptionData).get('Expiries').mapValues(function (expiry, expiryIndex) {
      // Assign expiry details
      expiry = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults({}, expiries[Number(expiry.Index)], expiry);

      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(expiry.Strikes)) {
        var strikes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(expiry.Strikes, function (strike) {
          return strike.Call || strike.Put || strike.OneTouch || strike.NoTouch;
        }); // Wrap strikes to create a lodash object with access to the
        // next method.
        // eslint-disable-next-line lodash/unwrap


        var wrappedStrikes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chain(strikes); // Offset by n + 1 to get the next strike


        wrappedStrikes.next();
        expiry.Strikes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(strikes, function (strike, strikeIndex) {
          // Clone to not mutate the original state
          strike = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.clone(strike);
          var nextStrike = wrappedStrikes.next().value; // Options

          if (strike.Call) {
            // Mark the last strike which is in-the-money
            strike.InMoneySeperator = strike.Strike <= expiry.MidStrikePrice && nextStrike && nextStrike.Strike > expiry.MidStrikePrice;
            strike.CallInMoney = expiry.MidStrikePrice && strike.Strike <= expiry.MidStrikePrice;
            strike.Call = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, strike.Call, strike.Call.Greeks, {
              Strike: strike.Strike,
              LastUpdated: subscriptionData.LastUpdated,
              MidVolatilityPct: strike.MidVolatilityPct
            });
            strike.Call.Uic = getStrikeUic(strike.Call, subscriptionArgs);
          }

          if (strike.Put) {
            strike.PutInMoney = expiry.MidStrikePrice && strike.Strike > expiry.MidStrikePrice;
            strike.Put = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, strike.Put, strike.Put.Greeks, {
              Strike: strike.Strike,
              LastUpdated: subscriptionData.LastUpdated,
              MidVolatilityPct: strike.MidVolatilityPct
            });
            strike.Put.Uic = getStrikeUic(strike.Put, subscriptionArgs);
          } // Binary Options


          if (strike.OneTouch) {
            // Mark the last strike which is in-the-money
            strike.InMoneySeperator = strike.Barrier <= expiry.MidStrikePrice && nextStrike && nextStrike.Barrier > expiry.MidStrikePrice;
            strike.CallInMoney = expiry.MidStrikePrice && strike.Barrier <= expiry.MidStrikePrice;
            strike.Call = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(strike.OneTouch, strike.OneTouch.Greeks, {
              LastUpdated: subscriptionData.LastUpdated,
              MidVolatilityPct: strike.MidVolatilityPct,
              ReturnIfBuy: getReturnIfBuy(strike.OneTouch.Ask)
            });
            strike.Call.Uic = subscriptionArgs.Identifier;
          }

          if (strike.NoTouch) {
            strike.PutInMoney = expiry.MidStrikePrice && strike.Barrier > expiry.MidStrikePrice;
            strike.Put = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(strike.NoTouch, strike.NoTouch.Greeks, {
              LastUpdated: subscriptionData.LastUpdated,
              MidVolatilityPct: strike.MidVolatilityPct,
              ReturnIfBuy: getReturnIfBuy(strike.NoTouch.Ask)
            });
            strike.Put.Uic = subscriptionArgs.Identifier;
          }

          strike.IsSelected = Number(expiryIndex) === settings.selectedExpiry && Number(strikeIndex) === settings.selectedStrike;
          return strike;
        });
      } // assign in money separator index


      expiry.inMoneySeparatorIndex = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(expiry.Strikes, ['InMoneySeperator', true]), 'Index');
      return expiry;
    }).value();
  });
};

/***/ }),

/***/ "./src/frontend/modules/proTradeTicket/expiryDateSelectInput/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatContractOptionExpiryDate", function() { return formatContractOptionExpiryDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedSelectItems", function() { return getFormattedSelectItems; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");





var formatContractOptionExpiryDate = function formatContractOptionExpiryDate(optionEntry, instrument) {
  var DisplayExpiry = optionEntry.DisplayExpiry,
      Expiry = optionEntry.Expiry;

  if (!DisplayExpiry) {
    return '';
  }

  if (!Expiry) {
    return DisplayExpiry;
  }

  var formattedDisplayExpiryDate = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_4__["isFutureOption"](instrument) ? src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].formatUtcYearMonth(DisplayExpiry) : src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].formatUserDate(Expiry);
  var offset = src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"].dayOffset(Expiry);

  switch (offset) {
    case 0:
      return src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_3__["formatString"]('{0} ({1})', formattedDisplayExpiryDate, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Today'));

    case 1:
      return src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_3__["formatString"]('{0} (1 {1})', formattedDisplayExpiryDate, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Day'));

    default:
      return src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_3__["formatString"]('{0} ({1} {2})', formattedDisplayExpiryDate, offset, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Days'));
  }
};
var getFormattedSelectItems = function getFormattedSelectItems(optionRoot, instrument) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(optionRoot.OptionSpace, 'Expiry'), function (optionEntry) {
    return {
      // $FlowExpectedError - expiry is set
      value: optionEntry.Expiry,
      text: formatContractOptionExpiryDate(optionEntry, instrument)
    };
  });
};

/***/ }),

/***/ "./src/frontend/modules/timeAndSales/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_LAUNCH", function() { return TRIGGER_LAUNCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_INSTRUMENT", function() { return SET_INSTRUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_LINKED_INSTRUMENT", function() { return CHECK_LINKED_INSTRUMENT; });
var TRIGGER_LAUNCH = 'sagas/timeAndSales/triggerLaunch';
var SET_INSTRUMENT = 'sagas/timeAndSales/setInstrument';
var CHECK_LINKED_INSTRUMENT = 'sagas/timeAndSales/checkLinkedInstrument';

/***/ }),

/***/ "./src/frontend/modules/timeAndSales/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerLaunch", function() { return triggerLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInstrument", function() { return setInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLinkedInstrument", function() { return checkLinkedInstrument; });
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/windows/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/timeAndSales/actionTypes.js");



function triggerLaunch(instrumentKey) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["TRIGGER_LAUNCH"],
    instrumentKey: instrumentKey,
    parentWindowId: src_frontend_models_windows_selectors__WEBPACK_IMPORTED_MODULE_1__["getWindowId"]()
  };
}
function setInstrument(componentId, instrument) {
  var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_0__["getKey"](instrument);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["SET_INSTRUMENT"],
    componentId: componentId,
    instrumentKey: instrumentKey
  };
}
function checkLinkedInstrument(componentId, instrument) {
  var instrumentKey = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_0__["getKey"](instrument);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHECK_LINKED_INSTRUMENT"],
    componentId: componentId,
    instrumentKey: instrumentKey
  };
}

/***/ }),

/***/ "./src/frontend/modules/timeAndSales/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptionArguments", function() { return getSubscriptionArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridRows", function() { return getGridRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeRange", function() { return getTimeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVolume", function() { return getVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTurnover", function() { return getTurnover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTraded", function() { return getLastTraded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTrades", function() { return getTotalTrades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPercentChange", function() { return getPercentChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVWAP", function() { return getVWAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstrumentSupported", function() { return isInstrumentSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeAndSalesAvailable", function() { return isTimeAndSalesAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDifferentDate", function() { return isDifferentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeRangeFormatter", function() { return getTimeRangeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnderlyingInstrumentSupported", function() { return isUnderlyingInstrumentSupported; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/spine/models/account.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");







/**
 * @param  {String} instrument.uic
 * @param  {String} instrument.assetType
 * @return {Objecty}
 */

var getSubscriptionArguments = function getSubscriptionArguments(_ref) {
  var uic = _ref.uic,
      assetType = _ref.assetType;
  return {
    Uic: uic,
    AssetType: assetType,
    UpdateInterval: 100
  };
};
var getGridRows = function getGridRows(tradeData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(tradeData, function (item) {
    return {
      id: item.Id.toString(),
      data: item,
      info: {
        'data-test-id': "time-and-sales-" + item.Id
      }
    };
  });
};
var getTimeRange = function getTimeRange(tradeData) {
  var result = {};

  if (tradeData && tradeData.length > 0) {
    result.startDate = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.last(tradeData).TimeStamp;
    result.endDate = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(tradeData).TimeStamp;
  }

  return result;
};
var getVolume = function getVolume(tradeData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(tradeData, function (sum, t) {
    return sum + t.Size;
  }, 0);
};
var getTurnover = function getTurnover(tradeData) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(tradeData, function (sum, t) {
    return sum + t.Size * t.Price;
  }, 0);
};
var getLastTraded = function getLastTraded(tradeData) {
  return tradeData && tradeData.length > 0 ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(tradeData).Price : 0;
};
var getTotalTrades = function getTotalTrades(tradeData) {
  return tradeData ? tradeData.length : 0;
};
var getPercentChange = function getPercentChange(tradeData) {
  var priceDiff = 0;

  if (tradeData && tradeData.length > 0) {
    var firstPrice = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.last(tradeData).Price;

    var currentPrice = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(tradeData).Price;

    if (firstPrice && currentPrice) {
      priceDiff = (currentPrice - firstPrice) / firstPrice;
    }
  }

  return priceDiff;
};
var getVWAP = function getVWAP(tradeData, volume) {
  var value = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(tradeData, function (sum, t) {
    return sum + t.Size * t.Price;
  }, 0);

  return value / volume;
};
var isInstrumentSupported = function isInstrumentSupported(instrument) {
  return instrument && (src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__["isFuture"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__["isLegacyStock"](instrument)) && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_2__["isTradable"](instrument);
};
var isTimeAndSalesAvailable = function isTimeAndSalesAvailable() {
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_4__["default"].appFeatures.isTimeAndSalesEnabled && (src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["CONTRACT_FUTURES"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["STOCK"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["ETF"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["ETN"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["ETC"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["RIGHTS"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["WARRANT"]) || src_frontend_spine_models_account__WEBPACK_IMPORTED_MODULE_3__["default"].canTradeAssetType(src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_6__["FUND"]));
};
var isDifferentDate = function isDifferentDate(timeRange) {
  var startDate = src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(timeRange.startDate);
  var endDate = src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(timeRange.endDate);
  return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].differentDate(startDate, endDate);
};
var getTimeRangeFormatter = function getTimeRangeFormatter(timeRange) {
  return isDifferentDate(timeRange) ? src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDateTime : src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserTime;
};
var isUnderlyingInstrumentSupported = function isUnderlyingInstrumentSupported(instrument) {
  var underlyingInstrumentKey = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_2__["getUnderlyingInstrumentKey"](instrument);
  return (src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__["isCfd"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__["isSRD"](instrument)) && underlyingInstrumentKey && src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_1__["isLegacyStock"]({
    AssetType: underlyingInstrumentKey.assetType
  });
};

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/0.js.map