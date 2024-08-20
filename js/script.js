
let btn = document.querySelector(".header_btn");
let navBar = document.querySelector(".nav_icon");
let navFa_bars = document.querySelector(".fa-bars");
let navFa_xmark = document.querySelector(".fa-xmark");
let color_img = document.querySelector(".my_img");

btn.addEventListener('click', () => {
    btn.classList.toggle("dark")
    document.body.classList.toggle("change_color")

    if(document.body.classList == "change_color") {
        color_img.style.boxShadow="0px 0px 5px 2px #ccd0cf";
    } else {
        color_img.style.boxShadow="0px 0px 5px 2px #345269";
    }
});

navBar.addEventListener("click", () => {
    navBar.classList.toggle("menu");
});

/* Modal */

let modalContato = document.querySelector(".contatos_modal");
let btnModal = document.querySelector("#btn_modal");
let contato = document.querySelector(".contatos_btn")

contato.addEventListener("click", () => {
    modalContato.style.display="flex";    
})

btnModal.addEventListener("click", () => {
    if(modalContato.style.display = "flex") {
        modalContato.style.display = "none";
    }
})


