import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onPeventGalleryItemDefaultClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(gallery);

function onPeventGalleryItemDefaultClick(e) {
  e.preventDefault();
}
