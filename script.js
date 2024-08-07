// Dynamically load testimonials into the carousel
const testimonials = [
    "Amazing service! I discovered talents I never knew I had.",
    "The Gift Academy helped me refine my skills and showcase them to the world.",
    "Thanks to The Gift Academy, I am now monetizing my passion.",
];

const testimonialCarousel = document.querySelector('.testimonial-carousel');

function loadTestimonials() {
    testimonials.forEach((testimonial) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial-item');
        testimonialItem.textContent = testimonial;
        testimonialCarousel.appendChild(testimonialItem);
    });
}

loadTestimonials();

// Make the "Explore More" button scroll to the Gift Discovery section
const exploreButton = document.querySelector('.hero .cta');
const giftDiscoverySection = document.getElementById('gift-discovery');

exploreButton.addEventListener('click', () => {
    giftDiscoverySection.scrollIntoView({ behavior: 'smooth' });
});

// Responsive Navigation Menu
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});