(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/frontend/components/columnPickerMini/columnDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnsDefinitions", function() { return getColumnsDefinitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/touchable/touchable.js");
/* harmony import */ var _columnPickerMiniSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnPickerMiniSort.js");
var _this = undefined,
    _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnDefinitions.js";




var getColumnsDefinitions = function getColumnsDefinitions(onGridRowSort) {
  return [{
    id: 'name',
    template: function template(_ref) {
      var data = _ref.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "grid grid--y",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: "grid-cell",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }
      }, data.name), data.subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: "grid-cell beta",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 35
        }
      }, data.subtitle));
    },
    align: 'start',
    // Fluid width
    minWidth: 1,
    maxWidth: 9999
  }, {
    id: 'icon',
    template: function template(_ref2) {
      var id = _ref2.id,
          data = _ref2.data;
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "grid grid--grail",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_columnPickerMiniSort__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isNotSortable: data.isNotSortable,
        sortKey: data.sortKey,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      }));

      if (!data.isNotSortable) {
        var onTap = function onTap(evt) {
          return onGridRowSort(evt, id, data.column);
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_touchable_touchable__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onTap: onTap,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 24
          }
        }, content);
      }

      return content;
    },
    width: 65
  }];
};

/***/ }),

/***/ "./src/frontend/components/columnPickerMini/columnPickerMini.js":
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
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridColumnUtils.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _columnPickerMiniGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnPickerMiniGrid.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnPickerMini.js";











var ROW_HEIGHT = 25;
var ROW_DOUBLE_HEIGHT = 50;

var ColumnPickerMini = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ColumnPickerMini, _React$PureComponent);

  function ColumnPickerMini(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {
      rows: _this.getRows(_this.props)
    };
    return _this;
  }

  var _proto = ColumnPickerMini.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.doubleColumns !== this.props.doubleColumns || nextProps.visibleColumnNames !== this.props.visibleColumnNames) {
      this.setState({
        rows: this.getRows(nextProps)
      });
    }
  };

  _proto.mapColumnToRow = function mapColumnToRow(column) {
    var _this$props = this.props,
        rowHeight = _this$props.rowHeight,
        rowDoubleHeight = _this$props.rowDoubleHeight; // column.sortKey is required to support old implementation. Should we removed after we move to new sorting implementation.

    var sortKey = column.sortKey || lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(column, ['sort', 'id']);

    return {
      id: column.id,
      data: {
        name: column.primaryTitle,
        subtitle: column.secondaryTitle || '',
        sortKey: sortKey,
        column: column,
        isFixed: src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_5__["isColumnFixed"](column),
        isNotSortable: column.isNotSortable || !column.sort
      },
      className: "tst-col-item-" + column.id,
      height: column.secondaryTitle ? rowDoubleHeight : rowHeight
    };
  };

  _proto.getRows = function getRows(_ref) {
    var doubleColumns = _ref.doubleColumns,
        visibleColumnNames = _ref.visibleColumnNames,
        miniColumnPickerHeaderId = _ref.miniColumnPickerHeaderId;

    var visibleColsExcludingColPicker = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.reject(visibleColumnNames, function (colId) {
      return colId === miniColumnPickerHeaderId;
    });

    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.chain(doubleColumns) // remove fixed columns and visible columns except the column picker header
    .reject(function (column) {
      return column && (src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_5__["isColumnFixed"](column) || lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(visibleColsExcludingColPicker, column.id));
    }).map(this.mapColumnToRow.bind(this)).value();
  };

  _proto.handleColumnSelect = function handleColumnSelect(columnId) {
    var _this$props2 = this.props,
        doubleColumns = _this$props2.doubleColumns,
        columnsInfo = _this$props2.columnsInfo,
        visibleColumnNames = _this$props2.visibleColumnNames,
        miniColumnPickerHeaderId = _this$props2.miniColumnPickerHeaderId;

    var isAlreadyVisible = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(visibleColumnNames, columnId);

    var columns = src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_5__["sortColumnsByIndex"](doubleColumns, columnsInfo);

    if (!isAlreadyVisible) {
      var colPickerIndex = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.findIndex(columns, function (col) {
        return col.id === miniColumnPickerHeaderId;
      });

      var selectedColumn = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.chain(columns).remove(function (col) {
        return col.id === columnId;
      }).head().value();

      if (selectedColumn) {
        // insert selected column before previous column picker header i.e. last visible column
        var changedColumns = columns.slice(0);
        changedColumns.splice(colPickerIndex, 0, selectedColumn);
        this.props.onColumnsChange(changedColumns);
      }
    }

    this.props.onHide();
  };

  _proto.handleGridRowSort = function handleGridRowSort(columnId, column) {
    this.props.onGridRowSort(columnId, column);
    this.props.onHide();
  };

  _proto.render = function render() {
    var rows = this.state.rows;
    var _this$props3 = this.props,
        miniColumnPickerHeaderId = _this$props3.miniColumnPickerHeaderId,
        displayMode = _this$props3.displayMode,
        isFullHeight = _this$props3.isFullHeight,
        onHide = _this$props3.onHide,
        onShow = _this$props3.onShow;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isFullHeight: isFullHeight,
      onHide: onHide,
      onShow: onShow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "colpickermini dropdown-sheet grid grid--y grid--fit-fill",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: onHide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_8__["default"].getText('SelectColumn')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "grid grid--scroll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_columnPickerMiniGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
      displayMode: displayMode,
      rows: rows,
      selectedRow: miniColumnPickerHeaderId,
      onColumnSelect: this.handleColumnSelect,
      onGridRowSort: this.handleGridRowSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }))));
  };

  return ColumnPickerMini;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ColumnPickerMini, "defaultProps", {
  isFullHeight: false,
  rowHeight: ROW_HEIGHT,
  rowDoubleHeight: ROW_DOUBLE_HEIGHT,
  onShow: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop,
  columnsInfo: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_9__["bindHandlers"])(ColumnPickerMini));

/***/ }),

/***/ "./src/frontend/components/columnPickerMini/columnPickerMiniButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridBlocks.js");
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnPickerMiniButton.js";





function ColumnPickerMiniButton(props) {
  var column = props.column,
      sortDataValue = props.sortDataValue,
      className = props.className;
  var primaryTitle = column.primaryTitle,
      secondaryTitle = column.secondaryTitle,
      isSortAlignEnd = column.isSortAlignEnd,
      isNotSortable = column.isNotSortable;
  var sortButtons = isNotSortable ? [] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_3__["IconHigh"], {
    key: "icon-high",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_3__["IconLow"], {
    key: "icon-low",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }
  })];
  var buttonElements = isSortAlignEnd ? [primaryTitle].concat(sortButtons) : [].concat(sortButtons, [primaryTitle]);
  var actionBtnProps = {
    betaValue: secondaryTitle,
    isEnabled: true,
    title: primaryTitle,
    value: buttonElements,
    column: column
  };
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('col-header', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes,
    "data-sortdir": sortDataValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](src_frontend_components_reactGrid_reactGridBlocks__WEBPACK_IMPORTED_MODULE_3__["PriceActionButton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, actionBtnProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ColumnPickerMiniButton);

/***/ }),

/***/ "./src/frontend/components/columnPickerMini/columnPickerMiniDialog.js":
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
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var _columnPickerMini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnPickerMini.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnPickerMiniDialog.js";






var ColumnPickerMiniDialog = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ColumnPickerMiniDialog, _React$Component);

  function ColumnPickerMiniDialog(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    var miniColumnPickerHeaderId = _this.getMiniColumnPickerHeaderId(_this.props);

    _this.state = {
      miniColumnPickerHeaderId: miniColumnPickerHeaderId
    };
    return _this;
  }

  var _proto = ColumnPickerMiniDialog.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.doubleColumns === this.props.doubleColumns && nextProps.visibleColumnNames === this.props.visibleColumnNames) {
      return;
    }

    var miniColumnPickerHeaderId = this.getMiniColumnPickerHeaderId(nextProps);

    if (this.state.miniColumnPickerHeaderId !== miniColumnPickerHeaderId) {
      this.setState({
        miniColumnPickerHeaderId: miniColumnPickerHeaderId
      });
    }
  };

  _proto.getMiniColumnPickerHeaderId = function getMiniColumnPickerHeaderId(props) {
    var visibleColumnNames = props.visibleColumnNames;

    if (!visibleColumnNames || !visibleColumnNames.length) {
      return null;
    }

    return this.isColumnPickerBtnEnabled(props) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.last(visibleColumnNames) || null;
  };

  _proto.isColumnPickerBtnEnabled = function isColumnPickerBtnEnabled(props) {
    var visibleColumnNames = props.visibleColumnNames,
        doubleColumns = props.doubleColumns;
    return visibleColumnNames.length !== doubleColumns.length;
  };

  _proto.handleDialogShown = function handleDialogShown() {
    this.props.onShow();
  };

  _proto.handleDialogHide = function handleDialogHide() {
    this.props.onHide();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isVisible = _this$props.isVisible,
        doubleColumns = _this$props.doubleColumns,
        displayMode = _this$props.displayMode,
        visibleColumnNames = _this$props.visibleColumnNames,
        isFullHeight = _this$props.isFullHeight,
        rowHeight = _this$props.rowHeight,
        rowDoubleHeight = _this$props.rowDoubleHeight,
        onColumnsChange = _this$props.onColumnsChange,
        onGridRowSort = _this$props.onGridRowSort,
        columnsInfo = _this$props.columnsInfo;
    var miniColumnPickerHeaderId = this.state.miniColumnPickerHeaderId;

    if (!isVisible || !miniColumnPickerHeaderId) {
      return false;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_columnPickerMini__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isFullHeight: isFullHeight,
      displayMode: displayMode,
      doubleColumns: doubleColumns,
      columnsInfo: columnsInfo,
      visibleColumnNames: visibleColumnNames,
      miniColumnPickerHeaderId: miniColumnPickerHeaderId,
      rowHeight: rowHeight,
      rowDoubleHeight: rowDoubleHeight,
      onHide: this.handleDialogHide,
      onShow: this.handleDialogShown,
      onColumnsChange: onColumnsChange,
      onGridRowSort: onGridRowSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    });
  };

  return ColumnPickerMiniDialog;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ColumnPickerMiniDialog, "defaultProps", {
  onShow: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__["bindHandlers"])(ColumnPickerMiniDialog));

/***/ }),

/***/ "./src/frontend/components/columnPickerMini/columnPickerMiniGrid.js":
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
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/reactGrid.js");
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var _columnDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnDefinitions.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnPickerMiniGrid.js";






var ColumnPickerMiniGrid = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ColumnPickerMiniGrid, _React$PureComponent);

  function ColumnPickerMiniGrid() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      columns: []
    });

    return _this;
  }

  var _proto = ColumnPickerMiniGrid.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this.setState({
      columns: _columnDefinitions__WEBPACK_IMPORTED_MODULE_7__["getColumnsDefinitions"](this.handleGridRowSort)
    });
  };

  _proto.handleColumnSelect = function handleColumnSelect(evt, _ref) {
    var id = _ref.id;
    evt.preventDefault();
    this.props.onColumnSelect(id);
  };

  _proto.handleGridRowSort = function handleGridRowSort(evt, id, column) {
    evt.preventDefault();
    this.props.onGridRowSort(id, column);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        rows = _this$props.rows,
        selectedRow = _this$props.selectedRow,
        displayMode = _this$props.displayMode;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_reactGrid_reactGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isHeader: false,
      className: "list list--lines",
      rowClass: "list-item",
      cellClass: "grid-cell",
      selectedRow: selectedRow,
      displayMode: displayMode,
      onRowSelect: this.handleColumnSelect,
      cols: this.state.columns,
      rows: rows,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    });
  };

  return ColumnPickerMiniGrid;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ColumnPickerMiniGrid, "defaultProps", {
  displayMode: src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_6__["SINGLE_ROW_DISPLAY_MODE"]
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__["bindHandlers"])(ColumnPickerMiniGrid));

/***/ }),

/***/ "./src/frontend/components/columnPickerMini/columnPickerMiniSort.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/sizes.js");
/* harmony import */ var src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/blocks/icon/icon.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\columnPickerMini\\columnPickerMiniSort.js";




function ColumnPickerMiniSort(props) {
  if (props.isNotSortable) {
    return false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "data-sortkey": props.sortKey,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "iconhigh",
    type: "high",
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_1__["LARGE"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "iconlow",
    type: "low",
    size: src_frontend_blocks_sizes__WEBPACK_IMPORTED_MODULE_1__["LARGE"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ColumnPickerMiniSort);

/***/ }),

/***/ "./src/frontend/components/reactGrid/blocks/columnPickerHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridSortUtils.js");
/* harmony import */ var _types_columnTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _types_sortTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var _types_sortTypes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types_sortTypes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reactGridBlocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridBlocks.js");

var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reactGrid\\blocks\\columnPickerHeader.js";







var ColumnPickerHeader = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ColumnPickerHeader, _React$PureComponent);

  function ColumnPickerHeader() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ColumnPickerHeader.prototype;

  _proto.getIcons = function getIcons(isSortable, sortDataValue) {
    if (isSortable) {
      switch (sortDataValue) {
        case _reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__["SORT_DATA_VALUE_HIGH"]:
          return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            key: "icon-up",
            className: "reactgrid-sort",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 25
            }
          }, "\u25B2")];

        case _reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__["SORT_DATA_VALUE_LOW"]:
          return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
            key: "icon-down",
            className: "reactgrid-sort",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }
          }, "\u25BC")];
      }
    }

    return [];
  };

  _proto.render = function render() {
    var _this$props = this.props,
        column = _this$props.column,
        sort = _this$props.sort,
        className = _this$props.className;
    var isSortable = Boolean(column && column.sort);
    var sortDataValue = _reactGridSortUtils__WEBPACK_IMPORTED_MODULE_3__["getColumnSortDataValue"](column, sort);
    var sortIcons = this.getIcons(isSortable, sortDataValue);
    var headerElements = column.isSortAlignEnd ? [column.primaryTitle].concat(sortIcons) : [].concat(sortIcons, [column.primaryTitle]);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('col-header', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: classes,
      "data-sortdir": sortDataValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_reactGridBlocks__WEBPACK_IMPORTED_MODULE_6__["PriceActionButton"], {
      betaValue: column.secondaryTitle,
      title: column.primaryTitle,
      value: headerElements,
      column: column,
      isEnabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }));
  };

  return ColumnPickerHeader;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ColumnPickerHeader);

/***/ }),

/***/ "./src/frontend/components/reactGrid/plugins/columnPickerHeader/columnPickerHeaderPlugin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_columnPickerMini_columnPickerMiniButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnPickerMiniButton.js");
/* harmony import */ var _blocks_columnPickerHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/reactGrid/blocks/columnPickerHeader.js");
/* harmony import */ var _types_columnTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _types_sortTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var _types_sortTypes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_types_sortTypes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reactGridHeaderItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridHeaderItem.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/constants.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reactGrid\\plugins\\columnPickerHeader\\columnPickerHeaderPlugin.js";










var ColumnPickerHeaderPlugin = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ColumnPickerHeaderPlugin, _React$PureComponent);

  function ColumnPickerHeaderPlugin() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ColumnPickerHeaderPlugin.prototype;

  _proto.handleColumnPickerOpen = function handleColumnPickerOpen(_ref) {
    var evt = _ref.evt;
    // disable sorting
    evt.preventDefault();
    this.props.onColumnPickerOpen();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        columns = _this$props.columns,
        className = _this$props.className,
        visibleColumns = _this$props.visibleColumns,
        headers = _this$props.headers,
        sort = _this$props.sort,
        nextPlugin = _this$props.nextPlugin;
    var nextHeaders = headers;

    if (nextHeaders.length > 0 && columns.length > visibleColumns.length) {
      var lastColumn = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.clone(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.last(visibleColumns));

      lastColumn.onTap = this.handleColumnPickerOpen;

      if (lastColumn.sort || this.props.sort) {
        lastColumn.header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_blocks_columnPickerHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
          column: lastColumn,
          sort: sort,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }
        });
      } else {
        lastColumn.header = function () {
          return Object(src_frontend_components_columnPickerMini_columnPickerMiniButton__WEBPACK_IMPORTED_MODULE_5__["default"])({
            column: lastColumn,
            sortDataValue: lastColumn.sortDataValue,
            className: className
          });
        };
      }

      var lastHeader = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.last(nextHeaders);

      nextHeaders = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.slice(nextHeaders, 0, -1);
      lastHeader = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](lastHeader, {
        column: lastColumn
      });
      nextHeaders = [].concat(nextHeaders, [lastHeader]);
    }

    var content = nextHeaders;

    if (nextPlugin) {
      content = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](nextPlugin, {
        headers: nextHeaders,
        visibleColumns: visibleColumns
      });
    }

    return content;
  };

  return ColumnPickerHeaderPlugin;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ColumnPickerHeaderPlugin, "defaultProps", {
  isEnabled: true,
  type: _constants__WEBPACK_IMPORTED_MODULE_10__["HEADER_PLUGIN_TYPE"],
  columns: [],
  visibleColumns: []
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_4__["bindHandlers"])(ColumnPickerHeaderPlugin));

/***/ }),

/***/ "./src/frontend/components/reactGrid/plugins/contextMenu/contextMenuGridHeaderPlugin.js":
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
/* harmony import */ var src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/components/contextMenu/index.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_contextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/components/contextMenu/menu/contextMenu.js");
/* harmony import */ var _types_columnTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _reactGridHeaderItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridHeaderItem.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/constants.js");


var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\components\\reactGrid\\plugins\\contextMenu\\contextMenuGridHeaderPlugin.js";









var ContextMenuGridHeaderPlugin = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ContextMenuGridHeaderPlugin, _React$PureComponent);

  function ContextMenuGridHeaderPlugin() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ContextMenuGridHeaderPlugin.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        componentId = _this$props.componentId,
        visibleColumns = _this$props.visibleColumns,
        headers = _this$props.headers,
        nextPlugin = _this$props.nextPlugin,
        isScrolling = _this$props.isScrolling,
        triggerEvents = _this$props.triggerEvents,
        shouldPreventDefault = _this$props.shouldPreventDefault,
        shouldStopPropagation = _this$props.shouldStopPropagation,
        shouldDisplayWhenNoActions = _this$props.shouldDisplayWhenNoActions,
        featureArea = _this$props.featureArea,
        onGetActionsData = _this$props.onGetActionsData,
        children = _this$props.children;
    var contextMenuHeaders = isScrolling ? headers : lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(headers, function (header, headerIndex) {
      var column = visibleColumns[headerIndex];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenu"], {
        key: column.id || headerIndex,
        triggerEvents: triggerEvents,
        componentId: componentId,
        shouldPreventDefault: shouldPreventDefault,
        shouldStopPropagation: shouldStopPropagation,
        shouldDisplayWhenNoActions: shouldDisplayWhenNoActions,
        isEnabled: !isScrolling,
        actionsData: {
          column: column
        },
        onGetActionsData: onGetActionsData,
        featureArea: featureArea,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 23
        }
      }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_4__["MenuTarget"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 27
        }
      }, header));
    });
    var content = contextMenuHeaders;

    if (nextPlugin) {
      content = react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](nextPlugin, {
        headers: contextMenuHeaders,
        visibleColumns: visibleColumns
      });
    }

    return content;
  };

  return ContextMenuGridHeaderPlugin;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(ContextMenuGridHeaderPlugin, "defaultProps", {
  isEnabled: true,
  shouldDisplayWhenNoActions: false,
  type: _constants__WEBPACK_IMPORTED_MODULE_9__["HEADER_PLUGIN_TYPE"],
  triggerEvents: src_frontend_components_contextMenu_menu_contextMenu__WEBPACK_IMPORTED_MODULE_6__["default"].defaultProps.triggerEvents,
  onGetActionsData: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.noop
});

/* harmony default export */ __webpack_exports__["default"] = (ContextMenuGridHeaderPlugin);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/closedPositionDetailsDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/blocks/dialog/dialog.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/blocks/sheet/sheet.js");
/* harmony import */ var src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/blocks/sheet/sheetHeader.js");
/* harmony import */ var _details_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/details/container.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\closedPositionDetailsDialog.js";






var WIDTH = 405;

function ClosedPositionDetailsDialog(props) {
  var onHide = props.onHide,
      isVisible = props.isVisible,
      isFullHeight = props.isFullHeight;

  if (!isVisible) {
    return false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_dialog_dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: WIDTH,
    showUnderlay: true,
    onHide: onHide,
    isFullHeight: isFullHeight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "positions-detail grid grid--y grid--fit-fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_blocks_sheet_sheetHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('PositionDetails')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_details_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: props.error,
    componentId: props.componentId,
    clientKey: props.clientKey,
    shouldShowClientName: props.shouldShowClientName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionDetailsDialog);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/actions.js");
/* harmony import */ var _closedPositionDetailsDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/closedPositionDetailsDialog.js");





function mapStateToProps(state, props) {
  return {
    isVisible: _selectors__WEBPACK_IMPORTED_MODULE_1__["hasData"](state, props.componentId),
    error: _selectors__WEBPACK_IMPORTED_MODULE_1__["errorSelector"](state, props.componentId)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHide: function onHide() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["hideClosedPositionDetailsDialog"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_closedPositionDetailsDialog__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/details/closedPositionDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_components_clientName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/clientName/index.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/netting/types.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/header/header.js");
/* harmony import */ var _summaryDetail_summaryDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/summaryDetail.js");
/* harmony import */ var _plCosts_plCosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/plCosts.js");
/* harmony import */ var _profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/profitLossItem/profitLossItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\details\\closedPositionDetails.js";










function ClosedPositionDetails(props) {
  var closedPositionDetailPL = props.closedPositionDetailPL,
      closedPositionSummary = props.closedPositionSummary,
      closedPositionSummaryDetail = props.closedPositionSummaryDetail,
      closedPositionUniqueId = props.closedPositionUniqueId,
      closedPositionInstrumentPLCosts = props.closedPositionInstrumentPLCosts,
      error = props.error,
      instrument = props.instrument,
      currentNettingProfile = props.currentNettingProfile,
      shouldShowClientName = props.shouldShowClientName,
      clientKey = props.clientKey;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (!closedPositionSummary) {
      return;
    }

    var ClosingPositionId = closedPositionSummary.ClosingPositionId,
        OpeningPositionId = closedPositionSummary.OpeningPositionId;
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_2__["AREA_CLOSE_POSITION_DETAILS"], 'Module loaded', {
      closedPositionUniqueId: closedPositionUniqueId,
      closingPositionId: ClosingPositionId,
      openingPositionId: OpeningPositionId
    });
  }, [closedPositionSummary, closedPositionUniqueId]);
  var content;

  if (closedPositionDetailPL) {
    var totalCost = closedPositionDetailPL.TotalCost;
    var totalCostInBaseCurrency = closedPositionDetailPL.TotalCostInBaseCurrency;
    var conversionProfitLoss = closedPositionDetailPL.ProfitLossCurrencyConversion || 0;
    var tradeProfitLoss = closedPositionDetailPL.TradeProfitLoss || 0;
    var tradeProfitLossBaseCurrency = closedPositionDetailPL.TradeProfitLossBaseCurrency || 0;
    var totalProfitLoss = tradeProfitLoss + totalCost;
    var totalProfitLossBaseCurrency = tradeProfitLossBaseCurrency + totalCostInBaseCurrency + conversionProfitLoss;
    var groupClass = 'kv--group kv--lines';
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid-cell",
      "data-test-id": "closed-position-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, shouldShowClientName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_clientName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clientKey: clientKey,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 42
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "positions-detail-summary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "positions-detail-summary-data kv kv--split kv--lines",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_header_header__WEBPACK_IMPORTED_MODULE_5__["InstrumentInfo"], {
      instrument: instrument,
      position: closedPositionSummary,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_header_header__WEBPACK_IMPORTED_MODULE_5__["ClosedPositionSummary"], {
      positionSummaryData: closedPositionSummary,
      instrument: instrument,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_summaryDetail_summaryDetail__WEBPACK_IMPORTED_MODULE_6__["SummaryDetail"], {
      position: closedPositionSummaryDetail,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plCosts_plCosts__WEBPACK_IMPORTED_MODULE_7__["PlCosts"], {
      position: closedPositionInstrumentPLCosts,
      instrument: instrument,
      currentNettingProfile: currentNettingProfile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('TradePL'),
      profitLoss: tradeProfitLoss,
      profitLossBase: tradeProfitLossBaseCurrency,
      position: closedPositionDetailPL,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Conversion P/L'),
      profitLoss: conversionProfitLoss,
      plDecimal: 2,
      plCurrency: closedPositionDetailPL.ProfitLossCurrency,
      position: closedPositionDetailPL,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_profitLossItem_profitLossItem__WEBPACK_IMPORTED_MODULE_8__["ProfitLossItem"], {
      header: src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PLTotalInclCosts'),
      profitLoss: totalProfitLoss,
      profitLossBase: totalProfitLossBaseCurrency,
      position: closedPositionDetailPL,
      kvClass: groupClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }));
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "position-details-error grid grid--grail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "grid-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_1__["default"].getText('FailedToFetchPositionDetails'))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "grid grid--scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 12
    }
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (ClosedPositionDetails);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/details/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_netting_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/netting/selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/selectors.js");
/* harmony import */ var _closedPositionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/details/closedPositionDetails.js");





function mapStateToProps(state, props) {
  var componentId = props.componentId,
      clientKey = props.clientKey;
  return {
    instrument: _selectors__WEBPACK_IMPORTED_MODULE_2__["instrumentSelector"](state, componentId, clientKey),
    closedPositionSummary: _selectors__WEBPACK_IMPORTED_MODULE_2__["positionSummarySelector"](state, componentId, clientKey),
    closedPositionSummaryDetail: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionSummaryDetailSelector"](state, componentId, clientKey),
    closedPositionInstrumentPLCosts: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionInstrumentPLCostsSelector"](state, componentId, clientKey),
    closedPositionDetailPL: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionDetailPLSelector"](state, componentId, clientKey),
    closedPositionUniqueId: _selectors__WEBPACK_IMPORTED_MODULE_2__["closedPositionUniqueId"](state, componentId),
    currentNettingProfile: src_frontend_models_netting_selectors__WEBPACK_IMPORTED_MODULE_1__["getCurrentProfile"](state, {
      clientKey: clientKey
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_closedPositionDetails__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/header/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentInfo", function() { return InstrumentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedPositionSummary", function() { return ClosedPositionSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/utils.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/positions/queries.js");
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/instrument/instrument.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\header\\header.js";











function InstrumentInfo(props) {
  var instrument = props.instrument,
      position = props.position;
  var showSecondaryInfo = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isFxOption"](instrument);
  var optionData = showSecondaryInfo ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(position, 'FxOptionData', null) : null;

  if (optionData && optionData.Strike) {
    optionData = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults({
      StrikePrice: optionData.Strike
    }, optionData);
  }

  var DisplayHint = instrument.DisplayHint;
  var assetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetType"](instrument);
  var tooltip = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getToolTip"](instrument);
  var primaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getName"](instrument);
  var secondaryInfo = showSecondaryInfo && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getInstrumentSecondaryInfo"](instrument, optionData, true);
  var secondaryName = src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["getSecondaryName"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_frontend_components_instrument_instrument__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tooltip: tooltip,
    assetType: assetType,
    displayHint: DisplayHint,
    secondaryInfo: secondaryInfo,
    primaryName: primaryName,
    showDescription: true,
    secondaryName: secondaryName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
}
function ClosedPositionSummary(props) {
  var positionSummaryData = props.positionSummaryData,
      instrument = props.instrument;
  var Amount = positionSummaryData.Amount,
      OpenPrice = positionSummaryData.OpenPrice;
  var AssetType = src_frontend_models_instruments_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetType"](instrument);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, Amount !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "kv-key grid-cell g--1of2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('Position')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "kv-val grid-cell g--1of2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isContractOption"]({
    AssetType: AssetType
  }) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isCfdOption"]({
    AssetType: AssetType
  }) ? src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_6__["getLSToOpenClose"](positionSummaryData, instrument) : '', src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_7__["format"](Amount), " @", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_10__["PriceLabel"], {
    price: OpenPrice,
    format: instrument.Format,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }))))));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/container.js");

/* harmony default export */ __webpack_exports__["default"] = (_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostData", function() { return CostData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\costData.js";

function CostData(props) {
  var showConversion = props.showConversion,
      isEstimated = props.isEstimated,
      pLCost = props.pLCost,
      pLCostInBaseCurrency = props.pLCostInBaseCurrency;
  var estimatedValueClassName = isEstimated ? 'estimate' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: estimatedValueClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, pLCost)), showConversion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: estimatedValueClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "t-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, pLCostInBaseCurrency)));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostListItem", function() { return CostListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/spine/templateHelper.js");
/* harmony import */ var _costData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costData.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\costListItem.js";




var getFormattedNumberInInstrumentCurrency = function getFormattedNumberInInstrumentCurrency(value, position) {
  if (!value) {
    return;
  }

  var formattedValue = src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__["default"].formatNumber(value, position.InstrumentCurrencyDecimal);
  return formattedValue + " " + position.InstrumentCurrency;
};

var getFormattedNumberInBaseCurrency = function getFormattedNumberInBaseCurrency(value, position) {
  if (!value) {
    return;
  }

  var formattedValue = src_frontend_spine_templateHelper__WEBPACK_IMPORTED_MODULE_1__["default"].formatNumber(value, position.BaseCurrencyDecimal);
  return formattedValue + " " + position.ProfitLossCurrency;
};

function CostListItem(_ref) {
  var label = _ref.label,
      costValues = _ref.costValues,
      position = _ref.position;
  var openPLCost = costValues.openPLCost,
      closedPLCost = costValues.closedPLCost,
      openPLCostBaseCurrency = costValues.openPLCostBaseCurrency,
      closedPLCostBaseCurrency = costValues.closedPLCostBaseCurrency;
  var isEstimatedOpenValue = position.IsEstimatedOpenValue;
  var isEstimatedCloseValue = position.IsEstimatedCloseValue;
  var showConversion = position.ShowConversion;
  var openCost = getFormattedNumberInInstrumentCurrency(openPLCost, position);
  var closedCost = getFormattedNumberInInstrumentCurrency(closedPLCost, position);
  var openCostBaseCurrency = getFormattedNumberInBaseCurrency(openPLCostBaseCurrency, position);
  var closedCostBaseCurrency = getFormattedNumberInBaseCurrency(closedPLCostBaseCurrency, position);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, openPLCost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costData__WEBPACK_IMPORTED_MODULE_2__["CostData"], {
    showConversion: showConversion,
    isEstimated: isEstimatedOpenValue,
    pLCost: openCost,
    pLCostInBaseCurrency: openCostBaseCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, closedPLCost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costData__WEBPACK_IMPORTED_MODULE_2__["CostData"], {
    showConversion: showConversion,
    isEstimated: isEstimatedCloseValue,
    pLCost: closedCost,
    pLCostInBaseCurrency: closedCostBaseCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  })));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/plCosts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlCosts", function() { return PlCosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_netting_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/netting/queries.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/types.js");
/* harmony import */ var src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_instruments_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/netting/types.js");
/* harmony import */ var src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_frontend_models_netting_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var _costListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/plCosts/costListItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\plCosts\\plCosts.js";









var EMPTY_CONVERSION_RATE = '-';

function getConversionLabel(position) {
  var conversionText = src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Conversion');

  if (position.IsSingleAccount || position.InstrumentCurrency === position.AccountCurrency || position.AccountCurrency === position.ProfitLossCurrency) {
    return conversionText + " " + position.InstrumentCurrency + " > " + position.ProfitLossCurrency;
  }

  return conversionText + " " + position.InstrumentCurrency + " > " + position.AccountCurrency + " > " + position.ProfitLossCurrency;
}

function getOpenConversionRate(position, currentNettingProfile, instrument) {
  if (src_frontend_models_netting_queries__WEBPACK_IMPORTED_MODULE_4__["isPositionOpenConversionRateShown"](currentNettingProfile, instrument)) {
    return src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](position.OpenConversionRate, 8);
  }

  return EMPTY_CONVERSION_RATE;
}

function PlCosts(_ref) {
  var position = _ref.position,
      currentNettingProfile = _ref.currentNettingProfile,
      instrument = _ref.instrument;
  var isInstrumentPLCost = position.IsInstrumentPLCost;

  if (!(isInstrumentPLCost || position.ShowConversion || position.ShowMarketValue)) {
    return false;
  }

  var openConversionRate = position.OpenConversionRate ? getOpenConversionRate(position, currentNettingProfile, instrument) : EMPTY_CONVERSION_RATE;
  var closeConversionRate = position.CloseConversionRate ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](position.CloseConversionRate, 8) : EMPTY_CONVERSION_RATE;
  var conversionLabel = getConversionLabel(position);
  var isEstimatedOpenConversionRateClass = position.IsEstimatedOpenConversionRate ? 'estimate' : '';
  var isEstimatedCloseConversionRateClass = position.IsEstimatedCloseConversionRate ? 'estimate' : '';
  var additionalTransactionCosts = position.AdditionalTransactionCosts;
  var commission = position.Commission;
  var stampDuty = position.StampDuty;
  var exchangeFee = position.ExchangeFee;
  var marketValue = position.MarketValue;
  var marketValueLabel = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__["isOption"](instrument) || src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_7__["isWarrant"](instrument) ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Premium') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_Market_Value');
  var openConversionRateClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('kv-val grid-cell g--1of3', isEstimatedOpenConversionRateClass);
  var closeConversionRateClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('kv-val grid-cell g--1of3', isEstimatedCloseConversionRateClass);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "positions-detail-body kv kv--split",
    "data-test-id": "closed-position-pl-costs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ProfitLoss')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_Open')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ClosedPositionDetails_PositionDetail_Close'))), position.ShowConversion && (openConversionRate || closeConversionRate) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell g--1of3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, conversionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: openConversionRateClasses,
    "data-test-id": "open-conversion-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, openConversionRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: closeConversionRateClasses,
    "data-test-id": "closed-conversion-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, closeConversionRate)), commission && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('Commission'),
    costValues: commission,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }), stampDuty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('StampDuty'),
    costValues: stampDuty,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), marketValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: marketValueLabel,
    costValues: marketValue,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }), exchangeFee && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('ExchangeFee'),
    costValues: exchangeFee,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }), additionalTransactionCosts && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_costListItem__WEBPACK_IMPORTED_MODULE_8__["CostListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_3__["default"].getText('PositionDetailsDialog_AdditionalTransactionCosts'),
    costValues: additionalTransactionCosts,
    position: position,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLabel", function() { return PriceLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\priceLabel\\priceLabel.js";


function PriceLabel(props) {
  var price = props.price,
      format = props.format;
  var parts = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_1__["formatPriceParts"](price, format);
  var prefix = parts.Pre + parts.First + parts.Pips;
  var result;

  if (parts.DeciPips) {
    result = [prefix, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sub", {
      key: "deciPips",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 27
      }
    }, parts.DeciPips)];
  } else {
    result = [prefix + parts.DeciPips + parts.Post];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, result);
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/profitLossItem/profitLossItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitLossItem", function() { return ProfitLossItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\profitLossItem\\profitLossItem.js";



function ProfitLossItem(props) {
  var header = props.header,
      profitLoss = props.profitLoss,
      profitLossBase = props.profitLossBase,
      kvClass = props.kvClass,
      position = props.position,
      plCurrency = props.plCurrency,
      plDecimal = props.plDecimal;

  if (!profitLoss) {
    return false;
  }

  var instrCurrency = plCurrency || position.InstrumentCurrency;
  var baseCurrency = position.ProfitLossCurrency;
  var formattedProfitLossBaseCurrency;
  var formattedProfitLoss = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](profitLoss, plDecimal || position.InstrumentCurrencyDecimal);

  if (position.ShowConversion && profitLossBase) {
    formattedProfitLossBaseCurrency = src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["format"](profitLossBase, position.BaseCurrencyDecimal);
  }

  var profitLossLabel = formattedProfitLoss + " " + instrCurrency;
  var result;

  if (formattedProfitLossBaseCurrency) {
    var profitLossBaseLabel = "(" + formattedProfitLossBaseCurrency + " " + baseCurrency + ")";
    result = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "pl",
      "data-profit": profitLoss,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, profitLossLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      key: "space",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "plBase",
      "data-profit": profitLossBase,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, profitLossBaseLabel)];
  } else {
    result = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      key: "pl",
      "data-profit": profitLoss,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, profitLossLabel)];
  }

  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('positions-detail-body kv kv--wrap', kvClass);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "kv-val",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key kv-key--header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, header)));
}
ProfitLossItem.defaultProps = {
  kvClass: ''
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/listItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListItem", function() { return PriceListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\summaryDetail\\listItem.js";

function ListItem(props) {
  var label = props.label,
      value = props.value,
      title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    "data-test-id": label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, value));
}
function PriceListItem(props) {
  var label = props.label,
      value = props.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-key grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "kv-val grid-cell",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, value));
}

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/summaryDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDetail", function() { return SummaryDetail; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/utils/numberFormat/index.js");
/* harmony import */ var src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/assetTypes.js");
/* harmony import */ var src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/positions/queries.js");
/* harmony import */ var src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/utils/dateTime/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var _priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/priceLabel/priceLabel.js");
/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/summaryDetail/listItem.js");
var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositionDetails\\summaryDetail\\summaryDetail.js";









function SummaryDetail(_ref) {
  var position = _ref.position;

  var getFormattedDate = function getFormattedDate(openApiDate) {
    if (typeof openApiDate !== 'undefined') {
      return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDate(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(openApiDate));
    }
  };

  var getFormattedUserDateTime = function getFormattedUserDateTime(openApiDate) {
    if (typeof openApiDate !== 'undefined') {
      return src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].formatUserDateTime(src_frontend_utils_dateTime__WEBPACK_IMPORTED_MODULE_5__["default"].createDateTime(openApiDate));
    }
  };

  var getBarrierEventText = function getBarrierEventText() {
    if (position.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__["FX_ONE_TOUCH_OPTION"] || position.AssetType === src_frontend_models_instruments_assetType_assetTypes__WEBPACK_IMPORTED_MODULE_3__["FX_NO_TOUCH_OPTION"]) {
      return position.FxOptionData.BarrierEventOccurred ? src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ValueYes') : src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ValueNo');
    }

    return '';
  };

  var positionId = position.OpeningPositionId + ", " + position.ClosingPositionId;
  var accountDisplayNameInfo = position.AccountDisplayName + " " + position.AccountCurrency;
  var accountIdInfo = position.AccountId + " " + position.AccountCurrency;
  var openDateTime = getFormattedUserDateTime(position.ExecutionTimeOpen);
  var closedDateTime = getFormattedUserDateTime(position.ExecutionTimeClose);
  var expiryDate = getFormattedDate(position.ExpiryDate);
  var openingIndexRatio = position.OpeningIndexRatio ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["formatNoRounding"](position.OpeningIndexRatio) : null;
  var closingIndexRatio = position.ClosingIndexRatio ? src_frontend_utils_numberFormat__WEBPACK_IMPORTED_MODULE_2__["formatNoRounding"](position.ClosingIndexRatio) : null;
  var noticeDate = getFormattedDate(position.NoticeDate);
  var openValueDate = getFormattedDate(position.ValueDateOpen);
  var closedValueDate = getFormattedDate(position.ValueDateClose);
  var srdSettlementDate = getFormattedDate(position.SrdSettlementDate);
  var barrierEventOccurred = position.FxOptionData ? getBarrierEventText() : '';
  var expiryCut = position.ShowFxOptionFields && position.FxOptionData ? src_frontend_models_positions_queries__WEBPACK_IMPORTED_MODULE_4__["getExpiryCutText"](position.FxOptionData.ExpiryCut) : '';
  var closePriceLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_priceLabel_priceLabel__WEBPACK_IMPORTED_MODULE_7__["PriceLabel"], {
    price: position.ClosingPrice,
    format: position.DisplayAndFormat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  });
  var shouldShowAccountDisplayName = position.AccountId && !position.IsSingleAccount && position.AccountId !== position.AccountDisplayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "positions-detail-body kv kv--lines kv--wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position ID'),
    value: positionId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), shouldShowAccountDisplayName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Account'),
    value: accountDisplayNameInfo,
    title: position.AccountDisplayName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), position.AccountId && !position.IsSingleAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountID'),
    value: accountIdInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), position.AccountGroupName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AccountGroup'),
    value: position.AccountGroupName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_Opened'),
    value: openDateTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_Closed'),
    value: closedDateTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }), expiryDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_Expiry'),
    value: expiryDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }), openingIndexRatio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_OpenIndexRatio'),
    value: openingIndexRatio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), closingIndexRatio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_CloseIndexRatio'),
    value: closingIndexRatio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), noticeDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NoticeDate'),
    value: noticeDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }), openValueDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OpenValueDate'),
    value: openValueDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }), closedValueDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedValueDate'),
    value: closedValueDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), srdSettlementDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Position_Column_Settlement_Date_Title'),
    value: srdSettlementDate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }), expiryCut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('OptionStyle'),
    value: expiryCut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }), position.ShowExchange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Exchange'),
    value: position.ExchangeName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }), barrierEventOccurred && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["ListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Barrier Event'),
    value: barrierEventOccurred,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_listItem__WEBPACK_IMPORTED_MODULE_8__["PriceListItem"], {
    label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositionDetails_ClosedPrice'),
    value: closePriceLabel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }));
}
SummaryDetail.propTypes = {
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/closedPositions.phone.js":
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
/* harmony import */ var src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/blocks/loader/loader.js");
/* harmony import */ var src_frontend_components_columnPickerMini_columnPickerMiniDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/components/columnPickerMini/columnPickerMiniDialog.js");
/* harmony import */ var src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/components/accountSelector/index.js");
/* harmony import */ var src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/contextMenu/index.js");
/* harmony import */ var src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/blocks/matchMedia/matchMediaContext.js");
/* harmony import */ var src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/blocks/matchMedia/queries.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/contextMenu/menu/actionMenuActions.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridSortUtils.js");
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var _closedPositionDetails__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/index.js");
/* harmony import */ var _grid_columnDefinitions_phone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/columnDefinitions.phone.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");
/* harmony import */ var _grid_container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/container.js");




var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\closedPositions.phone.js",
    _visibleColumnIds;






















var ClosedPositions = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ClosedPositions, _React$PureComponent);

  function ClosedPositions() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "state", {
      isColumnPickerOpen: false,
      columns: [],
      menu: {
        instrument: null,
        putCall: null,
        isVisible: false,
        positionId: null,
        closedPositionAccountId: null,
        closedPositionId: undefined,
        accountId: null
      },
      isRefreshColumns: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "columnRefreshTimeout", null);

    return _this;
  }

  var _proto = ClosedPositions.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"], 'Closed Positions opened');
    this.setState({
      columns: this.getColumns(this.props)
    });
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.selectedAccount !== nextProps.selectedAccount || this.props.visibleColumnIds !== nextProps.visibleColumnIds) {
      this.setState({
        columns: this.getColumns(nextProps)
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.columnRefreshTimeout);
  };

  _proto.getColumns = function getColumns(props) {
    var _this2 = this;

    var isBGJointAccountClient = props.isBGJointAccountClient,
        selectedAccount = props.selectedAccount;
    var breakpointName = this.context.breakpointName;
    var isNarrow = src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_11__["isNarrow"](breakpointName);

    if (isBGJointAccountClient) {
      this.setState({
        isRefreshColumns: true
      });
      clearTimeout(this.columnRefreshTimeout);
      this.columnRefreshTimeout = setTimeout(function () {
        _this2.setState({
          isRefreshColumns: false
        });
      }, 200);
    }

    return _grid_columnDefinitions_phone__WEBPACK_IMPORTED_MODULE_20__["getColumnDefinitions"]({
      selectedAccount: selectedAccount,
      isBGJointAccountClient: isBGJointAccountClient,
      isNarrow: isNarrow
    })[src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_16__["DOUBLE_ROW_DISPLAY_MODE"]];
  };

  _proto.handleRowSelect = function handleRowSelect(evt, row) {
    this.handleActionMenuShow(row);
  };

  _proto.handleHeaderSort = function handleHeaderSort(columnId, column) {
    if (!column.sort) {
      return;
    }

    var nextSort = src_frontend_components_reactGrid_reactGridSortUtils__WEBPACK_IMPORTED_MODULE_15__["getNextSort"](this.props.sort, column.sort);
    this.props.onSortChange(this.props.componentId, nextSort);

    if (nextSort) {
      src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_12__["AREA_CLOSED_POSITIONS"], 'Columns sorted', {
        column: nextSort.id
      });
    }
  };

  _proto.handleActionMenuHide = function handleActionMenuHide() {
    this.setState(function (state) {
      return {
        menu: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults({
          instrument: null,
          closedPositionAccountId: null,
          putCall: null,
          isVisible: false
        }, state.menu)
      };
    });
  };

  _proto.handleActionMenuShow = function handleActionMenuShow(_ref) {
    var id = _ref.id,
        data = _ref.data;
    var isFxOption = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_13__["isFxOption"](data.instrument);
    var putCall = isFxOption ? lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(data, 'closedPosition.FxOptionData.PutCall', null) : null;

    var closedPositionAccountId = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(data, 'closedPosition.AccountId', null);

    this.setState(function (state, props) {
      return {
        menu: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults({
          instrument: data.instrument,
          putCall: putCall,
          closedPositionId: id,
          closedPositionAccountId: closedPositionAccountId,
          accountId: props.selectedAccount.id,
          isVisible: true
        }, state.menu)
      };
    });
  };

  _proto.handleRowPress = function handleRowPress(evt, _ref2) {
    var info = _ref2.info;
    this.props.onPositionPress(_constants__WEBPACK_IMPORTED_MODULE_21__["DIALOG_ID"], info.id, this.props.selectedAccount.id);
  };

  _proto.handleColumnPickerShow = function handleColumnPickerShow() {
    this.setState({
      isColumnPickerOpen: true
    });
  };

  _proto.handleColumnPickerHide = function handleColumnPickerHide() {
    this.setState({
      isColumnPickerOpen: false
    });
  };

  _proto.handleColumnPickerColumnsChange = function handleColumnPickerColumnsChange(columns) {
    this.props.onColumnPickerChange(this.props.componentId, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(columns, 'id'));
  };

  _proto.handleAccountSelect = function handleAccountSelect(accountId) {
    this.props.onSelectAccount(this.props.componentId, accountId);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        componentId = _this$props.componentId,
        positions = _this$props.positions,
        columnsInfo = _this$props.columnsInfo,
        resizeTimestamp = _this$props.resizeTimestamp,
        isSingleAccount = _this$props.isSingleAccount,
        visibleColumnIds = _this$props.visibleColumnIds,
        selectedAccount = _this$props.selectedAccount,
        isLoading = _this$props.isLoading;
    var _this$state = this.state,
        menu = _this$state.menu,
        isColumnPickerOpen = _this$state.isColumnPickerOpen;
    var breakpointName = this.context.breakpointName;
    var isNarrow = src_frontend_blocks_matchMedia_queries__WEBPACK_IMPORTED_MODULE_11__["isNarrow"](breakpointName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid grid--y grid--fit-fill",
      "data-test-id": "closedPositions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid-cell g--cross-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, !isSingleAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "legacytoolbar sep sep--bottom sep--none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_accountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
      selectedAccountId: selectedAccount.id,
      onChange: this.handleAccountSelect,
      isShowCurrency: true,
      isShowGroups: true,
      isEnableGroups: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, this.props.positions.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenu"], {
      instrument: menu.instrument,
      putCall: menu.putCall,
      closedPositionId: menu.closedPositionId,
      closedPositionAccountId: menu.closedPositionAccountId,
      accountId: menu.accountId,
      isVisible: menu.isVisible,
      onHide: this.handleActionMenuHide,
      key: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["MenuItems"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_14__["ACTION_TRADE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_14__["ACTION_ALERT_ADD"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_14__["ACTION_CLOSED_POSITION_DETAILS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_9__["ActionMenuItem"], {
      action: src_frontend_components_contextMenu_menu_actionMenuActions__WEBPACK_IMPORTED_MODULE_14__["ACTION_TRADING_CONDITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 33
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_grid_container__WEBPACK_IMPORTED_MODULE_22__["default"], {
      positions: positions,
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      isSectioned: false,
      onRowSelect: this.handleRowSelect,
      onRowPress: this.handleRowPress,
      onMiniColumnPickerButtonTap: this.handleColumnPickerShow,
      isNarrow: isNarrow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_blocks_loader_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isVisible: isLoading || this.state.isRefreshColumns,
      isInstant: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_columnPickerMini_columnPickerMiniDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      doubleColumns: this.state.columns,
      displayMode: src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_16__["DOUBLE_ROW_DISPLAY_MODE"],
      visibleColumnNames: visibleColumnIds[src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_16__["DOUBLE_ROW_DISPLAY_MODE"]],
      isVisible: isColumnPickerOpen,
      columnsInfo: columnsInfo,
      onHide: this.handleColumnPickerHide,
      onColumnsChange: this.handleColumnPickerColumnsChange,
      onGridRowSort: this.handleHeaderSort,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_closedPositionDetails__WEBPACK_IMPORTED_MODULE_19__["default"], {
      componentId: _constants__WEBPACK_IMPORTED_MODULE_21__["DIALOG_ID"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 17
      }
    }));
  };

  return ClosedPositions;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ClosedPositions, "defaultProps", {
  positions: [],
  visibleColumnIds: (_visibleColumnIds = {}, _visibleColumnIds[src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_16__["DOUBLE_ROW_DISPLAY_MODE"]] = [], _visibleColumnIds),
  selectedAccount: {
    BaseCurrency: '',
    BaseCurrencyDecimals: 0
  },
  onSelectAccount: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onColumnPickerChange: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onPositionPress: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ClosedPositions, "contextType", src_frontend_blocks_matchMedia_matchMediaContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_5__["bindHandlers"])(ClosedPositions));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/container.phone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_linkedInstrument_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/linkedInstrument/actions.js");
/* harmony import */ var _closedPositionDetails_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositionDetails/actions.js");
/* harmony import */ var _closedPositions_app___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/closedPositions.phone.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/selectors.js");









function mapStateToProps() {
  var getPositions = _selectors__WEBPACK_IMPORTED_MODULE_7__["createGetPositions"]();
  return function (state, ownProps) {
    var componentId = ownProps.componentId;
    var columnsInfo = _selectors__WEBPACK_IMPORTED_MODULE_7__["getSavedColumnsInfo"](state, componentId);

    var _closedPositionsSelec = _selectors__WEBPACK_IMPORTED_MODULE_7__["getComponentState"](state, componentId),
        visibleColumnIds = _closedPositionsSelec.visibleColumnIds;

    var sort = _selectors__WEBPACK_IMPORTED_MODULE_7__["getSort"](state, componentId);
    var isBGJointAccountClient = src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__["isBGJointAccountClient"](state);
    return {
      isSingleAccount: src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_1__["isSingleAccount"](state),
      selectedAccount: _selectors__WEBPACK_IMPORTED_MODULE_7__["getSelectedAccount"](state, componentId),
      positions: getPositions(state, componentId),
      isLoading: _selectors__WEBPACK_IMPORTED_MODULE_7__["getIsLoading"](state, componentId),
      visibleColumnIds: visibleColumnIds,
      sort: sort,
      columnsInfo: columnsInfo,
      isBGJointAccountClient: isBGJointAccountClient
    };
  };
}

var mapDispatchToProps = {
  onSelectInstrument: src_frontend_models_linkedInstrument_actions__WEBPACK_IMPORTED_MODULE_3__["setLinkedInstrument"],
  onSelectAccount: _actions__WEBPACK_IMPORTED_MODULE_6__["selectAccount"],
  onColumnPickerChange: _actions__WEBPACK_IMPORTED_MODULE_6__["columnPickerChange"],
  onSortChange: _actions__WEBPACK_IMPORTED_MODULE_6__["updateSortOrder"],
  onPositionPress: _closedPositionDetails_actions__WEBPACK_IMPORTED_MODULE_4__["getClosedPositionDetails"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_closedPositions_app___WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var src_frontend_workspace_module_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/workspace/module/actions.js");
/* harmony import */ var src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/models/clients/selectors.js");
/* harmony import */ var src_frontend_models_watchlist_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/watchlist/selectors.js");
/* harmony import */ var src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/workspace/selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/modules/closedPositions/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/modules/closedPositions/actions.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/grid.js");









function mapStateToProps() {
  return function (state, ownProps) {
    var componentId = ownProps.componentId;
    var clientKey = src_frontend_workspace_selectors__WEBPACK_IMPORTED_MODULE_4__["getComponentUserSettings"](state, componentId).clientKey;
    var columnsInfo = _selectors__WEBPACK_IMPORTED_MODULE_5__["getSavedColumnsInfo"](state, componentId);
    var sort = _selectors__WEBPACK_IMPORTED_MODULE_5__["getSort"](state, componentId);

    var _closedPositionsSelec = _selectors__WEBPACK_IMPORTED_MODULE_5__["getComponentState"](state, componentId),
        visibleColumnIds = _closedPositionsSelec.visibleColumnIds,
        scrollOffset = _closedPositionsSelec.scrollOffset,
        expandedSections = _closedPositionsSelec.expandedSections,
        horizontalOffset = _closedPositionsSelec.horizontalOffset,
        isExportPending = _closedPositionsSelec.isExportPending;

    var isBGJointAccountClient = src_frontend_models_clients_selectors__WEBPACK_IMPORTED_MODULE_2__["isBGJointAccountClient"](state);
    return {
      columnsInfo: columnsInfo,
      horizontalOffset: horizontalOffset,
      isExportPending: isExportPending,
      expandedSections: expandedSections,
      userDefinedWatchlists: src_frontend_models_watchlist_selectors__WEBPACK_IMPORTED_MODULE_3__["getEmptyAndUserDefined"](state),
      displayMode: _selectors__WEBPACK_IMPORTED_MODULE_5__["getDisplayMode"](state, componentId),
      selectedAccount: _selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedAccount"](state, componentId),
      scrollOffset: scrollOffset,
      sort: sort,
      visibleColumnIds: visibleColumnIds,
      clientKey: clientKey,
      isBGJointAccountClient: isBGJointAccountClient
    };
  };
}

var mapDispatchToProps = {
  onSortChange: _actions__WEBPACK_IMPORTED_MODULE_6__["updateSortOrder"],
  onRowModeChange: _actions__WEBPACK_IMPORTED_MODULE_6__["updateDisplayMode"],
  onVisibleColumnsChange: _actions__WEBPACK_IMPORTED_MODULE_6__["updateVisibleColumns"],
  onSectionExpand: _actions__WEBPACK_IMPORTED_MODULE_6__["updateSection"],
  onScrollEnd: _actions__WEBPACK_IMPORTED_MODULE_6__["updateScrollOffset"],
  // for PGO
  onColumnsChange: _actions__WEBPACK_IMPORTED_MODULE_6__["updateColumns"],
  onColumnScroll: _actions__WEBPACK_IMPORTED_MODULE_6__["updateHorizontalOffset"],
  onExport: src_frontend_workspace_module_actions__WEBPACK_IMPORTED_MODULE_1__["requestComponentExport"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_grid__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/contextMenuActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSED_POSITION_TRADE", function() { return CLOSED_POSITION_TRADE; });
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/store.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/models/instruments/selectors.js");
/* harmony import */ var src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/frontend/models/instruments/queries.js");
/* harmony import */ var src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/models/accounts/legacySelectors.js");







var CLOSED_POSITION_TRADE = {
  id: 'closedpositiontrade',
  label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_2__["default"].getText('NewTrade'),
  isAllowed: function isAllowed(_ref) {
    var instrument = _ref.instrument,
        clientKey = _ref.clientKey;
    var state = Object(src_frontend_store__WEBPACK_IMPORTED_MODULE_1__["default"])().getState();
    return src_frontend_models_instruments_selectors__WEBPACK_IMPORTED_MODULE_4__["isPreferred"](state, instrument.AssetType) && src_frontend_models_accounts_legacySelectors__WEBPACK_IMPORTED_MODULE_6__["getHasAccountForInstrument"](state, instrument, clientKey) && src_frontend_models_instruments_queries__WEBPACK_IMPORTED_MODULE_5__["isTradable"](instrument) && (src_frontend_config__WEBPACK_IMPORTED_MODULE_0__["default"].appFeatures.isOptionsTicketSupported || !src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_3__["isFxOption"](instrument));
  }
};

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/grid.js":
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
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/frontend/localization.js");
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/frontend/utils/bindHandlers.js");
/* harmony import */ var src_frontend_components_reactGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/frontend/components/reactGrid/index.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_columnPickerHeader_columnPickerHeaderPlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/columnPickerHeader/columnPickerHeaderPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridRowPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/contextMenu/contextMenuGridRowPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridHeaderPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/contextMenu/contextMenuGridHeaderPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_resizableColumn_resizableColumnPlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/resizableColumn/resizableColumnPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_draggableColumn_draggableGridColumnPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/draggableColumn/draggableGridColumnPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_columnPickerMenu_columnPickerMenuGridHeaderPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/columnPickerMenu/columnPickerMenuGridHeaderPlugin.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_export_exportGridPlugin_lazy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/export/exportGridPlugin.lazy.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_keyboardNavigation_keyboardNavigationPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/keyboardNavigation/keyboardNavigationPlugin.js");
/* harmony import */ var src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/frontend/components/contextMenu/index.js");
/* harmony import */ var src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/frontend/components/contextMenu/menu/moduleContextMenuActions.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/frontend/components/contextMenu/actions/productPage.js");
/* harmony import */ var src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/frontend/models/instruments/assetType/queries.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_export_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/export/constants.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/frontend/components/contextMenu/actions/menuActions.js");
/* harmony import */ var src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/frontend/components/contextMenu/actions/tradingConditions.js");
/* harmony import */ var src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/frontend/featureTracker.js");
/* harmony import */ var src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/frontend/components/reactGrid/reactGridColumnUtils.js");
/* harmony import */ var src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/frontend/components/reactGrid/constants/row.js");
/* harmony import */ var src_frontend_components_reactGrid_plugins_draggableRowNative_draggableGridRowPlugin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/frontend/components/reactGrid/plugins/draggableRowNative/draggableGridRowPlugin.js");
/* harmony import */ var src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/frontend/workspace/moduleTypes.js");
/* harmony import */ var src_frontend_models_drag_constants__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/frontend/models/drag/constants.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/frontend/components/reactGrid/types/sortTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(src_frontend_components_reactGrid_types_sortTypes__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var src_frontend_components_reactGrid_types_columnTypes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/frontend/components/reactGrid/types/columnTypes.js");
/* harmony import */ var src_frontend_components_reactGrid_types_rowTypes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/frontend/components/reactGrid/types/rowTypes.js");
/* harmony import */ var src_frontend_models_watchlist_types__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./src/frontend/models/watchlist/types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./src/frontend/modules/closedPositions/queries.js");
/* harmony import */ var _columnDefinitions_app___WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/columnDefinitions.phone.js");
/* harmony import */ var _groupingDefinitions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/groupingDefinitions.js");
/* harmony import */ var _contextMenuActions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./src/frontend/modules/closedPositions/grid/contextMenuActions.js");



var _jsxFileName = "C:\\git\\SaxoTrader\\src\\frontend\\modules\\closedPositions\\grid\\grid.js";






































var ClosedPositionsGrid = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ClosedPositionsGrid, _React$Component);

  function ClosedPositionsGrid() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "getColumns", Object(reselect__WEBPACK_IMPORTED_MODULE_5__["defaultMemoize"])(function (displayMode, selectedAccount, isSrdPositionExist, isClientViewSubModule, isBGJointAccountClient, isNarrow) {
      return _columnDefinitions_app___WEBPACK_IMPORTED_MODULE_37__["getColumnDefinitions"]({
        selectedAccount: selectedAccount,
        isClientViewSubModule: isClientViewSubModule,
        isSrdPositionExist: isSrdPositionExist,
        isBGJointAccountClient: isBGJointAccountClient,
        isNarrow: isNarrow
      })[displayMode];
    }));

    return _this;
  }

  var _proto = ClosedPositionsGrid.prototype;

  _proto.handleSectionExpand = function handleSectionExpand(evt, _ref) {
    var id = _ref.id,
        isExpanded = _ref.info.isExpanded;
    this.props.onSectionExpand(this.props.componentId, id, !isExpanded);
  };

  _proto.handleHeaderSort = function handleHeaderSort(sort) {
    this.props.onSortChange(this.props.componentId, sort);
    src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["logEvent"](src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["AREA_CLOSED_POSITIONS"], 'Columns sorted', {
      column: sort.id
    });
  };

  _proto.handleColReflow = function handleColReflow(columnIds) {
    this.props.onVisibleColumnsChange(this.props.componentId, columnIds);
  };

  _proto.handleRowPress = function handleRowPress(evt, row) {
    this.props.onRowPress(evt, row);
  };

  _proto.handleScrollEnd = function handleScrollEnd(scrollOffset) {
    this.props.onScrollEnd(this.props.componentId, scrollOffset);
  };

  _proto.handleGetActionsHeaderData = function handleGetActionsHeaderData(_ref2) {
    var column = _ref2.column;
    var isFixed = src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_26__["isColumnFixed"](column);
    var isExpandColumn = src_frontend_components_reactGrid_reactGridColumnUtils__WEBPACK_IMPORTED_MODULE_26__["isExpandColumn"](column);

    if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(_constants__WEBPACK_IMPORTED_MODULE_35__["INSTRUMENT_COLUMNS"], column.id) && !isFixed && !isExpandColumn) {
      var _columnsInfo;

      return {
        columnsInfo: (_columnsInfo = {}, _columnsInfo[column.id] = {
          isAvailable: false
        }, _columnsInfo),
        componentId: this.props.componentId
      };
    }

    return null;
  };

  _proto.handleGetActionsRowData = function handleGetActionsRowData(_ref3) {
    var id = _ref3.id,
        data = _ref3.data;
    var _this$props = this.props,
        selectedAccount = _this$props.selectedAccount,
        isClientViewSubModule = _this$props.isClientViewSubModule,
        clientKey = _this$props.clientKey;
    var closedPosition = data.closedPosition,
        instrument = data.instrument;
    var closedPositionId = id;

    var accountId = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(closedPosition, 'AccountId', null);

    var isFxOption = src_frontend_models_instruments_assetType_queries__WEBPACK_IMPORTED_MODULE_21__["isFxOption"](instrument);

    var optionData = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(closedPosition, 'FxOptionData');

    if (optionData && optionData.Strike) {
      optionData = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.defaults({
        StrikePrice: optionData.Strike
      }, optionData);
    }

    var putCall = isFxOption ? lodash__WEBPACK_IMPORTED_MODULE_3___default.a.get(optionData, 'PutCall', null) : null;
    return {
      putCall: putCall,
      closedPositionId: closedPositionId,
      accountId: accountId,
      instrument: instrument,
      optionData: optionData,
      positionAccountId: selectedAccount.id,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["AREA_CLOSED_POSITIONS"],
      isClientViewSubModule: isClientViewSubModule,
      clientKey: clientKey
    };
  };

  _proto.handleRemoveColumn = function handleRemoveColumn(_ref4) {
    var componentId = _ref4.componentId,
        columnsInfo = _ref4.columnsInfo;
    this.props.onColumnsChange(componentId, columnsInfo);
  };

  _proto.handleColumnsReorder = function handleColumnsReorder(columnIds, dropColumn, columnsInfo) {
    if (columnsInfo === void 0) {
      columnsInfo = null;
    }

    this.props.onColumnsChange(this.props.componentId, columnsInfo);
  };

  _proto.handleColumnsChange = function handleColumnsChange(columnIds, columnsInfo) {
    if (columnsInfo === void 0) {
      columnsInfo = null;
    }

    this.props.onColumnsChange(this.props.componentId, columnsInfo);
  };

  _proto.handleColumnResizeEnd = function handleColumnResizeEnd(columns, columnsInfo) {
    this.props.onColumnsChange(this.props.componentId, columnsInfo);
  };

  _proto.handleColumnScroll = function handleColumnScroll(horizontalOffset) {
    this.props.onColumnScroll(this.props.componentId, horizontalOffset);
  };

  _proto.handleExportStart = function handleExportStart() {
    this.props.onExport(this.props.componentId, true);
  };

  _proto.handleExportEnd = function handleExportEnd() {
    this.props.onExport(this.props.componentId, false);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        componentId = _this$props2.componentId,
        columnsInfo = _this$props2.columnsInfo,
        displayMode = _this$props2.displayMode,
        resizeTimestamp = _this$props2.resizeTimestamp,
        isSectioned = _this$props2.isSectioned,
        selectedRowId = _this$props2.selectedRowId,
        onMiniColumnPickerButtonTap = _this$props2.onMiniColumnPickerButtonTap,
        onNewTrade = _this$props2.onNewTrade,
        positions = _this$props2.positions,
        expandedSections = _this$props2.expandedSections,
        sort = _this$props2.sort,
        userDefinedWatchlists = _this$props2.userDefinedWatchlists,
        scrollOffset = _this$props2.scrollOffset,
        isClientViewSubModule = _this$props2.isClientViewSubModule,
        selectedAccount = _this$props2.selectedAccount,
        isBGJointAccountClient = _this$props2.isBGJointAccountClient,
        isNarrow = _this$props2.isNarrow;
    var isSrdPositionExist = _queries__WEBPACK_IMPORTED_MODULE_36__["isSrdPositionExist"](positions);
    var columns = this.getColumns(displayMode, selectedAccount, isSrdPositionExist, isClientViewSubModule, isBGJointAccountClient, isNarrow);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: componentId,
      componentId: componentId,
      resizeTimestamp: resizeTimestamp,
      displayMode: displayMode,
      sort: sort // universal props
      ,
      cols: columns,
      rows: positions,
      grouping: _groupingDefinitions__WEBPACK_IMPORTED_MODULE_38__["grouping"],
      expandedGroups: expandedSections,
      columnsInfo: columnsInfo,
      horizontalOffset: this.props.horizontalOffset,
      scrollOffset: scrollOffset,
      onRowSelect: this.props.onRowSelect,
      onRowDoubleTap: this.props.onRowDoubleTap,
      onSectionExpand: this.handleSectionExpand,
      onColReflow: this.handleColReflow,
      onHeaderSort: this.handleHeaderSort,
      keepGroupsExpanded: true // DGO/TGO/PRO
      ,
      isSectioned: isSectioned,
      selectedRow: selectedRowId // PRO
      ,
      isColumnScrolling: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp // PGO
      ,
      onRowPress: this.handleRowPress,
      onScrollEnd: this.handleScrollEnd,
      onColumnScroll: this.handleColumnScroll,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_columnPickerHeader_columnPickerHeaderPlugin__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isPhoneApp,
      onColumnPickerOpen: onMiniColumnPickerButtonTap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_columnPickerMenu_columnPickerMenuGridHeaderPlugin__WEBPACK_IMPORTED_MODULE_15__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp,
      onColumnsChange: this.handleColumnsChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_resizableColumn_resizableColumnPlugin__WEBPACK_IMPORTED_MODULE_13__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp,
      onResizeEnd: this.handleColumnResizeEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_draggableColumn_draggableGridColumnPlugin__WEBPACK_IMPORTED_MODULE_14__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp,
      onColumnReorder: this.handleColumnsReorder,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridHeaderPlugin__WEBPACK_IMPORTED_MODULE_12__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isDesktopApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isInvestorApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isSpaApp,
      onGetActionsData: this.handleGetActionsHeaderData,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["AREA_CLOSED_POSITIONS"],
      componentId: componentId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["MenuItems"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["REMOVE_COLUMN"],
      onPerformAction: this.handleRemoveColumn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 25
      }
    }))), src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].appFeatures.isNewDraggingStrategyEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_draggableRowNative_draggableGridRowPlugin__WEBPACK_IMPORTED_MODULE_28__["default"], {
      componentId: componentId,
      isEnabled: !src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isTabletApp && !src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isPhoneApp,
      draggableType: src_frontend_models_drag_constants__WEBPACK_IMPORTED_MODULE_30__["INSTRUMENTS"],
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_29__["CLOSED_POSITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_contextMenu_contextMenuGridRowPlugin__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onGetActionsData: this.handleGetActionsRowData,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["AREA_CLOSED_POSITIONS"],
      isEnabled: !src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isPhoneApp,
      componentId: componentId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 17
      }
    }, src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isTabletApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["MenuItems"], {
      targetEvent: "tap",
      targetClassName: "instr-market",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["TRADE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ModuleContextMenuItem"], {
      id: "addtowatchlist",
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_29__["WATCHLIST"],
      actionType: src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_19__["ADD_TO_WATCHLIST"],
      contextMenuData: {
        customWatchlists: userDefinedWatchlists
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["OPTION_STRATEGIES"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["ALERT_ADD"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["CLOSED_POSITION_DETAILS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_24__["TRADING_CONDITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["MenuItems"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 21
      }
    }, src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && !isClientViewSubModule && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ModuleContextMenuItem"], {
      id: "chartmodule",
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_29__["CHART"],
      actionType: src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_19__["SHOW_CHART"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 29
      }
    }), src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["OPTIONS_CHAIN"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["OPTION_STRATEGIES"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 25
      }
    }), src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["DEPTH_TRADER"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: _contextMenuActions__WEBPACK_IMPORTED_MODULE_39__["CLOSED_POSITION_TRADE"],
      onPerformAction: onNewTrade,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ModuleContextMenuItem"], {
      id: "addtowatchlist",
      moduleType: src_frontend_workspace_moduleTypes__WEBPACK_IMPORTED_MODULE_29__["WATCHLIST"],
      actionType: src_frontend_components_contextMenu_menu_moduleContextMenuActions__WEBPACK_IMPORTED_MODULE_19__["ADD_TO_WATCHLIST"],
      contextMenuData: {
        customWatchlists: userDefinedWatchlists
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["ALERT_ADD"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_menuActions__WEBPACK_IMPORTED_MODULE_23__["CLOSED_POSITION_DETAILS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_tradingConditions__WEBPACK_IMPORTED_MODULE_24__["TRADING_CONDITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 25
      }
    }), src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      key: "exportStart",
      onAction: this.handleExportStart,
      action: {
        id: src_frontend_components_reactGrid_plugins_export_constants__WEBPACK_IMPORTED_MODULE_22__["EXPORT_ITEM_ID"],
        label: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ExportExport'),
        performAction: this.handleExportStart.bind(this)
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 29
      }
    }), src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_contextMenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuItem"], {
      action: src_frontend_components_contextMenu_actions_productPage__WEBPACK_IMPORTED_MODULE_20__["PRODUCT_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_export_exportGridPlugin_lazy__WEBPACK_IMPORTED_MODULE_16__["default"], {
      isEnabled: src_frontend_config__WEBPACK_IMPORTED_MODULE_7__["default"].isProApp && this.props.isExportPending,
      title: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositions'),
      fileName: src_frontend_localization__WEBPACK_IMPORTED_MODULE_6__["default"].getText('ClosedPositions'),
      onHide: this.handleExportEnd,
      featureArea: src_frontend_featureTracker__WEBPACK_IMPORTED_MODULE_25__["AREA_CLOSED_POSITIONS"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](src_frontend_components_reactGrid_plugins_keyboardNavigation_keyboardNavigationPlugin__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 17
      }
    }));
  };

  return ClosedPositionsGrid;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ClosedPositionsGrid, "defaultProps", {
  columnsInfo: {},
  selectedAccount: {
    BaseCurrency: '',
    BaseCurrencyDecimals: 0
  },
  scrollOffset: 0,
  positions: [],
  displayMode: src_frontend_components_reactGrid_constants_row__WEBPACK_IMPORTED_MODULE_27__["DOUBLE_ROW_DISPLAY_MODE"],
  horizontalOffset: 0,
  isSectioned: true,
  onVisibleColumnsChange: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onSortChange: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onRowSelect: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onRowDoubleTap: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onSectionExpand: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onRowPress: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onMiniColumnPickerButtonTap: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onNewTrade: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onScrollEnd: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  onColumnScroll: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.noop,
  isClientViewSubModule: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(src_frontend_utils_bindHandlers__WEBPACK_IMPORTED_MODULE_8__["bindHandlers"])(ClosedPositionsGrid));

/***/ }),

/***/ "./src/frontend/modules/closedPositions/grid/groupingDefinitions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSummaries", function() { return getSummaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouping", function() { return grouping; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_frontend_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/frontend/config.js");
/* harmony import */ var src_frontend_components_section_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/frontend/components/section/queries.js");
/* harmony import */ var src_frontend_components_section_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/frontend/components/section/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/frontend/modules/closedPositions/constants.js");





var getSummaries = function getSummaries(rows) {
  var TradeProfitLossInBaseCurrency = 0;
  var TotalPLAccount = 0;

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(rows, function (_ref) {
    var closedPosition = _ref.data.closedPosition;
    TradeProfitLossInBaseCurrency += closedPosition.TradeProfitLossInBaseCurrency;
    TotalPLAccount += closedPosition.TotalPLAccount;
  });

  return {
    TradeProfitLossInBaseCurrency: TradeProfitLossInBaseCurrency,
    TotalPLAccount: TotalPLAccount
  };
};
var grouping = [{
  groupingFunction: function groupingFunction(row) {
    var instrument = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(row, ['data', 'instrument']);

    return src_frontend_components_section_queries__WEBPACK_IMPORTED_MODULE_2__["getSectionId"](instrument);
  },
  groupingObjectFunction: function groupingObjectFunction(name, rows) {
    if (src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isPhoneApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isSpaApp) {
      return {
        id: name,
        rows: rows
      };
    }

    var rowCount = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.size(rows);

    var row = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.head(rows);

    var instrument = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(row, ['data', 'instrument']);

    var label = src_frontend_components_section_queries__WEBPACK_IMPORTED_MODULE_2__["getSectionLabel"](instrument);
    return {
      id: name,
      info: {
        sectionHeader: label + " (" + rowCount + ")",
        sectionColumns: _constants__WEBPACK_IMPORTED_MODULE_4__["SECTION_COLUMNS"],
        summaries: getSummaries(rows)
      },
      data: {
        rowCount: rowCount
      },
      rows: rows
    };
  },
  isRootExcluded: src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isPhoneApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isInvestorApp || src_frontend_config__WEBPACK_IMPORTED_MODULE_1__["default"].isSpaApp,
  sort: {
    compareFunction: src_frontend_components_section_utils__WEBPACK_IMPORTED_MODULE_3__["defaultAssetTypeCompareFunction"]
  }
}];

/***/ })

}]);//# sourceMappingURL=http://saxodkdev5233.sys.dom:8080/integrationTests-phone/6.js.map