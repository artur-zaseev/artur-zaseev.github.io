webpackHotUpdate_N_E("pages/services/zp",{

/***/ "./pages/services/zp/index.tsx":
/*!*************************************!*\
  !*** ./pages/services/zp/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Zp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Coding\\Git\\artur-zaseev.github.io\\pages\\services\\zp\\index.tsx",
    _s = $RefreshSig$();


var MS_PER_DAY = 8.64e7;
function Zp() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      money = _useState[0],
      setMoney = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(String(new Date())),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      days = _useState3[0],
      setDays = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      result = _useState4[0],
      setResult = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var dateDiff = new Date(Number(new Date(date)) - Number(new Date()));
    var dateDiffRounded = Math.floor(+dateDiff / MS_PER_DAY) + 1;
    setDays(function () {
      return dateDiffRounded > 0 ? dateDiffRounded : 0;
    });
    setResult(function () {
      return money / dateDiffRounded > 0 && money / dateDiffRounded < Infinity ? money / dateDiffRounded : 0;
    });
  }, [money, date]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-800 min-h-screen w-screen text-white flex flex-col justify-center items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-3xl font-bold mb-7 uppercase",
      children: "Cost per day"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-8/12 flex flex-col items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        placeholder: "money",
        className: "outline-none w-56 text-gray-600 p-3 mb-7 rounded",
        value: money,
        onChange: function onChange(e) {
          return setMoney(Number(e.target.value));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "date",
        placeholder: "date",
        className: "outline-none w-56 text-gray-600 p-3 mb-5 rounded",
        value: date,
        onChange: function onChange(e) {
          return setDate(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-2xl",
      children: ["Days: ", days]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-2xl",
      children: ["Cost: ", result]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Zp, "Q00BGIrXw/tlJMQzl5OWadZvAfA=");

_c = Zp;

var _c;

$RefreshReg$(_c, "Zp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMvenAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1TX1BFUl9EQVkiLCJacCIsInVzZVN0YXRlIiwibW9uZXkiLCJzZXRNb25leSIsIlN0cmluZyIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImRheXMiLCJzZXREYXlzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwiZGF0ZURpZmYiLCJOdW1iZXIiLCJkYXRlRGlmZlJvdW5kZWQiLCJNYXRoIiwiZmxvb3IiLCJJbmZpbml0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxVQUFVLEdBQUcsTUFBbkI7QUFFZSxTQUFTQyxFQUFULEdBQWM7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBUyxDQUFULENBRFA7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUFBLG1CQUVIRixzREFBUSxDQUFTRyxNQUFNLENBQUMsSUFBSUMsSUFBSixFQUFELENBQWYsQ0FGTDtBQUFBLE1BRXBCQyxJQUZvQjtBQUFBLE1BRWRDLE9BRmM7O0FBQUEsbUJBR0hOLHNEQUFRLENBQVMsQ0FBVCxDQUhMO0FBQUEsTUFHcEJPLElBSG9CO0FBQUEsTUFHZEMsT0FIYzs7QUFBQSxtQkFJQ1Isc0RBQVEsQ0FBUyxDQUFULENBSlQ7QUFBQSxNQUlwQlMsTUFKb0I7QUFBQSxNQUlaQyxTQUpZOztBQU0zQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBYyxHQUFHLElBQUlSLElBQUosQ0FBU1MsTUFBTSxDQUFDLElBQUlULElBQUosQ0FBU0MsSUFBVCxDQUFELENBQU4sR0FBeUJRLE1BQU0sQ0FBQyxJQUFJVCxJQUFKLEVBQUQsQ0FBeEMsQ0FBdkI7QUFDQSxRQUFNVSxlQUF1QixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSixRQUFELEdBQVlkLFVBQXZCLElBQXFDLENBQXJFO0FBQ0FVLFdBQU8sQ0FBQztBQUFBLGFBQU9NLGVBQWUsR0FBRyxDQUFsQixHQUFzQkEsZUFBdEIsR0FBd0MsQ0FBL0M7QUFBQSxLQUFELENBQVA7QUFDQUosYUFBUyxDQUFDO0FBQUEsYUFBT1QsS0FBSyxHQUFHYSxlQUFSLEdBQTBCLENBQTFCLElBQStCYixLQUFLLEdBQUdhLGVBQVIsR0FBMEJHLFFBQXpELEdBQW9FaEIsS0FBSyxHQUFHYSxlQUE1RSxHQUE4RixDQUFyRztBQUFBLEtBQUQsQ0FBVDtBQUNELEdBTFEsRUFLTixDQUFDYixLQUFELEVBQVFJLElBQVIsQ0FMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0ZBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQyxPQUZkO0FBR0UsaUJBQVMsRUFBQyxrREFIWjtBQUlFLGFBQUssRUFBRUosS0FKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNpQixDQUFEO0FBQUEsaUJBQU9oQixRQUFRLENBQUNXLE1BQU0sQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUCxDQUFmO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsbUJBQVcsRUFBQyxNQUZkO0FBR0UsaUJBQVMsRUFBQyxrREFIWjtBQUlFLGFBQUssRUFBRWYsSUFKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNhLENBQUQ7QUFBQSxpQkFBT1osT0FBTyxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFrQkU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUFpQ2IsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLGVBbUJFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFBaUNFLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0FwQ3VCVixFOztLQUFBQSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZpY2VzL3pwLjMwZTk0NWVjYzk1NzNlZGQ1N2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTVNfUEVSX0RBWSA9IDguNjRlNztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWnAoKSB7XG4gIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihTdHJpbmcobmV3IERhdGUoKSkpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGVEaWZmOiBEYXRlID0gbmV3IERhdGUoTnVtYmVyKG5ldyBEYXRlKGRhdGUpKSAtIE51bWJlcihuZXcgRGF0ZSgpKSk7XG4gICAgY29uc3QgZGF0ZURpZmZSb3VuZGVkOiBudW1iZXIgPSBNYXRoLmZsb29yKCtkYXRlRGlmZiAvIE1TX1BFUl9EQVkpICsgMTtcbiAgICBzZXREYXlzKCgpID0+IChkYXRlRGlmZlJvdW5kZWQgPiAwID8gZGF0ZURpZmZSb3VuZGVkIDogMCkpO1xuICAgIHNldFJlc3VsdCgoKSA9PiAobW9uZXkgLyBkYXRlRGlmZlJvdW5kZWQgPiAwICYmIG1vbmV5IC8gZGF0ZURpZmZSb3VuZGVkIDwgSW5maW5pdHkgPyBtb25leSAvIGRhdGVEaWZmUm91bmRlZCA6IDApKTtcbiAgfSwgW21vbmV5LCBkYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIG1pbi1oLXNjcmVlbiB3LXNjcmVlbiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTcgdXBwZXJjYXNlXCI+Q29zdCBwZXIgZGF5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04LzEyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1vbmV5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgdy01NiB0ZXh0LWdyYXktNjAwIHAtMyBtYi03IHJvdW5kZWRcIlxuICAgICAgICAgIHZhbHVlPXttb25leX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vbmV5KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXRlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgdy01NiB0ZXh0LWdyYXktNjAwIHAtMyBtYi01IHJvdW5kZWRcIlxuICAgICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5EYXlzOiB7ZGF5c308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5Db3N0OiB7cmVzdWx0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==