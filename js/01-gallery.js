import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
//=====отримуємо посилання на на елементи=========
const refs = {
  gallery: document.querySelector(".gallery"),
};

//=====створюємо розмітку елементів галереї=======

const createGallery = (arr) => {
  const markup = [];
  console.log(...galleryItems);
  const item = [...arr]
    .map(
      (el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt=${el.description}
    />
  </a>
</div>`
    )
    .join("");
  markup.push(item);
  //   console.log(item);
  refs.gallery.insertAdjacentHTML("afterbegin", markup);
};
console.log(createGallery(galleryItems));
// console.log(galleryItems.prewiev);
