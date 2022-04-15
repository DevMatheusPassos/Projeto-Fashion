function showMenu() {
    let menuButton = document.querySelector(".menu__button");
    let menuList = document.querySelector(".menu__list");
    menuButton.classList.toggle("menuOpen");
    menuList.classList.toggle("listOpen");
}