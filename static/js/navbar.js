document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });

    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Close navbar collapse on link click for mobile view
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
                bsCollapse.hide();
            }
        });
    });

    // Function to remove active class from all nav links
    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Function to add active class to the current nav link
    function addActiveClass(link) {
        removeActiveClass();
        link.classList.add('active');
    }

    // Track scroll position for section links
    window.addEventListener('scroll', () => {
        let currentSection = "";

        // Loop through sections to determine the current section in view
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Add active class to the current nav link based on section
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentSection)) {
                addActiveClass(link);
            }
        });
    });

    // Check if we are on the blog page (or any non-section page)
    function checkCurrentPath() {
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');

            // If the link is for the blog and we're on the blog page, mark it as active
            if (currentPath.includes('blog') && linkPath.includes('blog')) {
                addActiveClass(link);
            }
        });
    }

    // Initial check for non-section pages like /blog
    checkCurrentPath();
});
