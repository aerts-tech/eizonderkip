(function () {
  "use strict";
  var nl = document.getElementById("lang-nl");
  var en = document.getElementById("lang-en");

  function setLang(lang) {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    nl.setAttribute("aria-pressed", String(lang === "nl"));
    en.setAttribute("aria-pressed", String(lang === "en"));
    try { localStorage.setItem("pe-lang", lang); } catch (e) {}
  }

  nl.addEventListener("click", function () { setLang("nl"); });
  en.addEventListener("click", function () { setLang("en"); });
  setLang(document.body.dataset.lang === "en" ? "en" : "nl");
})();
