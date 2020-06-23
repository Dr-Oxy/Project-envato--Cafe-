const navbar = document.getElementById('nav-bar');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', toggleNavbarBg)

function toggleNavbarBg() {
    const navbar = document.getElementById('nav-bar');
    if (navbar.style.backgroundColor == '') return navbar.style.backgroundColor = '#fff';
    return navbar.style.backgroundColor = '';
}

window.onscroll = function () { toggleNavbarBgColorOnScroll() };

function toggleNavbarBgColorOnScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.navbar-toggler-icon').style.color = "#000";
        document.querySelector('.navbar-brand').style.color = "#3b201b !important";
        document.getElementById("nav-bar").style.backgroundColor = "#3b201b"
        return document.getElementById("nav-bar").className = "navbar navbar-expand-lg navbar-light shadow-lg fixed-top";
        


    } else {
        document.querySelector('.navbar-toggler-icon').style.color = "#fff";
        document.querySelector('.navbar-brand').style.color = "#fff !important";
        document.getElementById("nav-bar").style.backgroundColor = "#3b201be5"
        return document.getElementById("nav-bar").className = "navbar navbar-expand-lg navbar-light fixed-top";
    }
}