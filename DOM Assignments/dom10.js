let targetBtn = document.querySelector(".btn-cta-big .login-btn-text")

targetBtn.addEventListener("mouseover", function changeToRed(){
    targetBtn.style.backgroundColor="red";
})

targetBtn.addEventListener("mouseout", function changeToRed(){
    targetBtn.style.backgroundColor="initial";
})
