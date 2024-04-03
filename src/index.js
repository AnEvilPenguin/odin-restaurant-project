import "./styles.css";
import { burgerOfTheDay } from "./specials.js";
import regularItems from "./assets/regular.json";

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

    const menu = () => {

        const regularMenu = document.createElement("div");
        regularMenu.classList.add("regularMenu");

        const list = document.createElement("ul");

        const generateMenuItem = (name, price) => {
            const item = document.createElement("li");
            item.classList.add("menuItem");

            const itemName = document.createElement("p");
            itemName.textContent = name;
            item.appendChild(itemName);

            const cost = document.createElement("p");
            cost.textContent = price;
            item.appendChild(cost);

            list.appendChild(item);
        };

        regularItems.forEach(i => generateMenuItem(i.name, i.price));

        regularMenu.appendChild(list);

        content.appendChild(regularMenu);


        const chalkboard = document.createElement("div");
        chalkboard.classList.add("chalkboard");

        const title = document.createElement("h1");
        title.textContent = "BURGER"
        title.classList.add("specialTitle");
        chalkboard.appendChild(title);

        const subTitle = document.createElement("h2");
        subTitle.textContent = "OF THE DAY";
        subTitle.classList.add("specialSubTitle");
        chalkboard.appendChild(subTitle);

        const special = document.createElement("p");
        special.textContent = burgerOfTheDay.name.toUpperCase();
        special.classList.add("special");
        chalkboard.appendChild(special);

        if (burgerOfTheDay.subtext) {
            const aside = document.createElement("p");
            aside.textContent = `(${burgerOfTheDay.subtext})`;
            aside.classList.add("specialAside");
            chalkboard.appendChild(aside);
        }

        const specialCost = document.createElement("p");
        specialCost.textContent = burgerOfTheDay.price;
        specialCost.classList.add("specialCost");
        chalkboard.appendChild(specialCost);

        content.appendChild(chalkboard);

        // TODO burger of the day
        // Chalk board
    }

    homeBtn.addEventListener("click", clearContent);
    homeBtn.addEventListener("click", mainMenu);

    menuBtn.addEventListener("click", clearContent);
    menuBtn.addEventListener("click", menu);

    aboutBtn.addEventListener("click", clearContent);

    mainMenu();
    // TODO Attach Functions to each button
    // TODO Clear any existing content
    // TODO content files
    // TODO common files
    // TODO factory function to manage buttons e.g. map object, last pressed button, etc.
    // when push button remove listener and re-apply listener to previous button
})();
