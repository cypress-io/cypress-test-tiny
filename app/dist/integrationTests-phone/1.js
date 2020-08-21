(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/frontend/app/spa/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVESTMENTS", function() { return INVESTMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_PAGE", function() { return CLIENT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_SUPPORT", function() { return CONTACT_SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY_LOG", function() { return ACTIVITY_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGED_OUT", function() { return LOGGED_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_ACCOUNT", function() { return OPEN_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIPTIONS", function() { return SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIFID_STATUS_WINDOW", function() { return MIFID_STATUS_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IB_TRADE_BLOTTER", function() { return IB_TRADE_BLOTTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_ALLOCATIONS", function() { return TRADE_ALLOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADING", function() { return TRADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_OF_BUSINESS", function() { return BOOK_OF_BUSINESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTS", function() { return CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPOSITS_TRANSFERS", function() { return DEPOSITS_TRANSFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_DETAILS", function() { return CLIENT_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_MANAGER", function() { return MODEL_MANAGER; });
/* harmony import */ var src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/components/router/constants.js");
 // Static routes

var INVESTMENTS = "/investments/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_CLIENT_KEY"] + "/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_SELECTED_TAB_ID"] + "?";
var CLIENT_PAGE = "/client/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_CLIENT_KEY"] + "/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_SELECTED_TAB_ID"] + "?";
var CONTACT_SUPPORT = '/contact-support';
var ACTIVITY_LOG = "/activity-log/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_CLIENT_KEY"];
var SETTINGS = '/settings';
var ERROR = "/error/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_ERROR_TYPE"];
var LOGGED_OUT = '/logged-out';
var OPEN_ACCOUNT = '/open-account';
var SUBSCRIPTIONS = '/subscriptions';
var MIFID_STATUS_WINDOW = '/mifid-status';
var IB_TRADE_BLOTTER = '/trading/trade-blotter';
var TRADE_ALLOCATIONS = '/trading/trade-allocations';
var TRADING = "/trading/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_SELECTED_TAB_ID"];
var BOOK_OF_BUSINESS = '/clients/book-of-business';
var CLIENTS = "/clients/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_SELECTED_TAB_ID"];
var DEPOSITS_TRANSFERS = "/deposits-transfers/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_CLIENT_KEY"];
var SEARCH = '/search';
var CLIENT_DETAILS = "/client-details/:" + src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_0__["PATH_PARAM_CLIENT_KEY"];
var MODEL_MANAGER = '/model-manager';

/***/ }),

/***/ "./src/frontend/blocks/input/fileInput/fileInput.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/log/index.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_models_file_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/models/file/queries.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/sizes.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\blocks\\input\\fileInput\\fileInput.js";










var log = Object(src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_7__["getLog"])('fileInput');

var FileInput = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FileInput, _React$PureComponent);

  function FileInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "isPending", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      isPending: _this.isPending
    });

    return _this;
  }

  var _proto = FileInput.prototype;

  _proto.handleChange = function handleChange(event) {
    var _this2 = this;

    var _this$props = this.props,
        id = _this$props.id,
        onAddFiles = _this$props.onAddFiles;
    var files = event.currentTarget.files;

    if (this.isPending) {
      return;
    }

    this.isPending = true;
    this.setState({
      isPending: true
    }); // encoding files MUST BE done here, since we cannot pass unserialized objects to the store

    src_frontend_models_file_queries__WEBPACK_IMPORTED_MODULE_10__["readFiles"](files, id).then(function (filesArray) {
      onAddFiles(id, filesArray);
    }).catch(function (error) {
      log.error('Failed to encode files', {
        id: id,
        error: error
      });
      onAddFiles(id, []);
    }).finally(function () {
      _this2.setState({
        isPending: false
      }, function () {
        _this2.isPending = false;
      });
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        className = _this$props2.className,
        children = _this$props2.children,
        isEnabled = _this$props2.isEnabled,
        isMultiFile = _this$props2.isMultiFile,
        showSelectionStatus = _this$props2.showSelectionStatus,
        allowedFileTypes = _this$props2.allowedFileTypes,
        maxFileSizeLabel = _this$props2.maxFileSizeLabel;
    var isPending = this.state.isPending;
    var fileInputClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()('fileinput', className, {
      'is-disabled': !isEnabled
    });
    var idChild = id + "_child";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      isInstant: true,
      size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_12__["SMALL"],
      isVisible: isPending,
      isTransparent: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: fileInputClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("label", {
      className: "fileinput-btn",
      htmlFor: idChild,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, isMultiFile ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AttachFiles') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AttachFile'), "\xA0", maxFileSizeLabel && src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_8__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CR_MaxFileSize{0}'), maxFileSizeLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
      "data-test-id": this.props['data-test-id'],
      className: "fileinput-input",
      type: "file",
      multiple: isMultiFile,
      name: idChild,
      accept: allowedFileTypes,
      id: idChild,
      onChange: this.handleChange,
      value: "" // this is done to reset the value of the input in every re-render, so onchange is called always even for same file
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }), showSelectionStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "fileinput-files",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(children) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NoFilesUpdated') : children)));
  };

  return FileInput;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FileInput, "defaultProps", {
  allowedFileTypes: '',
  isEnabled: true,
  isMultiFile: false,
  onAddFiles: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  showSelectionStatus: true
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__["bindHandlers"])(FileInput));

/***/ }),

/***/ "./src/frontend/blocks/input/fileInput/fileInputItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/icon/icon.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\blocks\\input\\fileInput\\fileInputItem.js";





var FileInputItem = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(FileInputItem, _React$PureComponent);

  function FileInputItem() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FileInputItem.prototype;

  _proto.handleTapRemove = function handleTapRemove() {
    var _this$props = this.props,
        id = _this$props.id,
        index = _this$props.index,
        onTapRemove = _this$props.onTapRemove;
    onTapRemove(id, index);
  };

  _proto.render = function render() {
    var file = this.props.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      "data-test-id": "file-input-item",
      className: "fileinput-files-fileitem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onTap: this.handleTapRemove,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data-test-id": "file-input-item-remove",
      type: "close",
      isAction: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "fileinput-files-fileitem-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, file.name));
  };

  return FileInputItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_2__["bindHandlers"])(FileInputItem));

/***/ }),

/***/ "./src/frontend/blocks/input/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numberInput_numberInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/blocks/input/numberInput/numberInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return _numberInput_numberInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _searchInput_searchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/input/searchInput/searchInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return _searchInput_searchInput__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _textInput_textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/input/textInput/textInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _textInput_textInput__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _textAreaInput_textAreaInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/input/textAreaInput/textAreaInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaInput", function() { return _textAreaInput_textAreaInput__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fileInput_fileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/input/fileInput/fileInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return _fileInput_fileInput__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _fileInput_fileInputItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/input/fileInput/fileInputItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileInputItem", function() { return _fileInput_fileInputItem__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/frontend/blocks/input/searchInput/searchInput.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_featureFlags_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/featureFlags/context.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\blocks\\input\\searchInput\\searchInput.js";

/* eslint-disable eslint-comments/no-restricted-disable */

/* eslint-disable no-restricted-imports */









// Delayed time between keyup search
var SEARCH_DEBOUNCE_TIME_MS = 1000;

var SeachInput = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(SeachInput, _React$PureComponent);

  function SeachInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "searchInputRef", react__WEBPACK_IMPORTED_MODULE_4__["createRef"]());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "debouncedSearchInput", lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(function (value) {
      _this.props.onRequest(value);
    }, SEARCH_DEBOUNCE_TIME_MS));

    return _this;
  }

  var _proto = SeachInput.prototype;

  _proto.handleChange = function handleChange(e) {
    var value = e.currentTarget.value;

    if (value.length >= this.props.searchMinChars || !value) {
      this.debouncedSearchInput(value);
    }

    this.props.onChange(value);
  };

  _proto.handleClear = function handleClear() {
    this.debouncedSearchInput.cancel();
    this.props.onChange('');
    this.props.onRequest('');
    this.searchInputRef.current.focus();
  };

  _proto.hasMinValue = function hasMinValue() {
    var _this$props = this.props,
        value = _this$props.value,
        searchMinChars = _this$props.searchMinChars;

    if (!value) {
      return false;
    }

    return value.length >= searchMinChars;
  };

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_featureFlags_context__WEBPACK_IMPORTED_MODULE_11__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, function (featureFlags) {
      var isAurora = featureFlags == null ? void 0 : featureFlags.aurora;
      var _this2$props = _this2.props,
          isLarge = _this2$props.isLarge,
          isEnabled = _this2$props.isEnabled,
          iconType = _this2$props.iconType,
          hasPlaceholder = _this2$props.hasPlaceholder,
          hasValidation = _this2$props.hasValidation,
          placeholderText = _this2$props.placeholderText,
          isInvalid = _this2$props.isInvalid,
          value = _this2$props.value,
          onFocus = _this2$props.onFocus,
          onBlur = _this2$props.onBlur,
          dataTestId = _this2$props['data-test-id'];
      var placeholder = hasPlaceholder ? placeholderText : '';
      var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()('search', {
        'search--clear': _this2.hasMinValue(),
        'search--clear--validated': hasValidation && _this2.hasMinValue(),
        'search--large': isLarge
      });
      var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()('form-control', {
        'form-control--large': isLarge,
        'form-control--aurora': isAurora,
        'is-invalid': isInvalid
      });
      var iconSize = isLarge ? src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_6__["LARGE"] : src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_6__["MEDIUM"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: classes,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
        ref: _this2.searchInputRef,
        "data-test-id": dataTestId,
        type: "search",
        value: value,
        className: inputClasses,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false",
        placeholder: placeholder,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: _this2.handleChange,
        disabled: !isEnabled,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: iconType,
        size: iconSize,
        isAction: true,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onTap: _this2.handleClear,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "data-test-id": "clear-search",
        type: "close",
        size: iconSize,
        isAction: true,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 37
        }
      }))));
    });
  };

  return SeachInput;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SeachInput, "defaultProps", {
  value: '',
  isLarge: false,
  isEnabled: true,
  iconType: 'search',
  hasPlaceholder: true,
  hasValidation: false,
  placeholderText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_9__["default"].getText('Search'),
  searchMinChars: 3,
  isInvalid: false,
  onFocus: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onBlur: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onChange: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onRequest: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  'data-test-id': 'search-input'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_10__["bindHandlers"])(SeachInput));

/***/ }),

/***/ "./src/frontend/blocks/input/textAreaInput/textAreaInput.js":
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


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\blocks\\input\\textAreaInput\\textAreaInput.js";




var TextAreaInput = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TextAreaInput, _React$Component);

  function TextAreaInput() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TextAreaInput.prototype;

  _proto.handleChange = function handleChange(event) {
    var _this$props = this.props,
        id = _this$props.id,
        onChange = _this$props.onChange;
    onChange(event.target.value, id);
  };

  _proto.handleFocus = function handleFocus() {
    this.props.onFocus();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        value = _this$props2.value,
        maxLength = _this$props2.maxLength,
        rows = _this$props2.rows,
        placeholder = _this$props2.placeholder;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", {
      "data-test-id": this.props['data-test-id'],
      className: "form-control",
      rows: String(rows),
      maxLength: maxLength,
      value: value,
      placeholder: placeholder,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    });
  };

  return TextAreaInput;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TextAreaInput, "defaultProps", {
  rows: 1,
  maxLength: 128,
  placeholder: '',
  onFocus: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__["bindHandlers"])(TextAreaInput));

/***/ }),

/***/ "./src/frontend/blocks/input/textInput/textInput.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_featureFlags_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/featureFlags/context.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\blocks\\input\\textInput\\textInput.js";

/* eslint-disable eslint-comments/no-restricted-disable */

/* eslint-disable no-restricted-imports */






var TextInput = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(TextInput, _React$Component);

  function TextInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      value: _this.props.value,
      prevValue: _this.props.value
    });

    return _this;
  }

  /**
   * getDerivedStateFromProps is defined here to deal with the complexity of
   * controlled vs uncontrolled input fields in React.
   *
   * We want the input component to be controlled - it's the recommended way
   * and it plays well with our normal usage (data to and from redux)
   * (see: https://reactjs.org/docs/uncontrolled-components.html)
   *
   * However... when an input is fully controlled, its value should be kept
   * in the enclosing component's state. This is because otherwise the async
   * nature of redux may mean that for a brief period the DOM and the virtual
   * DOM disagree (because the new value hasn't propagated through redux and
   * back through props yet). That makes the input re-render with the old
   * value and then again with the new one once it makes its way through
   * props, and that makes the caret jump to the end of the input.
   *
   * By keeping the value in local state, we make sure that the component
   * always renders with the most up-to-date value possible.
   * By using getDerivedStateFromProps, we ensure that if the consumers of
   * <TextInput> ever change what `value` should be, that change is reflected
   * in the input.
   * By defaulting the `value` property to empty string, we ensure that it is
   * never set to null or undefined, which would make the input uncontrolled
   */
  TextInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevValue !== nextProps.value) {
      return {
        prevValue: nextProps.value || '',
        value: nextProps.value || ''
      };
    }

    return null;
  } // react complains if we dont initialize state before getDerivedStateFromProps runs
  ;

  var _proto = TextInput.prototype;

  _proto.handleChange = function handleChange(event) {
    var _this$props = this.props,
        id = _this$props.id,
        onChange = _this$props.onChange;
    var inputValue = this.truncateValue(event.target.value);
    this.setState({
      value: inputValue
    });
    onChange(inputValue, id);
  };

  _proto.handleBlur = function handleBlur(event) {
    var _this$props2 = this.props,
        id = _this$props2.id,
        onBlur = _this$props2.onBlur;

    if (onBlur) {
      onBlur(event.target.value, id);
    }
  };

  _proto.handleFocus = function handleFocus(event) {
    var _this$props3 = this.props,
        id = _this$props3.id,
        onFocus = _this$props3.onFocus;

    if (onFocus) {
      onFocus(event.target.value, id);
    }
  };

  _proto.truncateValue = function truncateValue(value) {
    var maxLength = this.props.maxLength;

    if (!maxLength) {
      return value;
    }

    var currentValue = this.state.value;

    if (currentValue != null) {
      maxLength = Math.max(maxLength, currentValue.length);
    }

    return value.length > maxLength ? value.substring(0, maxLength) : value;
  };

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_featureFlags_context__WEBPACK_IMPORTED_MODULE_7__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, function (featureFlags) {
      var isAurora = featureFlags == null ? void 0 : featureFlags.aurora;
      var _this2$props = _this2.props,
          type = _this2$props.type,
          isLarge = _this2$props.isLarge,
          readOnly = _this2$props.readOnly,
          placeholder = _this2$props.placeholder,
          autoComplete = _this2$props.autoComplete,
          autoCorrect = _this2$props.autoCorrect,
          autoCapitalize = _this2$props.autoCapitalize,
          spellCheck = _this2$props.spellCheck,
          className = _this2$props.className,
          isEnabled = _this2$props.isEnabled,
          isOverrideClassName = _this2$props.isOverrideClassName,
          title = _this2$props.title; // this is used when the text input is used in the context of a procomboinput,
      // because form-control has not yet been addapted to work in that context.
      // This should be removed once form-control works nicely with procomboinput
      // and other inputs (e.g NumberInput) also use it

      var inputClasses = isOverrideClassName ? className : classnames__WEBPACK_IMPORTED_MODULE_5___default()('form-control', {
        'form-control--large': isLarge,
        'form-control--aurora': isAurora
      }, className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
        "data-test-id": _this2.props['data-test-id'],
        type: type,
        className: inputClasses,
        value: _this2.state.value,
        onChange: _this2.handleChange,
        onFocus: _this2.handleFocus,
        onBlur: _this2.handleBlur,
        readOnly: readOnly,
        placeholder: placeholder,
        autoComplete: autoComplete,
        autoCorrect: autoCorrect,
        autoCapitalize: autoCapitalize,
        spellCheck: spellCheck,
        disabled: !isEnabled,
        title: title == null ? '' : title,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }
      });
    });
  };

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TextInput, "defaultProps", {
  readOnly: false,
  isLarge: false,
  type: 'text',
  isEnabled: true,
  isOverrideClassName: false,
  onChange: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(TextInput));

/***/ }),

/***/ "./src/frontend/components/masthead/clientSearchButton/clientSearchButton.default.js":
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
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_modules_clientSelector_navContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/clientSelector/navContainer.js");
/* harmony import */ var src_frontend_modules_clientTree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/clientTree/index.js");
/* harmony import */ var src_frontend_modules_clientTree_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/clientTree/constants.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/masthead/clientSearchButton/constants.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\masthead\\clientSearchButton\\clientSearchButton.default.js";












var ClientSearchButton = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ClientSearchButton, _React$PureComponent);

  function ClientSearchButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      isDialogShown: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "showButtonEl", react__WEBPACK_IMPORTED_MODULE_3__["createRef"]());

    return _this;
  }

  var _proto = ClientSearchButton.prototype;

  _proto.handleShowButtonTap = function handleShowButtonTap() {
    if (this.props.hasClientTree) {
      this.props.onShowClientTreeDialog();
    }

    this.setState({
      isDialogShown: true
    });
  };

  _proto.handleDialogHide = function handleDialogHide() {
    this.setState({
      isDialogShown: false
    });
  };

  _proto.handleClientSelectorRefresh = function handleClientSelectorRefresh() {
    this.forceUpdate();
  };

  _proto.getImpersonatedClientTextContent = function getImpersonatedClientTextContent() {
    var currentClient = this.props.currentClient;

    if (!currentClient) {
      return '';
    }

    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_10__["default"].isTabletApp) {
      return currentClient.ClientId;
    }

    var clientName = currentClient.Name ? "- " + currentClient.Name : '';
    return currentClient.ClientId + " " + clientName;
  };

  _proto.renderClientTreeDialog = function renderClientTreeDialog() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
      position: "bottom",
      showUnderlay: true,
      width: src_frontend_modules_clientTree_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBAL_SELECTOR_DIALOG_WIDTH"],
      height: src_frontend_modules_clientTree_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBAL_SELECTOR_DIALOG_HEIGHT"],
      anchor: this.showButtonEl.current,
      onHide: this.handleDialogHide,
      hasFocusManagement: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_modules_clientTree__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSelectItemCallback: this.handleDialogHide,
      isDialog: true,
      componentId: _constants__WEBPACK_IMPORTED_MODULE_13__["MASTHEAD_CLIENT_TREE_ID"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isImpersonatedClient = _this$props.isImpersonatedClient,
        hasClientTree = _this$props.hasClientTree;
    var isDialogShown = this.state.isDialogShown;
    var impersonatedClientTextContent = this.getImpersonatedClientTextContent();
    var shouldRenderClientSelector = isDialogShown && !hasClientTree;
    var shouldRenderClientTree = isDialogShown && hasClientTree;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onTap: this.handleShowButtonTap,
      className: "masthead-utils-btn btn--inline btn--clear" // eslint-disable-next-line react/jsx-handler-names
      ,
      onDomRef: this.showButtonEl,
      "data-test-id": "client-search-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid grid--cross-center grid--seriessm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell g--fit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "user",
      isAction: true,
      size: src_frontend_config__WEBPACK_IMPORTED_MODULE_10__["default"].isProApp ? src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_12__["MEDIUM"] : src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_12__["LARGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell g--truncate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, isImpersonatedClient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "masthead-impersonated-client-text",
      title: impersonatedClientTextContent,
      "data-test-id": "masthead-impersonated-client-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    }, impersonatedClientTextContent)))), shouldRenderClientSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_modules_clientSelector_navContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      dialogAnchor: this.showButtonEl.current,
      onDialogHide: this.handleDialogHide,
      onRefresh: this.handleClientSelectorRefresh,
      componentId: "client-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }), shouldRenderClientTree && this.renderClientTreeDialog());
  };

  return ClientSearchButton;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(ClientSearchButton));

/***/ }),

/***/ "./src/frontend/models/file/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE_MEGABYTE_IN_BYTES", function() { return ONE_MEGABYTE_IN_BYTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE_EXTENSIONS", function() { return MIME_TYPE_EXTENSIONS; });
var ONE_MEGABYTE_IN_BYTES = 1000000;
var MIME_TYPE_EXTENSIONS = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/bmp': ['.bmp'],
  'image/gif': ['.gif'],
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
};

/***/ }),

/***/ "./src/frontend/models/file/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFiles", function() { return readFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensionsForMimeTypes", function() { return getExtensionsForMimeTypes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/file/constants.js");


function readFiles(files, id) {
  return Promise.all(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(files, function (file) {
    return readFile(file, id);
  }));
}

function readFile(file, id) {
  var reader = new FileReader();
  return new Promise(function (resolve, reject) {
    reader.onerror = function () {
      reader.abort();
      reject(new Error('Error reading file'));
    };

    reader.onload = function () {
      resolve({
        name: file.name,
        type: id,
        data: reader.result.split(',')[1],
        size: file.size,
        mimeType: file.type
      });
    };

    reader.readAsDataURL(file);
  });
}

function getExtensionsForMimeTypes(mimeTypes) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatMap(mimeTypes, getExtensionsForMimeType);
}

function getExtensionsForMimeType(mimeType) {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE_EXTENSIONS"][mimeType];
}

/***/ }),

/***/ "./src/frontend/modules/clientSelector/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEGIN_SEARCH", function() { return BEGIN_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_RESULTS_FILTER", function() { return SET_SEARCH_RESULTS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_RESULTS", function() { return SET_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH_ERROR", function() { return SET_SEARCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SEARCH_RESULTS", function() { return ADD_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_SELECT_CLIENT", function() { return TRIGGER_SELECT_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_DESELECT_CLIENT", function() { return TRIGGER_DESELECT_CLIENT; });
var BEGIN_SEARCH = 'clientSelector/begin-search';
var SET_SEARCH_RESULTS_FILTER = 'clientSelector/set-search-results-filter';
var SET_SEARCH_RESULTS = 'clientSelector/set-search-results';
var RESET = 'clientSelector/reset';
var SET_SEARCH_ERROR = 'clientSelector/set-search-error';
var ADD_SEARCH_RESULTS = 'clientSelector/add-search-results';
var TRIGGER_SELECT_CLIENT = 'clientSelector/trigger-client-select';
var TRIGGER_DESELECT_CLIENT = 'clientSelector/trigger-client-deselect';

/***/ }),

/***/ "./src/frontend/modules/clientSelector/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSearch", function() { return resetSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beginSearch", function() { return beginSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetRecentSelections", function() { return resetRecentSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerSelectClient", function() { return triggerSelectClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerDeselectClient", function() { return triggerDeselectClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchNext", function() { return searchNext; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_openApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/openApi/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/settings/actions/userSettingsActions.js");
/* harmony import */ var src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/settings/userSettingKeys.js");
/* harmony import */ var src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/util.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/clientSelector/actionTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");









function resetSearch(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["RESET"],
    componentId: componentId
  };
}
function setError(error, componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["SET_SEARCH_ERROR"],
    error: error,
    componentId: componentId
  };
}
function beginSearch(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["BEGIN_SEARCH"],
    componentId: componentId
  };
}
function resetRecentSelections() {
  return src_frontend_models_settings_actions_userSettingsActions__WEBPACK_IMPORTED_MODULE_4__["setUserSetting"](src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_5__["CLIENT_SEARCH_RECENT_KEYS"], []);
}
function setFilter(searchText, componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["SET_SEARCH_RESULTS_FILTER"],
    filter: searchText,
    componentId: componentId
  };
}
function triggerSelectClient(client, componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["TRIGGER_SELECT_CLIENT"],
    client: client,
    componentId: componentId
  };
}
function triggerDeselectClient(componentId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["TRIGGER_DESELECT_CLIENT"],
    componentId: componentId
  };
}
function search(searchText, componentId) {
  return function (dispatch) {
    var isSearchTextLengthBelowLimit = !searchText || searchText.length < _constants__WEBPACK_IMPORTED_MODULE_8__["MINIMUM_SEARCH_TEXT_LENGTH"];

    if (isSearchTextLengthBelowLimit) {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["SET_SEARCH_RESULTS"],
        searchResults: [],
        componentId: componentId
      });
      var error = src_frontend_utils_util__WEBPACK_IMPORTED_MODULE_6__["formatString"](src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_length_error'), _constants__WEBPACK_IMPORTED_MODULE_8__["MINIMUM_SEARCH_TEXT_LENGTH"]);
      dispatch(setError(error, componentId));
      return;
    }

    dispatch(beginSearch(componentId));
    fetchClientSelector(searchText, 0).then(function (_ref) {
      var response = _ref.response;

      var searchResults = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(response, 'Data', []);

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(searchResults)) {
        dispatch(setError(src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_NoClientsFound'), componentId));
        return;
      }

      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["SET_SEARCH_RESULTS"],
        searchResults: searchResults,
        skip: response.__next ? searchResults.length : 0,
        searchText: searchText,
        componentId: componentId
      });
    }, function (error) {
      dispatch(setError(src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_error_fetching'), componentId));
      return Promise.reject(error);
    });
  };
}
function searchNext(searchText, skip, componentId) {
  return function (dispatch) {
    fetchClientSelector(searchText, skip).then(function (_ref2) {
      var response = _ref2.response;

      var searchResults = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(response, 'Data', []);

      if (searchResults) {
        dispatch({
          type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["ADD_SEARCH_RESULTS"],
          searchResults: searchResults,
          skip: response.__next ? skip + searchResults.length : 0,
          searchText: searchText,
          componentId: componentId
        });
      }
    }, function (error) {
      dispatch(setError(error, componentId));
      return Promise.reject(error);
    });
  };
}

function fetchClientSelector(text, skip) {
  var queryParams = {};
  queryParams.$top = _constants__WEBPACK_IMPORTED_MODULE_8__["SEARCH_RESULTS_PER_PAGE"];
  queryParams.$skip = skip || 0;

  if (src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].appFeatures.isClientSearchV2Endpoint) {
    // isClientSearchV2Endpoint was introduced as an opt in for BG
    var body = {
      Keywords: text,
      FieldGroups: ['Accounts', 'Users']
    };
    return Object(src_frontend_utils_openApi__WEBPACK_IMPORTED_MODULE_1__["default"])().rest.post('cs', 'v2/clientinfo/clients/search/?$top={$top}&$skip={$skip}', queryParams, {
      body: body
    });
  }

  queryParams.AccountId = text;
  queryParams.ClientId = text;
  queryParams.ClientName = text;
  queryParams.Operator = 'OR';
  return Object(src_frontend_utils_openApi__WEBPACK_IMPORTED_MODULE_1__["default"])().rest.get('cs', 'v1/clientinfo/clients/search', null, {
    queryParams: queryParams
  });
}

/***/ }),

/***/ "./src/frontend/modules/clientSelector/clientListItem/clientListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/localization.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\clientListItem\\clientListItem.js";







var ClientListItem = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ClientListItem, _React$Component);

  function ClientListItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ClientListItem.prototype;

  _proto.handleTap = function handleTap() {
    this.props.onClientTap(this.props.client);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        client = _this$props.client,
        isSelected = _this$props.isSelected;
    var clientName = client.ClientName || client.Name || '';
    var clientLabel = client.ClientId ? client.ClientId + " - " + clientName : src_frontend_localization__WEBPACK_IMPORTED_MODULE_7__["default"].getText('ClientSearch_Reset');
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('list-item t-bold t-truncated', {
      'is-selected': isSelected
    });
    var listItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
      className: classes,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 26
      }
    }, clientLabel);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onTap: this.handleTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    }, listItem);
  };

  return ClientListItem;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ClientListItem, "defaultProps", {
  onClientTap: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(ClientListItem));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_RESULTS_WIDTH", function() { return SEARCH_RESULTS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_RESULTS_HEIGHT", function() { return SEARCH_RESULTS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_SEARCH_DIALOG_WIDTH", function() { return CLIENT_SEARCH_DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_SEARCH_TEXT_LENGTH", function() { return MINIMUM_SEARCH_TEXT_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_RESULTS_PER_PAGE", function() { return SEARCH_RESULTS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOINT_ACCOUNT_CONTRACT_TYPE", function() { return JOINT_ACCOUNT_CONTRACT_TYPE; });
var SEARCH_RESULTS_WIDTH = '100%';
var SEARCH_RESULTS_HEIGHT = 300;
var CLIENT_SEARCH_DIALOG_WIDTH = 360;
var MINIMUM_SEARCH_TEXT_LENGTH = 3;
var SEARCH_RESULTS_PER_PAGE = 50;
var JOINT_ACCOUNT_CONTRACT_TYPE = 'JointAccount';

/***/ }),

/***/ "./src/frontend/modules/clientSelector/navClientSelector.js":
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
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");
/* harmony import */ var _searchResults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResults/index.js");
/* harmony import */ var _ownerSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/clientSelector/ownerSection.js");
/* harmony import */ var _recentClients__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/clientSelector/recentClients.js");
/* harmony import */ var _searchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/clientSelector/searchInput.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\navClientSelector.js";












var SEARCH_WAIT_MSECS = 400;

var NavClientSelector = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(NavClientSelector, _React$Component);

  function NavClientSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "performSearchDebounced", lodash__WEBPACK_IMPORTED_MODULE_3___default.a.debounce(_this.performSearch, SEARCH_WAIT_MSECS));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      searchText: '',
      error: null,
      lastSearchText: null
    });

    return _this;
  }

  var _proto = NavClientSelector.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onReset(this.props.componentId);
  };

  _proto.performSearch = function performSearch() {
    var _this$props = this.props,
        onSearch = _this$props.onSearch,
        componentId = _this$props.componentId;
    onSearch(this.state.searchText, componentId);
    this.setState(function (state) {
      return {
        lastSearchText: state.searchText
      };
    });
  };

  _proto.handleInputChange = function handleInputChange(value) {
    if (value !== this.state.lastSearchText) {
      this.setState({
        searchText: value
      }, this.handleSearchTextChange);
    }

    if (this.state.error) {
      this.setState({
        error: ''
      });
    }
  };

  _proto.handleSearchTextChange = function handleSearchTextChange() {
    var isAutoSearch = this.props.isAutoSearch;

    if (this.state.searchText && isAutoSearch) {
      this.performSearchDebounced();
    }
  };

  _proto.handleClientResultTap = function handleClientResultTap(client) {
    var _this$props2 = this.props,
        currentClient = _this$props2.currentClient,
        onClientPick = _this$props2.onClientPick,
        onDialogHide = _this$props2.onDialogHide;

    if (client.ClientId !== currentClient.ClientId) {
      onClientPick(client);
    }

    onDialogHide();
  };

  _proto.handleClearRecentTap = function handleClearRecentTap() {
    this.props.onClearRecentClients();
  };

  _proto.handleOwnerTap = function handleOwnerTap(client) {
    var _this$props3 = this.props,
        currentClient = _this$props3.currentClient,
        onClientReset = _this$props3.onClientReset,
        onDialogHide = _this$props3.onDialogHide;

    if (client.ClientId !== currentClient.ClientId) {
      onClientReset();
    }

    onDialogHide();
  };

  _proto.renderOwner = function renderOwner() {
    var _this$props4 = this.props,
        loggedInClient = _this$props4.loggedInClient,
        currentClient = _this$props4.currentClient;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_ownerSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
      loggedInClient: loggedInClient,
      currentClient: currentClient,
      onOwnerTap: this.handleOwnerTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    });
  };

  _proto.renderRecent = function renderRecent() {
    var _this$props5 = this.props,
        recentSelections = _this$props5.recentSelections,
        currentClient = _this$props5.currentClient;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_recentClients__WEBPACK_IMPORTED_MODULE_13__["default"], {
      recentSelections: recentSelections,
      onClientTap: this.handleClientResultTap,
      onClearRecentTap: this.handleClearRecentTap,
      currentClientId: currentClient.ClientId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    });
  };

  _proto.renderSearchInput = function renderSearchInput() {
    var _this$props6 = this.props,
        isAutoSearch = _this$props6.isAutoSearch,
        error = _this$props6.error,
        isRequesting = _this$props6.isRequesting;
    var searchText = this.state.searchText;
    var placeholder = src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClientSearch_FindClient');
    var label = src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClientSearch_Search');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_searchInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: label,
      error: error,
      placeholder: placeholder,
      searchText: searchText,
      isAutoSearch: isAutoSearch,
      isRequesting: isRequesting,
      onInputChange: this.handleInputChange,
      onSearchTap: this.handleSearchButtonTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    });
  };

  _proto.handleSearchButtonTap = function handleSearchButtonTap() {
    this.performSearch();
  };

  _proto.renderClientSearch = function renderClientSearch() {
    var _this$props7 = this.props,
        onSearchNext = _this$props7.onSearchNext,
        searchText = _this$props7.searchText,
        componentId = _this$props7.componentId;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, this.renderOwner(), this.renderRecent(), this.renderSearchInput(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_searchResults__WEBPACK_IMPORTED_MODULE_11__["default"], {
      componentId: componentId,
      onResultTap: this.handleClientResultTap,
      onSearchNext: onSearchNext,
      searchText: searchText,
      height: _constants__WEBPACK_IMPORTED_MODULE_10__["SEARCH_RESULTS_HEIGHT"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }));
  };

  _proto.render = function render() {
    var _this$props8 = this.props,
        dialogAnchor = _this$props8.dialogAnchor,
        onDialogHide = _this$props8.onDialogHide;
    var position = dialogAnchor ? 'bottom' : '';
    var title = src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClientSearch_ChangeClient');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      position: position,
      showUnderlay: true,
      anchor: dialogAnchor,
      onHide: onDialogHide,
      width: _constants__WEBPACK_IMPORTED_MODULE_10__["CLIENT_SEARCH_DIALOG_WIDTH"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "clientselector",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }, this.renderClientSearch())));
  };

  return NavClientSelector;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(NavClientSelector, "defaultProps", {
  onSearch: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onSearchNext: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onClientPick: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onClearRecentClients: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onReset: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onShareButtonTap: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  isAutoSearch: true
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(NavClientSelector));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/navContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navClientSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/clientSelector/navClientSelector.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/clientSelector/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/clientSelector/selectors.js");







var mapStateToProps = function mapStateToProps(state, props) {
  var componentId = props.componentId;
  return {
    currentClient: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__["getClient"](state),
    loggedInClient: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__["getLoggedInClient"](state),
    isRequesting: _selectors__WEBPACK_IMPORTED_MODULE_5__["isRequesting"](state, componentId),
    error: _selectors__WEBPACK_IMPORTED_MODULE_5__["getError"](state, componentId),
    recentSelections: _selectors__WEBPACK_IMPORTED_MODULE_5__["getRecentClientSelections"](state),
    searchText: _selectors__WEBPACK_IMPORTED_MODULE_5__["getSearchText"](state, componentId)
  };
};

var mapDispatchToProps = {
  onSearch: _actions__WEBPACK_IMPORTED_MODULE_4__["search"],
  onSearchNext: _actions__WEBPACK_IMPORTED_MODULE_4__["searchNext"],
  onSetFilter: _actions__WEBPACK_IMPORTED_MODULE_4__["setFilter"],
  onReset: _actions__WEBPACK_IMPORTED_MODULE_4__["resetSearch"],
  onClientPick: _actions__WEBPACK_IMPORTED_MODULE_4__["triggerSelectClient"],
  onClearRecentClients: _actions__WEBPACK_IMPORTED_MODULE_4__["resetRecentSelections"],
  onClientReset: _actions__WEBPACK_IMPORTED_MODULE_4__["triggerDeselectClient"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_navClientSelector__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/ownerSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _clientListItem_clientListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/clientSelector/clientListItem/clientListItem.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\ownerSection.js";






var OwnerSection = function OwnerSection(_ref) {
  var loggedInClient = _ref.loggedInClient,
      currentClient = _ref.currentClient,
      onOwnerTap = _ref.onOwnerTap;
  var isOwnerSelected = loggedInClient.ClientId === currentClient.ClientId;
  var hasLoggedInClient = !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(loggedInClient);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hasLoggedInClient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "legacydivider clientselector-header clientselector-header--first",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_Owner')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "list list--lines",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_clientListItem_clientListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    client: loggedInClient,
    onClientTap: onOwnerTap,
    isSelected: isOwnerSelected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OwnerSection);

/***/ }),

/***/ "./src/frontend/modules/clientSelector/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSearchResultsToAccountRows", function() { return mapSearchResultsToAccountRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSearchResults", function() { return filterSearchResults; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");






function generateAccountRow(item, accountId) {
  var ClientId = item.ClientId,
      ClientKey = item.ClientKey,
      LegalAssetTypes = item.LegalAssetTypes,
      ContractType = item.ContractType;
  var isV2Endpoint = src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].appFeatures.isClientSearchV2Endpoint;
  var ClientName = (isV2Endpoint ? item.Name : item.ClientName) || '';
  var AccountListLabel;

  if (item.DefaultAccountId === accountId) {
    var hasMultipleAccounts = isV2Endpoint ? item.Accounts && item.Accounts.length > 1 : item.AccountIds && item.AccountIds.length > 1;
    AccountListLabel = hasMultipleAccounts ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_Accounts') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_Account');
  }

  var usernames = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(item.Users, function (user) {
    return user.UserName;
  });

  return {
    id: accountId.toString(),
    data: {
      AccountId: accountId.toString(),
      AccountListLabel: AccountListLabel,
      ClientId: ClientId,
      // Uppercase C needed for the user settings actions
      ClientName: ClientName,
      ClientKey: ClientKey,
      clientLabel: ClientId + " - " + ClientName,
      ContractType: ContractType,
      isDisabled: LegalAssetTypes.length === 0,
      usernames: usernames
    }
  };
}

function mapSearchResultsToAccountRows(searchResults) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.flatMap(searchResults, function (item) {
    return (// Double map needed to ensure the correct positioning of the default account
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact([generateAccountRow(item, item.DefaultAccountId), item.ContractType !== _constants__WEBPACK_IMPORTED_MODULE_4__["JOINT_ACCOUNT_CONTRACT_TYPE"] && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reject(item.Accounts, function (account) {
        return account.AccountId === item.DefaultAccountId;
      }), function (account) {
        return generateAccountRow(item, account.AccountId);
      })])
    );
  }));
}
function filterSearchResults(searchText, searchResults) {
  var lowerCaseSearchText = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.lowerCase(searchText);

  return lowerCaseSearchText ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(searchResults, function (result, client) {
    var users = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(client.Users, function (user) {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.lowerCase(user.UserName + " " + user.UserId), lowerCaseSearchText);
    });

    if (users.length) {
      result.push(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, client, {
        Users: users
      }));
    }

    return result;
  }, []) : searchResults;
}

/***/ }),

/***/ "./src/frontend/modules/clientSelector/recentClients.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/link/link.js");
/* harmony import */ var _clientListItem_clientListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/clientSelector/clientListItem/clientListItem.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\recentClients.js";







var RecentClients = function RecentClients(_ref) {
  var recentSelections = _ref.recentSelections,
      onClientTap = _ref.onClientTap,
      onClearRecentTap = _ref.onClearRecentTap,
      currentClientId = _ref.currentClientId;
  return recentSelections.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "legacydivider clientselector-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid grid--fill-fit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid-cell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_Recent')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid-cell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onTap: onClearRecentTap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ClientSearch_Clear'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "list list--lines",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(recentSelections, function (client, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_clientListItem_clientListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      isSelected: client.ClientId === currentClientId,
      client: client,
      onClientTap: onClientTap,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentClients);

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_blocks_input_textInput_textInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/input/textInput/textInput.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\searchInput.js";









var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  type: "search",
  isAction: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 21
  }
});

var SearchInput = function SearchInput(_ref) {
  var label = _ref.label,
      searchText = _ref.searchText,
      error = _ref.error,
      placeholder = _ref.placeholder,
      isAutoSearch = _ref.isAutoSearch,
      onInputChange = _ref.onInputChange,
      onSearchTap = _ref.onSearchTap,
      isRequesting = _ref.isRequesting;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "legacydivider clientselector-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    className: "clientselector-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "search icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_input_textInput_textInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "search",
    className: "form-control",
    placeholder: placeholder,
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    onChange: onInputChange,
    value: searchText || '',
    "data-test-id": "client-selector-search-input",
    id: "client-selector-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), _ref2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isVisible: isRequesting,
    isTranslucent: true,
    delay: 200,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), !isAutoSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "sheet-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onTap: onSearchTap,
    isPrimary: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ClientSearch_Search'))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: error,
    hasIcon: false,
    "data-test-id": "client-selector-error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResultItem/searchResultItem.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\searchResultItem\\searchResultItem.js";






var SearchResultItem = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SearchResultItem, _React$PureComponent);

  function SearchResultItem() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = SearchResultItem.prototype;

  _proto.handleTap = function handleTap() {
    this.props.onResultTap(this.props.data);
  };

  _proto.render = function render() {
    var data = this.props.data;
    var value = data.AccountId || '';
    var testId = data.AccountId || '';
    var listClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('grid grid--fill-all list-item', {
      'is-disabled': data.isDisabled
    });
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("ul", {
      className: "list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", {
      className: listClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, data.AccountListLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, data.AccountListLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid-cell t-end",
      "data-test-id": testId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, value)));
    return data.isDisabled ? content : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onTap: this.handleTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, content);
  };

  return SearchResultItem;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SearchResultItem, "defaultProps", {
  onResultTap: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(SearchResultItem));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResults/columnDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnDefinitions", function() { return columnDefinitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");
/* harmony import */ var _searchResultItem_searchResultItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResultItem/searchResultItem.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\searchResults\\columnDefinitions.js";




var columnDefinitions = function columnDefinitions(onResultTap, searchResultType) {
  return [{
    id: 'col1',
    width: _constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_RESULTS_WIDTH"],
    maxWidth: _constants__WEBPACK_IMPORTED_MODULE_1__["SEARCH_RESULTS_WIDTH"],
    isFixedStart: true,
    template: function template(_ref) {
      var data = _ref.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_searchResultItem_searchResultItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: data,
        onResultTap: onResultTap,
        searchResultType: searchResultType,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      });
    }
  }];
};

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResults/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/clientSelector/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/clientSelector/actions.js");
/* harmony import */ var _searchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResults/searchResults.js");






var mapStateToProps = function mapStateToProps(state, props) {
  var componentId = props.componentId;
  return {
    searchResults: _selectors__WEBPACK_IMPORTED_MODULE_2__["getSearchResults"](state, componentId),
    skip: _selectors__WEBPACK_IMPORTED_MODULE_2__["getSkip"](state, componentId),
    isRequesting: _selectors__WEBPACK_IMPORTED_MODULE_2__["isRequesting"](state, componentId),
    filter: _selectors__WEBPACK_IMPORTED_MODULE_2__["getSearchResultsFilter"](state, componentId)
  };
};

var mapDispatchToProps = {
  onSearchNext: _actions__WEBPACK_IMPORTED_MODULE_3__["searchNext"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_searchResults__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResults/groupingDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupingDefinitions", function() { return groupingDefinitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_components_reactGrid_types_rowTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/reactGrid/types/rowTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\searchResults\\groupingDefinitions.js";





var groupingDefinitions = [{
  path: 'data.clientLabel',
  isStatic: true,
  groupingObjectFunction: function groupingObjectFunction(sectionId, rows) {
    return {
      info: {
        className: "tst-account-" + sectionId,
        sectionId: sectionId,
        isAutosizeDivider: true
      },
      rows: rows
    };
  },
  template: function template(data) {
    var _row$data, _row$data2;

    var row = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.head(data.rows);

    var clientId = (_row$data = row.data) == null ? void 0 : _row$data.ClientId;
    var ContractType = (_row$data2 = row.data) == null ? void 0 : _row$data2.ContractType;

    if (ContractType === _constants__WEBPACK_IMPORTED_MODULE_3__["JOINT_ACCOUNT_CONTRACT_TYPE"]) {
      var _row$data3;

      var usernames = (_row$data3 = row.data) == null ? void 0 : _row$data3.usernames;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "clientselector-header",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, clientId + "  -  " + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.join(usernames, ', '));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "clientselector-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 20
      }
    }, data.id);
  }
}];

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResults/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResults/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/modules/clientSelector/searchResults/searchResults.js":
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
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/clientSelector/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/clientSelector/queries.js");
/* harmony import */ var _columnDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResults/columnDefinitions.js");
/* harmony import */ var _groupingDefinitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/clientSelector/searchResults/groupingDefinitions.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientSelector\\searchResults\\searchResults.js";









var SearchResults = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SearchResults, _React$Component);

  function SearchResults(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      columns: Object(_columnDefinitions__WEBPACK_IMPORTED_MODULE_8__["columnDefinitions"])(_this.props.onResultTap)
    };
    return _this;
  }

  var _proto = SearchResults.prototype;

  _proto.handleScrollEnd = function handleScrollEnd(scrollTop, maxScrollTop) {
    var _this$props = this.props,
        isRequesting = _this$props.isRequesting,
        skip = _this$props.skip,
        onSearchNext = _this$props.onSearchNext,
        searchText = _this$props.searchText,
        componentId = _this$props.componentId;

    if (!isRequesting && skip && maxScrollTop - scrollTop < _constants__WEBPACK_IMPORTED_MODULE_6__["SEARCH_RESULTS_HEIGHT"]) {
      onSearchNext(searchText, skip, componentId);
    }
  };

  _proto.getRowsByType = function getRowsByType() {
    var searchResults = this.props.searchResults;
    return _queries__WEBPACK_IMPORTED_MODULE_7__["mapSearchResultsToAccountRows"](searchResults);
  };

  _proto.renderEmptyResults = function renderEmptyResults() {
    var placeholder = this.props.placeholder;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, this.renderHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "t-secondary t-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, placeholder));
  };

  _proto.renderHeader = function renderHeader() {
    var header = this.props.header;
    return header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "legacydivider clientselector-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, header) : null;
  };

  _proto.render = function render() {
    var height = this.props.height;
    var columns = this.state.columns;
    var rows = this.getRowsByType();

    if (rows.length <= 0) {
      return this.renderEmptyResults();
    }

    var reactGrid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cols: columns,
      cellClass: "reactgrid-cell--fit",
      grouping: _groupingDefinitions__WEBPACK_IMPORTED_MODULE_9__["groupingDefinitions"],
      isHeader: false,
      isSectioned: true,
      isWidthFill: true,
      keepGroupsExpanded: true,
      rows: rows,
      onScrollEnd: this.handleScrollEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, this.renderHeader(), height ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      style: {
        height: height
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 27
      }
    }, reactGrid) : reactGrid);
  };

  return SearchResults;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SearchResults, "defaultProps", {
  onResultTap: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop,
  skip: 0
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(SearchResults));

/***/ }),

/***/ "./src/frontend/modules/clientSelector/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResults", function() { return getSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequesting", function() { return isRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchText", function() { return getSearchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResultsFilter", function() { return getSearchResultsFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkip", function() { return getSkip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentClientSelections", function() { return getRecentClientSelections; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/settings/selectors/settingsSelectors.js");
/* harmony import */ var src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/settings/userSettingKeys.js");





var EMPTY_ARRAY = [];
var EMPTY_STRING = '';

var getComponentState = function getComponentState(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(state.clientSelector, componentId);
};

var getSearchResults = function getSearchResults(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'searchResults', EMPTY_ARRAY);
};
var isRequesting = function isRequesting(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'isRequesting', false);
};
var getError = function getError(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'error', EMPTY_STRING);
};
var getSearchText = function getSearchText(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'searchText', EMPTY_STRING);
};
var getSearchResultsFilter = function getSearchResultsFilter(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'filter', EMPTY_STRING);
};
var getSkip = function getSkip(state, componentId) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(getComponentState(state, componentId), 'skip', 0);
};

var getRecentClientKeys = function getRecentClientKeys(state) {
  var recentClientKeys = src_frontend_models_settings_selectors_settingsSelectors__WEBPACK_IMPORTED_MODULE_3__["getUserSetting"](state, src_frontend_models_settings_userSettingKeys__WEBPACK_IMPORTED_MODULE_4__["CLIENT_SEARCH_RECENT_KEYS"]);
  return recentClientKeys;
};

var getRecentClientSelectionsFromKeys = function getRecentClientSelectionsFromKeys(clients, recentClientKeys) {
  var recentSelections = [];

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(recentClientKeys, function (recentClientKey) {
    var _clients$recentClient;

    var client = (_clients$recentClient = clients[recentClientKey]) == null ? void 0 : _clients$recentClient.data;

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(client)) {
      recentSelections.push(client);
    }
  });

  return recentSelections;
};

var getRecentClientSelections = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__["getClients"], getRecentClientKeys], getRecentClientSelectionsFromKeys);

/***/ }),

/***/ "./src/frontend/modules/clientTree/clientTree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_components_expandableTree_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/expandableTree/types.js");
/* harmony import */ var src_frontend_components_expandableTree_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_expandableTree_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var src_frontend_components_expandableTree_expandableTree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/expandableTree/expandableTree.js");
/* harmony import */ var src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/statusMessage/statusMessage.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var _searchAsYouTypeInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/clientTree/searchAsYouTypeInput.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientTree\\clientTree.js";














function ClientTree(props) {
  var clientId = props.clientId,
      onSearch = props.onSearch,
      onCloseError = props.onCloseError,
      onExpandClient = props.onExpandClient,
      onCollapseClient = props.onCollapseClient,
      onLoadMore = props.onLoadMore,
      onSelectItem = props.onSelectItem,
      onSelectItemCallback = props.onSelectItemCallback,
      treeData = props.treeData,
      hasError = props.hasError,
      isLoading = props.isLoading,
      hasNoData = props.hasNoData,
      searchTerm = props.searchTerm,
      _props$itemRenderer = props.itemRenderer,
      itemRenderer = _props$itemRenderer === void 0 ? src_frontend_components_expandableTree_expandableTree__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_RENDERER"] : _props$itemRenderer;
  var featureArea = props.featureArea;

  if (!featureArea) {
    featureArea = src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["AREA_CLIENT_TREE_GLOBAL"];
  }

  var logEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (featureEvent) {
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_11__["logEvent"](featureArea, featureEvent, {
      sessionId: src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].auth.sessionId,
      clientId: clientId
    });
  }, [featureArea, clientId]);
  var onSearchCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    logEvent('Dynamic search triggered');
    onSearch(value, featureArea, clientId);
    onCloseError();
  }, [onSearch, logEvent, featureArea, clientId, onCloseError]);
  var onLoadMoreCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    var event = "'Load more' clicked after navigating the tree";

    if (searchTerm == null ? void 0 : searchTerm.length) {
      event = "'Load more' clicked after searching";
    }

    logEvent(event);
    onLoadMore(value);
  }, [onLoadMore, searchTerm, logEvent]);
  var errorMessage;
  var header;
  var selectClientCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (row) {
    var event = 'Client selection done via tree navigation';

    if (searchTerm == null ? void 0 : searchTerm.length) {
      event = 'Client selection done via Search';
    }

    logEvent(event);
    onSelectItem(row);

    if (onSelectItemCallback) {
      onSelectItemCallback();
    }
  }, [onSelectItem, onSelectItemCallback, searchTerm, logEvent]);

  if (props.isDialog) {
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showClose: true,
      onClose: props.onCloseDialog,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClientSearch_SelectClient'));
  }

  if (hasError) {
    errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "data-test-id": "client-tree-error-notice",
      isLift: true,
      onClose: onCloseError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClientTreeErrorOccurred'));
  }

  if (hasNoData) {
    errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "data-test-id": "client-tree-notice",
      isCover: true,
      message: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClientSearch_NoClientsFound'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "client-tree",
    className: "grid grid--y clienttree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, header, errorMessage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isVisible: isLoading,
    isInstant: true,
    isTranslucent: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "grid grid--y grid--series",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_searchAsYouTypeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isLoading: isLoading,
    searchTerm: searchTerm,
    onSearch: onSearchCallback,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid grid--scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_frontend_components_expandableTree_expandableTree__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onRowExpand: onExpandClient,
    onRowCollapse: onCollapseClient,
    onLoadMore: onLoadMoreCallback,
    onSelectItem: selectClientCallback,
    searchTerm: searchTerm,
    data: treeData,
    itemRenderer: itemRenderer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ClientTree);

/***/ }),

/***/ "./src/frontend/modules/clientTree/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_models_impersonation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/impersonation/actions.js");
/* harmony import */ var src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/workspace/dialog/actions.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_components_router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/router/actions.js");
/* harmony import */ var src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/router/constants.js");
/* harmony import */ var src_frontend_app_spa_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/app/spa/routes.js");
/* harmony import */ var _clientTree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/clientTree/clientTree.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/clientTree/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/clientTree/actions.js");












var getTreeData = _selectors__WEBPACK_IMPORTED_MODULE_10__["createGetTreeData"]();

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var componentId = ownProps.componentId,
      clientKey = ownProps.clientKey;
  return {
    clientId: src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getClientId"](state, clientKey),
    treeData: getTreeData(state, componentId, clientKey),
    hasError: _selectors__WEBPACK_IMPORTED_MODULE_10__["hasError"](state, componentId),
    isLoading: _selectors__WEBPACK_IMPORTED_MODULE_10__["getIsLoading"](state, componentId),
    hasNoData: _selectors__WEBPACK_IMPORTED_MODULE_10__["getHasNoData"](state, componentId),
    searchTerm: _selectors__WEBPACK_IMPORTED_MODULE_10__["getSearchTerm"](state, componentId)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onExpandClient: function onExpandClient(row) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["triggerExpandClient"](ownProps.componentId, row.id));
    },
    onCollapseClient: function onCollapseClient(row) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["triggerCollapseClient"](ownProps.componentId, row.id));
    },
    onLoadMore: function onLoadMore(row) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["triggerLoadMore"](ownProps.componentId, row.id));
    },
    onCloseError: function onCloseError() {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["closeError"](ownProps.componentId));
    },
    onSearch: function onSearch(searchTerm, featureArea, clientId) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["triggerSearch"](ownProps.componentId, searchTerm, featureArea, clientId));
    },
    onSelectItem: function onSelectItem(row) {
      if (ownProps.onSelectItem) {
        ownProps.onSelectItem(row);
      } else if (src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isSpaApp) {
        var _routerActions$trigge;

        dispatch(src_frontend_models_impersonation_actions__WEBPACK_IMPORTED_MODULE_3__["triggerSelectLocalClient"](row.id, ownProps.componentId));
        dispatch(src_frontend_components_router_actions__WEBPACK_IMPORTED_MODULE_6__["triggerNavigation"](src_frontend_app_spa_routes__WEBPACK_IMPORTED_MODULE_8__["CLIENT_PAGE"], (_routerActions$trigge = {}, _routerActions$trigge[src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_7__["PATH_PARAM_CLIENT_KEY"]] = row.clientKey || row.id, _routerActions$trigge[src_frontend_components_router_constants__WEBPACK_IMPORTED_MODULE_7__["QUERY_PARAM_ACCOUNT_KEY"]] = row.accountKey || undefined, _routerActions$trigge)));
      } else if (ownProps.clientViewComponentId) {
        dispatch(src_frontend_models_impersonation_actions__WEBPACK_IMPORTED_MODULE_3__["triggerSelectLocalClient"](row.id, ownProps.clientViewComponentId));
      } else {
        dispatch(src_frontend_models_impersonation_actions__WEBPACK_IMPORTED_MODULE_3__["triggerSelectGlobalClient"](row.id));
      }
    },
    onCloseDialog: function onCloseDialog() {
      dispatch(src_frontend_workspace_dialog_actions__WEBPACK_IMPORTED_MODULE_4__["hideWorkspaceDialog"](ownProps.componentId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_clientTree__WEBPACK_IMPORTED_MODULE_9__["default"]));

/***/ }),

/***/ "./src/frontend/modules/clientTree/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/clientTree/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/frontend/modules/clientTree/queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHouse", function() { return isHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientIconType", function() { return getClientIconType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountIconType", function() { return getAccountIconType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientAccountsKey", function() { return getClientAccountsKey; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/clientTree/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/clientTree/types.js");


var isClient = function isClient(clientType) {
  return clientType === _constants__WEBPACK_IMPORTED_MODULE_0__["CLIENT_TYPE_CLIENT"];
};
var isHouse = function isHouse(clientType) {
  return clientType === _constants__WEBPACK_IMPORTED_MODULE_0__["CLIENT_TYPE_HOUSE"];
};
var getClientIconType = function getClientIconType(clientType) {
  if (isClient(clientType)) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__["ICON_TYPE_CLIENT"];
  }

  if (isHouse(clientType)) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__["ICON_TYPE_HOUSE"];
  }
};
var getAccountIconType = function getAccountIconType() {
  return _constants__WEBPACK_IMPORTED_MODULE_0__["ICON_TYPE_ACCOUNT"];
};
var getClientAccountsKey = function getClientAccountsKey(clientKey) {
  return clientKey + "_accounts";
};

/***/ }),

/***/ "./src/frontend/modules/clientTree/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialComponentState", function() { return initialComponentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_createComponentReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/createComponentReducer.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/clientTree/actionTypes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/clientTree/actions.js");







var initialComponentState = {
  clientData: {}
};

var handleFetchSuccess = function handleFetchSuccess(componentState, action) {
  var _componentState$clien, _extends2;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    clientData: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.clientData, (_extends2 = {}, _extends2[action.clientKey] = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.clientData[action.clientKey], {
      dataCount: action.dataCount,
      data: [].concat(((_componentState$clien = componentState.clientData[action.clientKey]) == null ? void 0 : _componentState$clien.data) || [], action.data),
      status: src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__["SUCCESS"]
    }), _extends2))
  });
};

var handleSetFetchStatus = function handleSetFetchStatus(componentState, action) {
  var _extends3;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    clientData: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.clientData, (_extends3 = {}, _extends3[action.clientKey] = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.clientData[action.clientKey], {
      status: action.status
    }), _extends3))
  });
};

var handleSearchResultSuccess = function handleSearchResultSuccess(componentState, action) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    searchData: {
      data: action.data,
      status: src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_2__["SUCCESS"],
      dataCount: action.dataCount,
      clientPageSizes: {}
    }
  });
};

var handleSearchResultPageSize = function handleSearchResultPageSize(componentState, action) {
  var _componentState$searc, _extends4;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    searchData: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.searchData, {
      clientPageSizes: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, ((_componentState$searc = componentState.searchData) == null ? void 0 : _componentState$searc.clientPageSizes) || {}, (_extends4 = {}, _extends4[action.clientKey] = action.pageSize, _extends4))
    })
  });
};

var handleSetSearchResultStatus = function handleSetSearchResultStatus(componentState, action) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    searchData: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.searchData, {
      status: action.status
    })
  });
};

var handleExpandClient = function handleExpandClient(componentState, action) {
  var _extends5;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    expandedState: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.expandedState, (_extends5 = {}, _extends5[action.clientKey] = true, _extends5))
  });
};

var handleCollapseClient = function handleCollapseClient(componentState, action) {
  var _extends6;

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    expandedState: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState.expandedState, (_extends6 = {}, _extends6[action.clientKey] = false, _extends6))
  });
};

var handleSetComponentHasError = function handleSetComponentHasError(componentState, action) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    hasError: action.hasError
  });
};

var handleCloseError = function handleCloseError(componentState) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    hasError: false
  });
};

var handleSetSearchTerm = function handleSetSearchTerm(componentState, action) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentState, {
    searchTerm: action.searchTerm,
    searchData: undefined,
    expandedState: {}
  });
};

var reducer = Object(src_frontend_utils_createComponentReducer__WEBPACK_IMPORTED_MODULE_1__["createComponentReducer"])(src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_3__["CLIENT_TREE"], function (componentState, action) {
  if (componentState === void 0) {
    componentState = initialComponentState;
  }

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["DATA_FETCH_SUCCESS"]:
      return handleFetchSuccess(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_FETCH_STATUS"]:
      return handleSetFetchStatus(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SEARCH_RESULT_SUCCESS"]:
      return handleSearchResultSuccess(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_SEARCH_RESULT_PAGE_SIZE"]:
      return handleSearchResultPageSize(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_SEARCH_RESULT_STATUS"]:
      return handleSetSearchResultStatus(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["EXPAND_CLIENT"]:
      return handleExpandClient(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["COLLAPSE_CLIENT"]:
      return handleCollapseClient(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_COMPONENT_HAS_ERROR"]:
      return handleSetComponentHasError(componentState, action);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["CLOSE_ERROR"]:
      return handleCloseError(componentState);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SET_SEARCH_TERM"]:
      return handleSetSearchTerm(componentState, action);

    default:
      return componentState;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  clientTree: reducer
});

/***/ }),

/***/ "./src/frontend/modules/clientTree/searchAsYouTypeInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_focusManager_focusAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/focusManager/focusAnchor.js");
/* harmony import */ var src_frontend_blocks_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/input/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/localization.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\clientTree\\searchAsYouTypeInput.js";





var MINIMUM_SEARCH_LENGTH = 3;

function SearchAsYouTypeInput(props) {
  var isLoading = props.isLoading,
      searchTerm = props.searchTerm,
      onSearch = props.onSearch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(searchTerm),
      pendingSearchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var onRequestCallback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
    var trimmedValue = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.trim(value);

    if (!trimmedValue || trimmedValue.length >= MINIMUM_SEARCH_LENGTH) {
      onSearch(trimmedValue);
    }
  }, [onSearch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid g--fit grid--series",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(src_frontend_blocks_focusManager_focusAnchor__WEBPACK_IMPORTED_MODULE_2__["default"], {
    shouldFocusChild: !isLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(src_frontend_blocks_input__WEBPACK_IMPORTED_MODULE_3__["SearchInput"], {
    placeholderText: src_frontend_localization__WEBPACK_IMPORTED_MODULE_4__["default"].getText('Filter'),
    value: pendingSearchTerm,
    onChange: setSearchTerm,
    onRequest: onRequestCallback,
    searchMinChars: MINIMUM_SEARCH_LENGTH,
    isEnabled: !isLoading,
    hasValidation: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchAsYouTypeInput);

/***/ }),

/***/ "./src/frontend/modules/clientTree/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClientData", function() { return getAllClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchStatus", function() { return getFetchStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataCount", function() { return getDataCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchTerm", function() { return getSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHasNoData", function() { return getHasNoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldGroups", function() { return getFieldGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResultPageSize", function() { return getSearchResultPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClientTreeEnabled", function() { return isClientTreeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetTreeData", function() { return createGetTreeData; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/asyncActionStatus.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_clients_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/clients/queries.js");
/* harmony import */ var src_frontend_models_clients_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/clients/types.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/storeTypes.js");
/* harmony import */ var src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_frontend_storeTypes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/clientTree/types.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/clientTree/queries.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/clientTree/constants.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/clientTree/reducer.js");















var getComponentState = function getComponentState(state, componentId) {
  var _state$clientTree$com, _state$clientTree;

  return (_state$clientTree$com = (_state$clientTree = state.clientTree) == null ? void 0 : _state$clientTree.components[componentId]) != null ? _state$clientTree$com : _reducer__WEBPACK_IMPORTED_MODULE_13__["initialComponentState"];
};

var getAllClientData = function getAllClientData(state, componentId) {
  var _getComponentState;

  return ((_getComponentState = getComponentState(state, componentId)) == null ? void 0 : _getComponentState.clientData) || {};
};

var getExpandedState = function getExpandedState(state, componentId) {
  var _getComponentState2;

  return ((_getComponentState2 = getComponentState(state, componentId)) == null ? void 0 : _getComponentState2.expandedState) || {};
};

var getFetchStatus = function getFetchStatus(state, componentId, clientKey) {
  var _getComponentState3, _getComponentState3$c, _getComponentState3$c2;

  return (_getComponentState3 = getComponentState(state, componentId)) == null ? void 0 : (_getComponentState3$c = _getComponentState3.clientData) == null ? void 0 : (_getComponentState3$c2 = _getComponentState3$c[clientKey]) == null ? void 0 : _getComponentState3$c2.status;
};
var getDataCount = function getDataCount(state, componentId, clientKey) {
  var _getComponentState4, _getComponentState4$c, _getComponentState4$c2;

  return ((_getComponentState4 = getComponentState(state, componentId)) == null ? void 0 : (_getComponentState4$c = _getComponentState4.clientData) == null ? void 0 : (_getComponentState4$c2 = _getComponentState4$c[clientKey]) == null ? void 0 : _getComponentState4$c2.dataCount) || 0;
};
var getData = function getData(state, componentId, clientKey) {
  var _getComponentState5, _getComponentState5$c, _getComponentState5$c2;

  return ((_getComponentState5 = getComponentState(state, componentId)) == null ? void 0 : (_getComponentState5$c = _getComponentState5.clientData) == null ? void 0 : (_getComponentState5$c2 = _getComponentState5$c[clientKey]) == null ? void 0 : _getComponentState5$c2.data) || [];
};
var getSearchData = function getSearchData(state, componentId) {
  var _getComponentState6;

  return (_getComponentState6 = getComponentState(state, componentId)) == null ? void 0 : _getComponentState6.searchData;
};
var hasError = function hasError(state, componentId) {
  var _getComponentState7;

  return Boolean((_getComponentState7 = getComponentState(state, componentId)) == null ? void 0 : _getComponentState7.hasError);
};
var getSearchTerm = function getSearchTerm(state, componentId) {
  var _getComponentState8;

  return ((_getComponentState8 = getComponentState(state, componentId)) == null ? void 0 : _getComponentState8.searchTerm) || '';
};
var getIsLoading = function getIsLoading(state, componentId) {
  var _getSearchData;

  return ((_getSearchData = getSearchData(state, componentId)) == null ? void 0 : _getSearchData.status) === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["PENDING"];
};
var getHasNoData = function getHasNoData(state, componentId) {
  var _getSearchData2;

  var searchData = (_getSearchData2 = getSearchData(state, componentId)) == null ? void 0 : _getSearchData2.data;
  return Boolean(searchData && searchData.length === 0);
};
var getFieldGroups = function getFieldGroups(state, componentId) {
  var _workspaceSelectors$g;

  return ((_workspaceSelectors$g = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_9__["getComponentUserSettings"](state, componentId)) == null ? void 0 : _workspaceSelectors$g.fieldGroups) || _constants__WEBPACK_IMPORTED_MODULE_12__["DEFAULT_FIELD_GROUPS"];
};
var getSearchResultPageSize = function getSearchResultPageSize(state, componentId, clientKey) {
  var _getSearchData3, _getSearchData3$clien;

  return ((_getSearchData3 = getSearchData(state, componentId)) == null ? void 0 : (_getSearchData3$clien = _getSearchData3.clientPageSizes) == null ? void 0 : _getSearchData3$clien[clientKey]) || _constants__WEBPACK_IMPORTED_MODULE_12__["SEARCH_RESULT_PAGE_SIZE"];
};
var isClientTreeEnabled = function isClientTreeEnabled(state) {
  return src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].appFeatures.isClientTreeEnabled && src_frontend_models_clients_queries__WEBPACK_IMPORTED_MODULE_6__["canViewOwnClient"]() && // don't enable for BG
  src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getHasCounterparts"](state);
}; // don't enable for employee login

var getUsersData = function getUsersData(users, isDisabled, disabledNodesIds) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(users, function (user) {
    return {
      id: user.UserId,
      data: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, user),
      isExpanded: false,
      isExpandable: false,
      displayText: user.UserName,
      iconType: _constants__WEBPACK_IMPORTED_MODULE_12__["ICON_TYPE_USER"],
      shouldShowDivider: false,
      isDisabled: isDisabled || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(disabledNodesIds, user.UserId),
      children: []
    };
  });
};

var getAccountsData = function getAccountsData(accounts, isDisabled, disabledNodesIds, clientKey) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(accounts, function (account) {
    return {
      id: account.AccountId,
      accountId: account.AccountId,
      accountKey: account.AccountKey,
      clientKey: clientKey,
      data: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, account),
      isExpanded: false,
      isExpandable: false,
      displayText: account.AccountId,
      iconType: _queries__WEBPACK_IMPORTED_MODULE_11__["getAccountIconType"](),
      shouldShowDivider: false,
      isDisabled: isDisabled || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(disabledNodesIds, account.AccountId),
      children: []
    };
  });
};

var getChildren = function getChildren(clientKey, allClientData, expandedState, selectedClientKey, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds) {
  var _allClientData$client;

  if (shouldDisableNodes === void 0) {
    shouldDisableNodes = false;
  }

  if (shouldDisableLeafs === void 0) {
    shouldDisableLeafs = true;
  }

  var clientSubData = allClientData[clientKey];

  if (!clientSubData || !clientSubData.data) {
    return [];
  }

  var subData = clientSubData.data;
  var clientAccountsKey = _queries__WEBPACK_IMPORTED_MODULE_11__["getClientAccountsKey"](clientKey);
  var clientAccountData = (_allClientData$client = allClientData[clientAccountsKey]) == null ? void 0 : _allClientData$client.data;

  if (clientAccountData && clientAccountData.length > 0 && _queries__WEBPACK_IMPORTED_MODULE_11__["isClient"](clientAccountData[0].ClientType)) {
    // Row is a client with no subclients but with accounts/users, show as direct children
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact([].concat(getAccountsData(clientAccountData[0].Accounts, shouldDisableLeafs, disabledNodesIds, clientKey), getUsersData(clientAccountData[0].Users, shouldDisableLeafs, disabledNodesIds)));
  }

  var subClientRows = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chain(subData).reject(function (data) {
    return data.ClientKey === clientKey;
  }).map(function (data) {
    var children = getChildren(data.ClientKey, allClientData, expandedState, selectedClientKey, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds);
    var clientData = allClientData[data.ClientKey];
    var clientDataRow = {
      id: data.ClientKey,
      isExpanded: expandedState[data.ClientKey],
      isExpandable: true,
      displayText: src_frontend_models_clients_queries__WEBPACK_IMPORTED_MODULE_6__["getClientDisplayText"](data.ClientId, data.Name),
      iconType: _queries__WEBPACK_IMPORTED_MODULE_11__["getClientIconType"](data.ClientType),
      shouldShowDivider: true,
      shouldShowChildrenDivider: true,
      isLoading: (clientData == null ? void 0 : clientData.status) === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["PENDING"],
      hasError: (clientData == null ? void 0 : clientData.status) === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["ERROR"],
      children: children,
      canLoadMore: children.length < (clientData == null ? void 0 : clientData.dataCount),
      isSelected: selectedClientKey === data.ClientKey,
      isDisabled: shouldDisableNodes || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(disabledNodesIds, data.ClientKey)
    };
    return clientDataRow;
  }).value();

  if (clientAccountData && clientAccountData.length > 0) {
    // Row is a house and has accounts associated with it, show a grouped entry as the first child
    return [{
      id: clientAccountsKey,
      isExpanded: expandedState[clientAccountsKey],
      isExpandable: true,
      iconType: _constants__WEBPACK_IMPORTED_MODULE_12__["ICON_TYPE_IB_CLIENT_ACCOUNTS"],
      shouldShowDivider: true,
      isDisabled: true,
      children: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact([].concat(getAccountsData(clientAccountData[0].Accounts, shouldDisableLeafs, disabledNodesIds, clientKey), getUsersData(clientAccountData[0].Users, shouldDisableLeafs, disabledNodesIds)))
    }].concat(subClientRows);
  }

  return subClientRows;
};

var createGetDrilldownTreeData = function createGetDrilldownTreeData() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAllClientData, src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getLoggedInClient"], function (state, componentId, clientKey) {
    return src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getClient"](state, clientKey);
  }, getExpandedState, src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_9__["getComponentUserSettings"], function (allClientData, loggedInClient, currentClient, expandedState, componentUserSettings) {
    var clientData = allClientData[loggedInClient.ClientKey];

    if (!clientData) {
      return [];
    }

    var selectedClientKey = (componentUserSettings == null ? void 0 : componentUserSettings.clientKey) || currentClient.ClientKey;
    var shouldDisableNodes = componentUserSettings == null ? void 0 : componentUserSettings.shouldDisableNodes;
    var shouldDisableLeafs = componentUserSettings == null ? void 0 : componentUserSettings.shouldDisableLeafs;
    var disabledNodesIds = componentUserSettings == null ? void 0 : componentUserSettings.disabledNodesIds;
    var children = getChildren(loggedInClient.ClientKey, allClientData, expandedState, selectedClientKey, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds);
    return [{
      id: loggedInClient.ClientKey,
      isExpanded: expandedState[loggedInClient.ClientKey],
      isExpandable: true,
      displayText: src_frontend_models_clients_queries__WEBPACK_IMPORTED_MODULE_6__["getClientDisplayText"](loggedInClient.ClientId, loggedInClient.Name),
      iconType: _constants__WEBPACK_IMPORTED_MODULE_12__["ICON_TYPE_TOP_LEVEL_HOUSE"],
      shouldShowDivider: true,
      shouldShowChildrenDivider: true,
      isLoading: clientData.status === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["PENDING"],
      hasError: (clientData == null ? void 0 : clientData.status) === src_frontend_asyncActionStatus__WEBPACK_IMPORTED_MODULE_4__["ERROR"],
      children: children,
      canLoadMore: children.length < clientData.dataCount,
      isSelected: selectedClientKey === loggedInClient.ClientKey,
      isDisabled: shouldDisableNodes || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(disabledNodesIds, loggedInClient.ClientKey)
    }];
  });
};

var getSearchTreeDataRows = function getSearchTreeDataRows(searchResultData, expandedState, selectedClientKey, isTopLevel, clientPageSizes, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds) {
  if (shouldDisableNodes === void 0) {
    shouldDisableNodes = false;
  }

  if (shouldDisableLeafs === void 0) {
    shouldDisableLeafs = true;
  }

  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(searchResultData, function (data) {
    var children = data.SubClients.length > 0 ? getSearchTreeDataRows(data.SubClients, expandedState, selectedClientKey, false, clientPageSizes, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds) : lodash__WEBPACK_IMPORTED_MODULE_1___default.a.compact([].concat(getAccountsData(data.Accounts, shouldDisableLeafs, disabledNodesIds, selectedClientKey), getUsersData(data.Users, shouldDisableLeafs, disabledNodesIds)));

    var pagedChildren = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.take(children, (clientPageSizes == null ? void 0 : clientPageSizes[data.ClientKey]) || _constants__WEBPACK_IMPORTED_MODULE_12__["SEARCH_RESULT_PAGE_SIZE"]);

    return {
      id: data.ClientKey,
      isExpanded: expandedState[data.ClientKey] !== false,
      // everything expanded by default unless explicitly collapsed
      isExpandable: children.length > 0,
      displayText: src_frontend_models_clients_queries__WEBPACK_IMPORTED_MODULE_6__["getClientDisplayText"](data.ClientId, data.Name),
      iconType: isTopLevel ? _constants__WEBPACK_IMPORTED_MODULE_12__["ICON_TYPE_TOP_LEVEL_HOUSE"] : _queries__WEBPACK_IMPORTED_MODULE_11__["getClientIconType"](data.ClientType),
      shouldShowDivider: true,
      shouldShowChildrenDivider: true,
      children: pagedChildren,
      canLoadMore: pagedChildren.length < children.length,
      isSelected: selectedClientKey === data.ClientKey,
      isDisabled: shouldDisableNodes || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(disabledNodesIds, data.ClientKey)
    };
  });
};

var createGetSearchResultTreeData = function createGetSearchResultTreeData() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getSearchData, getExpandedState, function (state) {
    return src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_5__["getClient"](state);
  }, src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_9__["getComponentUserSettings"], function (searchData, expandedState, currentClient, componentUserSettings) {
    var searchTermData = searchData == null ? void 0 : searchData.data;

    if (!searchData || !searchTermData) {
      return [];
    }

    var selectedClientKey = (componentUserSettings == null ? void 0 : componentUserSettings.clientKey) || currentClient.ClientKey;
    var shouldDisableNodes = componentUserSettings == null ? void 0 : componentUserSettings.shouldDisableNodes;
    var shouldDisableLeafs = componentUserSettings == null ? void 0 : componentUserSettings.shouldDisableLeafs;
    var disabledNodesIds = componentUserSettings == null ? void 0 : componentUserSettings.disabledNodesIds;
    var clientPageSizes = searchData.clientPageSizes;
    return getSearchTreeDataRows(searchTermData, expandedState, selectedClientKey, true, clientPageSizes, shouldDisableNodes, shouldDisableLeafs, disabledNodesIds);
  });
};

var createGetTreeData = function createGetTreeData() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(createGetDrilldownTreeData(), createGetSearchResultTreeData(), getSearchTerm, function (drilldownTreeData, searchResultTreeData, searchTerm) {
    return searchTerm ? searchResultTreeData : drilldownTreeData;
  });
};

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/1.js.map