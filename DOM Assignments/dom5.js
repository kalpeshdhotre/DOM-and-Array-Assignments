// get all the nodes containing below class
let list = document.querySelectorAll(".diwali-deals-product-sale-pro");

// traverse the array list - and check for the propduct name "Galaxy Z Fold4 (12GB | 256GB)" when found in for loop change its button text innertext to "check out"
for (i = 0; i <= list.length; i++) {
    // console.log(list[i].querySelector(".product-detail-text h2").innerText);
    if (list[i].querySelector(".product-detail-text h2").innerText == "Galaxy Z Fold4 (12GB | 256GB)") {
        list[i].querySelector(".diwali-deals-product-sale-btn").innerText = "Check Out";
        break;
    }
}
