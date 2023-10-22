import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
        />
    </a>
</div>
        `;
    })
    .join("");
}

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryBox.addEventListener("click", onGalleryBoxClick);

function onGalleryBoxClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscClick);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscClick);
      },
    }
  );
  instance.show();

  function onEscClick(evt) {
    if (evt.key === "Escape") {
      instance.close();
      return;
    }
  }
}
