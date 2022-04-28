import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const createGallery = (args) => {
  const markup = [];

  const item = [...args]
    .map(
      (arg) => `<div class="gallery__item">
    <a class="gallery__link" href="${arg.original}">
    <img
      class="gallery__image"
      src="${arg.preview}"
      data-source="${arg.original}"
      alt="${arg.description}"
    />
  </a>
  </div>`
    )
    .join("");

  markup.push(item);

  refs.gallery.insertAdjacentHTML("afterbegin", markup);
};
createGallery(galleryItems);

const HandleOpenModal = (e) => {
  // console.log(e.target.firstElementChild.nodeName);
  if (e.target.firstElementChild.nodeName !== "A") {
    return;
  }

  const targetModalImage = e.target.firstElementChild.href;

  const instance = basicLightbox.create(`
      <img src="${targetModalImage}" width="800" height="600">
  `);

  instance.show();

  if (e.target.firstElementChild.nodeName === "A") {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        console.log(event.code);
      }
    });
  }
};
// const HandleCloseModal = (e) => {
//   const esc = e.target;
//   console.log(esc);
// };
refs.gallery.addEventListener("click", HandleOpenModal);
