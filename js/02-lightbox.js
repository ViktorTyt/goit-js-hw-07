import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const createGallery = (args) => {
  const markup = [];

  const item = [...args]
    .map(
      (arg) =>
        `<a class="gallery__item" href="${arg.original}">
        <img class= "gallery__image" 
        src = "${arg.preview}"
        alt = "${arg.description}"/>
    </a>`
    )
    .join("");

  markup.push(item);

  refs.gallery.insertAdjacentHTML("afterbegin", markup);

  let gallery = new SimpleLightbox(".gallery a", {
    fadeSpeed: 250,
    overlayOpacity: 0.7,
    captionsData: "alt",
  });

  gallery.on("show.simplelightbox", function (e) {
    // do something…
  });
};

createGallery(galleryItems);
