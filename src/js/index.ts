import Swiper, { Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Scrollbar]);

const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true,
  },
});

console.log("Hello World!");
