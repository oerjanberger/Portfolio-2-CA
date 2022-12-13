import stickyNav from "./stickyNav.js";
import { navAboutButton, navProjectsButton, navContactButton } from "./setScrollPosition.js";
import getScrollPosition from "./getScrollPosition.js";

export default function createNav() {
    stickyNav();

    const navContainer = document.querySelector(".nav__container");
    const hamburgerMenu = document.querySelector(".hamburger__label");
    const menuCheckbox = document.querySelector(".hamburger__menu__input");

    navContainer.innerHTML = `<ul>
                                    <li class="nav__home__btn active">Home</li>
                                    <li class="nav__about__btn">About</li>
                                    <li class="nav__projects__btn">Projects</li>
                                    <li class="nav__contact__btn">Contact</li>
                                </ul>`;


    hamburgerMenu.addEventListener("click", toggleNav);
    function toggleNav() {
        if (!menuCheckbox.checked) {
            navContainer.style.display = "block";
        } else if (menuCheckbox.checked) {
            navContainer.style.display = "none";
        };
    };

    hamburgerMenu.onkeyup = function () {
        if (!menuCheckbox.checked) {
            navContainer.style.display = "block";
        } else if (menuCheckbox.checked) {
            navContainer.style.display = "none";
        };
    }

    navAboutButton();
    navProjectsButton();
    navContactButton();
    getScrollPosition();
}