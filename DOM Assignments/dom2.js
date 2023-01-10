let device = document.querySelectorAll(".as-imagegrid-item-title");

const final = [];
for (let i = 0; i < device.length; i++) {
    final[i] = device[i].firstChild.textContent.trim();
}

console.log(final);
