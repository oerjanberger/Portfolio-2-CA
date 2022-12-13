
export function navAboutButton() {
    const aboutSection = document.querySelector("#about__section");
    const navAboutBtn = document.querySelector(".nav__about__btn");

    const aboutRect = aboutSection.getBoundingClientRect();
    navAboutBtn.addEventListener("click", goToSection);
    function goToSection() {
        window.scrollTo(aboutRect.x, aboutRect.y);
    };
};

export function navProjectsButton() {
    const projectSection = document.querySelector("#project__section");
    const navProjectBtn = document.querySelector(".nav__projects__btn");

    const projectRect = projectSection.getBoundingClientRect();
    navProjectBtn.addEventListener("click", goToSection);
    function goToSection() {
        window.scrollTo(projectRect.x, projectRect.y);
    };
};

export function navContactButton() {
    const contactSection = document.querySelector("#contact__section");
    const navContactBtn = document.querySelector(".nav__contact__btn");

    const contactRect = contactSection.getBoundingClientRect();
    navContactBtn.addEventListener("click", goToSection);
    function goToSection() {
        window.scrollTo(contactRect.x, contactRect.y);
    };
};






