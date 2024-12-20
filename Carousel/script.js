const images = [
    {
        src: 'https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Image+1',
        title: 'Image 1'
    },
    {
        src: 'https://via.placeholder.com/400x300/33FF57/FFFFFF?text=Image+2',
        title: 'Image 2'
    },
    {
        src: 'https://via.placeholder.com/400x300/3357FF/FFFFFF?text=Image+3',
        title: 'Image 3'
    }
];

let currentIndex = 0;

const imageElement = document.getElementById('carousel-image');
const titleElement = document.getElementById('image-title');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Function to update the image and title
function updateCarousel() {
    imageElement.src = images[currentIndex].src;
    titleElement.innerText = images[currentIndex].title;
}

// Function to go to the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Function to go to the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Event listeners for buttons
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Initialize the carousel
updateCarousel();
