(() => {
//dropdown menu
(() => {
  const btn = document.querySelector('.js-dropdown-btn');
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector('.dropdownmenu');
  const burger = document.querySelector('.burger');
  if (btn) {
    btn.addEventListener('click', e => {
      menu.classList.toggle("open");
      burger.classList.toggle("active");
    });
  }
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("open");
    });
  }
})();

})();
