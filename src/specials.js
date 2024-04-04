import { specials } from "./constants.js";

export const burgerOfTheDay = (() => {
    const specialIndex = Math.floor(Math.random() * specials.length);

    return {
        price: "$5.95",
        ...specials[specialIndex]
    }
 })();
