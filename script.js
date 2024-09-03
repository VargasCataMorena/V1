function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


// Imagens para navegação
const images = ['camisinha.jpeg', 'camisinha 2.jpeg', 'camisinha 3.jpeg']; // Adicione as imagens conforme necessário
let currentIndex = 0;

function changePhoto(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('main-photo').src = images[currentIndex];
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = 'none';
}
