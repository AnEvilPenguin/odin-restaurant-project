import "./styles.css";

(() => {
    const body = document.querySelector("body");
    body.classList.add("background");


    const content = document.querySelector(".content");

    const homeBtn = document.querySelector("#Home");
    const menuBtn = document.querySelector("#Menu");
    const aboutBtn = document.querySelector("#About");
    
    const clearContent = () => content.textContent = "";

    const mainMenu = () => {
        const heading = document.createElement("h1");
        heading.textContent = "Bob's Burgers";

        content.appendChild(heading);

        // TODO yum and wow stars. h2 check out our daily specials
        // TODO cartoon burger and fries stock image

        const location = document.createElement("h3");
        location.textContent = "Conveniently located on Ocean Avenue, Seymour's Bay, New Jersey";

        content.appendChild(location);

        const quote = document.createElement("p");
        quote.textContent = "Are you tired of restaurants saying, 'We have the best burgers in town'? Well, you're in luck, because I'm here to tell you that WE have the best burgers in town. Argument settled.";

        content.appendChild(quote);
        // TODO quotes from flyer: https://bobs-burgers.fandom.com/wiki/Bob%27s_Burgers_(restaurant)?file=Bobs-Burgers-Wiki_Flyer_01.jpg
    }

    homeBtn.addEventListener("click", clearContent);
    homeBtn.addEventListener("click", mainMenu);

    menuBtn.addEventListener("click", clearContent);

    aboutBtn.addEventListener("click", clearContent);

    mainMenu();
    // TODO Attach Functions to each button
    // TODO Clear any existing content
    // TODO content files
    // TODO common files
})();
