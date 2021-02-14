// dark-theme-btn , dark-theme-btn2

const btn1 = document.querySelector(".dark-theme-btn");
const body = document.querySelector("body");
const image = document.querySelector("#theme-img");

btn1.addEventListener("click", changeTheme);
// btn2.addEventListener("click", changeTheme);


function changeTheme() {
    body.classList.toggle("dark-mode");
    // mobNavt.classList.toggle("dark-mode");
    image.classList.toggle("theme-button");
    // image2.classList.toggle("theme-button");
}

