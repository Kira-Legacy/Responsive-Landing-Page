const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        navbar.style.backgroundColor = '#000000';
    }
    else if (window.scrollY > 1000) {
        navbar.style.backgroundColor = '#001a9f';
    }
    else if (window.scrollY > 500) {
        navbar.style.backgroundColor = '#002aff';
    }
    else {
        navbar.style.backgroundColor = '#4060fd';
    }
});
