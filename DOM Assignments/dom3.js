// accordion-homepage
// parent

let helpTopics = document.querySelector(".accordion-homepage");
let newFaq = document.createElement("h3");
newFaq.textContent = "My New FAQ";
helpTopics.appendChild(newFaq);


// With Clone opetion - This keeps Menu formatting intact.
let faqList = document.querySelectorAll(".accordion-homepage .parent");
let newFaq = faqList[2].cloneNode(true);
document.querySelector(".accordion-homepage").appendChild(newFaq);
faqList = document.querySelectorAll(".accordion-homepage .parent");
faqList[8].firstChild.innerText = "My Faq";
