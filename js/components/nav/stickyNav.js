export default function stickyNav() {
    window.onscroll = function () { addSticky() };

    const navbar = document.querySelector("header");
    const navContainer = document.querySelector(".nav__container")
    const sticky = navbar.offsetTop;

    function addSticky() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
            navContainer.classList.add("sticky");

        } else {
            navbar.classList.remove("sticky");
            navContainer.classList.remove("sticky");
        };
    };
}