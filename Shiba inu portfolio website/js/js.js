const burger = document.querySelector(".header .nav-bar .nav-list .burger");
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header");

burger.addEventListener("click",() => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

document.addEventListener("scroll", ()=>{
    const scroll_position = window.scrollY;
    if(scroll_position >= 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.syle.backgroundColor = "transparent";
    }
});

menuItem.forEach(item=>{
    item.addEventListener("click",()=>{
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    });
});