(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./src/frontend/components/signalFilters/signalFilters.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/button/button.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/sheet/sheetBody.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/sheet/sheetActions.js");
/* harmony import */ var _groupList_groupList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/signalFilters/groupList/groupList.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\signalFilters\\signalFilters.phone.js";











var SignalFilters = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(SignalFilters, _React$Component);

  function SignalFilters() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "sheetRef", react__WEBPACK_IMPORTED_MODULE_4__["createRef"]());

    return _this;
  }

  var _proto = SignalFilters.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    if (!this.props.isReady) {
      this.props.updateShownInstruments();
    } // save current filter state to be restored later
    // if a restore is needed


    this.props.saveCurrentFilters();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.resetFilters();
  };

  _proto.handleFilterDropdownUpdate = function handleFilterDropdownUpdate(filterGroup, selectedIndex) {
    this.props.updateFilterDropdown(filterGroup, selectedIndex);
  };

  _proto.handleFilterGroupUpdate = function handleFilterGroupUpdate(filterGroup, filterItem) {
    this.props.updateFilterGroup(filterGroup, filterItem);
  };

  _proto.handleApplyFilter = function handleApplyFilter() {
    this.props.applyFilters();
    this.props.onFilterChange();
    this.props.saveFilterSettings(this.props.filterGroupList);
  };

  _proto.render = function render() {
    var filterGroupList = this.props.filterGroupList;
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-handler-names
      react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "tradesignalsfilter grid grid--y",
        onDomRef: this.sheetRef,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClose: this.props.onClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Trade_Signals_Filters')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "grid grid--y",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "grid grid--scroll",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "tradesignalsfilter-list grid-cell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_groupList_groupList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        filterGroupList: filterGroupList,
        onFilterGroupUpdate: this.handleFilterGroupUpdate,
        onFilterDropdownUpdate: this.handleFilterDropdownUpdate,
        sheetRef: this.sheetRef.current,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_sheet_sheetActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "grid-cell g--fit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onTap: this.handleApplyFilter,
        className: "btn--primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_5__["default"].getText('Ok')))))
    );
  };

  return SignalFilters;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SignalFilters, "propTypes", {
  applyFilters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  isReady: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  filterGroupList: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  saveFilterSettings: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updateShownInstruments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  resetFilters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updateFilterDropdown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  saveCurrentFilters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  updateFilterGroup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_6__["bindHandlers"])(SignalFilters));

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/16.js.map