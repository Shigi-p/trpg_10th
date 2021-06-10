import { Swiper } from "swiper";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

console.log("Hello World!");
