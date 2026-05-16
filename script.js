
const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modal-title");

const modalText = document.getElementById("modal-text");

const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".card button");




buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const title = button.getAttribute("data-title");

        const text = button.getAttribute("data-text");


        modalTitle.innerText = title;

        modalText.innerText = text;


        modal.style.display = "flex";

    });

});



closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});




window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});




const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


cards.forEach((card) => {

    observer.observe(card);

});




const titulo = document.querySelector("header h1");

const textoOriginal = titulo.innerText;

titulo.innerText = "";

let i = 0;


function efeitoDigitacao(){

    if(i < textoOriginal.length){

     titulo.textContent += textoOriginal.charAt(i);
        i++;

        setTimeout(efeitoDigitacao, 80);

    }

}

efeitoDigitacao();