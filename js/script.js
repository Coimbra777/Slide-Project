import Slidenav from "./slide.js";

const slide = new Slidenav(".slide", ".slide-wrapper");

slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
// console.log(slide);
