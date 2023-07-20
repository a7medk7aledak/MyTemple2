// mask2
(function height() {
    let img = document.querySelector(".mask2 .container .graph img");
    let mask2 = document.querySelector(".mask2");
    window.onresize = function() {
        mask2.style.height = `${img.height}px`
    }
    window.onload = function() {
        mask2.style.height = `${img.height}px`
    }
})();


// event click and nav
let buttom = document.querySelector("header .nav-bar .menu");
let nav = document.getElementsByTagName("nav")[0]
let icon = document.querySelector("nav .head i")
let navBar = document.querySelector("header .nav-bar .menu")

buttom.onclick = function () {
    if (nav.classList[0]==="main-nav") {
        nav.classList.remove("main-nav");
        nav.style.right = "0"
        navBar.style.cssText = "position: none;";
    }
    else {
        nav.classList.add("main-nav");
        nav.style.right = "0"
        navBar.style.cssText = "position: absolute;right: 300px;";
    }
}
icon.onclick = function () {
    nav.classList.remove("main-nav");
    nav.style.right = "0"
    navBar.style.cssText = "position: none;";
}