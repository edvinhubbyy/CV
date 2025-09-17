// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Debugging
console.log('Interactive Portfolio Loaded!');
// Add background to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('open');
    hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default anchor behavior
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
});

// Detect clicks outside the navbar and close it
document.addEventListener("click", function(event) {
    var navbar = document.getElementById("navbarNav");
    var navbarToggler = document.querySelector(".navbar-toggler");

    // Check if the clicked area is outside the navbar and the navbar-toggler button
    if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
        // Close the navbar (Bootstrap will automatically collapse it)
        if (navbar.classList.contains("show")) {
            var collapse = new bootstrap.Collapse(navbar, {
                toggle: false
            });
            collapse.hide();  // Hide the navbar
        }
    }
});

// Optional: Close navbar when the toggle button is clicked (Bootstrap does this, but extra handling can be added)
document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click event from propagating
});