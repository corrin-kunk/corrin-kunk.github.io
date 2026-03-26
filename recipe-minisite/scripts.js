const navBurger = document.querySelector("#navBurger");
const menu = document.querySelector("#menu");

navBurger.addEventListener("click", function () {
    menu.classList.toggle("show");
});