
import { loadImages, clearGallery, removeLastImage, reverseGallery } from './gallery.js';


window.addEventListener("DOMContentLoaded", loadImages);


document.getElementById("loadMoreButton").addEventListener("click", loadImages);
document.getElementById("clearButton").addEventListener("click", clearGallery);
document.getElementById("removeButton").addEventListener("click", removeLastImage);
document.getElementById("reverseButton").addEventListener("click", reverseGallery);