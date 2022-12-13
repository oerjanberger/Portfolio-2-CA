export default function getScrollPosition() {
    const aboutSection = document.querySelector("#about__section");
    const projectSection = document.querySelector("#project__section");
    const contactSection = document.querySelector("#contact__section");

    const aboutRect = aboutSection.getBoundingClientRect();
    const projectRect = projectSection.getBoundingClientRect();
    const contactRect = contactSection.getBoundingClientRect();


    const navHomeBtn = document.querySelector(".nav__home__btn");
    const navAboutBtn = document.querySelector(".nav__about__btn");
    const navProjectBtn = document.querySelector(".nav__projects__btn");
    const navContactBtn = document.querySelector(".nav__contact__btn");

    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        if (scrollY < aboutRect.y || scrollY === 0) {
            navHomeBtn.classList.add("active")
        } else {
            navHomeBtn.classList.remove("active")
        }

        if (scrollY >= aboutRect.y && scrollY < projectRect.y) {
            navAboutBtn.classList.add("active")
        } else {
            navAboutBtn.classList.remove("active")
        }

        if (scrollY >= projectRect.y && scrollY < contactRect.y) {
            navProjectBtn.classList.add("active")
        } else {
            navProjectBtn.classList.remove("active")
        }

        if (scrollY >= contactRect.y) {
            navContactBtn.classList.add("active")
        } else {
            navContactBtn.classList.remove("active")
        }
    });
}