!function() {
  "use strict";
  var n = {
      836: function(n, r, e) {
          var t = e(15)
            , o = e.n(t)
            , i = e(645)
            , a = e.n(i)()(o());
          a.push([n.id, ":root {\r\n  --animation-timing: 1.5s;\r\n}\r\n\r\n.app-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  background-color: transparent;\r\n}\r\n\r\n.buttons-container {\r\n  display: flex;\r\n  gap: 16px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.node__element--highlight {\r\n  animation: nodeHighlight var(--animation-timing) ease;\r\n}\r\n\r\n@keyframes nodeHighlight {\r\n  0% {\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n  25% {\r\n    background-color: rgb(138, 245, 255);\r\n    color: #333;\r\n  }\r\n  75% {\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n  100% {\r\n    background-color: rgb(188, 117, 246);\r\n    color: #212529;\r\n  }\r\n}\r\n", "", {
              version: 3,
              sources: ["webpack://./src/projects/js_binary_search_tree/js_binary_search_tree.css"],
              names: [],
              mappings: "AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE;IACE,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,oCAAoC;IACpC,WAAW;EACb;EACA;IACE,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,oCAAoC;IACpC,cAAc;EAChB;AACF",
              sourcesContent: [":root {\r\n  --animation-timing: 1.5s;\r\n}\r\n\r\n.app-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  background-color: transparent;\r\n}\r\n\r\n.buttons-container {\r\n  display: flex;\r\n  gap: 16px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.node__element--highlight {\r\n  animation: nodeHighlight var(--animation-timing) ease;\r\n}\r\n\r\n@keyframes nodeHighlight {\r\n  0% {\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n  25% {\r\n    background-color: rgb(138, 245, 255);\r\n    color: #333;\r\n  }\r\n  75% {\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n  100% {\r\n    background-color: rgb(188, 117, 246);\r\n    color: #212529;\r\n  }\r\n}\r\n"],
              sourceRoot: ""
          }]),
          r.Z = a
      },
      738: function(n, r, e) {
          var t = e(15)
            , o = e.n(t)
            , i = e(645)
            , a = e.n(i)()(o());
          a.push([n.id, "html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody > main,\r\nbody > .main {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 40px auto;\r\n}\r\n\r\n* {\r\n  outline: none;\r\n}\r\n\r\n.app-container {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  background-color: #f2f2f2;\r\n  padding: 30px;\r\n}\r\n\r\n.app-container h1 {\r\n  text-align: center;\r\n}\r\n\r\n.app-container .box_container {\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  height: 300px;\r\n  background-color: white;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app-container .box {\r\n  overflow: auto;\r\n}\r\n\r\n.app-container .box .box_item {\r\n  border: 1px solid black;\r\n  padding: 4px 80px;\r\n  text-align: center;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.app-container .box .box_item.peeking {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container .buttons-container {\r\n  max-width: max-content;\r\n  margin: 30px auto 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.icon.icon-arrow-right::before {\r\n  font-family: 'Font Awesome 5 Free', sans-serif;\r\n  font-weight: 900;\r\n  content: '\\f061';\r\n}\r\n\r\n.icon.icon-arrow-left::before {\r\n  font-family: 'Font Awesome 5 Free', sans-serif;\r\n  font-weight: 900;\r\n  content: '\\f060';\r\n}\r\n", "", {
              version: 3,
              sources: ["webpack://./src/styles/globals.css"],
              names: [],
              mappings: "AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;EAChB,gBAAgB;AAClB",
              sourcesContent: ["html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody > main,\r\nbody > .main {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 40px auto;\r\n}\r\n\r\n* {\r\n  outline: none;\r\n}\r\n\r\n.app-container {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  background-color: #f2f2f2;\r\n  padding: 30px;\r\n}\r\n\r\n.app-container h1 {\r\n  text-align: center;\r\n}\r\n\r\n.app-container .box_container {\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  height: 300px;\r\n  background-color: white;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app-container .box {\r\n  overflow: auto;\r\n}\r\n\r\n.app-container .box .box_item {\r\n  border: 1px solid black;\r\n  padding: 4px 80px;\r\n  text-align: center;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.app-container .box .box_item.peeking {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container .buttons-container {\r\n  max-width: max-content;\r\n  margin: 30px auto 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon::before {\r\n  display: inline-block;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.icon.icon-arrow-right::before {\r\n  font-family: 'Font Awesome 5 Free', sans-serif;\r\n  font-weight: 900;\r\n  content: '\\f061';\r\n}\r\n\r\n.icon.icon-arrow-left::before {\r\n  font-family: 'Font Awesome 5 Free', sans-serif;\r\n  font-weight: 900;\r\n  content: '\\f060';\r\n}\r\n"],
              sourceRoot: ""
          }]),
          r.Z = a
      },
      203: function(n, r, e) {
          var t = e(15)
            , o = e.n(t)
            , i = e(645)
            , a = e.n(i)()(o());
          a.push([n.id, ".tree {\r\n  --dark: #333;\r\n  margin-top: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tree .node {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 20px;\r\n  position: relative;\r\n}\r\n\r\n.tree .node:not(.node--root) > .node__element::before {\r\n  content: '';\r\n  height: 20px;\r\n  width: 1px;\r\n  background-color: #dcdcdc;\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -20px;\r\n  margin: auto;\r\n}\r\n\r\n.tree .node.node--left {\r\n  margin-right: 10px;\r\n}\r\n\r\n.tree .node.node--right {\r\n  margin-left: 10px;\r\n}\r\n\r\n.tree .node__element {\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  height: 40px;\r\n  background-color: rgb(188, 117, 246);\r\n  border-radius: 16px;\r\n  min-width: 60px;\r\n  max-width: max-content;\r\n\r\n  padding: 4px 8px;\r\n  font-size: 12px;\r\n  line-height: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.tree .node__bottom-line {\r\n  height: 20px;\r\n  width: 1px;\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.tree .node__element,\r\n.tree .node__element::before,\r\n.tree .node__children,\r\n.tree .node__bottom-line {\r\n  transition: all ease 0.2s;\r\n}\r\n\r\n.tree .node__children {\r\n  display: flex;\r\n  padding: 20px 0;\r\n  border-top: 1px solid #dcdcdc;\r\n}\r\n\r\n.tree .node__element:hover {\r\n  border-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__children .node__element::before {\r\n  width: 2px;\r\n  background-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__bottom-line,\r\n.tree .node__element:hover ~ .node__children .node__bottom-line {\r\n  width: 2px;\r\n  background-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__children,\r\n.tree .node__element:hover ~ .node__children .node__children {\r\n  border-top-width: 2px;\r\n  border-color: var(--dark);\r\n}\r\n", "", {
              version: 3,
              sources: ["webpack://./src/styles/tree.css"],
              names: [],
              mappings: "AAAA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,sBAAsB;;EAEtB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;AAC3B;;AAEA;;;;EAIE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,6BAA6B;AAC/B;;AAEA;;EAEE,UAAU;EACV,6BAA6B;AAC/B;;AAEA;;EAEE,qBAAqB;EACrB,yBAAyB;AAC3B",
              sourcesContent: [".tree {\r\n  --dark: #333;\r\n  margin-top: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tree .node {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 20px;\r\n  position: relative;\r\n}\r\n\r\n.tree .node:not(.node--root) > .node__element::before {\r\n  content: '';\r\n  height: 20px;\r\n  width: 1px;\r\n  background-color: #dcdcdc;\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -20px;\r\n  margin: auto;\r\n}\r\n\r\n.tree .node.node--left {\r\n  margin-right: 10px;\r\n}\r\n\r\n.tree .node.node--right {\r\n  margin-left: 10px;\r\n}\r\n\r\n.tree .node__element {\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  height: 40px;\r\n  background-color: rgb(188, 117, 246);\r\n  border-radius: 16px;\r\n  min-width: 60px;\r\n  max-width: max-content;\r\n\r\n  padding: 4px 8px;\r\n  font-size: 12px;\r\n  line-height: 32px;\r\n  text-align: center;\r\n}\r\n\r\n.tree .node__bottom-line {\r\n  height: 20px;\r\n  width: 1px;\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.tree .node__element,\r\n.tree .node__element::before,\r\n.tree .node__children,\r\n.tree .node__bottom-line {\r\n  transition: all ease 0.2s;\r\n}\r\n\r\n.tree .node__children {\r\n  display: flex;\r\n  padding: 20px 0;\r\n  border-top: 1px solid #dcdcdc;\r\n}\r\n\r\n.tree .node__element:hover {\r\n  border-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__children .node__element::before {\r\n  width: 2px;\r\n  background-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__bottom-line,\r\n.tree .node__element:hover ~ .node__children .node__bottom-line {\r\n  width: 2px;\r\n  background-color: var(--dark);\r\n}\r\n\r\n.tree .node__element:hover ~ .node__children,\r\n.tree .node__element:hover ~ .node__children .node__children {\r\n  border-top-width: 2px;\r\n  border-color: var(--dark);\r\n}\r\n"],
              sourceRoot: ""
          }]),
          r.Z = a
      },
      645: function(n) {
          n.exports = function(n) {
              var r = [];
              return r.toString = function() {
                  return this.map((function(r) {
                      var e = n(r);
                      return r[2] ? "@media ".concat(r[2], " {").concat(e, "}") : e
                  }
                  )).join("")
              }
              ,
              r.i = function(n, e, t) {
                  "string" == typeof n && (n = [[null, n, ""]]);
                  var o = {};
                  if (t)
                      for (var i = 0; i < this.length; i++) {
                          var a = this[i][0];
                          null != a && (o[a] = !0)
                      }
                  for (var l = 0; l < n.length; l++) {
                      var c = [].concat(n[l]);
                      t && o[c[0]] || (e && (c[2] ? c[2] = "".concat(e, " and ").concat(c[2]) : c[2] = e),
                      r.push(c))
                  }
              }
              ,
              r
          }
      },
      15: function(n) {
          function r(n, r) {
              (null == r || r > n.length) && (r = n.length);
              for (var e = 0, t = new Array(r); e < r; e++)
                  t[e] = n[e];
              return t
          }
          n.exports = function(n) {
              var e, t, o = (t = 4,
              function(n) {
                  if (Array.isArray(n))
                      return n
              }(e = n) || function(n, r) {
                  var e = n && ("undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"]);
                  if (null != e) {
                      var t, o, i = [], a = !0, l = !1;
                      try {
                          for (e = e.call(n); !(a = (t = e.next()).done) && (i.push(t.value),
                          !r || i.length !== r); a = !0)
                              ;
                      } catch (n) {
                          l = !0,
                          o = n
                      } finally {
                          try {
                              a || null == e.return || e.return()
                          } finally {
                              if (l)
                                  throw o
                          }
                      }
                      return i
                  }
              }(e, t) || function(n, e) {
                  if (n) {
                      if ("string" == typeof n)
                          return r(n, e);
                      var t = Object.prototype.toString.call(n).slice(8, -1);
                      return "Object" === t && n.constructor && (t = n.constructor.name),
                      "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(n, e) : void 0
                  }
              }(e, t) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()), i = o[1], a = o[3];
              if ("function" == typeof btoa) {
                  var l = btoa(unescape(encodeURIComponent(JSON.stringify(a))))
                    , c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)
                    , s = "/*# ".concat(c, " */")
                    , A = a.sources.map((function(n) {
                      return "/*# sourceURL=".concat(a.sourceRoot || "").concat(n, " */")
                  }
                  ));
                  return [i].concat(A).concat([s]).join("\n")
              }
              return [i].join("\n")
          }
      },
      379: function(n, r, e) {
          var t, o = function() {
              var n = {};
              return function(r) {
                  if (void 0 === n[r]) {
                      var e = document.querySelector(r);
                      if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                          try {
                              e = e.contentDocument.head
                          } catch (n) {
                              e = null
                          }
                      n[r] = e
                  }
                  return n[r]
              }
          }(), i = [];
          function a(n) {
              for (var r = -1, e = 0; e < i.length; e++)
                  if (i[e].identifier === n) {
                      r = e;
                      break
                  }
              return r
          }
          function l(n, r) {
              for (var e = {}, t = [], o = 0; o < n.length; o++) {
                  var l = n[o]
                    , c = r.base ? l[0] + r.base : l[0]
                    , s = e[c] || 0
                    , A = "".concat(c, " ").concat(s);
                  e[c] = s + 1;
                  var d = a(A)
                    , u = {
                      css: l[1],
                      media: l[2],
                      sourceMap: l[3]
                  };
                  -1 !== d ? (i[d].references++,
                  i[d].updater(u)) : i.push({
                      identifier: A,
                      updater: p(u, r),
                      references: 1
                  }),
                  t.push(A)
              }
              return t
          }
          function c(n) {
              var r = document.createElement("style")
                , t = n.attributes || {};
              if (void 0 === t.nonce) {
                  var i = e.nc;
                  i && (t.nonce = i)
              }
              if (Object.keys(t).forEach((function(n) {
                  r.setAttribute(n, t[n])
              }
              )),
              "function" == typeof n.insert)
                  n.insert(r);
              else {
                  var a = o(n.insert || "head");
                  if (!a)
                      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                  a.appendChild(r)
              }
              return r
          }
          var s, A = (s = [],
          function(n, r) {
              return s[n] = r,
              s.filter(Boolean).join("\n")
          }
          );
          function d(n, r, e, t) {
              var o = e ? "" : t.media ? "@media ".concat(t.media, " {").concat(t.css, "}") : t.css;
              if (n.styleSheet)
                  n.styleSheet.cssText = A(r, o);
              else {
                  var i = document.createTextNode(o)
                    , a = n.childNodes;
                  a[r] && n.removeChild(a[r]),
                  a.length ? n.insertBefore(i, a[r]) : n.appendChild(i)
              }
          }
          function u(n, r, e) {
              var t = e.css
                , o = e.media
                , i = e.sourceMap;
              if (o ? n.setAttribute("media", o) : n.removeAttribute("media"),
              i && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
              n.styleSheet)
                  n.styleSheet.cssText = t;
              else {
                  for (; n.firstChild; )
                      n.removeChild(n.firstChild);
                  n.appendChild(document.createTextNode(t))
              }
          }
          var h = null
            , f = 0;
          function p(n, r) {
              var e, t, o;
              if (r.singleton) {
                  var i = f++;
                  e = h || (h = c(r)),
                  t = d.bind(null, e, i, !1),
                  o = d.bind(null, e, i, !0)
              } else
                  e = c(r),
                  t = u.bind(null, e, r),
                  o = function() {
                      !function(n) {
                          if (null === n.parentNode)
                              return !1;
                          n.parentNode.removeChild(n)
                      }(e)
                  }
                  ;
              return t(n),
              function(r) {
                  if (r) {
                      if (r.css === n.css && r.media === n.media && r.sourceMap === n.sourceMap)
                          return;
                      t(n = r)
                  } else
                      o()
              }
          }
          n.exports = function(n, r) {
              (r = r || {}).singleton || "boolean" == typeof r.singleton || (r.singleton = (void 0 === t && (t = Boolean(window && document && document.all && !window.atob)),
              t));
              var e = l(n = n || [], r);
              return function(n) {
                  if (n = n || [],
                  "[object Array]" === Object.prototype.toString.call(n)) {
                      for (var t = 0; t < e.length; t++) {
                          var o = a(e[t]);
                          i[o].references--
                      }
                      for (var c = l(n, r), s = 0; s < e.length; s++) {
                          var A = a(e[s]);
                          0 === i[A].references && (i[A].updater(),
                          i.splice(A, 1))
                      }
                      e = c
                  }
              }
          }
      }
  }
    , r = {};
  function e(t) {
      var o = r[t];
      if (void 0 !== o)
          return o.exports;
      var i = r[t] = {
          id: t,
          exports: {}
      };
      return n[t](i, i.exports, e),
      i.exports
  }
  e.n = function(n) {
      var r = n && n.__esModule ? function() {
          return n.default
      }
      : function() {
          return n
      }
      ;
      return e.d(r, {
          a: r
      }),
      r
  }
  ,
  e.d = function(n, r) {
      for (var t in r)
          e.o(r, t) && !e.o(n, t) && Object.defineProperty(n, t, {
              enumerable: !0,
              get: r[t]
          })
  }
  ,
  e.o = function(n, r) {
      return Object.prototype.hasOwnProperty.call(n, r)
  }
  ,
  function() {
      var n = e(379)
        , r = e.n(n)
        , t = e(738)
        , o = (r()(t.Z, {
          insert: "head",
          singleton: !1
      }),
      t.Z.locals,
      e(203))
        , i = (r()(o.Z, {
          insert: "head",
          singleton: !1
      }),
      o.Z.locals,
      e(836));
      function a(n) {
          return function(n) {
              if (Array.isArray(n))
                  return l(n)
          }(n) || function(n) {
              if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"])
                  return Array.from(n)
          }(n) || function(n, r) {
              if (n) {
                  if ("string" == typeof n)
                      return l(n, r);
                  var e = Object.prototype.toString.call(n).slice(8, -1);
                  return "Object" === e && n.constructor && (e = n.constructor.name),
                  "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? l(n, r) : void 0
              }
          }(n) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function l(n, r) {
          (null == r || r > n.length) && (r = n.length);
          for (var e = 0, t = new Array(r); e < r; e++)
              t[e] = n[e];
          return t
      }
      function c(n, r) {
          var e = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
              var t = Object.getOwnPropertySymbols(n);
              r && (t = t.filter((function(r) {
                  return Object.getOwnPropertyDescriptor(n, r).enumerable
              }
              ))),
              e.push.apply(e, t)
          }
          return e
      }
      function s(n, r, e) {
          return r in n ? Object.defineProperty(n, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : n[r] = e,
          n
      }
      function A(n, r) {
          if (!(n instanceof r))
              throw new TypeError("Cannot call a class as a function")
      }
      function d(n, r) {
          for (var e = 0; e < r.length; e++) {
              var t = r[e];
              t.enumerable = t.enumerable || !1,
              t.configurable = !0,
              "value"in t && (t.writable = !0),
              Object.defineProperty(n, t.key, t)
          }
      }
      function u(n, r, e) {
          return r && d(n.prototype, r),
          e && d(n, e),
          n
      }
      r()(i.Z, {
          insert: "head",
          singleton: !1
      }),
      i.Z.locals;
      var h = function(n, r) {
          return Number(n) == Number(r) ? 0 : Number(n) < Number(r) ? -1 : 1
      }
        , f = function() {
          function n(r, e) {
              A(this, n),
              this.value = r.toString(),
              this.parent = e || null,
              this.left = null,
              this.right = null
          }
          return u(n, [{
              key: "isLeaf",
              get: function() {
                  return null === this.left && null === this.right
              }
          }, {
              key: "hasChildren",
              get: function() {
                  return !this.isLeaf
              }
          }]),
          n
      }()
        , p = function() {
          function n() {
              var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
              A(this, n),
              s(this, "root", void 0),
              s(this, "compareFn", void 0),
              this.root = null,
              this.compareFn = r
          }
          return u(n, [{
              key: "insert",
              value: function(n) {
                  var r, e = this, t = this.root;
                  return null === t ? (this.root = new f(n),
                  this.root) : function() {
                      for (; ; ) {
                          var o = e.compareFn(n, t.value);
                          if (0 === o)
                              return r = t,
                              t;
                          if (-1 === o) {
                              if (null === t.left)
                                  return r = new f(n,t),
                                  t.left = r,
                                  !0;
                              t = t.left
                          } else if (1 === o) {
                              if (null === t.right)
                                  return r = new f(n,t),
                                  t.right = r,
                                  !0;
                              t = t.right
                          }
                      }
                  }() ? r : void 0
              }
          }, {
              key: "remove",
              value: function(n, r) {
                  if (!(r = r || this.search(n)))
                      return null;
                  var e = null === r.parent
                    , t = null !== r.left && null !== r.right
                    , o = !e && r.parent.left === r;
                  if (r.isLeaf)
                      return e ? this.root = null : o ? r.parent.left = null : r.parent.right = null,
                      r;
                  if (!t) {
                      var i = null !== r.left ? r.left : r.right;
                      return e ? this.root = i : o ? r.parent.left = i : r.parent.right = i,
                      i.parent = r.parent,
                      r
                  }
                  var a = this.min(r.right);
                  a.parent.left === a ? a.parent.left = null : a.parent.right = null;
                  var l = function(n) {
                      for (var r = 1; r < arguments.length; r++) {
                          var e = null != arguments[r] ? arguments[r] : {};
                          r % 2 ? c(Object(e), !0).forEach((function(r) {
                              s(n, r, e[r])
                          }
                          )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : c(Object(e)).forEach((function(r) {
                              Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
                          }
                          ))
                      }
                      return n
                  }({}, r);
                  return r.value = a.value,
                  l
              }
          }, {
              key: "search",
              value: function(n) {
                  return this.postOrderTraverse().find((function(r) {
                      return r.value === n
                  }
                  ))
              }
          }, {
              key: "min",
              value: function() {
                  for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root, r = n; null !== r && null !== r.left; )
                      r = r.left;
                  return r
              }
          }, {
              key: "max",
              value: function() {
                  for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root, r = n; null !== r && null !== r.right; )
                      r = r.right;
                  return r
              }
          }, {
              key: "inOrderTraverse",
              value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                  return null === n || (n.left && r.push.apply(r, a(this.inOrderTraverse(n.left))),
                  r.push(n),
                  n.right && r.push.apply(r, a(this.inOrderTraverse(n.right)))),
                  r
              }
          }, {
              key: "preOrderTraverse",
              value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                  return null === n || (r.push(n),
                  n.left && r.push.apply(r, a(this.preOrderTraverse(n.left))),
                  n.right && r.push.apply(r, a(this.preOrderTraverse(n.right)))),
                  r
              }
          }, {
              key: "postOrderTraverse",
              value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                  return null === n || (n.left && r.push.apply(r, a(this.postOrderTraverse(n.left))),
                  n.right && r.push.apply(r, a(this.postOrderTraverse(n.right))),
                  r.push(n)),
                  r
              }
          }]),
          n
      }();
      function g(n, r) {
          if (!(n instanceof r))
              throw new TypeError("Cannot call a class as a function")
      }
      function m(n, r) {
          for (var e = 0; e < r.length; e++) {
              var t = r[e];
              t.enumerable = t.enumerable || !1,
              t.configurable = !0,
              "value"in t && (t.writable = !0),
              Object.defineProperty(n, t.key, t)
          }
      }
      function v(n, r, e) {
          return r in n ? Object.defineProperty(n, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : n[r] = e,
          n
      }
      var b = function() {
          function n(r, e) {
              var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".tree"
                , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".bst-actions-container"
                , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                  HIGHLIGHT_CLASS: "node__element--highlight",
                  HIGHLIGHT_TIME: 300
              };
              g(this, n),
              v(this, "highlightTimer", null),
              v(this, "actionsContainerSelector", void 0),
              this.treeContainerSelector = t,
              this.actionsContainerSelector = o,
              this.config = i,
              this.tree = r,
              this.render = e || this.renderTree;
              var a = document.documentElement;
              a.style.setProperty("--animation-timing", "".concat(this.config.HIGHLIGHT_TIME / 1e3, "s"))
          }
          var r, e;
          return r = n,
          (e = [{
              key: "template",
              value: function() {
                  return '\n    <div class="btn-group">\n      <button id="insertBtn" class="btn btn-warning">\n        Insert Node\n      </button>\n      <button id="removeElementBtn" class="btn btn-dark">\n        Remove Node\n      </button>\n    </div>\n    <div class="btn-group">\n      <button id="searchBtn" class="btn btn-primary">Search</button>\n      <button id="minValueBtn" class="btn btn-warning">\n        Min Value\n      </button>\n      <button id="maxValueBtn" class="btn btn-dark">Max Value</button>\n    </div>\n    <div class="btn-group">\n      <button id="inOrderTravBtn" class="btn btn-primary">\n        In Order Traversal\n      </button>\n      <button id="postOrderTravBtn" class="btn btn-warning">\n        Post Order Traversal\n      </button>\n      <button id="preOrderTravBtn" class="btn btn-dark">\n        Pre Order Traversal\n      </button>\n    </div>\n    <div class="btn-group">\n      <button id="resetBtn" class="btn btn-danger">\n        Delete Tree\n      </button>\n    </div>\n    '
              }
          }, {
              key: "traverseUINodes",
              value: function(n) {
                  var r = this;
                  n.reduce((function(n, e) {
                      return n.then((function() {
                          return r.highlightNode(e)
                      }
                      ))
                  }
                  ), Promise.resolve())
              }
          }, {
              key: "getTreeUI",
              value: function(n) {
                  var r = n.left
                    , e = n.right
                    , t = n.value;
                  return n ? '\n      <div class="node__element" data-node-id="'.concat(t, '">').concat(t, "</div>\n      ").concat(r || e ? '\n            <div class="node__bottom-line"></div>\n            <div class="node__children">\n            <div class="node node--left">\n              '.concat(r ? this.getTreeUI(r) : "", '\n            </div>\n            <div class="node node--right">\n              ').concat(e ? this.getTreeUI(e) : "", "\n            </div>\n            </div>\n          ") : "", "\n    ") : ""
              }
          }, {
              key: "renderTree",
              value: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tree.root
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.treeContainerSelector
                    , e = document.querySelector(r);
                  if (!n)
                      return e.innerHTML = "";
                  var t = this.getTreeUI(n);
                  e.innerHTML = t
              }
          }, {
              key: "highlightNode",
              value: function(n) {
                  var r = this
                    , e = n.value
                    , t = document.querySelector('[data-node-id="'.concat(e, '"]'));
                  return null !== this.highlightTimer ? (clearTimeout(this.highlightTimer),
                  t.classList.remove(this.config.HIGHLIGHT_CLASS),
                  void (this.highlightTimer = null)) : (t.classList.add(this.config.HIGHLIGHT_CLASS),
                  document.querySelectorAll("button").forEach((function(n) {
                      n.setAttribute("disabled", !0)
                  }
                  )),
                  new Promise((function(n) {
                      r.highlightTimer = setTimeout((function() {
                          t.classList.remove(r.config.HIGHLIGHT_CLASS),
                          document.querySelectorAll("button").forEach((function(n) {
                              n.removeAttribute("disabled")
                          }
                          )),
                          r.highlightTimer = null,
                          n()
                      }
                      ), r.config.HIGHLIGHT_TIME)
                  }
                  )))
              }
          }, {
              key: "onRemoveElementBtnClick",
              value: function() {
                  var n = this
                    , r = prompt("Enter element to remove from the tree")
                    , e = this.tree.remove(r);
                  e ? this.highlightNode(e).then((function() {
                      n.render(n.tree.root)
                  }
                  )) : alert("Element not found")
              }
          }, {
              key: "setTemplate",
              value: function() {
                  document.querySelector(this.actionsContainerSelector).innerHTML = this.template()
              }
          }, {
              key: "onInsertBtnClick",
              value: function() {
                  var n = prompt("Enter element to add to tree");
                  if (n) {
                      var r = this.tree.insert(n);
                      this.render(this.tree.root),
                      this.highlightNode(r)
                  }
              }
          }, {
              key: "onMinValueBtnClick",
              value: function() {
                  var n = this.tree.min();
                  n ? this.highlightNode(n) : alert("Node not found")
              }
          }, {
              key: "onSearchBtnClick",
              value: function() {
                  var n = prompt("Enter the node value to search in the tree")
                    , r = this.tree.search(n);
                  r ? this.highlightNode(r) : alert("Node not found")
              }
          }, {
              key: "onMaxValueBtnClick",
              value: function() {
                  var n = this.tree.max();
                  n ? this.highlightNode(n) : alert("Node not found")
              }
          }, {
              key: "onPreOrderTravBtnClick",
              value: function() {
                  var n = this.tree.preOrderTraverse();
                  this.traverseUINodes(n),
                  console.log(n)
              }
          }, {
              key: "onInOrderTravBtnClick",
              value: function() {
                  var n = this.tree.inOrderTraverse();
                  this.traverseUINodes(n),
                  console.log(n)
              }
          }, {
              key: "onPostOrderTravBtnClick",
              value: function() {
                  var n = this.tree.postOrderTraverse();
                  this.traverseUINodes(n),
                  console.log(n)
              }
          }, {
              key: "onResetBtnClick",
              value: function() {
                  var n = this;
                  this.highlightNode(this.tree.root).then((function() {
                      n.tree.root = null,
                      n.render(n.tree.root)
                  }
                  ))
              }
          }, {
              key: "init",
              value: function() {
                  this.setTemplate();
                  var n = document.querySelector("#insertBtn")
                    , r = document.querySelector("#removeElementBtn")
                    , e = document.querySelector("#minValueBtn")
                    , t = document.querySelector("#maxValueBtn")
                    , o = document.querySelector("#searchBtn")
                    , i = document.querySelector("#preOrderTravBtn")
                    , a = document.querySelector("#inOrderTravBtn")
                    , l = document.querySelector("#postOrderTravBtn")
                    , c = document.querySelector("#resetBtn");
                  r.addEventListener("click", this.onRemoveElementBtnClick.bind(this)),
                  n.addEventListener("click", this.onInsertBtnClick.bind(this)),
                  e.addEventListener("click", this.onMinValueBtnClick.bind(this)),
                  o.addEventListener("click", this.onSearchBtnClick.bind(this)),
                  t.addEventListener("click", this.onMaxValueBtnClick.bind(this)),
                  i.addEventListener("click", this.onPreOrderTravBtnClick.bind(this)),
                  a.addEventListener("click", this.onInOrderTravBtnClick.bind(this)),
                  l.addEventListener("click", this.onPostOrderTravBtnClick.bind(this)),
                  c.addEventListener("click", this.onResetBtnClick.bind(this))
              }
          }]) && m(r.prototype, e),
          n
      }();
      !function() {
          var n = new p;
          !function(n) {
              n.insert(11),
              n.insert(7),
              n.insert(5),
              n.insert(3),
              n.insert(6),
              n.insert(9),
              n.insert(8),
              n.insert(10),
              n.insert(15),
              n.insert(13),
              n.insert(12),
              n.insert(14),
              n.insert(20),
              n.insert(18),
              n.insert(25),
              console.log("inOrderTraverse"),
              console.log(n.inOrderTraverse()),
              console.log("preOrderTraverse"),
              console.log(n.preOrderTraverse()),
              console.log("postOrderTraverse"),
              console.log(n.postOrderTraverse()),
              console.log("min", n.min()),
              console.log("max", n.max()),
              console.log(n.search(12))
          }(n),
          console.log("treeData", n);
          var r = new b(n,null,".tree");
          r.init(),
          r.render()
      }()
  }()
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9wcm9qZWN0cy9qc19iaW5hcnlfc2VhcmNoX3RyZWUvanNfYmluYXJ5X3NlYXJjaF90cmVlLmNzcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvc3R5bGVzL3RyZWUuY3NzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy90cmVlLmNzcz9jMWQ4Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3Byb2plY3RzL2pzX2JpbmFyeV9zZWFyY2hfdHJlZS9qc19iaW5hcnlfc2VhcmNoX3RyZWUuY3NzPzkyYTkiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvcHJvamVjdHMvanNfYmluYXJ5X3NlYXJjaF90cmVlL2pzX2JpbmFyeV9zZWFyY2hfdHJlZS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9wcm9qZWN0cy9qc19iaW5hcnlfc2VhcmNoX3RyZWUvYnN0LXVpLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3Byb2plY3RzL2pzX2JpbmFyeV9zZWFyY2hfdHJlZS9tYWluLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2NvbW1vbi9jcmVhdGUtc2FtcGxlLXRyZWUtZGF0YS5qcyJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsIm5vbmNlIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsImZpbHRlciIsIkJvb2xlYW4iLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwiYmluZCIsInBhcmVudE5vZGUiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJhbGwiLCJhdG9iIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsInNwbGljZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdENvbXBhcmVOdW1iZXJGbiIsImIiLCJOdW1iZXIiLCJUcmVlTm9kZSIsInBhcmVudCIsImxlZnQiLCJyaWdodCIsImlzTGVhZiIsImNvbXBhcmVGbiIsInJvb3QiLCJpbnNlcnRlZE5vZGUiLCJub2RlIiwiY29tcGFyaXNvbiIsInNlYXJjaCIsIm5vZGVJc1Jvb3QiLCJoYXNCb3RoQ2hpbGRyZW4iLCJpc0xlZnRDaGlsZCIsImNoaWxkIiwibWluUmlnaHRMZWFmIiwibWluIiwiY2xvbmUiLCJwb3N0T3JkZXJUcmF2ZXJzZSIsImZpbmQiLCJjdXJyZW50IiwidHJhdmVyc2VkIiwiaW5PcmRlclRyYXZlcnNlIiwicHJlT3JkZXJUcmF2ZXJzZSIsInRyZWUiLCJyZW5kZXIiLCJ0cmVlQ29udGFpbmVyU2VsZWN0b3IiLCJhY3Rpb25zQ29udGFpbmVyU2VsZWN0b3IiLCJjb25maWciLCJISUdITElHSFRfQ0xBU1MiLCJISUdITElHSFRfVElNRSIsInJlbmRlclRyZWUiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsIm5vZGVzIiwicmVkdWNlIiwicHIiLCJ0aGVuIiwiaGlnaGxpZ2h0Tm9kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0VHJlZVVJIiwiY29udGFpbmVyU2VsZWN0b3IiLCJ0cmVlQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJub2RlRWxlbWVudCIsImhpZ2hsaWdodFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0biIsInNldFRpbWVvdXQiLCJlbGVtZW50IiwicHJvbXB0IiwicmVtb3ZlZEVsIiwiYWxlcnQiLCJzZWFyY2hWYWwiLCJzZWFyY2hlZE5vZGUiLCJtYXgiLCJhcnJheSIsInRyYXZlcnNlVUlOb2RlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUZW1wbGF0ZSIsInJlbW92ZUVsZW1lbnRCdG4iLCJtaW5WYWx1ZUJ0biIsIm1heFZhbHVlQnRuIiwic2VhcmNoQnRuIiwicHJlT3JkZXJUcmF2QnRuIiwiaW5PcmRlclRyYXZCdG4iLCJwb3N0T3JkZXJUcmF2QnRuIiwicmVzZXRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwib25SZW1vdmVFbGVtZW50QnRuQ2xpY2siLCJvbkluc2VydEJ0bkNsaWNrIiwib25NaW5WYWx1ZUJ0bkNsaWNrIiwib25TZWFyY2hCdG5DbGljayIsIm9uTWF4VmFsdWVCdG5DbGljayIsIm9uUHJlT3JkZXJUcmF2QnRuQ2xpY2siLCJvbkluT3JkZXJUcmF2QnRuQ2xpY2siLCJvblBvc3RPcmRlclRyYXZCdG5DbGljayIsIm9uUmVzZXRCdG5DbGljayIsIm15VHJlZSIsIkJpbmFyeVNlYXJjaFRyZWUiLCJjcmVhdGVTYW1wbGVUcmVlRGF0YSIsImJzdFVJIiwiQmluYXJ5U2VhcmNoVHJlZVVJIiwiaW5pdCIsIm1haW4iXSwibWFwcGluZ3MiOiJrRkFHSUEsRSxNQUEwQixHQUE0QixLQUUxREEsRUFBd0JDLEtBQUssQ0FBQ0MsRUFBT0MsR0FBSSw4eEJBQSt4QixHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyw0RUFBNEUsTUFBUSxHQUFHLFNBQVcsbVVBQW1VLGVBQWlCLENBQUMsK3hCQUEreEIsV0FBYSxNQUV0a0UsTyxrRENKSUgsRSxNQUEwQixHQUE0QixLQUUxREEsRUFBd0JDLEtBQUssQ0FBQ0MsRUFBT0MsR0FBSSx5bkRBQTBuRCxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxzQ0FBc0MsTUFBUSxHQUFHLFNBQVcsbXJCQUFtckIsZUFBaUIsQ0FBQywwbkRBQTBuRCxXQUFhLE1BRXRrSSxPLGtEQ0pJSCxFLE1BQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLCs3REFBZzhELEdBQUcsQ0FBQyxRQUFVLEVBQUUsUUFBVSxDQUFDLG1DQUFtQyxNQUFRLEdBQUcsU0FBVyxvc0JBQW9zQixlQUFpQixDQUFDLGc4REFBZzhELFdBQWEsTUFFaHVKLE8sZ0JDQ0FELEVBQU9FLFFBQVUsU0FBVUMsR0FDekIsSUFBSUMsRUFBTyxHQXVEWCxPQXJEQUEsRUFBS0MsU0FBVyxXQUNkLE9BQU9DLEtBQUtDLEtBQUksU0FBVUMsR0FDeEIsSUFBSUMsRUFBVU4sRUFBdUJLLEdBRXJDLE9BQUlBLEVBQUssR0FDQSxVQUFVRSxPQUFPRixFQUFLLEdBQUksTUFBTUUsT0FBT0QsRUFBUyxLQUdsREEsS0FDTkUsS0FBSyxLQUtWUCxFQUFLUSxFQUFJLFNBQVVDLEVBQVNDLEVBQVlDLEdBQ2YsaUJBQVpGLElBRVRBLEVBQVUsQ0FBQyxDQUFDLEtBQU1BLEVBQVMsTUFHN0IsSUFBSUcsRUFBeUIsR0FFN0IsR0FBSUQsRUFDRixJQUFLLElBQUlILEVBQUksRUFBR0EsRUFBSU4sS0FBS1csT0FBUUwsSUFBSyxDQUVwQyxJQUFJWCxFQUFLSyxLQUFLTSxHQUFHLEdBRVAsTUFBTlgsSUFDRmUsRUFBdUJmLElBQU0sR0FLbkMsSUFBSyxJQUFJaUIsRUFBSyxFQUFHQSxFQUFLTCxFQUFRSSxPQUFRQyxJQUFNLENBQzFDLElBQUlWLEVBQU8sR0FBR0UsT0FBT0csRUFBUUssSUFFekJILEdBQVVDLEVBQXVCUixFQUFLLE1BS3RDTSxJQUNHTixFQUFLLEdBR1JBLEVBQUssR0FBSyxHQUFHRSxPQUFPSSxFQUFZLFNBQVNKLE9BQU9GLEVBQUssSUFGckRBLEVBQUssR0FBS00sR0FNZFYsRUFBS0wsS0FBS1MsTUFJUEosSSxlQ3hEVCxTQUFTZSxFQUFrQkMsRUFBS0MsSUFBa0IsTUFBUEEsR0FBZUEsRUFBTUQsRUFBSUgsVUFBUUksRUFBTUQsRUFBSUgsUUFBUSxJQUFLLElBQUlMLEVBQUksRUFBR1UsRUFBTyxJQUFJQyxNQUFNRixHQUFNVCxFQUFJUyxFQUFLVCxJQUFPVSxFQUFLVixHQUFLUSxFQUFJUixHQUFNLE9BQU9VLEVBTWhMdEIsRUFBT0UsUUFBVSxTQUFnQ00sR0FDL0MsSUFic0JZLEVBQUtSLEVBYXZCWSxHQWJ1QlosRUFhTSxFQUhuQyxTQUF5QlEsR0FBTyxHQUFJRyxNQUFNRSxRQUFRTCxHQUFNLE9BQU9BLEVBVnRCTSxDQUFqQk4sRUFhS1osSUFMN0IsU0FBK0JZLEVBQUtSLEdBQUssSUFBSU0sRUFBS0UsSUFBMEIsb0JBQVhPLFFBQTBCUCxFQUFJTyxPQUFPQyxXQUFhUixFQUFJLGVBQWdCLEdBQVUsTUFBTkYsRUFBSixDQUF3QixJQUFrRFcsRUFBSUMsRUFBbERDLEVBQU8sR0FBUUMsR0FBSyxFQUFVQyxHQUFLLEVBQW1CLElBQU0sSUFBS2YsRUFBS0EsRUFBR2dCLEtBQUtkLEtBQVFZLEdBQU1ILEVBQUtYLEVBQUdpQixRQUFRQyxRQUFvQkwsRUFBS2hDLEtBQUs4QixFQUFHUSxRQUFZekIsR0FBS21CLEVBQUtkLFNBQVdMLEdBQTNEb0IsR0FBSyxJQUFvRSxNQUFPTSxHQUFPTCxHQUFLLEVBQU1ILEVBQUtRLEVBQU8sUUFBVSxJQUFXTixHQUFzQixNQUFoQmQsRUFBVyxRQUFXQSxFQUFXLFNBQU8sUUFBVSxHQUFJZSxFQUFJLE1BQU1ILEdBQVEsT0FBT0MsR0FSN2FRLENBQXNCbkIsRUFBS1IsSUFJNUYsU0FBcUM0QixFQUFHQyxHQUFVLEdBQUtELEVBQUwsQ0FBZ0IsR0FBaUIsaUJBQU5BLEVBQWdCLE9BQU9yQixFQUFrQnFCLEVBQUdDLEdBQVMsSUFBSUMsRUFBSUMsT0FBT0MsVUFBVXZDLFNBQVM2QixLQUFLTSxHQUFHSyxNQUFNLEdBQUksR0FBaUUsTUFBbkQsV0FBTkgsR0FBa0JGLEVBQUVNLGNBQWFKLEVBQUlGLEVBQUVNLFlBQVlDLE1BQWdCLFFBQU5MLEdBQXFCLFFBQU5BLEVBQW9CbkIsTUFBTXlCLEtBQUtSLEdBQWMsY0FBTkUsR0FBcUIsMkNBQTJDTyxLQUFLUCxHQUFXdkIsRUFBa0JxQixFQUFHQyxRQUF6RyxHQUozTVMsQ0FBNEI5QixFQUFLUixJQUVuSSxXQUE4QixNQUFNLElBQUl1QyxVQUFVLDZJQUZ1RkMsSUFjbkkzQyxFQUFVZSxFQUFNLEdBQ2hCNkIsRUFBYTdCLEVBQU0sR0FFdkIsR0FBb0IsbUJBQVQ4QixLQUFxQixDQUU5QixJQUFJQyxFQUFTRCxLQUFLRSxTQUFTQyxtQkFBbUJDLEtBQUtDLFVBQVVOLE1BQ3pETyxFQUFPLCtEQUErRGxELE9BQU82QyxHQUM3RU0sRUFBZ0IsT0FBT25ELE9BQU9rRCxFQUFNLE9BQ3BDRSxFQUFhVCxFQUFXVSxRQUFReEQsS0FBSSxTQUFVeUQsR0FDaEQsTUFBTyxpQkFBaUJ0RCxPQUFPMkMsRUFBV1ksWUFBYyxJQUFJdkQsT0FBT3NELEVBQVEsVUFFN0UsTUFBTyxDQUFDdkQsR0FBU0MsT0FBT29ELEdBQVlwRCxPQUFPLENBQUNtRCxJQUFnQmxELEtBQUssTUFHbkUsTUFBTyxDQUFDRixHQUFTRSxLQUFLLFEsb0JDNUJ4QixJQUNNdUQsRUFlRkMsRUFBWSxXQUNkLElBQUlELEVBQU8sR0FDWCxPQUFPLFNBQWtCRSxHQUN2QixRQUE0QixJQUFqQkYsRUFBS0UsR0FBeUIsQ0FDdkMsSUFBSUMsRUFBY0MsU0FBU0MsY0FBY0gsR0FFekMsR0FBSUksT0FBT0MsbUJBQXFCSixhQUF1QkcsT0FBT0Msa0JBQzVELElBR0VKLEVBQWNBLEVBQVlLLGdCQUFnQkMsS0FDMUMsTUFBT0MsR0FFUFAsRUFBYyxLQUlsQkgsRUFBS0UsR0FBVUMsRUFHakIsT0FBT0gsRUFBS0UsSUFwQkEsR0F3QlpTLEVBQWMsR0FFbEIsU0FBU0MsRUFBcUJDLEdBRzVCLElBRkEsSUFBSUMsR0FBVSxFQUVMcEUsRUFBSSxFQUFHQSxFQUFJaUUsRUFBWTVELE9BQVFMLElBQ3RDLEdBQUlpRSxFQUFZakUsR0FBR21FLGFBQWVBLEVBQVksQ0FDNUNDLEVBQVNwRSxFQUNULE1BSUosT0FBT29FLEVBR1QsU0FBU0MsRUFBYTdFLEVBQU04RSxHQUkxQixJQUhBLElBQUlDLEVBQWEsR0FDYkMsRUFBYyxHQUVUeEUsRUFBSSxFQUFHQSxFQUFJUixFQUFLYSxPQUFRTCxJQUFLLENBQ3BDLElBQUlKLEVBQU9KLEVBQUtRLEdBQ1pYLEVBQUtpRixFQUFRRyxLQUFPN0UsRUFBSyxHQUFLMEUsRUFBUUcsS0FBTzdFLEVBQUssR0FDbEQ4RSxFQUFRSCxFQUFXbEYsSUFBTyxFQUMxQjhFLEVBQWEsR0FBR3JFLE9BQU9ULEVBQUksS0FBS1MsT0FBTzRFLEdBQzNDSCxFQUFXbEYsR0FBTXFGLEVBQVEsRUFDekIsSUFBSUMsRUFBUVQsRUFBcUJDLEdBQzdCUyxFQUFNLENBQ1JDLElBQUtqRixFQUFLLEdBQ1ZrRixNQUFPbEYsRUFBSyxHQUNabUYsVUFBV25GLEVBQUssS0FHSCxJQUFYK0UsR0FDRlYsRUFBWVUsR0FBT0ssYUFDbkJmLEVBQVlVLEdBQU9NLFFBQVFMLElBRTNCWCxFQUFZOUUsS0FBSyxDQUNmZ0YsV0FBWUEsRUFDWmMsUUFBU0MsRUFBU04sRUFBS04sR0FDdkJVLFdBQVksSUFJaEJSLEVBQVlyRixLQUFLZ0YsR0FHbkIsT0FBT0ssRUFHVCxTQUFTVyxFQUFtQmIsR0FDMUIsSUFBSWMsRUFBUTFCLFNBQVMyQixjQUFjLFNBQy9CQyxFQUFhaEIsRUFBUWdCLFlBQWMsR0FFdkMsUUFBZ0MsSUFBckJBLEVBQVdDLE1BQXVCLENBQzNDLElBQUlBLEVBQW1ELEtBRW5EQSxJQUNGRCxFQUFXQyxNQUFRQSxHQVF2QixHQUpBeEQsT0FBT3lELEtBQUtGLEdBQVlHLFNBQVEsU0FBVUMsR0FDeENOLEVBQU1PLGFBQWFELEVBQUtKLEVBQVdJLE9BR1AsbUJBQW5CcEIsRUFBUXNCLE9BQ2pCdEIsRUFBUXNCLE9BQU9SLE9BQ1YsQ0FDTCxJQUFJNUIsRUFBU0QsRUFBVWUsRUFBUXNCLFFBQVUsUUFFekMsSUFBS3BDLEVBQ0gsTUFBTSxJQUFJcUMsTUFBTSwyR0FHbEJyQyxFQUFPc0MsWUFBWVYsR0FHckIsT0FBT0EsRUFjVCxJQUNNVyxFQURGQyxHQUNFRCxFQUFZLEdBQ1QsU0FBaUJwQixFQUFPc0IsR0FFN0IsT0FEQUYsRUFBVXBCLEdBQVNzQixFQUNaRixFQUFVRyxPQUFPQyxTQUFTcEcsS0FBSyxRQUkxQyxTQUFTcUcsRUFBb0JoQixFQUFPVCxFQUFPMEIsRUFBUXpCLEdBQ2pELElBQUlDLEVBQU13QixFQUFTLEdBQUt6QixFQUFJRSxNQUFRLFVBQVVoRixPQUFPOEUsRUFBSUUsTUFBTyxNQUFNaEYsT0FBTzhFLEVBQUlDLElBQUssS0FBT0QsRUFBSUMsSUFJakcsR0FBSU8sRUFBTWtCLFdBQ1JsQixFQUFNa0IsV0FBV0MsUUFBVVAsRUFBWXJCLEVBQU9FLE9BQ3pDLENBQ0wsSUFBSTJCLEVBQVU5QyxTQUFTK0MsZUFBZTVCLEdBQ2xDNkIsRUFBYXRCLEVBQU1zQixXQUVuQkEsRUFBVy9CLElBQ2JTLEVBQU11QixZQUFZRCxFQUFXL0IsSUFHM0IrQixFQUFXckcsT0FDYitFLEVBQU13QixhQUFhSixFQUFTRSxFQUFXL0IsSUFFdkNTLEVBQU1VLFlBQVlVLElBS3hCLFNBQVNLLEVBQVd6QixFQUFPZCxFQUFTTSxHQUNsQyxJQUFJQyxFQUFNRCxFQUFJQyxJQUNWQyxFQUFRRixFQUFJRSxNQUNaQyxFQUFZSCxFQUFJRyxVQWVwQixHQWJJRCxFQUNGTSxFQUFNTyxhQUFhLFFBQVNiLEdBRTVCTSxFQUFNMEIsZ0JBQWdCLFNBR3BCL0IsR0FBNkIsb0JBQVRyQyxPQUN0Qm1DLEdBQU8sdURBQXVEL0UsT0FBTzRDLEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVWdDLE1BQWUsUUFNbElLLEVBQU1rQixXQUNSbEIsRUFBTWtCLFdBQVdDLFFBQVUxQixNQUN0QixDQUNMLEtBQU9PLEVBQU0yQixZQUNYM0IsRUFBTXVCLFlBQVl2QixFQUFNMkIsWUFHMUIzQixFQUFNVSxZQUFZcEMsU0FBUytDLGVBQWU1QixLQUk5QyxJQUFJbUMsRUFBWSxLQUNaQyxFQUFtQixFQUV2QixTQUFTL0IsRUFBU04sRUFBS04sR0FDckIsSUFBSWMsRUFDQThCLEVBQ0FiLEVBRUosR0FBSS9CLEVBQVEwQyxVQUFXLENBQ3JCLElBQUlHLEVBQWFGLElBQ2pCN0IsRUFBUTRCLElBQWNBLEVBQVk3QixFQUFtQmIsSUFDckQ0QyxFQUFTZCxFQUFvQmdCLEtBQUssS0FBTWhDLEVBQU8rQixHQUFZLEdBQzNEZCxFQUFTRCxFQUFvQmdCLEtBQUssS0FBTWhDLEVBQU8rQixHQUFZLFFBRTNEL0IsRUFBUUQsRUFBbUJiLEdBQzNCNEMsRUFBU0wsRUFBV08sS0FBSyxLQUFNaEMsRUFBT2QsR0FFdEMrQixFQUFTLFlBeEZiLFNBQTRCakIsR0FFMUIsR0FBeUIsT0FBckJBLEVBQU1pQyxXQUNSLE9BQU8sRUFHVGpDLEVBQU1pQyxXQUFXVixZQUFZdkIsR0FtRnpCa0MsQ0FBbUJsQyxJQUt2QixPQURBOEIsRUFBT3RDLEdBQ0EsU0FBcUIyQyxHQUMxQixHQUFJQSxFQUFRLENBQ1YsR0FBSUEsRUFBTzFDLE1BQVFELEVBQUlDLEtBQU8wQyxFQUFPekMsUUFBVUYsRUFBSUUsT0FBU3lDLEVBQU94QyxZQUFjSCxFQUFJRyxVQUNuRixPQUdGbUMsRUFBT3RDLEVBQU0yQyxRQUVibEIsS0FLTmpILEVBQU9FLFFBQVUsU0FBVUUsRUFBTThFLElBQy9CQSxFQUFVQSxHQUFXLElBR1IwQyxXQUEwQyxrQkFBdEIxQyxFQUFRMEMsWUFDdkMxQyxFQUFRMEMsZ0JBck9ZLElBQVQxRCxJQU1UQSxFQUFPNkMsUUFBUXZDLFFBQVVGLFVBQVlBLFNBQVM4RCxNQUFRNUQsT0FBTzZELE9BR3hEbkUsSUFnT1QsSUFBSW9FLEVBQWtCckQsRUFEdEI3RSxFQUFPQSxHQUFRLEdBQzBCOEUsR0FDekMsT0FBTyxTQUFnQnFELEdBR3JCLEdBRkFBLEVBQVVBLEdBQVcsR0FFMkIsbUJBQTVDNUYsT0FBT0MsVUFBVXZDLFNBQVM2QixLQUFLcUcsR0FBbkMsQ0FJQSxJQUFLLElBQUkzSCxFQUFJLEVBQUdBLEVBQUkwSCxFQUFnQnJILE9BQVFMLElBQUssQ0FDL0MsSUFDSTJFLEVBQVFULEVBREt3RCxFQUFnQjFILElBRWpDaUUsRUFBWVUsR0FBT0ssYUFLckIsSUFGQSxJQUFJNEMsRUFBcUJ2RCxFQUFhc0QsRUFBU3JELEdBRXRDaEUsRUFBSyxFQUFHQSxFQUFLb0gsRUFBZ0JySCxPQUFRQyxJQUFNLENBQ2xELElBRUl1SCxFQUFTM0QsRUFGS3dELEVBQWdCcEgsSUFJSyxJQUFuQzJELEVBQVk0RCxHQUFRN0MsYUFDdEJmLEVBQVk0RCxHQUFRNUMsVUFFcEJoQixFQUFZNkQsT0FBT0QsRUFBUSxJQUkvQkgsRUFBa0JFLE9DelFsQkcsRUFBMkIsR0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYTVJLFFBR3JCLElBQUlGLEVBQVMySSxFQUF5QkUsR0FBWSxDQUNqRDVJLEdBQUk0SSxFQUVKM0ksUUFBUyxJQU9WLE9BSEE4SSxFQUFvQkgsR0FBVTdJLEVBQVFBLEVBQU9FLFFBQVMwSSxHQUcvQzVJLEVBQU9FLFFDcEJmMEksRUFBb0JsRyxFQUFJLFNBQVMxQyxHQUNoQyxJQUFJaUosRUFBU2pKLEdBQVVBLEVBQU9rSixXQUM3QixXQUFhLE9BQU9sSixFQUFnQixTQUNwQyxXQUFhLE9BQU9BLEdBRXJCLE9BREE0SSxFQUFvQk8sRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsR0NMUkwsRUFBb0JPLEVBQUksU0FBU2pKLEVBQVNtSixHQUN6QyxJQUFJLElBQUkvQyxLQUFPK0MsRUFDWFQsRUFBb0JwRyxFQUFFNkcsRUFBWS9DLEtBQVNzQyxFQUFvQnBHLEVBQUV0QyxFQUFTb0csSUFDNUUzRCxPQUFPMkcsZUFBZXBKLEVBQVNvRyxFQUFLLENBQUVpRCxZQUFZLEVBQU1DLElBQUtILEVBQVcvQyxNQ0ozRXNDLEVBQW9CcEcsRUFBSSxTQUFTZ0QsRUFBS2lFLEdBQVEsT0FBTzlHLE9BQU9DLFVBQVU4RyxlQUFleEgsS0FBS3NELEVBQUtpRSxJLDZDQ1FsRixJQUFJLElBTEgsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixJQU1MLFcsV0NKRixJQUFJLElBTEgsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixJQU1MLFcsMjRDQ0pGLElBQUksSUFMSCxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLElBTUwsV0NaZixJQU1NRSxFQUF5QixTQUFDUCxFQUFHUSxHQUNqQyxPQUFJQyxPQUFPVCxJQUFNUyxPQUFPRCxHQU5qQixFQVVBQyxPQUFPVCxHQUFLUyxPQUFPRCxJQVRqQixFQUNBLEdBV0xFLEUsV0FDSixXQUFZekgsRUFBTzBILEdBQVEsVUFDekJ6SixLQUFLK0IsTUFBUUEsRUFBTWhDLFdBQ25CQyxLQUFLeUosT0FBU0EsR0FBVSxLQUN4QnpKLEtBQUswSixLQUFPLEtBQ1oxSixLQUFLMkosTUFBUSxLLDhCQUdmLFdBQ0UsT0FBcUIsT0FBZDNKLEtBQUswSixNQUFnQyxPQUFmMUosS0FBSzJKLFEsdUJBR3BDLFdBQ0UsT0FBUTNKLEtBQUs0SixXLEtBa0pqQixFLFdBNUlFLGFBQWdELElBQXBDQyxFQUFvQyx1REFBeEJSLEVBQXdCLDJEQUM5Q3JKLEtBQUs4SixLQUFPLEtBQ1o5SixLQUFLNkosVUFBWUEsRSxnQ0FHbkIsU0FBTzlILEdBQU8sSUFFUmdJLEVBRlEsT0FDUkMsRUFBT2hLLEtBQUs4SixLQUVoQixPQUFhLE9BQVRFLEdBQ0ZoSyxLQUFLOEosS0FBTyxJQUFJTixFQUFTekgsR0FDbEIvQixLQUFLOEosTUFFUSxXQUNwQixPQUFhLENBQ1gsSUFBTUcsRUFBYSxFQUFLSixVQUFVOUgsRUFBT2lJLEVBQUtqSSxPQUM5QyxHQS9DQyxJQStDR2tJLEVBRUYsT0FEQUYsRUFBZUMsRUFDUkEsRUFFVCxJQWxERyxJQWtEQ0MsRUFBbUMsQ0FDckMsR0FBa0IsT0FBZEQsRUFBS04sS0FHUCxPQUZBSyxFQUFlLElBQUlQLEVBQVN6SCxFQUFPaUksR0FDbkNBLEVBQUtOLEtBQU9LLEdBQ0wsRUFFVEMsRUFBT0EsRUFBS04sVUFDUCxHQXhESixJQXdEUU8sRUFBbUMsQ0FDNUMsR0FBbUIsT0FBZkQsRUFBS0wsTUFHUCxPQUZBSSxFQUFlLElBQUlQLEVBQVN6SCxFQUFPaUksR0FDbkNBLEVBQUtMLE1BQVFJLEdBQ04sRUFFVEMsRUFBT0EsRUFBS0wsUUFwQkksR0F5QmJJLE9BRFQsSSxvQkFLRixTQUFPaEksRUFBT2lJLEdBRVosS0FEQUEsRUFBT0EsR0FBY2hLLEtBQUtrSyxPQUFPbkksSUFDdEIsT0FBTyxLQUVsQixJQUFNb0ksRUFBNkIsT0FBaEJILEVBQUtQLE9BQ2xCVyxFQUFnQyxPQUFkSixFQUFLTixNQUFnQyxPQUFmTSxFQUFLTCxNQUM3Q1UsR0FBZUYsR0FBYUgsRUFBS1AsT0FBT0MsT0FBU00sRUFFdkQsR0FBSUEsRUFBS0osT0FRUCxPQVBJTyxFQUNGbkssS0FBSzhKLEtBQU8sS0FDSE8sRUFDVEwsRUFBS1AsT0FBT0MsS0FBTyxLQUVuQk0sRUFBS1AsT0FBT0UsTUFBUSxLQUVmSyxFQUVULElBQUtJLEVBQWlCLENBQ3BCLElBQU1FLEVBQXNCLE9BQWROLEVBQUtOLEtBQWdCTSxFQUFLTixLQUFPTSxFQUFLTCxNQVNwRCxPQVJJUSxFQUNGbkssS0FBSzhKLEtBQU9RLEVBQ0hELEVBQ1RMLEVBQUtQLE9BQU9DLEtBQU9ZLEVBRW5CTixFQUFLUCxPQUFPRSxNQUFRVyxFQUV0QkEsRUFBTWIsT0FBU08sRUFBS1AsT0FDYk8sRUFHVCxJQUFNTyxFQUFldkssS0FBS3dLLElBQUlSLEVBQUtMLE9BQy9CWSxFQUFhZCxPQUFPQyxPQUFTYSxFQUMvQkEsRUFBYWQsT0FBT0MsS0FBTyxLQUUzQmEsRUFBYWQsT0FBT0UsTUFBUSxLQUU5QixJQUFNYyxFLCtWQUFRLENBQUgsR0FBUVQsR0FFbkIsT0FEQUEsRUFBS2pJLE1BQVF3SSxFQUFheEksTUFDbkIwSSxJLG9CQUVULFNBQU8xSSxHQUNMLE9BQU8vQixLQUFLMEssb0JBQW9CQyxNQUFLLFNBQUNYLEdBQUQsT0FBVUEsRUFBS2pJLFFBQVVBLE8saUJBRWhFLFdBRUUsSUFGb0IsSUFBbEJpSSxFQUFrQix1REFBWGhLLEtBQUs4SixLQUNWYyxFQUFVWixFQUNLLE9BQVpZLEdBQXFDLE9BQWpCQSxFQUFRbEIsTUFDakNrQixFQUFVQSxFQUFRbEIsS0FFcEIsT0FBT2tCLEksaUJBRVQsV0FFRSxJQUZvQixJQUFsQlosRUFBa0IsdURBQVhoSyxLQUFLOEosS0FDVmMsRUFBVVosRUFDSyxPQUFaWSxHQUFzQyxPQUFsQkEsRUFBUWpCLE9BQ2pDaUIsRUFBVUEsRUFBUWpCLE1BRXBCLE9BQU9pQixJLDZCQUVULFdBQWtELElBQWxDWixFQUFrQyx1REFBM0JoSyxLQUFLOEosS0FBTWUsRUFBZ0IsdURBQUosR0FDNUMsT0FBYSxPQUFUYixJQUdBQSxFQUFLTixNQUNQbUIsRUFBVXBMLEtBQVYsTUFBQW9MLEVBQVMsRUFBUzdLLEtBQUs4SyxnQkFBZ0JkLEVBQUtOLFFBRTlDbUIsRUFBVXBMLEtBQUt1SyxHQUNYQSxFQUFLTCxPQUNQa0IsRUFBVXBMLEtBQVYsTUFBQW9MLEVBQVMsRUFBUzdLLEtBQUs4SyxnQkFBZ0JkLEVBQUtMLFVBUHJDa0IsSSw4QkFXWCxXQUFtRCxJQUFsQ2IsRUFBa0MsdURBQTNCaEssS0FBSzhKLEtBQU1lLEVBQWdCLHVEQUFKLEdBQzdDLE9BQWEsT0FBVGIsSUFHSmEsRUFBVXBMLEtBQUt1SyxHQUNYQSxFQUFLTixNQUNQbUIsRUFBVXBMLEtBQVYsTUFBQW9MLEVBQVMsRUFBUzdLLEtBQUsrSyxpQkFBaUJmLEVBQUtOLFFBRTNDTSxFQUFLTCxPQUNQa0IsRUFBVXBMLEtBQVYsTUFBQW9MLEVBQVMsRUFBUzdLLEtBQUsrSyxpQkFBaUJmLEVBQUtMLFVBUHRDa0IsSSwrQkFXWCxXQUFvRCxJQUFsQ2IsRUFBa0MsdURBQTNCaEssS0FBSzhKLEtBQU1lLEVBQWdCLHVEQUFKLEdBQzlDLE9BQWEsT0FBVGIsSUFHQUEsRUFBS04sTUFDUG1CLEVBQVVwTCxLQUFWLE1BQUFvTCxFQUFTLEVBQVM3SyxLQUFLMEssa0JBQWtCVixFQUFLTixRQUU1Q00sRUFBS0wsT0FDUGtCLEVBQVVwTCxLQUFWLE1BQUFvTCxFQUFTLEVBQVM3SyxLQUFLMEssa0JBQWtCVixFQUFLTCxTQUVoRGtCLEVBQVVwTCxLQUFLdUssSUFSTmEsTSxpWUNoS04sSUEwUFAsRSxXQWxQRSxXQUNFRyxFQUNBQyxHQU9BLElBTkFDLEVBTUEsdURBTndCLFFBQ3hCQyxFQUtBLHVEQUwyQix5QkFDM0JDLEVBSUEsdURBSlMsQ0FDUEMsZ0JBQWlCLDJCQUNqQkMsZUFBZ0IsS0FFbEIsa0NBWGUsTUFXZiwwQ0FDQXRMLEtBQUtrTCxzQkFBd0JBLEVBQzdCbEwsS0FBS21MLHlCQUEyQkEsRUFDaENuTCxLQUFLb0wsT0FBU0EsRUFDZHBMLEtBQUtnTCxLQUFPQSxFQUNaaEwsS0FBS2lMLE9BQVNBLEdBQVVqTCxLQUFLdUwsV0FDN0IsSUFBTXpCLEVBQU85RixTQUFTd0gsZ0JBQ3RCMUIsRUFBS3BFLE1BQU0rRixZQUNULHFCQURGLFVBRUt6TCxLQUFLb0wsT0FBT0UsZUFBaUIsSUFGbEMsTSw2Q0FNRixXQUNFLHUvQiw2QkFtQ0YsU0FBZ0JJLEdBQU8sV0FDckJBLEVBQU1DLFFBQU8sU0FBQ0MsRUFBSTVCLEdBQ2hCLE9BQU80QixFQUFHQyxNQUFLLGtCQUFNLEVBQUtDLGNBQWM5QixRQUN2QytCLFFBQVFDLGEsdUJBR2IsU0FBVWhDLEdBQ1IsSUFBUU4sRUFBdUJNLEVBQXZCTixLQUFNQyxFQUFpQkssRUFBakJMLE1BQU81SCxFQUFVaUksRUFBVmpJLE1BQ3JCLE9BQUtpSSxFQUdMLDJEQUM2Q2pJLEVBRDdDLGFBQ3VEQSxFQUR2RCx5QkFHSTJILEdBQVFDLEVBQVIsa0tBS1FELEVBQU8xSixLQUFLaU0sVUFBVXZDLEdBQVEsR0FMdEMsMkZBUVFDLEVBQVEzSixLQUFLaU0sVUFBVXRDLEdBQVMsR0FSeEMsd0RBWUksR0FmUixVQUZTLEssd0JBc0JYLFdBR0UsSUFGQUssRUFFQSx1REFGT2hLLEtBQUtnTCxLQUFLbEIsS0FDakJvQyxFQUNBLHVEQURvQmxNLEtBQUtrTCxzQkFFbkJpQixFQUFnQm5JLFNBQVNDLGNBQWNpSSxHQUM3QyxJQUFLbEMsRUFDSCxPQUFRbUMsRUFBY0MsVUFBWSxHQUVwQyxJQUFNQyxFQUFXck0sS0FBS2lNLFVBQVVqQyxHQUNoQ21DLEVBQWNDLFVBQVlDLEksMkJBRzVCLFlBQXlCLFdBQVR0SyxFQUFTLEVBQVRBLE1BQ1J1SyxFQUFjdEksU0FBU0MsY0FBVCx5QkFBeUNsQyxFQUF6QyxPQUNwQixPQUE0QixPQUF4Qi9CLEtBQUt1TSxnQkFDUEMsYUFBYXhNLEtBQUt1TSxnQkFDbEJELEVBQVlHLFVBQVU5RixPQUFPM0csS0FBS29MLE9BQU9DLHNCQUN6Q3JMLEtBQUt1TSxlQUFpQixRQUd4QkQsRUFBWUcsVUFBVUMsSUFBSTFNLEtBQUtvTCxPQUFPQyxpQkFDdENySCxTQUFTMkksaUJBQWlCLFVBQVU1RyxTQUFRLFNBQUM2RyxHQUMzQ0EsRUFBSTNHLGFBQWEsWUFBWSxNQUV4QixJQUFJOEYsU0FBUSxTQUFDQyxHQUNsQixFQUFLTyxlQUFpQk0sWUFBVyxXQUMvQlAsRUFBWUcsVUFBVTlGLE9BQU8sRUFBS3lFLE9BQU9DLGlCQUN6Q3JILFNBQVMySSxpQkFBaUIsVUFBVTVHLFNBQVEsU0FBQzZHLEdBQzNDQSxFQUFJeEYsZ0JBQWdCLGVBRXRCLEVBQUttRixlQUFpQixLQUN0QlAsTUFDQyxFQUFLWixPQUFPRSxzQixxQ0FJbkIsV0FBMEIsV0FDbEJ3QixFQUFVQyxPQUFPLHlDQUNqQkMsRUFBWWhOLEtBQUtnTCxLQUFLckUsT0FBT21HLEdBQy9CRSxFQUNGaE4sS0FBSzhMLGNBQWNrQixHQUFXbkIsTUFBSyxXQUNqQyxFQUFLWixPQUFPLEVBQUtELEtBQUtsQixTQUd4Qm1ELE1BQU0sdUIseUJBSVYsV0FDMkJqSixTQUFTQyxjQUNoQ2pFLEtBQUttTCwwQkFFVWlCLFVBQVlwTSxLQUFLcU0sYSw4QkFHcEMsV0FDRSxJQUFNUyxFQUFVQyxPQUFPLGdDQUN2QixHQUFLRCxFQUFMLENBR0EsSUFBTTlDLEVBQU9oSyxLQUFLZ0wsS0FBSzlFLE9BQU80RyxHQUM5QjlNLEtBQUtpTCxPQUFPakwsS0FBS2dMLEtBQUtsQixNQUN0QjlKLEtBQUs4TCxjQUFjOUIsTSxnQ0FHckIsV0FDRSxJQUFNQSxFQUFPaEssS0FBS2dMLEtBQUtSLE1BQ25CUixFQUNGaEssS0FBSzhMLGNBQWM5QixHQUVuQmlELE1BQU0sb0IsOEJBSVYsV0FDRSxJQUFNQyxFQUFZSCxPQUFPLDhDQUNuQkksRUFBZW5OLEtBQUtnTCxLQUFLZCxPQUFPZ0QsR0FDbENDLEVBQ0ZuTixLQUFLOEwsY0FBY3FCLEdBRW5CRixNQUFNLG9CLGdDQUlWLFdBQ0UsSUFBTWpELEVBQU9oSyxLQUFLZ0wsS0FBS29DLE1BQ25CcEQsRUFDRmhLLEtBQUs4TCxjQUFjOUIsR0FFbkJpRCxNQUFNLG9CLG9DQUlWLFdBQ0UsSUFBTUksRUFBUXJOLEtBQUtnTCxLQUFLRCxtQkFDeEIvSyxLQUFLc04sZ0JBQWdCRCxHQUNyQkUsUUFBUUMsSUFBSUgsSyxtQ0FHZCxXQUNFLElBQU1BLEVBQVFyTixLQUFLZ0wsS0FBS0Ysa0JBQ3hCOUssS0FBS3NOLGdCQUFnQkQsR0FDckJFLFFBQVFDLElBQUlILEsscUNBR2QsV0FDRSxJQUFNQSxFQUFRck4sS0FBS2dMLEtBQUtOLG9CQUN4QjFLLEtBQUtzTixnQkFBZ0JELEdBQ3JCRSxRQUFRQyxJQUFJSCxLLDZCQUdkLFdBQWtCLFdBQ2hCck4sS0FBSzhMLGNBQWM5TCxLQUFLZ0wsS0FBS2xCLE1BQU0rQixNQUFLLFdBQ3RDLEVBQUtiLEtBQUtsQixLQUFPLEtBQ2pCLEVBQUttQixPQUFPLEVBQUtELEtBQUtsQixXLGtCQUkxQixXQUNFOUosS0FBS3lOLGNBQ0wsSUFBTXZILEVBQVNsQyxTQUFTQyxjQUFjLGNBQ2hDeUosRUFBbUIxSixTQUFTQyxjQUFjLHFCQUMxQzBKLEVBQWMzSixTQUFTQyxjQUFjLGdCQUNyQzJKLEVBQWM1SixTQUFTQyxjQUFjLGdCQUNyQzRKLEVBQVk3SixTQUFTQyxjQUFjLGNBQ25DNkosRUFBa0I5SixTQUFTQyxjQUFjLG9CQUN6QzhKLEVBQWlCL0osU0FBU0MsY0FBYyxtQkFDeEMrSixFQUFtQmhLLFNBQVNDLGNBQWMscUJBQzFDZ0ssRUFBV2pLLFNBQVNDLGNBQWMsYUFDeEN5SixFQUFpQlEsaUJBQ2YsUUFDQWxPLEtBQUttTyx3QkFBd0J6RyxLQUFLMUgsT0FFcENrRyxFQUFPZ0ksaUJBQWlCLFFBQVNsTyxLQUFLb08saUJBQWlCMUcsS0FBSzFILE9BQzVEMk4sRUFBWU8saUJBQWlCLFFBQVNsTyxLQUFLcU8sbUJBQW1CM0csS0FBSzFILE9BQ25FNk4sRUFBVUssaUJBQWlCLFFBQVNsTyxLQUFLc08saUJBQWlCNUcsS0FBSzFILE9BQy9ENE4sRUFBWU0saUJBQWlCLFFBQVNsTyxLQUFLdU8sbUJBQW1CN0csS0FBSzFILE9BQ25FOE4sRUFBZ0JJLGlCQUNkLFFBQ0FsTyxLQUFLd08sdUJBQXVCOUcsS0FBSzFILE9BRW5DK04sRUFBZUcsaUJBQ2IsUUFDQWxPLEtBQUt5TyxzQkFBc0IvRyxLQUFLMUgsT0FFbENnTyxFQUFpQkUsaUJBQ2YsUUFDQWxPLEtBQUswTyx3QkFBd0JoSCxLQUFLMUgsT0FFcENpTyxFQUFTQyxpQkFBaUIsUUFBU2xPLEtBQUsyTyxnQkFBZ0JqSCxLQUFLMUgsWSx1QkMvT3BELFdBQ1gsSUFBTTRPLEVBQVMsSUFBSUMsR0NSTixTQUE4QjdELEdBQzNDQSxFQUFLOUUsT0FBTyxJQUNaOEUsRUFBSzlFLE9BQU8sR0FDWjhFLEVBQUs5RSxPQUFPLEdBQ1o4RSxFQUFLOUUsT0FBTyxHQUNaOEUsRUFBSzlFLE9BQU8sR0FDWjhFLEVBQUs5RSxPQUFPLEdBQ1o4RSxFQUFLOUUsT0FBTyxHQUNaOEUsRUFBSzlFLE9BQU8sSUFDWjhFLEVBQUs5RSxPQUFPLElBQ1pxSCxRQUFRQyxJQUFJeEMsRUFBSzlFLE9BQU8sS0FDeEI4RSxFQUFLOUUsT0FBTyxJQUNaOEUsRUFBSzlFLE9BQU8sSUFDWjhFLEVBQUs5RSxPQUFPLElBQ1o4RSxFQUFLOUUsT0FBTyxJQUNaOEUsRUFBSzlFLE9BQU8sSUFDWnFILFFBQVFDLElBQUksbUJBQ1pELFFBQVFDLElBQUl4QyxFQUFLRixtQkFDakJ5QyxRQUFRQyxJQUFJLG9CQUNaRCxRQUFRQyxJQUFJeEMsRUFBS0Qsb0JBQ2pCd0MsUUFBUUMsSUFBSSxxQkFDWkQsUUFBUUMsSUFBSXhDLEVBQUtOLHFCQUNqQjZDLFFBQVFDLElBQUksTUFBT3hDLEVBQUtSLE9BQ3hCK0MsUUFBUUMsSUFBSSxNQUFPeEMsRUFBS29DLE9BQ3hCRyxRQUFRQyxJQUFJeEMsRUFBS2QsT0FBTyxLRGZ4QjRFLENBQXFCRixHQUNyQnJCLFFBQVFDLElBQUksV0FBWW9CLEdBQ3hCLElBQU1HLEVBQVEsSUFBSUMsRUFBbUJKLEVBQVEsS0FBTSxTQUNuREcsRUFBTUUsT0FDTkYsRUFBTTlELFNBR1JpRSxHIiwiZmlsZSI6ImpzX2JpbmFyeV9zZWFyY2hfdHJlZS9qc19iaW5hcnlfc2VhcmNoX3RyZWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWFuaW1hdGlvbi10aW1pbmc6IDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub2RlX19lbGVtZW50LS1oaWdobGlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBub2RlSGlnaGxpZ2h0IHZhcigtLWFuaW1hdGlvbi10aW1pbmcpIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbm9kZUhpZ2hsaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDI0NSwgMjU1KTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTE3LCAyNDYpO1xcclxcbiAgICBjb2xvcjogIzIxMjUyOTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb2plY3RzL2pzX2JpbmFyeV9zZWFyY2hfdHJlZS9qc19iaW5hcnlfc2VhcmNoX3RyZWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7RUFDYjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWFuaW1hdGlvbi10aW1pbmc6IDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub2RlX19lbGVtZW50LS1oaWdobGlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBub2RlSGlnaGxpZ2h0IHZhcigtLWFuaW1hdGlvbi10aW1pbmcpIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbm9kZUhpZ2hsaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIDI1JSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDI0NSwgMjU1KTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTE3LCAyNDYpO1xcclxcbiAgICBjb2xvcjogIzIxMjUyOTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IG1haW4sXFxyXFxuYm9keSA+IC5tYWluIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3gge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogNHB4IDgwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbS5wZWVraW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uOjpiZWZvcmUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi5pY29uLWFycm93LXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb250ZW50OiAnXFxcXGYwNjEnO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi5pY29uLWFycm93LWxlZnQ6OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZjA2MCc7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IG1haW4sXFxyXFxuYm9keSA+IC5tYWluIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3gge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogNHB4IDgwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbS5wZWVraW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uOjpiZWZvcmUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi5pY29uLWFycm93LXJpZ2h0OjpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb250ZW50OiAnXFxcXGYwNjEnO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi5pY29uLWFycm93LWxlZnQ6OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZjA2MCc7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50cmVlIHtcXHJcXG4gIC0tZGFyazogIzMzMztcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlOm5vdCgubm9kZS0tcm9vdCkgPiAubm9kZV9fZWxlbWVudDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogLTIwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlLm5vZGUtLWxlZnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZS5ub2RlLS1yaWdodCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI0Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgbWluLXdpZHRoOiA2MHB4O1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2JvdHRvbS1saW5lIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fZWxlbWVudCxcXHJcXG4udHJlZSAubm9kZV9fZWxlbWVudDo6YmVmb3JlLFxcclxcbi50cmVlIC5ub2RlX19jaGlsZHJlbixcXHJcXG4udHJlZSAubm9kZV9fYm90dG9tLWxpbmUge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2NoaWxkcmVuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZGNkYztcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIgfiAubm9kZV9fY2hpbGRyZW4gLm5vZGVfX2VsZW1lbnQ6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50OmhvdmVyIH4gLm5vZGVfX2JvdHRvbS1saW5lLFxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50OmhvdmVyIH4gLm5vZGVfX2NoaWxkcmVuIC5ub2RlX19ib3R0b20tbGluZSB7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50OmhvdmVyIH4gLm5vZGVfX2NoaWxkcmVuLFxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50OmhvdmVyIH4gLm5vZGVfX2NoaWxkcmVuIC5ub2RlX19jaGlsZHJlbiB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RyZWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCOztFQUV0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRyZWUge1xcclxcbiAgLS1kYXJrOiAjMzMzO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGU6bm90KC5ub2RlLS1yb290KSA+IC5ub2RlX19lbGVtZW50OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAtMjBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGUubm9kZS0tbGVmdCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlLm5vZGUtLXJpZ2h0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fZWxlbWVudCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDExNywgMjQ2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBtaW4td2lkdGg6IDYwcHg7XFxyXFxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcblxcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fYm90dG9tLWxpbmUge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XFxyXFxufVxcclxcblxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50LFxcclxcbi50cmVlIC5ub2RlX19lbGVtZW50OjpiZWZvcmUsXFxyXFxuLnRyZWUgLm5vZGVfX2NoaWxkcmVuLFxcclxcbi50cmVlIC5ub2RlX19ib3R0b20tbGluZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fY2hpbGRyZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNkY2RjO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fZWxlbWVudDpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZSAubm9kZV9fZWxlbWVudDpob3ZlciB+IC5ub2RlX19jaGlsZHJlbiAubm9kZV9fZWxlbWVudDo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIgfiAubm9kZV9fYm90dG9tLWxpbmUsXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIgfiAubm9kZV9fY2hpbGRyZW4gLm5vZGVfX2JvdHRvbS1saW5lIHtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIgfiAubm9kZV9fY2hpbGRyZW4sXFxyXFxuLnRyZWUgLm5vZGVfX2VsZW1lbnQ6aG92ZXIgfiAubm9kZV9fY2hpbGRyZW4gLm5vZGVfX2NoaWxkcmVuIHtcXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbHMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90cmVlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanNfYmluYXJ5X3NlYXJjaF90cmVlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IENPTVBBUklTT04gPSB7XHJcbiAgRVFVQUw6IDAsXHJcbiAgU01BTExFUjogLTEsXHJcbiAgR1JFQVRFUjogMSxcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb21wYXJlTnVtYmVyRm4gPSAoYSwgYikgPT4ge1xyXG4gIGlmIChOdW1iZXIoYSkgPT0gTnVtYmVyKGIpKSB7XHJcbiAgICByZXR1cm4gQ09NUEFSSVNPTi5FUVVBTDtcclxuICB9XHJcblxyXG4gIHJldHVybiBOdW1iZXIoYSkgPCBOdW1iZXIoYikgPyBDT01QQVJJU09OLlNNQUxMRVIgOiBDT01QQVJJU09OLkdSRUFURVI7XHJcbn07XHJcblxyXG5jbGFzcyBUcmVlTm9kZSB7XHJcbiAgY29uc3RydWN0b3IodmFsdWUsIHBhcmVudCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGVhZigpIHtcclxuICAgIHJldHVybiB0aGlzLmxlZnQgPT09IG51bGwgJiYgdGhpcy5yaWdodCA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBoYXNDaGlsZHJlbigpIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0xlYWY7XHJcbiAgfVxyXG59XHJcbmNsYXNzIEJpbmFyeVNlYXJjaFRyZWUge1xyXG4gIHJvb3Q7XHJcbiAgY29tcGFyZUZuO1xyXG4gIGNvbnN0cnVjdG9yKGNvbXBhcmVGbiA9IGRlZmF1bHRDb21wYXJlTnVtYmVyRm4pIHtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBhcmVGbiA9IGNvbXBhcmVGbjtcclxuICB9XHJcblxyXG4gIGluc2VydCh2YWx1ZSkge1xyXG4gICAgbGV0IG5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICBsZXQgaW5zZXJ0ZWROb2RlO1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbmV3IFRyZWVOb2RlKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vZGVJbnNlcnRlZCA9ICgoKSA9PiB7XHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IHRoaXMuY29tcGFyZUZuKHZhbHVlLCBub2RlLnZhbHVlKTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gQ09NUEFSSVNPTi5FUVVBTCkge1xyXG4gICAgICAgICAgaW5zZXJ0ZWROb2RlID0gbm9kZTtcclxuICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gQ09NUEFSSVNPTi5TTUFMTEVSKSB7XHJcbiAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluc2VydGVkTm9kZSA9IG5ldyBUcmVlTm9kZSh2YWx1ZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IGluc2VydGVkTm9kZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gQ09NUEFSSVNPTi5HUkVBVEVSKSB7XHJcbiAgICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnNlcnRlZE5vZGUgPSBuZXcgVHJlZU5vZGUodmFsdWUsIG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gaW5zZXJ0ZWROb2RlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGlmIChub2RlSW5zZXJ0ZWQpIHtcclxuICAgICAgcmV0dXJuIGluc2VydGVkTm9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZSh2YWx1ZSwgbm9kZSkge1xyXG4gICAgbm9kZSA9IG5vZGUgPyBub2RlIDogdGhpcy5zZWFyY2godmFsdWUpO1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBub2RlSXNSb290ID0gbm9kZS5wYXJlbnQgPT09IG51bGw7XHJcbiAgICBjb25zdCBoYXNCb3RoQ2hpbGRyZW4gPSBub2RlLmxlZnQgIT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbDtcclxuICAgIGNvbnN0IGlzTGVmdENoaWxkID0gIW5vZGVJc1Jvb3QgPyBub2RlLnBhcmVudC5sZWZ0ID09PSBub2RlIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKG5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIGlmIChub2RlSXNSb290KSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChpc0xlZnRDaGlsZCkge1xyXG4gICAgICAgIG5vZGUucGFyZW50LmxlZnQgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIGlmICghaGFzQm90aENoaWxkcmVuKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5sZWZ0ICE9PSBudWxsID8gbm9kZS5sZWZ0IDogbm9kZS5yaWdodDtcclxuICAgICAgaWYgKG5vZGVJc1Jvb3QpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBjaGlsZDtcclxuICAgICAgfSBlbHNlIGlmIChpc0xlZnRDaGlsZCkge1xyXG4gICAgICAgIG5vZGUucGFyZW50LmxlZnQgPSBjaGlsZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub2RlLnBhcmVudC5yaWdodCA9IGNoaWxkO1xyXG4gICAgICB9XHJcbiAgICAgIGNoaWxkLnBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtaW5SaWdodExlYWYgPSB0aGlzLm1pbihub2RlLnJpZ2h0KTtcclxuICAgIGlmIChtaW5SaWdodExlYWYucGFyZW50LmxlZnQgPT09IG1pblJpZ2h0TGVhZikge1xyXG4gICAgICBtaW5SaWdodExlYWYucGFyZW50LmxlZnQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluUmlnaHRMZWFmLnBhcmVudC5yaWdodCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbG9uZSA9IHsgLi4ubm9kZSB9O1xyXG4gICAgbm9kZS52YWx1ZSA9IG1pblJpZ2h0TGVhZi52YWx1ZTtcclxuICAgIHJldHVybiBjbG9uZTtcclxuICB9XHJcbiAgc2VhcmNoKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3N0T3JkZXJUcmF2ZXJzZSgpLmZpbmQoKG5vZGUpID0+IG5vZGUudmFsdWUgPT09IHZhbHVlKTtcclxuICB9XHJcbiAgbWluKG5vZGUgPSB0aGlzLnJvb3QpIHtcclxuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcclxuICAgIHdoaWxlIChjdXJyZW50ICE9PSBudWxsICYmIGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfVxyXG4gIG1heChub2RlID0gdGhpcy5yb290KSB7XHJcbiAgICBsZXQgY3VycmVudCA9IG5vZGU7XHJcbiAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCAmJiBjdXJyZW50LnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfVxyXG4gIGluT3JkZXJUcmF2ZXJzZShub2RlID0gdGhpcy5yb290LCB0cmF2ZXJzZWQgPSBbXSkge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRyYXZlcnNlZDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLmxlZnQpIHtcclxuICAgICAgdHJhdmVyc2VkLnB1c2goLi4udGhpcy5pbk9yZGVyVHJhdmVyc2Uobm9kZS5sZWZ0KSk7XHJcbiAgICB9XHJcbiAgICB0cmF2ZXJzZWQucHVzaChub2RlKTtcclxuICAgIGlmIChub2RlLnJpZ2h0KSB7XHJcbiAgICAgIHRyYXZlcnNlZC5wdXNoKC4uLnRoaXMuaW5PcmRlclRyYXZlcnNlKG5vZGUucmlnaHQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmF2ZXJzZWQ7XHJcbiAgfVxyXG4gIHByZU9yZGVyVHJhdmVyc2Uobm9kZSA9IHRoaXMucm9vdCwgdHJhdmVyc2VkID0gW10pIHtcclxuICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cmF2ZXJzZWQ7XHJcbiAgICB9XHJcbiAgICB0cmF2ZXJzZWQucHVzaChub2RlKTtcclxuICAgIGlmIChub2RlLmxlZnQpIHtcclxuICAgICAgdHJhdmVyc2VkLnB1c2goLi4udGhpcy5wcmVPcmRlclRyYXZlcnNlKG5vZGUubGVmdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQpIHtcclxuICAgICAgdHJhdmVyc2VkLnB1c2goLi4udGhpcy5wcmVPcmRlclRyYXZlcnNlKG5vZGUucmlnaHQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmF2ZXJzZWQ7XHJcbiAgfVxyXG4gIHBvc3RPcmRlclRyYXZlcnNlKG5vZGUgPSB0aGlzLnJvb3QsIHRyYXZlcnNlZCA9IFtdKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJhdmVyc2VkO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUubGVmdCkge1xyXG4gICAgICB0cmF2ZXJzZWQucHVzaCguLi50aGlzLnBvc3RPcmRlclRyYXZlcnNlKG5vZGUubGVmdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUucmlnaHQpIHtcclxuICAgICAgdHJhdmVyc2VkLnB1c2goLi4udGhpcy5wb3N0T3JkZXJUcmF2ZXJzZShub2RlLnJpZ2h0KSk7XHJcbiAgICB9XHJcbiAgICB0cmF2ZXJzZWQucHVzaChub2RlKTtcclxuICAgIHJldHVybiB0cmF2ZXJzZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5hcnlTZWFyY2hUcmVlO1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdEJTVFVJQ29uZmlnID0ge1xyXG4gIEhJR0hMSUdIVF9DTEFTUzogJ25vZGVfX2VsZW1lbnQtLWhpZ2hsaWdodCcsXHJcbiAgSElHSExJR0hUX1RJTUU6IDMwMCxcclxufTtcclxuXHJcbmNsYXNzIEJpbmFyeVNlYXJjaFRyZWVVSSB7XHJcbiAgaGlnaGxpZ2h0VGltZXIgPSBudWxsO1xyXG4gIGFjdGlvbnNDb250YWluZXJTZWxlY3RvcjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRyZWUsXHJcbiAgICByZW5kZXIsXHJcbiAgICB0cmVlQ29udGFpbmVyU2VsZWN0b3IgPSAnLnRyZWUnLFxyXG4gICAgYWN0aW9uc0NvbnRhaW5lclNlbGVjdG9yID0gJy5ic3QtYWN0aW9ucy1jb250YWluZXInLFxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBISUdITElHSFRfQ0xBU1M6ICdub2RlX19lbGVtZW50LS1oaWdobGlnaHQnLFxyXG4gICAgICBISUdITElHSFRfVElNRTogMzAwLFxyXG4gICAgfVxyXG4gICkge1xyXG4gICAgdGhpcy50cmVlQ29udGFpbmVyU2VsZWN0b3IgPSB0cmVlQ29udGFpbmVyU2VsZWN0b3I7XHJcbiAgICB0aGlzLmFjdGlvbnNDb250YWluZXJTZWxlY3RvciA9IGFjdGlvbnNDb250YWluZXJTZWxlY3RvcjtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy50cmVlID0gdHJlZTtcclxuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyIHx8IHRoaXMucmVuZGVyVHJlZTtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgICAnLS1hbmltYXRpb24tdGltaW5nJyxcclxuICAgICAgYCR7dGhpcy5jb25maWcuSElHSExJR0hUX1RJTUUgLyAxMDAwfXNgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICA8YnV0dG9uIGlkPVwiaW5zZXJ0QnRuXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj5cclxuICAgICAgICBJbnNlcnQgTm9kZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBpZD1cInJlbW92ZUVsZW1lbnRCdG5cIiBjbGFzcz1cImJ0biBidG4tZGFya1wiPlxyXG4gICAgICAgIFJlbW92ZSBOb2RlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJzZWFyY2hCdG5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGlkPVwibWluVmFsdWVCdG5cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPlxyXG4gICAgICAgIE1pbiBWYWx1ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBpZD1cIm1heFZhbHVlQnRuXCIgY2xhc3M9XCJidG4gYnRuLWRhcmtcIj5NYXggVmFsdWU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICA8YnV0dG9uIGlkPVwiaW5PcmRlclRyYXZCdG5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgIEluIE9yZGVyIFRyYXZlcnNhbFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBpZD1cInBvc3RPcmRlclRyYXZCdG5cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPlxyXG4gICAgICAgIFBvc3QgT3JkZXIgVHJhdmVyc2FsXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGlkPVwicHJlT3JkZXJUcmF2QnRuXCIgY2xhc3M9XCJidG4gYnRuLWRhcmtcIj5cclxuICAgICAgICBQcmUgT3JkZXIgVHJhdmVyc2FsXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJyZXNldEJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICBEZWxldGUgVHJlZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHRyYXZlcnNlVUlOb2Rlcyhub2Rlcykge1xyXG4gICAgbm9kZXMucmVkdWNlKChwciwgbm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcHIudGhlbigoKSA9PiB0aGlzLmhpZ2hsaWdodE5vZGUobm9kZSkpO1xyXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJlZVVJKG5vZGUpIHtcclxuICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHZhbHVlIH0gPSBub2RlO1xyXG4gICAgaWYgKCFub2RlKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub2RlX19lbGVtZW50XCIgZGF0YS1ub2RlLWlkPVwiJHt2YWx1ZX1cIj4ke3ZhbHVlfTwvZGl2PlxyXG4gICAgICAke1xyXG4gICAgICAgIGxlZnQgfHwgcmlnaHRcclxuICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZV9fYm90dG9tLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGVfX2NoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlIG5vZGUtLWxlZnRcIj5cclxuICAgICAgICAgICAgICAke2xlZnQgPyB0aGlzLmdldFRyZWVVSShsZWZ0KSA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUgbm9kZS0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAke3JpZ2h0ID8gdGhpcy5nZXRUcmVlVUkocmlnaHQpIDogJyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGBcclxuICAgICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHJlbmRlclRyZWUoXHJcbiAgICBub2RlID0gdGhpcy50cmVlLnJvb3QsXHJcbiAgICBjb250YWluZXJTZWxlY3RvciA9IHRoaXMudHJlZUNvbnRhaW5lclNlbGVjdG9yXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgcmV0dXJuICh0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5nZXRUcmVlVUkobm9kZSk7XHJcbiAgICB0cmVlQ29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0Tm9kZSh7IHZhbHVlIH0pIHtcclxuICAgIGNvbnN0IG5vZGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbm9kZS1pZD1cIiR7dmFsdWV9XCJdYCk7XHJcbiAgICBpZiAodGhpcy5oaWdobGlnaHRUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWdobGlnaHRUaW1lcik7XHJcbiAgICAgIG5vZGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuSElHSExJR0hUX0NMQVNTKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRUaW1lciA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG5vZGVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuSElHSExJR0hUX0NMQVNTKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5oaWdobGlnaHRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vZGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuSElHSExJR0hUX0NMQVNTKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRUaW1lciA9IG51bGw7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCB0aGlzLmNvbmZpZy5ISUdITElHSFRfVElNRSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRWxlbWVudEJ0bkNsaWNrKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHByb21wdCgnRW50ZXIgZWxlbWVudCB0byByZW1vdmUgZnJvbSB0aGUgdHJlZScpO1xyXG4gICAgY29uc3QgcmVtb3ZlZEVsID0gdGhpcy50cmVlLnJlbW92ZShlbGVtZW50KTtcclxuICAgIGlmIChyZW1vdmVkRWwpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHROb2RlKHJlbW92ZWRFbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy50cmVlLnJvb3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdFbGVtZW50IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5hY3Rpb25zQ29udGFpbmVyU2VsZWN0b3JcclxuICAgICk7XHJcbiAgICBhY3Rpb25zQ29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcclxuICB9XHJcblxyXG4gIG9uSW5zZXJ0QnRuQ2xpY2soKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gcHJvbXB0KCdFbnRlciBlbGVtZW50IHRvIGFkZCB0byB0cmVlJyk7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMudHJlZS5pbnNlcnQoZWxlbWVudCk7XHJcbiAgICB0aGlzLnJlbmRlcih0aGlzLnRyZWUucm9vdCk7XHJcbiAgICB0aGlzLmhpZ2hsaWdodE5vZGUobm9kZSk7XHJcbiAgfVxyXG5cclxuICBvbk1pblZhbHVlQnRuQ2xpY2soKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy50cmVlLm1pbigpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHROb2RlKG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ05vZGUgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaEJ0bkNsaWNrKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoVmFsID0gcHJvbXB0KCdFbnRlciB0aGUgbm9kZSB2YWx1ZSB0byBzZWFyY2ggaW4gdGhlIHRyZWUnKTtcclxuICAgIGNvbnN0IHNlYXJjaGVkTm9kZSA9IHRoaXMudHJlZS5zZWFyY2goc2VhcmNoVmFsKTtcclxuICAgIGlmIChzZWFyY2hlZE5vZGUpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHROb2RlKHNlYXJjaGVkTm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnTm9kZSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWF4VmFsdWVCdG5DbGljaygpIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRyZWUubWF4KCk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodE5vZGUobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnTm9kZSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUHJlT3JkZXJUcmF2QnRuQ2xpY2soKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IHRoaXMudHJlZS5wcmVPcmRlclRyYXZlcnNlKCk7XHJcbiAgICB0aGlzLnRyYXZlcnNlVUlOb2RlcyhhcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgfVxyXG5cclxuICBvbkluT3JkZXJUcmF2QnRuQ2xpY2soKSB7XHJcbiAgICBjb25zdCBhcnJheSA9IHRoaXMudHJlZS5pbk9yZGVyVHJhdmVyc2UoKTtcclxuICAgIHRoaXMudHJhdmVyc2VVSU5vZGVzKGFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG9uUG9zdE9yZGVyVHJhdkJ0bkNsaWNrKCkge1xyXG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLnRyZWUucG9zdE9yZGVyVHJhdmVyc2UoKTtcclxuICAgIHRoaXMudHJhdmVyc2VVSU5vZGVzKGFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG9uUmVzZXRCdG5DbGljaygpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0Tm9kZSh0aGlzLnRyZWUucm9vdCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJlZS5yb290ID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW5kZXIodGhpcy50cmVlLnJvb3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zZXRUZW1wbGF0ZSgpO1xyXG4gICAgY29uc3QgaW5zZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc2VydEJ0bicpO1xyXG4gICAgY29uc3QgcmVtb3ZlRWxlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVFbGVtZW50QnRuJyk7XHJcbiAgICBjb25zdCBtaW5WYWx1ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW5WYWx1ZUJ0bicpO1xyXG4gICAgY29uc3QgbWF4VmFsdWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4VmFsdWVCdG4nKTtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCdG4nKTtcclxuICAgIGNvbnN0IHByZU9yZGVyVHJhdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVPcmRlclRyYXZCdG4nKTtcclxuICAgIGNvbnN0IGluT3JkZXJUcmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luT3JkZXJUcmF2QnRuJyk7XHJcbiAgICBjb25zdCBwb3N0T3JkZXJUcmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3RPcmRlclRyYXZCdG4nKTtcclxuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0QnRuJyk7XHJcbiAgICByZW1vdmVFbGVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMub25SZW1vdmVFbGVtZW50QnRuQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIGluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25JbnNlcnRCdG5DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIG1pblZhbHVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk1pblZhbHVlQnRuQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoQnRuQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICBtYXhWYWx1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25NYXhWYWx1ZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgcHJlT3JkZXJUcmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMub25QcmVPcmRlclRyYXZCdG5DbGljay5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gICAgaW5PcmRlclRyYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy5vbkluT3JkZXJUcmF2QnRuQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIHBvc3RPcmRlclRyYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy5vblBvc3RPcmRlclRyYXZCdG5DbGljay5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUmVzZXRCdG5DbGljay5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmFyeVNlYXJjaFRyZWVVSTtcclxuIiwiaW1wb3J0ICdAc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICdAc3R5bGVzL3RyZWUuY3NzJztcclxuaW1wb3J0ICcuL2pzX2JpbmFyeV9zZWFyY2hfdHJlZS5jc3MnO1xyXG5pbXBvcnQgQmluYXJ5U2VhcmNoVHJlZSBmcm9tICcuL2pzX2JpbmFyeV9zZWFyY2hfdHJlZSc7XHJcbmltcG9ydCBCaW5hcnlTZWFyY2hUcmVlVUkgZnJvbSAnLi9ic3QtdWknO1xyXG5pbXBvcnQgY3JlYXRlU2FtcGxlVHJlZURhdGEgZnJvbSAnLi4vLi4vY29tbW9uL2NyZWF0ZS1zYW1wbGUtdHJlZS1kYXRhJztcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgbXlUcmVlID0gbmV3IEJpbmFyeVNlYXJjaFRyZWUoKTtcclxuICBjcmVhdGVTYW1wbGVUcmVlRGF0YShteVRyZWUpO1xyXG4gIGNvbnNvbGUubG9nKCd0cmVlRGF0YScsIG15VHJlZSk7XHJcbiAgY29uc3QgYnN0VUkgPSBuZXcgQmluYXJ5U2VhcmNoVHJlZVVJKG15VHJlZSwgbnVsbCwgJy50cmVlJyk7XHJcbiAgYnN0VUkuaW5pdCgpO1xyXG4gIGJzdFVJLnJlbmRlcigpO1xyXG59O1xyXG5cclxubWFpbigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTYW1wbGVUcmVlRGF0YSh0cmVlKSB7XG4gIHRyZWUuaW5zZXJ0KDExKTtcbiAgdHJlZS5pbnNlcnQoNyk7XG4gIHRyZWUuaW5zZXJ0KDUpO1xuICB0cmVlLmluc2VydCgzKTtcbiAgdHJlZS5pbnNlcnQoNik7XG4gIHRyZWUuaW5zZXJ0KDkpO1xuICB0cmVlLmluc2VydCg4KTtcbiAgdHJlZS5pbnNlcnQoMTApO1xuICB0cmVlLmluc2VydCgxNSk7XG4gIGNvbnNvbGUubG9nKHRyZWUuaW5zZXJ0KDEzKSk7XG4gIHRyZWUuaW5zZXJ0KDEyKTtcbiAgdHJlZS5pbnNlcnQoMTQpO1xuICB0cmVlLmluc2VydCgyMCk7XG4gIHRyZWUuaW5zZXJ0KDE4KTtcbiAgdHJlZS5pbnNlcnQoMjUpO1xuICBjb25zb2xlLmxvZygnaW5PcmRlclRyYXZlcnNlJyk7XG4gIGNvbnNvbGUubG9nKHRyZWUuaW5PcmRlclRyYXZlcnNlKCkpO1xuICBjb25zb2xlLmxvZygncHJlT3JkZXJUcmF2ZXJzZScpO1xuICBjb25zb2xlLmxvZyh0cmVlLnByZU9yZGVyVHJhdmVyc2UoKSk7XG4gIGNvbnNvbGUubG9nKCdwb3N0T3JkZXJUcmF2ZXJzZScpO1xuICBjb25zb2xlLmxvZyh0cmVlLnBvc3RPcmRlclRyYXZlcnNlKCkpO1xuICBjb25zb2xlLmxvZygnbWluJywgdHJlZS5taW4oKSk7XG4gIGNvbnNvbGUubG9nKCdtYXgnLCB0cmVlLm1heCgpKTtcbiAgY29uc29sZS5sb2codHJlZS5zZWFyY2goMTIpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
