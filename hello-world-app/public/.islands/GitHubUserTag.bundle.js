/* GitHubUserTag */(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("GitHubUserTag", ["exports", "react", "cross-fetch"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("cross-fetch"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.crossFetch);
    global.GitHubUserTag = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _crossFetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var __defProp = Object.defineProperty;

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
  }; // app/islands/GitHubUserTag.tsx


  var GH_API_URL_PREFIX = "https://api.github.com/users";
  var fetchData = typeof fetch === "undefined" ? _crossFetch.fetch : fetch;

  function fetchUserData(username, onData) {
    return __async(this, null, function* () {
      try {
        const res = yield fetchData(`${GH_API_URL_PREFIX}/${encodeURIComponent(username.split("/")[0])}`, {
          headers: {
            Accept: "application/vnd.github.v3+json"
          }
        });
        const json = yield res.json();
        onData(json);
      } catch (err) {
        onData(null);
      }
    });
  }

  __name(fetchUserData, "fetchUserData"); // app/islands/GitHubUserTag.tsx


  var GitHubUserTag = /* @__PURE__ */__name(({
    username,
    initialUserData
  }) => {
    const [loading, setLoading] = (0, _react.useState)(initialUserData == null);
    const [userData, setUserData] = (0, _react.useState)(initialUserData || null);
    const refreshData = (0, _react.useCallback)(() => {
      setLoading(true);
      fetchUserData(username, data => {
        setUserData(data);
        setLoading(false);
      });
    }, [setLoading, setUserData, username]);
    (0, _react.useEffect)(() => {
      if (userData == null) {
        refreshData();
      }
    }, [refreshData, userData]);
    return /* @__PURE__ */_react.default.createElement("div", {
      style: styles.tagContainer
    }, userData != null ? /* @__PURE__ */_react.default.createElement("img", {
      src: userData.avatar_url,
      style: styles.tagAvatar
    }) : /* @__PURE__ */_react.default.createElement("div", {
      style: styles.tagAvatar
    }), /* @__PURE__ */_react.default.createElement("span", {
      style: styles.tagText
    }, "@", username), loading ? /* @__PURE__ */_react.default.createElement("strong", null, "(Loading...)") : /* @__PURE__ */_react.default.createElement("button", {
      onClick: refreshData
    }, "Reload"));
  }, "GitHubUserTag");

  var styles = {
    tagContainer: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      alignItems: "center",
      fontFamily: "monospace",
      marginTop: 12,
      padding: 8,
      height: 24,
      minHeight: 24,
      maxHeight: 24,
      borderRadius: 24 / 2,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderColor: "lightgray",
      borderWidth: 1,
      borderStyle: "solid",
      width: "max-content"
    },
    tagAvatar: {
      width: 24,
      minWidth: 24,
      maxWidth: 24,
      height: 24,
      minHeight: 24,
      maxHeight: 24,
      backgroundColor: "white",
      borderRadius: 24 / 2,
      borderColor: "lightgray",
      borderWidth: 1,
      borderStyle: "solid",
      overflow: "hidden"
    },
    tagText: {
      padding: 10,
      fontSize: 18,
      fontWeight: "bold"
    }
  };
  var GitHubUserTag_default = GitHubUserTag;
  _exports.default = GitHubUserTag_default;
});
