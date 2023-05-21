import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onGalleryItemClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}

function onGalleryItemClick(e) {
  e.preventDefault();

  const galleryItem = e.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${galleryItem}">`, {
    handler: null,
    onShow(instance) {
      this.handler = closeModal.bind(instance);
      console.log(this);
      document.addEventListener('keydown', this.handler);
    },

    onClose() {
      document.removeEventListener('keydown', this.handler);
    },
  });
  instance.show();
}

function closeModal(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}
