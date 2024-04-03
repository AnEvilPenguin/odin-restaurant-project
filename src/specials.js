import specials from "./assets/specials.json"

export const burgerOfTheDay = (() => {
    const specialIndex = Math.floor(Math.random() * specials.length);

    return {
        price: "$5.95",
        ...specials[specialIndex]
    }
 })();
