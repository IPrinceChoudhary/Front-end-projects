burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
searchbar = document.querySelector(".searchbar");
navlist = document.querySelector(".navlist");


burger.addEventListener("click", ()=>{
    navbar.classList.toggle("h-nav");
    searchbar.classList.toggle("v-class");
    navlist.classList.toggle("v-class");

})