(() => {
  "use strict";
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  let t = !0,
    n = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    o = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    e.any() && document.documentElement.classList.add("touch"),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (e) {
        t &&
          e.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? n(e) : o(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
        function t() {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
        window.addEventListener("resize", t), t();
      }
    })();
})();
