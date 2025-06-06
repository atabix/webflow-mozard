window.addEventListener("load", () => {
  const cookieBtn = document.getElementById("cookie-settings-button");

  if (cookieBtn) {
    cookieBtn.addEventListener("click", (clickEvent) => {
      const _hsp = window._hsp = window._hsp || [];
      _hsp.push(['showBanner']);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Set year for copyright
  const yearElement = document.querySelector('.copyright-year');
  if (yearElement) { yearElement.textContent = new Date().getFullYear(); }
});
