const menu = document.querySelector(".menu__container__iconMenu");
const menuDropdown = document.querySelector(".menu__container__dropdown");

menu.addEventListener("click", function () {
    const classe = "menu__container__iconMenu--is-active";
    menuDropdown.classList.toggle(classe);
});
