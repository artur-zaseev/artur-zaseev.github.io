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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Services | Cost Per Day"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-800 min-h-screen w-screen text-white flex flex-col justify-center items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-3xl font-bold mb-7 uppercase",
        children: "Cost per day"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
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
          lineNumber: 27,
          columnNumber: 11
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
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-2xl",
        children: ["Days: ", days]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-2xl",
        children: ["Cost: ", result]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMvenAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1TX1BFUl9EQVkiLCJacCIsInVzZVN0YXRlIiwibW9uZXkiLCJzZXRNb25leSIsIlN0cmluZyIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImRheXMiLCJzZXREYXlzIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwiZGF0ZURpZmYiLCJOdW1iZXIiLCJkYXRlRGlmZlJvdW5kZWQiLCJNYXRoIiwiZmxvb3IiLCJJbmZpbml0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxNQUFuQjtBQUVlLFNBQVNDLEVBQVQsR0FBYztBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFTLENBQVQsQ0FEUDtBQUFBLE1BQ3BCQyxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRUhGLHNEQUFRLENBQVNHLE1BQU0sQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBZixDQUZMO0FBQUEsTUFFcEJDLElBRm9CO0FBQUEsTUFFZEMsT0FGYzs7QUFBQSxtQkFHSE4sc0RBQVEsQ0FBUyxDQUFULENBSEw7QUFBQSxNQUdwQk8sSUFIb0I7QUFBQSxNQUdkQyxPQUhjOztBQUFBLG1CQUlDUixzREFBUSxDQUFTLENBQVQsQ0FKVDtBQUFBLE1BSXBCUyxNQUpvQjtBQUFBLE1BSVpDLFNBSlk7O0FBTTNCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFjLEdBQUcsSUFBSVIsSUFBSixDQUFTUyxNQUFNLENBQUMsSUFBSVQsSUFBSixDQUFTQyxJQUFULENBQUQsQ0FBTixHQUF5QlEsTUFBTSxDQUFDLElBQUlULElBQUosRUFBRCxDQUF4QyxDQUF2QjtBQUNBLFFBQU1VLGVBQXVCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNKLFFBQUQsR0FBWWQsVUFBdkIsSUFBcUMsQ0FBckU7QUFDQVUsV0FBTyxDQUFDO0FBQUEsYUFBT00sZUFBZSxHQUFHLENBQWxCLEdBQXNCQSxlQUF0QixHQUF3QyxDQUEvQztBQUFBLEtBQUQsQ0FBUDtBQUNBSixhQUFTLENBQUM7QUFBQSxhQUFPVCxLQUFLLEdBQUdhLGVBQVIsR0FBMEIsQ0FBMUIsSUFBK0JiLEtBQUssR0FBR2EsZUFBUixHQUEwQkcsUUFBekQsR0FBb0VoQixLQUFLLEdBQUdhLGVBQTVFLEdBQThGLENBQXJHO0FBQUEsS0FBRCxDQUFUO0FBQ0QsR0FMUSxFQUtOLENBQUNiLEtBQUQsRUFBUUksSUFBUixDQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyx3RkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxtQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsT0FGZDtBQUdFLG1CQUFTLEVBQUMsa0RBSFo7QUFJRSxlQUFLLEVBQUVKLEtBSlQ7QUFLRSxrQkFBUSxFQUFFLGtCQUFDaUIsQ0FBRDtBQUFBLG1CQUFPaEIsUUFBUSxDQUFDVyxNQUFNLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVAsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLE1BRmQ7QUFHRSxtQkFBUyxFQUFDLGtEQUhaO0FBSUUsZUFBSyxFQUFFZixJQUpUO0FBS0Usa0JBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLG1CQUFPWixPQUFPLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFrQkU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSw2QkFBaUNiLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixlQW1CRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLDZCQUFpQ0UsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUE0QkQ7O0dBekN1QlYsRTs7S0FBQUEsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy96cC4zN2VhNWYwYTJjZGQ4NzVhNWI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNU19QRVJfREFZID0gOC42NGU3O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBacCgpIHtcbiAgY29uc3QgW21vbmV5LCBzZXRNb25leV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFN0cmluZyhuZXcgRGF0ZSgpKSk7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0ZURpZmY6IERhdGUgPSBuZXcgRGF0ZShOdW1iZXIobmV3IERhdGUoZGF0ZSkpIC0gTnVtYmVyKG5ldyBEYXRlKCkpKTtcbiAgICBjb25zdCBkYXRlRGlmZlJvdW5kZWQ6IG51bWJlciA9IE1hdGguZmxvb3IoK2RhdGVEaWZmIC8gTVNfUEVSX0RBWSkgKyAxO1xuICAgIHNldERheXMoKCkgPT4gKGRhdGVEaWZmUm91bmRlZCA+IDAgPyBkYXRlRGlmZlJvdW5kZWQgOiAwKSk7XG4gICAgc2V0UmVzdWx0KCgpID0+IChtb25leSAvIGRhdGVEaWZmUm91bmRlZCA+IDAgJiYgbW9uZXkgLyBkYXRlRGlmZlJvdW5kZWQgPCBJbmZpbml0eSA/IG1vbmV5IC8gZGF0ZURpZmZSb3VuZGVkIDogMCkpO1xuICB9LCBbbW9uZXksIGRhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlcnZpY2VzIHwgQ29zdCBQZXIgRGF5PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgbWluLWgtc2NyZWVuIHctc2NyZWVuIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi03IHVwcGVyY2FzZVwiPkNvc3QgcGVyIGRheTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04LzEyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1vbmV5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSB3LTU2IHRleHQtZ3JheS02MDAgcC0zIG1iLTcgcm91bmRlZFwiXG4gICAgICAgICAgICB2YWx1ZT17bW9uZXl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vbmV5KE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRhdGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHctNTYgdGV4dC1ncmF5LTYwMCBwLTMgbWItNSByb3VuZGVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkRheXM6IHtkYXlzfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+Q29zdDoge3Jlc3VsdH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==