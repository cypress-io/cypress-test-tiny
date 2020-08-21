(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/frontend/modules/shareholderVoting/components/companyName.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/components/productIcon/productIcon.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\companyName.js";






var CompanyName = function CompanyName(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    position: props.position,
    gutter: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_productIcon_productIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-test-id": "shareholder-voting-product-icon",
    isBlock: true,
    assetType: src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__["STOCK"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isTruncate: true,
    "data-test-id": "shareholder-voting-company-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "t-truncate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, props.companyName)));
};

/* harmony default export */ __webpack_exports__["default"] = (CompanyName);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/button/button.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\header.js";







var Header = function Header(_ref) {
  var isSubscribed = _ref.isSubscribed,
      onSubscription = _ref.onSubscription;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    spacing: "between",
    gutter: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isGrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ShareholderVoting_Title'))), isSubscribed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isPrimary: true,
    "data-test-id": "voting-header-subscribe-button",
    size: "medium",
    isWide: true,
    className: "btn--nocase",
    onTap: onSubscription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Subscription")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\link.js";





var Link = function Link(_ref) {
  var url = _ref.url,
      children = _ref.children,
      dataTestId = _ref['data-test-id'],
      noReferrer = _ref.noReferrer,
      onTap = _ref.onTap;
  var openInNewTab = '_blank';
  var noBackReferencesFromTab = 'noopener';

  var rel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain([noReferrer && 'noreferrer', noBackReferencesFromTab]).compact().join(' ').value();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onTap: onTap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    "data-test-id": dataTestId,
    href: url,
    target: openInNewTab,
    rel: rel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, children));
};

Link.defaultProps = {
  onTap: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.noop
};
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/material.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\material.js";





var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_1__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  type: "external",
  size: "small",
  isBlock: true,
  isAction: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}));

var Material = function Material(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    position: props.position,
    gutter: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_1__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, props.material), _ref);
};

Material.defaultProps = {
  material: '',
  position: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Material);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/signUpBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_atoms_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/atoms/card/index.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_blocks_matchMedia_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/matchMedia/constants.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/hooks/useBreakpoint/index.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\signUpBar.js";











var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  type: "info-outlined",
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 33
  }
});

var SignUpBar = function SignUpBar(_ref) {
  var onSubscribe = _ref.onSubscribe;
  var breakpointName = Object(src_frontend_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "voting-sign-up-prompt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "small",
    spacing: "between",
    isVertical: breakpointName === src_frontend_blocks_matchMedia_constants__WEBPACK_IMPORTED_MODULE_6__["NARROW"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isGrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "small",
    isVertical: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    position: "start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "tertiary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, _ref2, ' ', src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ShareholderVoting_SignUp'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    position: "start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ShareholderVoting_SignUp_Subtitle')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: breakpointName === src_frontend_blocks_matchMedia_constants__WEBPACK_IMPORTED_MODULE_6__["NARROW"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "medium",
    isWide: true,
    isPrimary: true,
    className: "btn--nocase",
    onTap: onSubscribe,
    "data-test-id": "voting-sign-up-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ShareholderVoting_Subscribe')))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpBar);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/status.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\status.js";








var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  type: "checkmark",
  size: "medium",
  isBlock: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, "--");

var Status = function Status(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    position: props.position,
    gutter: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, _queries__WEBPACK_IMPORTED_MODULE_4__["getHasVoted"](props.event) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Shareholder_Voting_Voted'))) : _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/vote.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/link.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\vote.js";









var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  type: "external",
  size: "small",
  isBlock: true,
  isAction: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}));

var BallotItems = function BallotItems() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Shareholder_Voting_Show_Ballot')), _ref);
};

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BallotItems, {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 24
  }
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 42
  }
}, "--");

var Vote = function Vote(props) {
  var event = props.event,
      position = props.position,
      onVoteClick = props.onVoteClick;
  var voteUrl = _queries__WEBPACK_IMPORTED_MODULE_4__["getLink"](event);
  var handleLinkTap = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    onVoteClick(voteUrl);
  }, [onVoteClick, voteUrl]);
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    position: position,
    gutter: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, voteUrl ? _ref2 : _ref3);
  return voteUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "data-test-id": "shareholder-voting-vote",
    url: voteUrl,
    onTap: handleLinkTap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, content) : content;
};

/* harmony default export */ __webpack_exports__["default"] = (Vote);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/components/votingCostInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTING_COST_URL", function() { return VOTING_COST_URL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_atoms_bodyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/atoms/bodyText/index.js");
/* harmony import */ var src_frontend_utils_featureFlags_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/featureFlags/selectors.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/link.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\components\\votingCostInfo.js";








var VOTING_COST_URL = 'https://google.com';

var VotingCostInfo = function VotingCostInfo(props) {
  var isSubscribeText = props.isSubscribeText;
  var isMockedFlag = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return src_frontend_utils_featureFlags_selectors__WEBPACK_IMPORTED_MODULE_5__["getFeatureFlag"](state, 'mock-voting-cost-url');
  });
  var url = isMockedFlag ? VOTING_COST_URL : src_frontend_config__WEBPACK_IMPORTED_MODULE_3__["default"].appFeatures.votingCostInfoUrl;

  if (!url) {
    return null;
  }

  var beforeText = isSubscribeText ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ShareholderVoting_CostInfo_Subscribe_Prefix') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ShareholderVoting_CostInfo');
  var afterText = isSubscribeText ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ShareholderVoting_CostInfo_Subscribe_Appendix') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_bodyText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, beforeText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    url: url,
    noReferrer: true,
    "data-test-id": "voting-cost-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('ShareholderVoting_Here')), '. ', afterText);
};

VotingCostInfo.defaultProps = {
  isSubscribeText: false
};
/* harmony default export */ __webpack_exports__["default"] = (VotingCostInfo);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/grid/columnDefinitions.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnDefinitions", function() { return getColumnDefinitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saxo_openui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/openui/src/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/shareholderVoting/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/status.js");
/* harmony import */ var _components_companyName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/companyName.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\grid\\columnDefinitions.phone.js";










var dueDateColumn = function dueDateColumn(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 105 : _ref$width;
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_DUE_DATE"],
    width: width,
    isNumeric: true,
    sort: {
      id: 'dueDate',
      fields: [{
        path: 'data.CutoffDate'
      }]
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_5__["getDueDate"](row.data);
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Shareholder_Voting_Due_Date'),
    priority: 1
  };
};

var companyNameColumn = function companyNameColumn(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 150 : _ref2$width;
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_COMPANY_NAME"],
    width: width,
    sort: {
      id: 'company'
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_5__["getCompanyName"](row.data);
    },
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_companyName__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "left",
        companyName: _queries__WEBPACK_IMPORTED_MODULE_5__["getCompanyName"](row.data),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      });
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Shareholder_Voting_Company'),
    priority: 2
  };
};

var accountColumn = function accountColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_ACCOUNT"],
    width: 150,
    template: function template(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_5__["getAccount"](row.data);
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_5__["getAccount"](row.data);
    },
    sort: {
      id: 'account'
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Account'),
    priority: 4
  };
};

var statusColumn = function statusColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_3__["S_STATUS"],
    width: 100,
    align: _saxo_openui__WEBPACK_IMPORTED_MODULE_1__["UI"].isRTL() ? 'start' : 'end',
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_status__WEBPACK_IMPORTED_MODULE_6__["default"], {
        position: "right",
        event: row.data,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 39
        }
      });
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_5__["getHasVoted"](row.data);
    },
    sort: {
      id: 'status'
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Status'),
    priority: 3
  };
};

var BREAKPOINT_LANDSCAPE = 500;

var getLandscapeColumns = function getLandscapeColumns() {
  var dueDateCol = dueDateColumn({
    width: 140
  });
  var companyNameCol = companyNameColumn({
    width: 160
  });
  return [dueDateCol, companyNameCol, accountColumn(), statusColumn()];
};

var getPortraitColumns = function getPortraitColumns() {
  return [dueDateColumn({}), companyNameColumn({}), statusColumn()];
};

var getColumnDefinitions = function getColumnDefinitions(width) {
  if (width <= BREAKPOINT_LANDSCAPE) {
    return getPortraitColumns();
  }

  return getLandscapeColumns();
};

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/menu/menuItems.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_components_menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/menu/menu.js");
/* harmony import */ var src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/menu/menuItem.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/status.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_companyName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/companyName.js");
/* harmony import */ var _components_vote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/vote.js");
/* harmony import */ var _components_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/material.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\menu\\menuItems.js";















var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 33
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  type: "file",
  size: "small",
  isBlock: true,
  isAction: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 37
  }
}));

var MenuItems = function MenuItems(props) {
  var setEvent = props.setEvent,
      event = props.event,
      onMaterialClick = props.onMaterialClick,
      onMaterialMenuClick = props.onMaterialMenuClick,
      onVoteClick = props.onVoteClick;
  var materials = _queries__WEBPACK_IMPORTED_MODULE_7__["getMaterials"](event);
  var hideShowingMenu = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setEvent(null);
  }, [setEvent]);
  var handleMaterialClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (material) {
    return onMaterialClick(material.Url);
  }, [onMaterialClick]);
  var handleMaterialMenuClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    onMaterialMenuClick(materials.length);
  }, [onMaterialMenuClick, materials]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dialogAlign: "left",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_companyName__WEBPACK_IMPORTED_MODULE_10__["default"], {
      position: "center",
      companyName: _queries__WEBPACK_IMPORTED_MODULE_7__["getCompanyName"](event),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }),
    onHide: hideShowingMenu,
    showClose: true,
    dialogParent: props.dialogContainerEl,
    isForceParentDialog: true,
    className: "shareholder-voting__menu",
    "data-test-id": "shareholder-voting-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-due-date",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      position: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "start",
      isGrow: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Shareholder_Voting_Due_Date')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, _queries__WEBPACK_IMPORTED_MODULE_7__["getDueDate"](event))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-event",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      position: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "start",
      isGrow: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Event')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, _queries__WEBPACK_IMPORTED_MODULE_7__["getType"](event))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-account",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      position: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "start",
      isGrow: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Account')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, _queries__WEBPACK_IMPORTED_MODULE_7__["getAccount"](event))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-status",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      position: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      position: "start",
      isGrow: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Status')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_status__WEBPACK_IMPORTED_MODULE_8__["default"], {
      position: "right",
      event: event,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), materials.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-materials",
    title: "Materials",
    tapArg: {},
    onParentTap: handleMaterialMenuClick,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      position: "center",
      gutter: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_6__["StackItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Shareholder_Voting_Materials')), _ref),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(materials, function (material) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: _queries__WEBPACK_IMPORTED_MODULE_7__["keyForMaterial"](material),
      tapArg: material,
      "data-test-id": "shareholder-voting-material-" + material.MaterialType.Code,
      onTap: handleMaterialClick,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        material: material.MaterialType.Description,
        position: "left",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 41
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 33
      }
    });
  })), _queries__WEBPACK_IMPORTED_MODULE_7__["getHasLink"](event) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "data-test-id": "shareholder-voting-menu-vote",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_vote__WEBPACK_IMPORTED_MODULE_11__["default"], {
      position: "center",
      event: event,
      onVoteClick: onVoteClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  })));
};

MenuItems.defaultProps = {
  setEvent: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.noop
};
/* harmony default export */ __webpack_exports__["default"] = (MenuItems);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/shareholderVoting.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/statusMessage/statusMessage.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/resizable/resizable.js");
/* harmony import */ var src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/link/link.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var _grid_columnDefinitions_phone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/shareholderVoting/grid/columnDefinitions.phone.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _menu_menuItems__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/shareholderVoting/menu/menuItems.js");
/* harmony import */ var _votingSubscription_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/shareholderVoting/votingSubscription/container.js");
/* harmony import */ var _components_signUpBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/signUpBar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/header.js");
/* harmony import */ var _components_votingCostInfo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/votingCostInfo.js");
/* harmony import */ var _featureTracking__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/shareholderVoting/featureTracking.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\shareholderVoting.phone.js";






















var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["StackItem"], {
  isStretch: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 25
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_votingCostInfo__WEBPACK_IMPORTED_MODULE_18__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 29
  }
}));

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_votingSubscription_container__WEBPACK_IMPORTED_MODULE_15__["default"], {
  isNarrow: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 30
  }
});

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "grid",
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "grid-cell",
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
  isVisible: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 21
  }
})));

var ShareholderVoting = function ShareholderVoting(props) {
  var onSortChange = props.onSortChange,
      componentId = props.componentId,
      clientId = props.clientId,
      rows = props.rows,
      isShowHeader = props.isShowHeader,
      title = props.title,
      isSubscribed = props.isSubscribed,
      isViewFetchPending = props.isViewFetchPending,
      isSubscriptionScreenActive = props.isSubscriptionScreenActive,
      error = props.error,
      onDismissError = props.onDismissError,
      onSubscribeClick = props.onSubscribeClick;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      isShowingFullDescription = _React$useState[0],
      setIsShowingFullDescription = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.resizeTimestamp),
      resizeTimestamp = _React$useState2[0],
      setResizeTimestamp = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      activeEvent = _React$useState3[0],
      setActiveEvent = _React$useState3[1];

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      dialogContainerEl = _React$useState4[0],
      setDialogContainerEl = _React$useState4[1];

  var handleRowSelect = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (evt, row) {
    setActiveEvent(row.data);
  }, [setActiveEvent]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (props.resizeTimestamp > resizeTimestamp) {
      setResizeTimestamp(props.resizeTimestamp);
    }
  }, [props.resizeTimestamp, resizeTimestamp]);
  var handleHeaderSort = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (gridSort) {
    onSortChange(componentId, gridSort);
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_7__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_7__["AREA_SHAREHOLDER_VOTING"], 'Columns sorted', {
      column: gridSort.id
    });
  }, [onSortChange, componentId]);
  var toggleShowingFullDescription = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setIsShowingFullDescription(!isShowingFullDescription);
  }, [isShowingFullDescription, setIsShowingFullDescription]);
  var handleMaterialMenuClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (materialsCount) {
    return _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logMaterialsListOpen"](clientId, materialsCount);
  }, [clientId]);
  var handleMaterialClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (materialUrl) {
    return _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logMaterialsLinkOpen"](clientId, materialUrl);
  }, [clientId]);
  var handleVoteClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (voteUrl) {
    return _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logVotingLinkOpen"](clientId, voteUrl);
  }, [clientId]);

  var showMoreOrShowLess = function showMoreOrShowLess(isFullDescription) {
    var formattedString = src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVotingExplanation');
    var textToShow = isFullDescription ? formattedString : formattedString.substring(0, 130);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, textToShow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onTap: toggleShowingFullDescription,
      "data-test-id": "shareholder-show-" + (isFullDescription ? 'less' : 'more'),
      className: "shareholder-voting__toggle-more",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, isFullDescription ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShowLess') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShowMore')));
  };

  var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_signUpBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSubscribe: onSubscribeClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }));

  var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
    isSubscribed: isSubscribed,
    onSubscription: onSubscribeClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }));

  var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_menu_menuItems__WEBPACK_IMPORTED_MODULE_14__["default"], {
    event: activeEvent,
    setEvent: setActiveEvent,
    onMaterialClick: handleMaterialClick,
    onMaterialMenuClick: handleMaterialMenuClick,
    onVoteClick: handleVoteClick,
    dialogContainerEl: dialogContainerEl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  });

  var gridContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_resizable_resizable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resizeTimestamp: resizeTimestamp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, function (_ref) {
    var width = _ref.parentViewport.width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
      isVertical: true,
      position: "top",
      gutter: "medium",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, !isSubscribed && _ref2, _ref3, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["StackItem"], {
      "data-test-id": "shareholder-voting-module-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, showMoreOrShowLess(isShowingFullDescription)), _ref4, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_10__["StackItem"], {
      isGrow: true,
      isStretch: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "shareholder-voting grid grid--y grid--fit-fill",
      "data-test-id": "shareholder-voting-grid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid grid--scroll",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      cols: _grid_columnDefinitions_phone__WEBPACK_IMPORTED_MODULE_12__["getColumnDefinitions"](width),
      componentId: componentId,
      onHeaderSort: handleHeaderSort,
      rowClass: "tst-shareholder-voting-row",
      rows: rows,
      sort: props.sort,
      onRowSelect: handleRowSelect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 37
      }
    })))), activeEvent !== null && _ref5);
  });
  var subscribeContent = _ref6;
  var content = isSubscriptionScreenActive ? subscribeContent : gridContent;
  var errorContent = error && !isSubscriptionScreenActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClose: onDismissError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, error) : null;

  if (isShowHeader) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "grid grid--y grid--fit-fill shareholder-voting",
      "data-test-id": "shareholder-voting",
      onDomRef: setDialogContainerEl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "grid-cell",
      showClose: true,
      "data-test-id": "shareholder-voting-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, title), !isViewFetchPending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, errorContent, content), isViewFetchPending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid-cell",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      isVisible: isViewFetchPending,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    })));
  }

  if (isViewFetchPending) {
    return _ref7;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, errorContent, content);
};

ShareholderVoting.defaultProps = {
  isShowClose: false,
  isShowHeader: false,
  title: '',
  resizeTimestamp: Date.now()
};
/* harmony default export */ __webpack_exports__["default"] = (ShareholderVoting);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/votingSubscription/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/shareholderVoting/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/shareholderVoting/actions.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/shareholderVoting/votingSubscription/index.js");






var mapStateToProps = function mapStateToProps(state) {
  var clientKey = src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_1__["getClientKey"](state);
  return {
    subscriptionLevels: _selectors__WEBPACK_IMPORTED_MODULE_2__["getSubscriptionLevels"](state),
    isSavePending: _selectors__WEBPACK_IMPORTED_MODULE_2__["getIsSubscriptionSavePending"](state, clientKey),
    selectedSubscriptionId: _selectors__WEBPACK_IMPORTED_MODULE_2__["getSubscriptionLevelId"](state, clientKey),
    clientKey: clientKey,
    error: _selectors__WEBPACK_IMPORTED_MODULE_2__["getDataFetchError"](state)
  };
};

var mapDispatchToProps = {
  onSubmit: _actions__WEBPACK_IMPORTED_MODULE_3__["subscriptionLevelChangeInit"],
  onCancel: _actions__WEBPACK_IMPORTED_MODULE_3__["subscriptionLevelsClose"],
  onDismissError: _actions__WEBPACK_IMPORTED_MODULE_3__["clearShareholdersVotingErrors"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_index__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/votingSubscription/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/statusMessage/statusMessage.js");
/* harmony import */ var src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/scrollable/scrollable.js");
/* harmony import */ var src_frontend_atoms_bodyText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/atoms/bodyText/index.js");
/* harmony import */ var src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/atoms/heading/index.js");
/* harmony import */ var src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/atoms/divider/index.js");
/* harmony import */ var src_frontend_atoms_radioButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/atoms/radioButton/index.js");
/* harmony import */ var src_frontend_atoms_note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/atoms/note/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/shareholderVoting/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_votingCostInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/votingCostInfo.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\votingSubscription\\index.js";

















var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
  isStretch: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 25
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_votingCostInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {
  isSubscribeText: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 29
  }
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
  isStretch: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 25
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 29
  }
}));

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
  isStretch: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 25
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 29
  }
}));

var VotingSubscription = function VotingSubscription(props) {
  var onCancel = props.onCancel,
      onSubmit = props.onSubmit,
      isNarrow = props.isNarrow,
      isSavePending = props.isSavePending,
      subscriptionLevels = props.subscriptionLevels,
      selectedSubscriptionId = props.selectedSubscriptionId,
      clientKey = props.clientKey,
      onDismissError = props.onDismissError,
      error = props.error;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](selectedSubscriptionId),
      subscriptionId = _React$useState[0],
      setSubscriptionId = _React$useState[1];

  var showFootnoteText = subscriptionId !== _constants__WEBPACK_IMPORTED_MODULE_12__["SUBSCRIPTION_NONE"];
  var handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    onSubmit(clientKey, subscriptionId);
  }, [onSubmit, clientKey, subscriptionId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isVertical: true,
    position: "top",
    gutter: "none",
    isScrollable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_scrollable_scrollable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: onDismissError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isVertical: true,
    position: "top",
    gutter: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "secondary",
    "data-test-id": "voting-subscribe-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVoting_Subscribe_Title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_bodyText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVoting_Subscribe_Explanation'))), _ref, _ref2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_bodyText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVoting_Subscribe_Select_Level'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isVertical: true,
    position: "top",
    gutter: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(subscriptionLevels, function (_ref3) {
    var Name = _ref3.Name,
        Id = _ref3.Id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
      isStretch: true,
      key: Id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_radioButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "medium",
      "data-test-id": "voting-subscribe-option-" + Id,
      isChecked: Id === subscriptionId,
      label: Name,
      onChange: function onChange() {
        return setSubscriptionId(Id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 45
      }
    }));
  }), showFootnoteText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isStretch: true,
    key: "footnote",
    "data-test-id": "voting-change-delay-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_note__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVoting_Subscribe_Note'))))), _ref4, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    position: "start",
    isStretch: isNarrow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    gutter: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isGrow: isNarrow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "voting-subscribe-cancel-button",
    onTap: onCancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Cancel'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_2__["StackItem"], {
    isGrow: isNarrow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-test-id": "voting-subscribe-button",
    type: "primary",
    loaderAlign: "center",
    isWaiting: isSavePending,
    onTap: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ShareholderVoting_Subscribe')))))))));
};

VotingSubscription.defaultProps = {
  isNarrow: false
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](VotingSubscription));

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/11.js.map