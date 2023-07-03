import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const cardsMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", cardsMarkup);
gallery.addEventListener("click", onShowImege);

function onShowImege(evt) {
  evt.preventDefault();
  const isGalleryImage = evt.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    animationSpeed: 250,
  });
});
