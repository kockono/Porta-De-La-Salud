const $barra = document.querySelector(".barra");
const $navLinks = document.querySelector(".nav-links");
const $navLinks_ = document.querySelectorAll(".nav-links li");
$barra.onclick = () => {
    $navLinks.classList.toggle("nav-clicked");
    $barra.classList.toggle("barra-clicked");
    $navLinks_.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5+0.5}s`;
        }
    });
};

