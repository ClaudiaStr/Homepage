let buttonElement = document.querySelector(".js-button");
let photoMotherElement = document.querySelector(".js-photoMother");
let photOptimElement = document.querySelector(".js-photOptim");
let buttonThemElement = document.querySelector(".js-buttonThem");
let mottoElement = document.querySelector(".js-section__paragraph");

buttonElement.addEventListener("click", () => {
    photoMotherElement.classList.toggle("main__image--hidden");
    photOptimElement.classList.toggle("main__image--hidden");
});

buttonThemElement.addEventListener("click", () => {
    mottoElement.classList.toggle("section__paragraph--hidden");
    button2Element.innerText = mottoElement.classList.contains("section__paragraph--hidden") ? "POZNAJ MOJE MOTTO" : "SCHOWAJ MOJE MOTTO";
});
