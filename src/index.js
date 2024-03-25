import "./styles.css";

(() => {
    const body = document.querySelector("body");
    body.classList.add("background");


    const content = document.querySelector(".content");

    const homeBtn = document.querySelector("#Home");
    const menuBtn = document.querySelector("#Menu");
    const aboutBtn = document.querySelector("#About");

    const mainMenu = () => {
        const heading = document.createElement("h1");
        heading.textContent = "Bob's Burgers";

        content.appendChild(heading);

        const location = document.createElement("h3");
        location.textContent = "Conveniently located on Ocean Avenue, Seymour's Bay, New Jersey";

        content.appendChild(location);

        const quote = document.createElement("p");
        quote.textContent = "Are you tired of restaurants saying, 'We have the best burgers in town'? Well, you're in luck, because I'm here to tell you that WE have the best burgers in town. Argument settled.";

        content.appendChild(quote);
    }

    homeBtn.addEventListener("click", mainMenu);

    mainMenu();
    // TODO Attach Functions to each button
    // TODO Clear any existing content
    // TODO content files
    // TODO common files
})();
