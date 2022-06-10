import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function galleryCreator(pics) {
  return pics
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const gallery = galleryCreator(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", gallery);

galleryContainer.addEventListener("click", (e) => e.preventDefault());

var lightbox = new SimpleLightbox(".gallery a");
lightbox.options.captionsData = "alt";
lightbox.options.captionType = "attr";
lightbox.options.captionDelay = 250;
