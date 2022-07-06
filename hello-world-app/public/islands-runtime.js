/* fastifyStreamReactViews */(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("fastifyStreamReactViews", ["exports", "react", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.ReactDOM);
    global.fastifyStreamReactViews = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _reactDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IslandsWrapper = void 0;
  _exports.makeIsland = makeIsland;
  _exports.reviveIslands = reviveIslands;
  _exports.wrapIslandsWithComponent = wrapIslandsWithComponent;
  _react = _interopRequireDefault(_react);
  _reactDom = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;

  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;

  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
  };

  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  var __name = (target, value) => __defProp(target, "name", {
    value,
    configurable: true
  });

  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = value => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };

      var rejected = value => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };

      var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);

      step((generator = generator.apply(__this, __arguments)).next());
    });
  }; // node_modules/@ethicdevs/fastify-stream-react-views/src/components/IslandsWrapper.tsx


  var IslandsWrapper = /* @__PURE__ */__name(({
    childrenAsFn,
    islandId
  }) => {
    return /* @__PURE__ */_react.default.createElement("div", {
      key: islandId,
      "data-islandid": islandId
    }, childrenAsFn({
      "data-islandid": islandId
    }));
  }, "IslandsWrapper"); // node_modules/@ethicdevs/fastify-stream-react-views/src/helpers/wrapIslandsWithComponent.tsx


  _exports.IslandsWrapper = IslandsWrapper;

  function wrapIslandsWithComponent(islands, WrapperComponent) {
    const entries = Object.entries(islands);

    const wrapWithComponent = /* @__PURE__ */__name((islandId, Island) => {
      if (Island.islandId != null) return Island;
      let islandIdx = -1;

      const wrappedView = /* @__PURE__ */__name(hocProps => {
        islandIdx += 1;
        const islandIdxInstance = `${islandId}$$${islandIdx}`;
        return /* @__PURE__ */_react.default.createElement(WrapperComponent, {
          islandId: islandIdxInstance,
          childrenAsFn: props => /* @__PURE__ */_react.default.createElement(Island, __spreadProps(__spreadValues(__spreadValues({}, hocProps), props), {
            _csr: true
          }))
        });
      }, "wrappedView");

      wrappedView.$type = "ReactIsland";
      wrappedView.displayName = `${Island.displayName || Island.name}`;
      wrappedView.island = Island;
      wrappedView.islandId = wrappedView.displayName;
      return wrappedView;
    }, "wrapWithComponent");

    const wrappedViews = entries.reduce((acc, [islandId, [islandPath, Island]]) => {
      islandId = `${Island.displayName || Island.name}`;
      acc = __spreadProps(__spreadValues({}, acc), {
        [islandId]: [islandPath, wrapWithComponent(islandId, Island)]
      });
      return acc;
    }, {});
    return wrappedViews;
  }

  __name(wrapIslandsWithComponent, "wrapIslandsWithComponent"); // node_modules/@ethicdevs/fastify-stream-react-views/src/core/makeIsland.tsx


  function makeIsland(Island) {
    const isServerSide = typeof window === "undefined";
    const islandId = Island.islandId || Island.displayName || Island.name;

    if (isServerSide) {
      const islands = wrapIslandsWithComponent({
        [islandId]: [islandId, Island]
      }, IslandsWrapper);
      const islandsValues = Object.values(islands);

      if (islandId in islands && islands[islandId] != null) {
        const [, WrappedIsland] = islands[islandId];
        return WrappedIsland;
      } else if (islandsValues.length >= 1 && islandsValues[0] != null) {
        const [, WrappedIsland] = islandsValues[0];
        return WrappedIsland;
      }

      return Island;
    }

    return Island;
  }

  __name(makeIsland, "makeIsland"); // node_modules/@ethicdevs/fastify-stream-react-views/src/runtime/reviveIslands.tsx


  function reviveIslands(islands, islandsProps, islandsEls) {
    return __async(this, null, function* () {
      let revivedIslands = [];
      islandsEls.forEach((islandEl, islandIdx) => {
        let _islandId = islandEl.id || `${islandIdx}`;

        try {
          const dataIslandIdx = islandEl.dataset.islandid;
          if (dataIslandIdx == null || dataIslandIdx.includes("$$") === false) return;
          const [realIslandId, _] = dataIslandIdx.split("$$");
          const islandsEntries = Object.entries(islands).filter(([iId]) => iId === realIslandId);
          islandsEntries.forEach(island => {
            if (island == null) return;
            const [islandId, Island] = island;
            _islandId = islandId;
            const props = dataIslandIdx in islandsProps && islandsProps[dataIslandIdx] != null ? islandsProps[dataIslandIdx] : {};

            _reactDom.default.render( /* @__PURE__ */_react.default.createElement(Island, __spreadProps(__spreadValues({}, props), {
              _csr: true,
              "data-islandid": dataIslandIdx
            })), islandEl);

            revivedIslands.push(dataIslandIdx);
          });
        } catch (err) {
          const errMsg = err.message;
          console.log(`Could not revive Island "${_islandId}". Error: ${errMsg}`);
        }
      });
      return revivedIslands;
    });
  }

  __name(reviveIslands, "reviveIslands");
});
