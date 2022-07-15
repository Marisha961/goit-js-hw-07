import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector('.gallery');

const images = galleryItems
    .map(
        ({ preview, original, description }) => {
            return `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" 
            alt="${description}" />
            </a>
        </li>`}
    )
    .join(" ");
listEl.insertAdjacentHTML("beforeend", images);



let lightbox = new SimpleLightbox('.gallery__item', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

console.log(lightbox);
console.log();