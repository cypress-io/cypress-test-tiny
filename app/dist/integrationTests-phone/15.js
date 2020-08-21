(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/frontend/components/legacyFilter/filterDropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/dropdown/dropdown.js");
/* harmony import */ var src_frontend_blocks_dropdown_dropdownItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/dropdown/dropdownItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\legacyFilter\\filterDropdown.js";





function FilterDropdown(props) {
  var _this = this;

  var filterList = props.filterList,
      selectedItem = props.selectedItem,
      onChange = props.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: selectedItem,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filterList, function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_dropdown_dropdownItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      value: option.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, option.value || '');
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FilterDropdown);

/***/ }),

/***/ "./src/frontend/components/legacyFilter/filterGroup.js":
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
/* harmony import */ var src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/blocks/infoTooltip/index.js");
/* harmony import */ var _filterDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/legacyFilter/filterDropdown.js");
/* harmony import */ var _filterGroupItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/legacyFilter/filterGroupItem.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\legacyFilter\\filterGroup.js";







/**
 * Filter group component.
 * Consists either of a list of filters that can be toggled
 * on or off (represented in the UI as checkboxes), OR
 * a dropdown with only one selected filter option
 */
var FilterGroup = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(FilterGroup, _React$PureComponent);

  function FilterGroup() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FilterGroup.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        itemClassName = _this$props.itemClassName,
        labelClassName = _this$props.labelClassName,
        filterGroup = _this$props.filterGroup,
        filterGroupLabel = _this$props.filterGroupLabel,
        filterList = _this$props.filterList,
        selectedDropdownItem = _this$props.selectedDropdownItem,
        tooltip = _this$props.tooltip,
        parent = _this$props.parent,
        onFilterChange = _this$props.onFilterChange;
    var labelClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('t-meta', labelClassName);
    var filters;

    if (selectedDropdownItem == null) {
      filters = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.chain(filterList).reject('isHidden').map(function (filter, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_filterGroupItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: index,
          className: itemClassName,
          filterGroup: filterGroup,
          filterItemKey: filter.key,
          filterItemLabel: filter.label,
          isChecked: filter.isChecked,
          onChange: onFilterChange,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }
        });
      }).value();
    } else {
      filters = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_filterDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
        filterList: filterList,
        selectedItem: selectedDropdownItem,
        onChange: onFilterChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: labelClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_infoTooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: filterGroupLabel,
      text: tooltip,
      dialogParent: parent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, filterGroupLabel)), filters);
  };

  return FilterGroup;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(FilterGroup, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (FilterGroup);

/***/ }),

/***/ "./src/frontend/components/legacyFilter/filterGroupItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_legacyCheckbox_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/legacyCheckbox/checkbox.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\legacyFilter\\filterGroupItem.js";




var FilterGroupItem = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(FilterGroupItem, _React$Component);

  function FilterGroupItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FilterGroupItem.prototype;

  _proto.handleChange = function handleChange() {
    var _this$props = this.props,
        filterGroup = _this$props.filterGroup,
        filterItemKey = _this$props.filterItemKey,
        onChange = _this$props.onChange;
    onChange(filterGroup, filterItemKey);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        filterItemLabel = _this$props2.filterItemLabel,
        isChecked = _this$props2.isChecked;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_blocks_legacyCheckbox_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isChecked: isChecked,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, filterItemLabel));
  };

  return FilterGroupItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_2__["bindHandlers"])(FilterGroupItem));

/***/ }),

/***/ "./src/frontend/components/signalFilters/groupList/groupList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_components_legacyFilter_filterGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/legacyFilter/filterGroup.js");
/* harmony import */ var src_frontend_modules_tradeSignals_localizations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/tradeSignals/localizations.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\signalFilters\\groupList\\groupList.js";





function GroupList(_ref) {
  var _this = this;

  var sheetRef = _ref.sheetRef,
      filterGroupList = _ref.filterGroupList,
      onFilterGroupUpdate = _ref.onFilterGroupUpdate,
      onFilterDropdownUpdate = _ref.onFilterDropdownUpdate;

  var filterGroupView = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(filterGroupList).map(function (filterGroup, key) {
    return {
      filterGroup: filterGroup,
      key: key,
      position: filterGroup.position
    };
  }).sortBy('position').map(function (_ref2) {
    var filterGroup = _ref2.filterGroup,
        key = _ref2.key;
    var filterList;
    var selectedDropdownItem;
    var handleFilterChange; // FilterGroup

    if (filterGroup.filterList) {
      filterList = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filterGroup.filterList, function (filterListItem) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({
          label: src_frontend_modules_tradeSignals_localizations__WEBPACK_IMPORTED_MODULE_3__["getFilterItemLabel"](key, filterListItem.key)
        }, filterListItem);
      });
      handleFilterChange = onFilterGroupUpdate; // FilterDropdown
    } else {
      filterList = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filterGroup.options, function (option) {
        return {
          key: option,
          value: src_frontend_modules_tradeSignals_localizations__WEBPACK_IMPORTED_MODULE_3__["getFilterItemLabel"](key, option)
        };
      });

      handleFilterChange = function handleFilterChange(selectedOption) {
        var selectedId = filterGroup.options.indexOf(selectedOption);
        onFilterDropdownUpdate(key, selectedId);
      };

      selectedDropdownItem = filterGroup.options[filterGroup.selectedIndex];
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_legacyFilter_filterGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      className: "tradesignalsfilter-list-group",
      itemClassName: "tradesignalsfilter-list-group-item",
      labelClassName: "tradesignalsfilter-list-group-label",
      filterGroup: key,
      filterGroupLabel: src_frontend_modules_tradeSignals_localizations__WEBPACK_IMPORTED_MODULE_3__["getText"](key),
      filterList: filterList,
      selectedDropdownItem: selectedDropdownItem,
      tooltip: src_frontend_modules_tradeSignals_localizations__WEBPACK_IMPORTED_MODULE_3__["getTooltip"](key),
      parent: sheetRef,
      onFilterChange: handleFilterChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    });
  }).value();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }
  }, filterGroupView);
}

/* harmony default export */ __webpack_exports__["default"] = (GroupList);

/***/ }),

/***/ "./src/frontend/components/signalFilters/signalFilters.default.js":
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
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_tradeSignalsDisclaimer_tradeSignalsDisclaimer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/tradeSignalsDisclaimer/tradeSignalsDisclaimer.js");
/* harmony import */ var src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/atoms/stack/index.js");
/* harmony import */ var src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/oricon/oricon.js");
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/blocks/link/link.js");
/* harmony import */ var _groupList_groupList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/signalFilters/groupList/groupList.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\signalFilters\\signalFilters.default.js";













var SignalFilters = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SignalFilters, _React$Component);

  function SignalFilters(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      showDisclaimer: false
    };
    return _this;
  }

  var _proto = SignalFilters.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    if (!this.props.isReady) {
      this.props.updateShownInstruments();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEqual(nextProps.filterGroupList, this.props.filterGroupList)) {
      this.props.onFilterChange();
      this.props.saveFilterSettings(nextProps.filterGroupList);
    }

    if (this.props.assetTypePreferences !== nextProps.assetTypePreferences) {
      this.props.setBusy();
    } else if (!nextProps.isReady) {
      this.props.updateShownInstruments();
    }
  };

  _proto.handleShowDisclaimer = function handleShowDisclaimer() {
    this.setState({
      showDisclaimer: true
    });
  };

  _proto.handleDismissDisclaimer = function handleDismissDisclaimer() {
    this.props.onAcceptDisclaimer(this.props.isDisclaimerAccepted);
    this.setState({
      showDisclaimer: false
    });
  };

  _proto.handleFilterDropdownUpdate = function handleFilterDropdownUpdate(filterGroup, selectedIndex) {
    this.props.updateFilterDropdown(filterGroup, selectedIndex);
  };

  _proto.handleFilterGroupUpdate = function handleFilterGroupUpdate(filterGroup, filterItem) {
    this.props.updateFilterGroup(filterGroup, filterItem);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        filterGroupList = _this$props.filterGroupList,
        isDisclaimerAccepted = _this$props.isDisclaimerAccepted; // show disclaimer if user has not accepted it or on demand

    var disclaimer = this.state.showDisclaimer || isDisclaimerAccepted === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_tradeSignalsDisclaimer_tradeSignalsDisclaimer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onOk: this.handleDismissDisclaimer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }) : false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid grid--y",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "tradesignalsfilter grid grid--scroll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "tradesignalsfilter-list grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("header", {
      className: "tradesignalsfilter-list-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Trade_Signals_Filters')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_groupList_groupList__WEBPACK_IMPORTED_MODULE_13__["default"], {
      filterGroupList: filterGroupList,
      onFilterGroupUpdate: this.handleFilterGroupUpdate,
      onFilterDropdownUpdate: this.handleFilterDropdownUpdate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "tradesignals-sidebar-links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
      href: src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].appFeatures.tradeSignalsPerformanceStatisticsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
      position: "left",
      gutter: "tiny",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_9__["StackItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 37
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Trade_Signals_Performance_Statistics')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_atoms_stack__WEBPACK_IMPORTED_MODULE_9__["StackItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_oricon_oricon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      type: "external",
      size: src_frontend_config__WEBPACK_IMPORTED_MODULE_5__["default"].isProApp ? src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_11__["SMALL"] : src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_11__["MEDIUM"],
      isToggled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 41
      }
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onTap: this.handleShowDisclaimer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Disclaimer')), disclaimer));
  };

  return SignalFilters;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SignalFilters, "propTypes", {
  isReady: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  filterGroupList: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  setBusy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  saveFilterSettings: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updateShownInstruments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  assetTypePreferences: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  isDisclaimerAccepted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  updateFilterDropdown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updateFilterGroup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onAcceptDisclaimer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_7__["bindHandlers"])(SignalFilters));

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/15.js.map