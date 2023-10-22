import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

console.log(SimpleLightbox);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img
           class="gallery__image"
           src="${preview}"
           alt="${description}"
        />
    </a>
</li>`;
    })
    .join("");
}

galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
