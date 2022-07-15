import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from 'basiclightbox';

// Change code below this line
const listEl = document.querySelector('.gallery');


const images = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`
    )
    .join(" ");
listEl.insertAdjacentHTML("beforeend", images);


console.log(galleryItems);

listEl.addEventListener('click', onImgPreviewClick);

let instance;

function onImgPreviewClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => {
                document.addEventListener("keydown", onKeyClose);

            },
            onClose: () => {
                document.removeEventListener("keydown", onKeyClose);

            },
        });
    instance.show()

    function onKeyClose(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
        console.log(e);
    }
}

