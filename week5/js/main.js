import Hikes from "js/hiking-start.js";

const hikes = new Hikes("hikes");

window.addEventListener("load", () => {
    hikes.showHikeList();
})
import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});