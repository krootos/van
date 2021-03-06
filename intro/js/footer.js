"use strict";
window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = Array.prototype.forEach),
    (function () {
        var e = ".swiper-footer-icon-link-next",
            t = ".swiper-footer-icon-link-prev",
            o = new Swiper(".swiper-footer-icon-link", {
                slidesPerView: "auto",
                spaceBetween: 0,
                followFinger: !1,
                watchOverflow: !0,
                navigation: { nextEl: e, prevEl: t },
                on: {
                    init: function () {
                        setTimeout(function () {
                            a();
                        }, 300);
                    },
                    resize: a,
                },
            }),
            n = document.querySelector(e),
            i = document.querySelector(t),
            r = "swiper-wrapper-center",
            c = o.params.navigation.disabledClass,
            s = o.wrapperEl;
        function a() {
            n &&
                i &&
                (i.classList.contains(c) && n.classList.contains(c)
                    ? s.classList.add(r)
                    : s.classList.remove(r));
        }
    })(),
    document
        .querySelectorAll(".home-links .home-link.disabled")
        .forEach(function (e) {
            var t = e.parentElement;
            t && t.removeChild(e);
        }),
    (function () {
        var t = document.getElementById("footer-info-links-accordion");
        if (t) {
            var o = !1,
                n = "accordion-version",
                i = t.dataset.breakpoint,
                r = t.querySelectorAll(".link-group"),
                c = t.querySelectorAll(".collapsible-links");
            window.addEventListener("resize", function () {
                e(document.documentElement.clientWidth);
            }),
                e(document.documentElement.clientWidth);
        }
        function e(e) {
            i &&
                (e <= parseInt(i)
                    ? o ||
                      (t.classList.add(n),
                      r.forEach(function (e) {
                          e.setAttribute("type", "button"),
                              e.setAttribute("data-toggle", "collapse");
                      }),
                      c.forEach(function (e) {
                          e.classList.add("collapse"), $(e).collapse("hide");
                      }),
                      (o = !0))
                    : o &&
                      (t.classList.remove(n),
                      r.forEach(function (e) {
                          e.removeAttribute("type"),
                              e.setAttribute("data-toggle", "");
                      }),
                      c.forEach(function (e) {
                          e.classList.remove("collapse");
                      }),
                      (o = !1)));
        }
    })();
