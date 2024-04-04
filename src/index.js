import "./styles.css";
import { burgerOfTheDay } from "./specials.js";
import { bobMessage, location, quotes, regularMenuItems, title } from "./constants.js";

(() => {
    const body = document.querySelector("body");
    body.classList.add("background");


    const content = document.querySelector(".content");

    const homeBtn = document.querySelector("#Home");
    const menuBtn = document.querySelector("#Menu");
    const aboutBtn = document.querySelector("#About");

    const clearContent = () => content.textContent = "";

    const generateTextItem = (type, text, parentItem, itemClass) => {
        const element = document.createElement(type);

        element.textContent = text;

        if (typeof itemClass === "string") {
            element.classList.add(itemClass);
        } else if (Array.isArray(itemClass)) {
            itemClass.forEach(c => element.classList.add(c));
        }

        parentItem.appendChild(element);
    }

    const generateHome = () => {
        content.classList.add("flexColumnCenter");

        generateTextItem("h1", title, content);

        // TODO yum and wow stars. h2 check out our daily specials
        // TODO cartoon burger and fries stock image

        generateTextItem("h3", location, content); 

        generateTextItem("p", bobMessage, content, "quoteMessage");

        const quotesList = document.createElement("ul");
        quotesList.classList.add("quotes");

        quotes.forEach(({attribution, relation, quote}) => {
            const quoteItem = document.createElement("li");

            generateTextItem("p", quote, quoteItem, "quote");
            generateTextItem("p", `-${attribution}, ${relation}`, quoteItem, "quoteAttribution");
            
            quotesList.appendChild(quoteItem);
        });

        content.appendChild(quotesList);

        // TODO quotes from flyer: https://bobs-burgers.fandom.com/wiki/Bob%27s_Burgers_(restaurant)?file=Bobs-Burgers-Wiki_Flyer_01.jpg
    }

    const generateMenu = () => {

        const regularMenu = document.createElement("div");
        regularMenu.classList.add("regularMenu");

        const list = document.createElement("ul");

        const generateMenuItem = (name, price) => {
            const item = document.createElement("li");
            item.classList.add("menuItem");

            generateTextItem("p", name, item);
            generateTextItem("p", price, item);

            list.appendChild(item);
        };

        regularMenuItems.forEach(i => generateMenuItem(i.name, i.price));

        regularMenu.appendChild(list);

        content.appendChild(regularMenu);


        const chalkboard = document.createElement("div");
        chalkboard.classList.add("chalkboard");

        generateTextItem("h1", "BURGER", chalkboard, "specialTitle");
        generateTextItem("h2", "OF THE DAY", chalkboard, "specialSubTitle");
        generateTextItem("p", burgerOfTheDay.name.toUpperCase(), chalkboard, "special");
        if (burgerOfTheDay.subtext) {
            generateTextItem("p", `(${burgerOfTheDay.subtext})`, chalkboard, "specialAside");
        }
        generateTextItem("p", burgerOfTheDay.price, chalkboard, "specialCost");
        
        content.appendChild(chalkboard);

        // TODO burger of the day
        // Chalk board
    }

    homeBtn.addEventListener("click", clearContent);
    homeBtn.addEventListener("click", generateHome);

    menuBtn.addEventListener("click", clearContent);
    menuBtn.addEventListener("click", generateMenu);

    aboutBtn.addEventListener("click", clearContent);

    generateHome();
    // TODO Attach Functions to each button
    // TODO Clear any existing content
    // TODO content files
    // TODO common files
    // TODO factory function to manage buttons e.g. map object, last pressed button, etc.
    // when push button remove listener and re-apply listener to previous button
})();
