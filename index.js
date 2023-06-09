const Handlebars = require('handlebars');

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

// import slidesHbs from "./template.hbs";
// const markup = slidesHbs(galleryItems)
// galleryList.insertAdjacentElement("beforeend", markup)

// import "./style.css";

import slidesTemplate from "./slides-template.hbs";

import "./style.css";

const markup = galleryItems.map(item => slidesTemplate(item)).join("");
galleryList.insertAdjacentHTML("beforeend", markup);

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// import slidesHbs from "./template.hbs";
// const markup = slidesHbs(galleryItems)
// galleryList.insertAdjacentElement("beforeend", markup)

// import "./style.css";

// const galleryList = document.querySelector('.js-gallery');
// const lightbox = document.querySelector('.js-lightbox');
// const lightboxImage = document.querySelector('.lightbox__image');

// Заповнення списку елементів галереї
// const createGalleryItem = ({ preview, original, description}) =>
//   `<li class="gallery__item">
//      <a
//        class="gallery__link"
//        href="${original}"
//      >
//        <img
//          class="gallery__image"
//          src="${preview}"
//          data-source="${original}"
//          alt="${description}"
//        />
//      </a>
//    </li>`;

// const galleryMarkup = galleryItems.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ''
// );

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Обробник кліку на елементі галереї
galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  const originalImageSrc = event.target.dataset.source;
  const imageAlt = event.target.alt;

  openModal(originalImageSrc, imageAlt);
}

// Відкриття модального вікна з повнорозмірним зображенням
function openModal(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('is-open');

  // Обробник кліку на кнопці закриття модального вікна
  lightbox.addEventListener('click', onLightboxClick);
}

// Обробник кліку на модальному вікні
function onLightboxClick(event) {
  const isLightboxImageEl = event.target.classList.contains('lightbox__image');
  if (isLightboxImageEl) {
    return;
  }

  closeModal();
}

// Закриття модального вікна з повнорозмірним зображенням
function closeModal() {
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightbox.classList.remove('is-open');
}
