console.log("Welcome to Devnicks");
// change header background

const fixedHeader = document.querySelector(".fixed-header");

window.addEventListener("scroll", changeHeader);

function changeHeader() {
    var height = window.innerHeight - 110;
    const topBtn = document.querySelector(".gtb");
    if (window.pageYOffset > height) {
        topBtn.classList.add("gtb-a");

    }
    else {
        topBtn.classList.remove("gtb-a");
    }
}

// copyright policy

const cpBtn = document.querySelector("#cp-btn");
const cpClose2 = document.querySelector(".close-pi3");
const cpSection = document.querySelector(".cp");

cpBtn.addEventListener("click" , cPolicy);

function cPolicy(){
    cpSection.classList.add("cp-a");
}

cpClose2.addEventListener("click" , cpClose);

function cpClose(){
    cpSection.classList.remove("cp-a");
}

// terms and conditions
// const tcBtn = document.querySelector("#tc-btn");
// const tcClose2 = document.querySelector(".close-pi4");
// const tcSection = document.querySelector(".tc");

// tcBtn.addEventListener("click" , termC);

// function termC(){
//     tcSection.classList.add("cp-a");
// }

// tcClose2.addEventListener("click" , tcClose);

// function tcClose(){
//     tcSection.classList.remove("cp-a");
// }



// home effects

// going up text animation

const textHolder1 = document.querySelector(".text-holder1");

setTimeout(() => {
    textHolder1.classList.add("text-holder1a");
}, 500);

// rotating text animation

const rotateText = document.querySelector("#text2");
const textHolder = document.querySelector(".text-holder");

const rotatingQuote = [];
rotatingQuote[0] = `Doubts get cleared, <br> when discussed`;
rotatingQuote[1] = "Get programming notes";
rotatingQuote[2] = "E - Textbooks";
rotatingQuote[3] = "Jobs / Internship updates";

let i = 0;

    setInterval(() => {
        i++;
        if (i == rotatingQuote.length) {
            i = 0;
        }
        rotateText.innerHTML = rotatingQuote[i];
            textHolder.classList.toggle("text-holder2");
    }, 1000);