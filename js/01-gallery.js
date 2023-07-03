import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const cardsMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  const currentItem = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img class="gallery__image" src="${currentItem}" alt="Image description" width="800" height="600">
`);

  instance.show();
}
