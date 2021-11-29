$('.owl-carousel').owlCarousel({
    loop:false,
    nav:false,
    center:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:3
        },
        1200:{
            items:6
        }
    }
})

$('.owl-carousel-galeria').owlCarousel({
    loop:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1200:{
            items:2
        }
    }
})

function bloquearScroll(id) {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    window.location.href = id;
    
    document.querySelector(".owl-carousel-galeria.owl-theme-galeria").classList.add("gray");
    document.querySelector(".owl-carousel.owl-theme").classList.add("gray");
    document.querySelector(".diretor").classList.add("gray");
    document.querySelector(".trailer").classList.add("gray");
    document.querySelector(".principal").classList.add("gray");
    document.querySelector(".capa").classList.add("gray");
}

function liberarScroll() {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
    document.querySelector(".owl-carousel-galeria.owl-theme-galeria").classList.remove("gray");
    document.querySelector(".owl-carousel.owl-theme").classList.remove("gray");
    document.querySelector(".diretor").classList.remove("gray");
    document.querySelector(".trailer").classList.remove("gray");
    document.querySelector(".principal").classList.remove("gray");
    document.querySelector(".capa").classList.remove("gray");
}

document.addEventListener("keyup", function(e) {
    if(e.key === "Escape"){
        const close = document.querySelector("#close");
        close.click();
    }
})