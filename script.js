const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
};

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    menuToggle.classList.remove("active");
    navigation.classList.remove("active");
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
