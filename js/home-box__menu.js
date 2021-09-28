const home = document.querySelector(".home");

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    home.style.opacity = "0";
}

function closeNav() {}

function opentwoNav() {
    document.getElementById("meNav").style.width = "100%";
    home.style.opacity = "0";
}

function openProfile() {
    document.getElementsByClassName("sidebar").style.width = "30%";
}