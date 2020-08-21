(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/frontend/modules/ipo/availableIpos/availableIpos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\ipo\\availableIpos\\availableIpos.js";


var AvailableIpos = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AvailableIpos, _React$PureComponent);

  function AvailableIpos() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = AvailableIpos.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 16
      }
    });
  };

  return AvailableIpos;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AvailableIpos);

/***/ }),

/***/ "./src/frontend/modules/ipo/ipo.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/notice/notice.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/ipo/constants.js");
/* harmony import */ var _availableIpos_availableIpos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/ipo/availableIpos/availableIpos.js");
/* harmony import */ var _myIpos_myIpos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/ipo/myIpos/myIpos.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\ipo\\ipo.phone.js";








var Ipo = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Ipo, _React$PureComponent);

  function Ipo() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Ipo.prototype;

  _proto.renderTabContent = function renderTabContent() {
    var _this$props = this.props,
        isLoading = _this$props.isLoading,
        error = _this$props.error,
        componentId = _this$props.componentId;

    if (isLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isVisible: true,
        isInstant: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }
      });
    }

    if (error) {
      var errorLoadMessage = src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Data_Load_Error');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_notice_notice__WEBPACK_IMPORTED_MODULE_4__["default"], {
        message: errorLoadMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 20
        }
      });
    }

    switch (componentId) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__["AVAILABLE_IPOS"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_availableIpos_availableIpos__WEBPACK_IMPORTED_MODULE_6__["default"], {
          componentId: componentId,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 24
          }
        });

      case _constants__WEBPACK_IMPORTED_MODULE_5__["MY_IPOS"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_myIpos_myIpos__WEBPACK_IMPORTED_MODULE_7__["default"], {
          componentId: componentId,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 24
          }
        });

      default:
        return null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "grid grid--scroll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, this.renderTabContent()));
  };

  return Ipo;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Ipo);

/***/ }),

/***/ "./src/frontend/modules/ipo/myIpos/myIpos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\ipo\\myIpos\\myIpos.js";


var MyIpos = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MyIpos, _React$PureComponent);

  function MyIpos() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = MyIpos.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 16
      }
    });
  };

  return MyIpos;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (MyIpos);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/17.js.map