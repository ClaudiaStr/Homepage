{
    
    const onChangePhotoClick = () => {
        const photoMotherElement = document.querySelector(".js-photoMother");
        const photOptimElement = document.querySelector(".js-photOptim");
        photoMotherElement.classList.toggle("main__image--hidden");
        photOptimElement.classList.toggle("main__image--hidden");
       
    };
    const init = () => {
        const buttonThemElement = document.querySelector(".js-buttonThem");
        const buttonElement = document.querySelector(".js-button");
        buttonThemElement.addEventListener("click", onChangeMottoClick); 
        buttonElement.addEventListener("click", onChangePhotoClick);   
    };

    const onChangeMottoClick = () => {
        const mottoElement = document.querySelector(".js-section__paragraph");
        mottoElement.classList.toggle("section__paragraph--hidden");
        button2Element.innerText = mottoElement.classList.contains("section__paragraph--hidden") ? "POZNAJ MOJE MOTTO" : "SCHOWAJ MOJE MOTTO";
    };
    
    init();
       
}

