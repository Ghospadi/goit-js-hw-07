import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance;
const galleryContainer = document.querySelector(".gallery");

function galleryCreator(pics) {
  return pics
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
    alt="${description}"
        />
    </a>
  </div>`
    )
    .join("");
}

const gallery = galleryCreator(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", gallery);

galleryContainer.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
  instance.show();
  closeModal();
}

function closeModal() {
  document.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
