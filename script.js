let menu = document.querySelector("#menu")
let slidebar = document.querySelector(".slidebar")

menu.addEventListener("click",()=>{
    slidebar.classList.toggle("showsidebar")
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 1,
      depth: 1200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
