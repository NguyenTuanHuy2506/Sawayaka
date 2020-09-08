let drawer = document.querySelector('header .menu-header');
let menuBurger = document.querySelector('.menu-burger .menu');
let header = document.querySelector('header');
let backTop = document.querySelector("#backTop");
menuBurger.onclick = function () {
    menuBurger.classList.toggle('active');
    if (menuBurger.classList.contains('active')) {
        drawer.classList.add('active')
    }
    else {
        drawer.classList.remove('active')
    }
}
window.onscroll = function () {
    let height = window.pageYOffset;
    if (height > 100) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active')
    }
    if (height > window.innerHeight / 2) {
        backTop.style.visibility = "visible"
    }
    else {
        backTop.style.visibility = "hidden";
    }
}
$("#backTop").click(function (event) {
    $("html,body").animate({
        scrollTop: 0,
    },
        1000,
        "swing"
    );
    return false;
});