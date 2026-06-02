document.addEventListener('DOMContentLoaded', () => {
    console.log('I2O Lab Website - JS Loaded');
    
    // Add mobile menu toggle functionality if needed
    // Highlight active link based on current page URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            // Remove active class from all first, just in case
            link.classList.remove('active');
        }
    });

    // We can also add scroll animations using IntersectionObserver later
});
