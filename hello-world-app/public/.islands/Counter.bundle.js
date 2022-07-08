/* Counter */(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("Counter", ["exports", "react", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.styled);
    global.Counter = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _styledComponents) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _styledComponents = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var __defProp = Object.defineProperty;

  var __name = (target, value) => __defProp(target, "name", {
    value,
    configurable: true
  }); // app/islands/Counter.tsx


  var Button = _styledComponents.default.button`
  min-height: 48px;
  min-width: 80px;

  padding: 8px 20px;

  border-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 24px;

  font-size: 16px;
  font-weight: bold;
`; // app/islands/Counter.tsx

  var Counter = /* @__PURE__ */__name(({
    defaultValue = 42
  }) => {
    const [counter, setCounter] = (0, _react.useState)(defaultValue);
    const incrementCounter = (0, _react.useCallback)(() => setCounter(prev => prev + 1), [setCounter]);
    const decrementCounter = (0, _react.useCallback)(() => setCounter(prev => prev - 1), [setCounter]);
    return /* @__PURE__ */_react.default.createElement("div", {
      style: styles.counterContainer
    }, /* @__PURE__ */_react.default.createElement(Button, {
      onClick: decrementCounter,
      type: "button",
      title: "Click to Decrement"
    }, "Decrement"), /* @__PURE__ */_react.default.createElement("div", {
      style: styles.counterText
    }, counter), /* @__PURE__ */_react.default.createElement(Button, {
      onClick: incrementCounter,
      type: "button",
      title: "Click to Increment"
    }, "Increment"));
  }, "Counter");

  var styles = {
    counterContainer: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      alignItems: "center",
      fontFamily: "monospace"
    },
    counterText: {
      padding: 10,
      fontSize: 18,
      fontWeight: "bold"
    }
  };
  var Counter_default = Counter;
  _exports.default = Counter_default;
});
