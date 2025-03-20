"use strict";
const products = [
    {
        name: "Lader",
        price: 17.99,
        description: "Lader om toestellen op te laden",
    },
    {
        name: "Gsm-hoesje",
        price: 39.99,
        description: "Gsm-hoesje voor telefoons",
    },
    {
        name: "Playstation 5",
        price: 499.99,
        description: "Playstation 5 met 1TB SSD",
    },
];
function showProducts(products) {
    products.forEach((product) => {
        console.log(`Naam: ${product.name}`);
        console.log(`Prijs: €${product.price.toFixed(2)}`);
        console.log(`Beschrijving: ${product.description}`);
        console.log("--------------------");
    });
}
showProducts(products);
