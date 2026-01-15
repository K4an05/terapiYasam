// Custom JavaScript for Rehabilitasyon Merkezi Website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mesajınız gönderildi. Teşekkür ederiz!');
        // Here you can add AJAX call to send form data to server
        contactForm.reset();
    });
}

// Mobile menu toggle (Bootstrap handles this, but ensuring it's working)
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
}

// Future data integration placeholders
// Services data can be loaded dynamically into .service-card elements using data-service-id
// Blog data can be loaded dynamically into .blog-card elements using data-blog-id