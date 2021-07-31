webpackHotUpdate_N_E("pages/services/do-zp",{

/***/ "./pages/services/do-zp/index.tsx":
/*!****************************************!*\
  !*** ./pages/services/do-zp/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DoZp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Coding\\Git\\artur-zaseev.github.io\\pages\\services\\do-zp\\index.tsx",
    _s = $RefreshSig$();


var MS_PER_DAY = 8.64e7;
function DoZp() {
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
    var dateDiffRounded = Math.round(+dateDiff / MS_PER_DAY) + 1;
    setDays(function (prev) {
      return dateDiffRounded > 0 ? dateDiffRounded : 0;
    });
    setResult(function (state) {
      return !!(money / dateDiffRounded) && money / dateDiffRounded > 0 ? money / dateDiffRounded : 0;
    });
  }, [money, date]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-gray-800 min-h-screen w-screen text-white flex flex-col justify-center items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-3xl font-bold mb-3 uppercase",
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
        className: "outline-none w-56 text-gray-600 p-3 mb-7",
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
        className: "outline-none w-56 text-gray-600 p-3",
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
      children: ["Days: ", days]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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

_s(DoZp, "Q00BGIrXw/tlJMQzl5OWadZvAfA=");

_c = DoZp;

var _c;

$RefreshReg$(_c, "DoZp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMvZG8tenAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1TX1BFUl9EQVkiLCJEb1pwIiwidXNlU3RhdGUiLCJtb25leSIsInNldE1vbmV5IiwiU3RyaW5nIiwiRGF0ZSIsImRhdGUiLCJzZXREYXRlIiwiZGF5cyIsInNldERheXMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJ1c2VFZmZlY3QiLCJkYXRlRGlmZiIsIk51bWJlciIsImRhdGVEaWZmUm91bmRlZCIsIk1hdGgiLCJyb3VuZCIsInByZXYiLCJzdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxVQUFVLEdBQUcsTUFBbkI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQVMsQ0FBVCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBU0csTUFBTSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUFmLENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBR0xOLHNEQUFRLENBQVMsQ0FBVCxDQUhIO0FBQUEsTUFHdEJPLElBSHNCO0FBQUEsTUFHaEJDLE9BSGdCOztBQUFBLG1CQUlEUixzREFBUSxDQUFTLENBQVQsQ0FKUDtBQUFBLE1BSXRCUyxNQUpzQjtBQUFBLE1BSWRDLFNBSmM7O0FBTTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFjLEdBQUcsSUFBSVIsSUFBSixDQUFTUyxNQUFNLENBQUMsSUFBSVQsSUFBSixDQUFTQyxJQUFULENBQUQsQ0FBTixHQUF5QlEsTUFBTSxDQUFDLElBQUlULElBQUosRUFBRCxDQUF4QyxDQUF2QjtBQUNBLFFBQU1VLGVBQXVCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNKLFFBQUQsR0FBWWQsVUFBdkIsSUFBcUMsQ0FBckU7QUFDQVUsV0FBTyxDQUFDLFVBQUNTLElBQUQ7QUFBQSxhQUFXSCxlQUFlLEdBQUcsQ0FBbEIsR0FBc0JBLGVBQXRCLEdBQXdDLENBQW5EO0FBQUEsS0FBRCxDQUFQO0FBQ0FKLGFBQVMsQ0FBQyxVQUFDUSxLQUFEO0FBQUEsYUFBWSxDQUFDLEVBQUVqQixLQUFLLEdBQUdhLGVBQVYsQ0FBRCxJQUErQmIsS0FBSyxHQUFHYSxlQUFSLEdBQTBCLENBQXpELEdBQTZEYixLQUFLLEdBQUdhLGVBQXJFLEdBQXVGLENBQW5HO0FBQUEsS0FBRCxDQUFUO0FBQ0QsR0FMUSxFQUtOLENBQUNiLEtBQUQsRUFBUUksSUFBUixDQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3RkFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLG1DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxtQkFBVyxFQUFDLE9BRmQ7QUFHRSxpQkFBUyxFQUFDLDBDQUhaO0FBSUUsYUFBSyxFQUFFSixLQUpUO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ2tCLENBQUQ7QUFBQSxpQkFBT2pCLFFBQVEsQ0FBQ1csTUFBTSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQLENBQWY7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxtQkFBVyxFQUFDLE1BRmQ7QUFHRSxpQkFBUyxFQUFDLHFDQUhaO0FBSUUsYUFBSyxFQUFFaEIsSUFKVDtBQUtFLGdCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxpQkFBT2IsT0FBTyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFrQkU7QUFBQSwyQkFBWWQsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUFtQkU7QUFBQSwyQkFBWUUsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBcEN1QlYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy9kby16cC4zNzA4ZDFmZjQxZjNkMjhjODI3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1TX1BFUl9EQVkgPSA4LjY0ZTc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvWnAoKSB7XG4gIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihTdHJpbmcobmV3IERhdGUoKSkpO1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGVEaWZmOiBEYXRlID0gbmV3IERhdGUoTnVtYmVyKG5ldyBEYXRlKGRhdGUpKSAtIE51bWJlcihuZXcgRGF0ZSgpKSk7XG4gICAgY29uc3QgZGF0ZURpZmZSb3VuZGVkOiBudW1iZXIgPSBNYXRoLnJvdW5kKCtkYXRlRGlmZiAvIE1TX1BFUl9EQVkpICsgMTtcbiAgICBzZXREYXlzKChwcmV2KSA9PiAoZGF0ZURpZmZSb3VuZGVkID4gMCA/IGRhdGVEaWZmUm91bmRlZCA6IDApKTtcbiAgICBzZXRSZXN1bHQoKHN0YXRlKSA9PiAoISEobW9uZXkgLyBkYXRlRGlmZlJvdW5kZWQpICYmIG1vbmV5IC8gZGF0ZURpZmZSb3VuZGVkID4gMCA/IG1vbmV5IC8gZGF0ZURpZmZSb3VuZGVkIDogMCkpO1xuICB9LCBbbW9uZXksIGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgbWluLWgtc2NyZWVuIHctc2NyZWVuIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItMyB1cHBlcmNhc2VcIj5Db3N0IHBlciBkYXk8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgvMTIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibW9uZXlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSB3LTU2IHRleHQtZ3JheS02MDAgcC0zIG1iLTdcIlxuICAgICAgICAgIHZhbHVlPXttb25leX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vbmV5KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXRlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgdy01NiB0ZXh0LWdyYXktNjAwIHAtM1wiXG4gICAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5EYXlzOiB7ZGF5c308L2Rpdj5cbiAgICAgIDxkaXY+Q29zdDoge3Jlc3VsdH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=