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

    const menu = () => {

        const regularMenu = document.createElement("div");
        regularMenu.classList.add("regularMenu");

        const list = document.createElement("ul");

        const item = document.createElement("li");
        item.classList.add("menuItem");

        const name = document.createElement("p");
        name.textContent = "Regular";
        item.appendChild(name);

        const cost = document.createElement("p");
        cost.textContent = "$5.00";
        item.appendChild(cost);

        list.appendChild(item);
        regularMenu.appendChild(list);

        content.appendChild(regularMenu);

        // TODO regular menu
        // Regular - $5.00
        // Special - $5.95
        // Cheese - Add .50
        // Fries - $2.00
        // Side Salad - $2.50
        // Soft Drink - $2.00
        // Beer - $4.00

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
        special.textContent = "SHE'S A SUPER LEEK BURGER";
        special.classList.add("special");
        chalkboard.appendChild(special);

        const aside = document.createElement("p");
        aside.textContent = "(Comes with braised leeks)";
        aside.classList.add("specialAside");
        chalkboard.appendChild(aside);

        const specialCost = document.createElement("p");
        specialCost.textContent = "$5.95";
        specialCost.classList.add("specialCost");
        chalkboard.appendChild(specialCost);

        content.appendChild(chalkboard);

        // TODO burger of the day
        // Chalk board
        // Random choice from list?
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
