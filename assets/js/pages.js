// En-tête, menu mobile et année du pied de page, pour les pages internes
(function () {
  var header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var panel = document.getElementById("mobilePanel");
  function setMenu(open) {
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }
  document.getElementById("burger").addEventListener("click", function () { setMenu(true); });
  document.getElementById("closeMenu").addEventListener("click", function () { setMenu(false); });
  panel.querySelectorAll("[data-close]").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
