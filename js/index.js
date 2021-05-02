const hamburger = document.getElementById("hamburger-icon");
const navBar = document.getElementById("nav-bar");

hamburger.addEventListener("click", () => {
    if (navBar.offsetWidth === 0) {
        navBar.style.width = "100%";
        navBar.style.height = "114px";
    }
    else {
        navBar.style.width = "0px";
        navBar.style.height = "0px";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        navBar.style.width = "100%";
        navBar.style.height = "100%"
    }else{
        navBar.style.width = "0px";
        navBar.style.height = "0px";
    }
})