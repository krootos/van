"use strict";
var kuHeaderState = {
    headerElem: null,
    sidenavClass: "sidenav-open",
    openSearchClass: "open-search",
    getHeaderElem: function () {
        return (
            !!kuHeaderState.headerElem ||
            ((kuHeaderState.headerElem = document.getElementById(
                "#top-main-header"
            )),
            !!kuHeaderState.headerElem)
        );
    },
};
function toggleSidenav(e) {
    var t;
    if (e)
        return (
            "open" === e &&
                (kuHeaderState.headerElem &&
                    kuHeaderState.headerElem.classList.add(
                        kuHeaderState.sidenavClass
                    ),
                kuHeaderState.headerElem &&
                    kuHeaderState.headerElem.classList.remove(
                        kuHeaderState.openSearchClass
                    )),
            void (
                "close" === e &&
                kuHeaderState.headerElem &&
                kuHeaderState.headerElem.classList.remove(
                    kuHeaderState.sidenavClass
                )
            )
        );
    kuHeaderState.headerElem &&
        kuHeaderState.headerElem.classList.toggle(kuHeaderState.sidenavClass),
        null !== (t = kuHeaderState.headerElem) &&
            void 0 !== t &&
            t.classList.contains(kuHeaderState.openSearchClass) &&
            kuHeaderState.headerElem &&
            kuHeaderState.headerElem.classList.remove(
                kuHeaderState.openSearchClass
            );
}
window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = Array.prototype.forEach),
    (function () {
        var u = document.querySelector("html"),
            m = document.querySelectorAll(".menu__item"),
            v = document.querySelectorAll(".header-dropdown-menu"),
            h = document.querySelector(".header-dropdown__bg"),
            f = document.querySelector(".header-dropdown__arrow"),
            E = document.querySelector(".header-dropdown__wrap");
        kuHeaderState.headerElem = document.querySelector(".main-header");
        var e,
            p = document.querySelector(".header-dropdown-holder");
        function t() {
            e = setTimeout(function () {
                return S();
            }, 50);
        }
        function a() {
            clearTimeout(e);
        }
        function n(e) {
            if (kuHeaderState.headerElem) {
                var t = p.getBoundingClientRect(),
                    a = e.getAttribute("data-target");
                if (a) {
                    var n = document.getElementById(a);
                    if (n) {
                        var r = n.querySelector(
                            ".header-dropdown-menu__content"
                        );
                        if (r) {
                            var o = e.getBoundingClientRect(),
                                d = r.getBoundingClientRect();
                            m.forEach(function (e) {
                                return e.classList.remove("active");
                            }),
                                e.classList.add("active"),
                                v.forEach(function (e) {
                                    return e.classList.remove("active");
                                }),
                                n.classList.add("active"),
                                (f.style.visibility = "visible"),
                                (f.style.opacity = "1");
                            var i = o.bottom < t.top ? 18 : 16;
                            (f.style.top =
                                Math.abs(t.top - o.bottom) - i + "px"),
                                (f.style.left =
                                    o.left + o.width / 2 - 10 + "px");
                            var s =
                                    o.bottom < t.top
                                        ? "0px"
                                        : Math.abs(t.top - o.bottom) + "px",
                                l = o.left - (d.width / 2 - o.width / 2),
                                c = 0 < l ? l : 1;
                            !(function (e) {
                                if (!u) return;
                                var t = u.getBoundingClientRect().width;
                                e.forEach(function (e) {
                                    (e.style.visibility = "visible"),
                                        (e.style.opacity = "1"),
                                        (e.style.top = s),
                                        (e.style.width = d.width + "px"),
                                        (e.style.height = d.height + "px"),
                                        c + d.width >= t
                                            ? (e.style.left =
                                                  t - d.width - 1 + "px")
                                            : (e.style.left = c + "px");
                                });
                            })([h, E]),
                                (n.style.opacity = "1"),
                                kuHeaderState.headerElem.classList.add(
                                    "dropdown-active"
                                );
                        } else
                            console.error(
                                "menuSubCnt is not found: " +
                                    r +
                                    ", menuSub: " +
                                    a
                            );
                    } else S();
                } else S();
            }
        }
        function S() {
            kuHeaderState.headerElem &&
                (m.forEach(function (e) {
                    return e.classList.remove("active");
                }),
                v.forEach(function (e) {
                    e.classList.remove("active"), (e.style.opacity = "0");
                }),
                (h.style.opacity = "0"),
                (h.style.visibility = "hidden"),
                (f.style.opacity = "0"),
                (f.style.visibility = "hidden"),
                (E.style.visibility = "hidden"),
                kuHeaderState.headerElem.classList.remove("dropdown-active"));
        }
        function o() {
            return (
                kuHeaderState.headerElem &&
                kuHeaderState.headerElem.classList.contains("sidenav-open")
            );
        }
        var d = [];
        m.forEach(function (e) {
            e.addEventListener(
                "mouseenter",
                function () {
                    o() || (a(), n(this));
                },
                !1
            ),
                e.addEventListener(
                    "mouseleave",
                    function () {
                        o() || t();
                    },
                    !1
                ),
                (function (t) {
                    var e = t.dataset.target;
                    if (e) {
                        var a = document.querySelector(
                            "#" + e + " .header-dropdown-menu__content"
                        );
                        if (a) {
                            var n = document.createElement("div");
                            (n.innerHTML = "<div> " + a.innerHTML + " </div>"),
                                n.classList.add("collapse"),
                                n.classList.add("sidenav-sub-menu");
                            var r = t.parentElement;
                            r &&
                                (r.appendChild(n),
                                d.push(n),
                                t.addEventListener("click", function (e) {
                                    d.forEach(function (e) {
                                        $(e).collapse("hide"),
                                            m.forEach(function (e) {
                                                e !== t &&
                                                    e.classList.remove(
                                                        "active"
                                                    );
                                            });
                                    }),
                                        o() &&
                                            (t.classList.toggle("active"),
                                            $(n).collapse("toggle"));
                                }));
                        }
                    }
                })(e);
        }),
            v.forEach(function (e) {
                e.addEventListener(
                    "mouseenter",
                    function () {
                        return a();
                    },
                    !1
                ),
                    e.addEventListener(
                        "mouseleave",
                        function () {
                            return t();
                        },
                        !1
                    );
            });
    })(),
    (function () {
        var e = document.querySelector(".logged-in-menu.dropdown");
        if (e) {
            var t = document.getElementById("header-account-balloon"),
                a = document.getElementById("header-account-dropdown-menu");
            if (t && a) {
                var n,
                    r = !1;
                [e, a].forEach(function (e) {
                    e.addEventListener(
                        "mouseenter",
                        function (e) {
                            (r = !0),
                                (function () {
                                    if (n) return clearTimeout(n), (n = null);
                                    $(t).dropdown("show");
                                })();
                        },
                        !0
                    ),
                        e.addEventListener(
                            "mouseleave",
                            function (e) {
                                (r = !1),
                                    (n = setTimeout(function () {
                                        $(t).dropdown("hide");
                                    }, 300));
                            },
                            !1
                        );
                }),
                    $(e).on("shown.bs.dropdown", function () {
                        r = !1;
                    }),
                    $(e).on("hide.bs.dropdown", function () {
                        if (r) return !1;
                        n = null;
                    });
                var o = a.querySelector(".arrow"),
                    d = a.querySelector(".dropdown-item");
                o &&
                    d &&
                    (d.addEventListener("mouseenter", function () {
                        o.classList.add("hovering");
                    }),
                    d.addEventListener("mouseleave", function () {
                        o.classList.remove("hovering");
                    }));
            }
        }
    })(),
    (function () {
        var n = "shrink",
            r = "scroll-up",
            o = "scroll-down",
            d = document.documentElement.scrollTop,
            i = document.getElementById("top-main-header");
        if (!i) return;
        setInterval(function () {
            d = document.documentElement.scrollTop;
        }, 750);
        function t() {
            var e = i.classList.contains(n),
                t = document.documentElement.scrollTop;
            60 < t || 60 < document.body.scrollTop
                ? e || i.classList.add(n)
                : e && i.classList.remove(n);
            var a = t - d;
            0 < a && (i.classList.add(o), i.classList.remove(r)),
                a < 0 && (i.classList.add(r), i.classList.remove(o)),
                0 == a && (i.classList.remove(r), i.classList.remove(o));
        }
        window.addEventListener("scroll", function (e) {
            t();
        }),
            t();
    })(),
    (function () {
        if (kuHeaderState.getHeaderElem()) {
            var e = document.getElementById("sidenav-toggle-btn");
            if (e) {
                e.addEventListener("click", function (e) {
                    toggleSidenav();
                });
                var t = kuHeaderState.headerElem.querySelector(
                    ".sidenav-overlay"
                );
                if (t) {
                    t.addEventListener("click", function () {
                        toggleSidenav();
                    });
                    var a = kuHeaderState.headerElem.dataset.sidenavBreakpoint;
                    a &&
                        !isNaN(parseInt(a)) &&
                        window.addEventListener("resize", function (e) {
                            var t;
                            window.innerWidth >= parseInt(a) &&
                                null !== (t = kuHeaderState.headerElem) &&
                                void 0 !== t &&
                                t.classList.remove(kuHeaderState.sidenavClass);
                        });
                }
            }
        }
    })(),
    (function () {
        if (kuHeaderState.getHeaderElem) {
            var e = document.getElementById("header-search-area");
            if (e) {
                var t = document.getElementById("header-search-btn"),
                    a = document.getElementById("sidenav-search-btn"),
                    n = document.getElementById("header-search-close-btn"),
                    r = document.getElementById("sidenav-search-close-btn"),
                    o = e.querySelector(".header-search-box"),
                    d = e.querySelector("input[id=header-search-input"),
                    i = document.getElementById("header-search-shield");
                o &&
                    o.addEventListener("click", function (e) {
                        e.stopPropagation();
                    }),
                    setTimeout(function () {
                        e.style.display = "block";
                    }, 100),
                    e.addEventListener("click", l, !1),
                    i && i.addEventListener("click", l, !1),
                    t && t.addEventListener("click", s),
                    a && a.addEventListener("click", s),
                    n && n.addEventListener("click", l),
                    r && r.addEventListener("click", l);
            }
        }
        function s() {
            kuHeaderState.headerElem &&
                kuHeaderState.headerElem.classList.add(
                    kuHeaderState.openSearchClass
                ),
                kuHeaderState.headerElem &&
                    kuHeaderState.headerElem.classList.remove(
                        kuHeaderState.sidenavClass
                    ),
                d &&
                    setTimeout(function () {
                        d.focus && d.focus();
                    }, 300);
        }
        function l() {
            d && (d.value = ""),
                kuHeaderState.headerElem &&
                    kuHeaderState.headerElem.classList.remove(
                        kuHeaderState.openSearchClass
                    );
        }
    })(),
    (function () {
        if (anime) {
            var e = document.querySelector(".logo-n-name");
            if (e) {
                var t = e.querySelector(".logo-lightning");
                if (t) {
                    var a = !1,
                        n = anime({
                            targets: t,
                            opacity: [
                                { value: [0, 1], duration: 100 },
                                { value: [1, 0], duration: 100, delay: 300 },
                            ],
                            left: {
                                value: ["-70%", "130%"],
                                duration: 500,
                                easing: "easeInQuad",
                            },
                            complete: function () {
                                a = !1;
                            },
                            autoplay: !1,
                        });
                    e.addEventListener("mouseenter", function () {
                        a || ((a = !0), n.restart());
                    });
                } else console.error("lightningDiv is not found");
            } else console.error("logoBanner is not found");
        }
    })();
