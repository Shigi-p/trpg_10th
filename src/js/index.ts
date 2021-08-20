import Swiper, { Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";

if (!process.env.API_KEY) {
  throw new Error('API_KEY must be set.')
}

export const API_KEY = process.env.API_KEY

import getScenarios from './getscenarios';

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

getScenarios();
