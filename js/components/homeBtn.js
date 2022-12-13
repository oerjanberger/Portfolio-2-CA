export default function homeBtn() {
    const homeSection = document.querySelector("#home__section");
    const logoBtn = document.querySelector(".logo");
    const homeBtn = document.querySelector(".nav__home__btn")

    const homePosition = homeSection.getBoundingClientRect()
    logoBtn.addEventListener("click", goToSection)
    homeBtn.addEventListener("click", goToSection)
    function goToSection() {
        window.scrollTo(homePosition.x, homePosition.y)
    }
}