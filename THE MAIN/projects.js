// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding Hover Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
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
