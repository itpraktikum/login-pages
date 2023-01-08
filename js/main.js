"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // O'zgaruvchilarni kirit

    const nextBtn = document.querySelector(".btn"),
        yesAlert = document.querySelector(".yes-alert"),
        noAlert = document.querySelector(".no-alert"),
        input = document.querySelectorAll("input");

        // yes and no alert time


    // Btn bilan boshla

    nextBtn.addEventListener("click", () => {
        input.forEach((item) => {
            if(item.value == ""){
                noAlert.style.display = "flex";
                setTimeout(() => {
                    noAlert.style.display = "none";
                },4000)
            }else{
                yesAlert.style.display = "flex";
                setTimeout(() => {
                    yesAlert.style.display = "none";
                }, 4000)
            }
        })
    })
    
})