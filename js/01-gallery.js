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
  if (e.target.firstElementChild.nodeName !== "A") {
    return;
  }

  const getModalImage =
    e.target.firstElementChild.firstElementChild.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${getModalImage}" width="800" height="600">`,
    {
      closable: true,
      onShow: (instance) => {
        window.addEventListener("keydown", handlePressEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", handlePressEsc);
      },
    }
  );

  const handlePressEsc = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
};

refs.gallery.addEventListener("click", HandleOpenModal);
