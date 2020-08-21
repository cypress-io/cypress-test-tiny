(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./src/frontend/modules/shareholderVoting/grid/baseColumns.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dueDateColumn", function() { return dueDateColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyNameColumn", function() { return companyNameColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeColumn", function() { return typeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountColumn", function() { return accountColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusColumn", function() { return statusColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionColumn", function() { return actionColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialsColumn", function() { return materialsColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saxo_openui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/openui/src/index.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/shareholderVoting/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/status.js");
/* harmony import */ var _components_companyName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/companyName.js");
/* harmony import */ var _components_vote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/vote.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\grid\\baseColumns.js";













var dueDateColumn = function dueDateColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_DUE_DATE"],
    width: 105,
    priority: 0,
    isNumeric: true,
    sort: {
      id: 'dueDate',
      fields: [{
        path: 'data.CutoffDate'
      }]
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getDueDate"](row.data);
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Shareholder_Voting_Due_Date')
  };
};
var companyNameColumn = function companyNameColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_COMPANY_NAME"],
    width: 175,
    priority: 1,
    sort: {
      id: 'company'
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getCompanyName"](row.data);
    },
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_companyName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        position: "left",
        companyName: _queries__WEBPACK_IMPORTED_MODULE_8__["getCompanyName"](row.data),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      });
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Shareholder_Voting_Company')
  };
};
var typeColumn = function typeColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_TYPE"],
    width: 175,
    priority: 5,
    template: function template(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getType"](row.data);
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getType"](row.data);
    },
    sort: {
      id: 'event'
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Type')
  };
};
var accountColumn = function accountColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_ACCOUNT"],
    width: 150,
    priority: 6,
    template: function template(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getAccount"](row.data);
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getAccount"](row.data);
    },
    sort: {
      id: 'account'
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Account')
  };
};
var statusColumn = function statusColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_STATUS"],
    width: 100,
    priority: 4,
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_status__WEBPACK_IMPORTED_MODULE_9__["default"], {
        event: row.data,
        position: "left",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 39
        }
      });
    },
    itemToLabel: function itemToLabel(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getHasVoted"](row.data);
    },
    sort: {
      id: 'status'
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Status')
  };
};
var actionColumn = function actionColumn(onVoteCallback) {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_ACTION"],
    width: 150,
    priority: 2,
    template: function template(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_vote__WEBPACK_IMPORTED_MODULE_11__["default"], {
        position: "left",
        event: row.data,
        onVoteClick: onVoteCallback,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      });
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Shareholder_Voting_Action')
  };
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  type: "file",
  size: "medium",
  isBlock: true,
  isAction: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 25
  }
});

var materialsColumn = function materialsColumn() {
  return {
    id: _constants__WEBPACK_IMPORTED_MODULE_6__["S_MATERIALS"],
    width: 70,
    priority: 3,
    align: _saxo_openui__WEBPACK_IMPORTED_MODULE_1__["UI"].isRTL() ? 'start' : 'end',
    template: function template(row) {
      return _queries__WEBPACK_IMPORTED_MODULE_8__["getMaterials"](row.data).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
        position: "right",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_3__["StackItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onTap: function onTap() {
          return row.data.onMaterialClick == null ? void 0 : row.data.onMaterialClick(row.data);
        },
        "data-test-id": "shareholder-voting-materials-button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, _ref))) : null;
    },
    primaryTitle: src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Shareholder_Voting_Materials')
  };
};

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/grid/columnDefinitions.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnDefinitions", function() { return getColumnDefinitions; });
/* harmony import */ var _baseColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/shareholderVoting/grid/baseColumns.js");

var getColumnDefinitions = function getColumnDefinitions(onVoteCallback) {
  return [_baseColumns__WEBPACK_IMPORTED_MODULE_0__["dueDateColumn"](), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["companyNameColumn"](), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["typeColumn"](), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["accountColumn"](), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["statusColumn"](), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["actionColumn"](onVoteCallback), _baseColumns__WEBPACK_IMPORTED_MODULE_0__["materialsColumn"]()];
};

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/menu/materialsMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/menu/menu.js");
/* harmony import */ var src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/menu/menuItem.js");
/* harmony import */ var _components_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/material.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\menu\\materialsMenu.js";










var MaterialsMenu = function MaterialsMenu(props) {
  var materials = props.materials,
      dialogContainerEl = props.dialogContainerEl,
      handleCloseDialog = props.handleCloseDialog,
      onMaterialClick = props.onMaterialClick;
  var handleItemTap = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (material) {
    return onMaterialClick(material.Url);
  }, [onMaterialClick]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Shareholder_Voting_Materials'),
    dialogType: "card",
    dialogParent: dialogContainerEl,
    onHide: handleCloseDialog,
    "data-test-id": "shareholder-voting-materials-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(materials, function (material) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_menu_menuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data-test-id": "shareholder-voting-material-" + material.MaterialType.Code,
      key: _queries__WEBPACK_IMPORTED_MODULE_6__["keyForMaterial"](material),
      tapArg: material,
      onTap: handleItemTap,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        material: material.MaterialType.Description,
        position: "center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    });
  }));
};

MaterialsMenu.defaultProps = {
  handleCloseDialog: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.noop,
  dialogContainerEl: null
};
/* harmony default export */ __webpack_exports__["default"] = (MaterialsMenu);

/***/ }),

/***/ "./src/frontend/modules/shareholderVoting/shareholderVoting.default.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/statusMessage/statusMessage.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var _menu_materialsMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/modules/shareholderVoting/menu/materialsMenu.js");
/* harmony import */ var _votingSubscription_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/modules/shareholderVoting/votingSubscription/container.js");
/* harmony import */ var _grid_columnDefinitions_default__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/modules/shareholderVoting/grid/columnDefinitions.default.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/modules/shareholderVoting/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_signUpBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/signUpBar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/header.js");
/* harmony import */ var _components_votingCostInfo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/modules/shareholderVoting/components/votingCostInfo.js");
/* harmony import */ var _featureTracking__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/shareholderVoting/featureTracking.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/modules/shareholderVoting/queries.js");


var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\shareholderVoting\\shareholderVoting.default.js";






















var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__["StackItem"], {
  isStretch: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_votingCostInfo__WEBPACK_IMPORTED_MODULE_18__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 21
  }
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_votingSubscription_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 30
  }
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
  className: "grid-cell",
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
  isVisible: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 25
  }
}));

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
  className: "grid-cell",
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
  isVisible: true,
  __self: _this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 17
  }
}));

var ShareholderVoting = function ShareholderVoting(props) {
  var componentId = props.componentId,
      onSortChange = props.onSortChange,
      isShowClose = props.isShowClose,
      isShowHeader = props.isShowHeader,
      clientId = props.clientId,
      title = props.title,
      rows = props.rows,
      isSubscribed = props.isSubscribed,
      error = props.error,
      onDismissError = props.onDismissError,
      isSubscriptionScreenActive = props.isSubscriptionScreenActive,
      onSubscribeClick = props.onSubscribeClick,
      isViewFetchPending = props.isViewFetchPending;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      dialogContainerEl = _React$useState[0],
      setDialogContainerEl = _React$useState[1];

  var handleHeaderSort = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (gridSort) {
    onSortChange(componentId, gridSort);
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_8__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_8__["AREA_SHAREHOLDER_VOTING"], 'Columns sorted', {
      column: gridSort.id
    });
  }, [onSortChange, componentId]);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      activeRow = _React$useState2[0],
      setActiveRow = _React$useState2[1];

  var closeDialog = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    setActiveRow(null);
  }, [setActiveRow]);
  var handleMaterialMenuClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (row) {
    setActiveRow(row);
    var materialsCount = _queries__WEBPACK_IMPORTED_MODULE_20__["getMaterials"](row).length;
    _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logMaterialsListOpen"](clientId, materialsCount);
  }, [clientId, setActiveRow]);
  var handleMaterialClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (materialUrl) {
    return _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logMaterialsLinkOpen"](clientId, materialUrl);
  }, [clientId]);
  var handleVoteClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (voteUrl) {
    return _featureTracking__WEBPACK_IMPORTED_MODULE_19__["logVotingLinkOpen"](clientId, voteUrl);
  }, [clientId]);
  var getRows = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(rows, function (row) {
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
        data: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, row.data, {
          onMaterialClick: handleMaterialMenuClick
        })
      });
    });
  }, [rows, handleMaterialMenuClick]);
  var gridContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    ref: setDialogContainerEl,
    className: "shareholder-voting-content grid grid--y grid--fit-fill",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    isVertical: true,
    position: "top",
    gutter: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, !isSubscribed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_signUpBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onSubscribe: onSubscribeClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
    isSubscribed: isSubscribed,
    onSubscription: onSubscribeClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_7__["StackItem"], {
    isStretch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('ShareholderVotingExplanation')), _ref), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "grid shareholder-voting-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: _grid_columnDefinitions_default__WEBPACK_IMPORTED_MODULE_14__["getColumnDefinitions"](handleVoteClick),
    componentId: componentId,
    onHeaderSort: handleHeaderSort,
    rowClass: "tst-shareholder-voting-row",
    rows: getRows(),
    sort: props.sort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  })), activeRow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_menu_materialsMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    dialogContainerEl: dialogContainerEl,
    handleCloseDialog: closeDialog,
    onMaterialClick: handleMaterialClick,
    materials: _queries__WEBPACK_IMPORTED_MODULE_20__["getMaterials"](activeRow),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }));
  var subscribeContent = _ref2;
  var content = isSubscriptionScreenActive ? subscribeContent : gridContent;
  var errorContent = error && !isSubscriptionScreenActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_statusMessage_statusMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: onDismissError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, error) : null;

  if (isShowHeader) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "grid grid--y grid--fit-fill shareholder-voting",
      "data-test-id": "shareholder-voting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "grid-cell",
      showClose: isShowClose,
      "data-test-id": "shareholder-voting-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, title), !isViewFetchPending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, errorContent, content), isViewFetchPending && _ref3);
  }

  if (isViewFetchPending) {
    return _ref4;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, errorContent, content);
};

ShareholderVoting.defaultProps = {
  isShowClose: false,
  isShowHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1__["memo"](ShareholderVoting));

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

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/10.js.map