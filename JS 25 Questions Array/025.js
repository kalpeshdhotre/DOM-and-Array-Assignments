/* 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
 */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

let allergyOfHoney = false;

if (shoppingCart.includes("Meat") == false) {
    shoppingCart.unshift("Meat");
}

if (shoppingCart.includes("Sugar") == false) {
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);

if (allergyOfHoney == true) {
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);

if (shoppingCart.indexOf("Tea") !== -1) {
    shoppingCart[shoppingCart.indexOf("Tea")] = "GreenTea";
}

console.log(shoppingCart);
