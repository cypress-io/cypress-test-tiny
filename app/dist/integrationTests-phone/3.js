(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/frontend/components/masthead/notificationsButton/notificationsButton.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_modules_notificationCenter_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/notificationCenter/selectors.js");
/* harmony import */ var src_frontend_modules_notificationCenter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/notificationCenter/actions.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_atoms_badge_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/badge/badge.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\masthead\\notificationsButton\\notificationsButton.default.js";











function NotificationsButton(_ref) {
  var isEnabled = _ref.isEnabled;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var unreadNotificationsCount = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(src_frontend_modules_notificationCenter_selectors__WEBPACK_IMPORTED_MODULE_2__["getUnseenNotificationsInsightsTotal"]);
  var isIconHighlighted = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_modules_notificationCenter_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsActive"](state) || src_frontend_modules_notificationCenter_selectors__WEBPACK_IMPORTED_MODULE_2__["hasUnseenMessages"](state);
  });
  var isNotificationCenterForceOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(src_frontend_modules_notificationCenter_selectors__WEBPACK_IMPORTED_MODULE_2__["getWasNotificationCenterForcedOpen"]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (isNotificationCenterForceOpen) {
      dispatch(src_frontend_modules_notificationCenter_actions__WEBPACK_IMPORTED_MODULE_3__["triggerOpenNotificationCenter"](true));
    }
  }, [isNotificationCenterForceOpen, dispatch]);

  function handleTap() {
    if (isEnabled) {
      dispatch(src_frontend_modules_notificationCenter_actions__WEBPACK_IMPORTED_MODULE_3__["triggerOpenNotificationCenter"]());
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onTap: handleTap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "masthead-utils-btn masthead-notification-btn js-notification-center",
    "data-test-id": "btn-tst-notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_8__["StackItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "mail",
    isAction: true,
    size: src_frontend_config__WEBPACK_IMPORTED_MODULE_4__["default"].isProApp ? src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_7__["MEDIUM"] : src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_7__["LARGE"],
    isToggled: isIconHighlighted,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })), unreadNotificationsCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_8__["StackItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_badge_badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-tiny",
    "data-test-id": "notificationscount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, unreadNotificationsCount))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationsButton);

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/3.js.map