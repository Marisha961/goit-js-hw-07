const listGallery = document.querySelector('.gallery');

function createGallleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};

listGallery.insertAdjacentHTML('beforeend', createGallleryMarkup(galleryItems));

listGallery.addEventListener('click', onImgGalleryClick);

function onImgGalleryClick(event) {
    event.preventDefault();
    const imgElSelected = event.target.classList.contains('gallery__image');

    if (!imgElSelected) {
        return;
    }
    const url = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${url}">`);
    instance.show(() => window.addEventListener('keydown', onKeyPress));

    function onKeyPress(event) {
        if (event.key === 'Escape') {
            instance.close(() => window.removeEventListener('keydown', onKeyPress));
            console.log(event.key);
            return;
        }
        return;
    };

};