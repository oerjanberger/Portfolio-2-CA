export default function projectBtn() {
    const projectSection = document.querySelector("#project__section");
    const projectBtn = document.querySelector(".to__projects__btn");

    const projectRect = projectSection.getBoundingClientRect()
    projectBtn.addEventListener("click", goToSection)
    function goToSection() {
        window.scrollTo(projectRect.x, projectRect.y)
    }
}