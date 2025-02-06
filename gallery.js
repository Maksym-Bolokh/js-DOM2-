
import { fetchImages } from './api.js';

const gallery = document.getElementById("gallery");
let page = 1;

export function loadImages() {
  fetchImages(page).then(images => {
    page++; 

    images.forEach(image => {
      const imgElement = document.createElement("img");
      imgElement.src = image.download_url;
      imgElement.alt = image.author;
      gallery.appendChild(imgElement);
    });
  });
}

export function clearGallery() {
  gallery.innerHTML = ""; 
  page = 1; 
}

export function removeLastImage() {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
}

export function reverseGallery() {
  const images = Array.from(gallery.children);
  gallery.innerHTML = "";
  images.reverse().forEach(img => gallery.appendChild(img));
}