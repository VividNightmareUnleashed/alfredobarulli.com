// Sidebar toggle functionality
const sideNavClose = document.getElementById('side-nav-close');
const appRow = document.getElementById('appRow');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const stickyColumnWrap = document.getElementById('stickyColumnWrap');

// Desktop sidebar toggle
sideNavClose.addEventListener('click', function() {
    if (window.innerWidth > 1024) {
        document.body.classList.toggle('nav-closed');
    } else {
        // Mobile close
        stickyColumnWrap.classList.remove('open');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', function() {
    stickyColumnWrap.classList.add('open');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu if open
            if (window.innerWidth <= 1024) {
                stickyColumnWrap.classList.remove('open');
            }
        }
    });
});

// Add parallax effect to main content on scroll
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const mainContent = document.getElementById('mainContent');
    if (mainContent && window.innerWidth > 1024) {
        mainContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});