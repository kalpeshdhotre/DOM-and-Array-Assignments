// Dell Page

document.querySelectorAll(".ps-top h3").forEach(textAlignment);
function textAlignment(item) {
    if (item.innerText == "G15 Gaming Laptop") {
        item.style.textAlign = "right";
    }
}
