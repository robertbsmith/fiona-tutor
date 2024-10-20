document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
                bsCollapse.hide();
            }
        });
    });
});