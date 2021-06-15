'use strict';


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropimg')) {
        let dropdowns = document.getElementsByClassName("dropdown_content");
        let i;

        for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}

let ellipseBtn = document.querySelector('.ellipse-btn')
    .addEventListener('click', function (event) {
        console.log('.ellipse-btn clicked');
    });

let faChevronLeft = document.querySelector('.fa-chevron-left')
    .addEventListener('click', function (event) {
        console.log('.fa-chevron-left clicked');
    });

let faChevronRight = document.querySelector('.fa-chevron-right')
    .addEventListener('click', function (event) {
        console.log('.fa-chevron-right clicked');
    });

let footerSocials = document.querySelector('.footer_socials')
    .addEventListener('click', function (event) {
        console.log('.footer_socials clicked');
    });

let headerButton =  document.querySelector('.header-button')
    .addEventListener('click', function (event) {
        console.log(event);
        console.log(event.currentTarget);
    });

let breadcrumbsBtn = document.querySelector('.breadcrumbs_btn')
    .addEventListener('click', function (event) {
        console.log(event);
        console.log(event.currentTarget);
    });
    
let colOverlayBtn= document.querySelector('.col_overlay_btn')
    .addEventListener('click', function (event) {
        console.log(event);
        console.log(event.currentTarget);
    });


  