(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/frontend/utils/session/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResourceLoadError", function() { return handleResourceLoadError; });
/* harmony import */ var src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/utils/log/index.js");
/* harmony import */ var src_frontend_utils_openApi_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/openApi/session.js");
/* harmony import */ var src_frontend_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/sessionStorage.js");
/* harmony import */ var _logoutCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/utils/session/logoutCodes.js");




var log = Object(src_frontend_utils_log__WEBPACK_IMPORTED_MODULE_0__["getLog"])('session.util');
var MAX_RESOURCE_RELOADS = 5;
var handleResourceLoadError = function handleResourceLoadError(failedResource) {
  return function (error) {
    var sessionStorageKey = "appReloadCount-" + failedResource;
    var storedAppReloadCount = src_frontend_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["get"](sessionStorageKey);
    var hasReloadCount = Boolean(storedAppReloadCount);
    var newAppReloadCount = hasReloadCount ? 1 + parseInt(storedAppReloadCount, 10) : 1;
    src_frontend_utils_sessionStorage__WEBPACK_IMPORTED_MODULE_2__["set"](sessionStorageKey, newAppReloadCount);

    if (newAppReloadCount > MAX_RESOURCE_RELOADS) {
      log.error("Failed to load resource " + failedResource + ", signing out after " + MAX_RESOURCE_RELOADS + " failed attempts during this session", error);
      src_frontend_utils_openApi_session__WEBPACK_IMPORTED_MODULE_1__["default"].signout(_logoutCodes__WEBPACK_IMPORTED_MODULE_3__["NO_CONNECTION"], failedResource);
      return;
    }

    log.info("Failed to load resource " + failedResource + ", reloading attempt " + newAppReloadCount + " / " + MAX_RESOURCE_RELOADS, error);
    window.location.reload();
  };
};

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/4.js.map