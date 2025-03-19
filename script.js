const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Change after scrolling 100px
        navbar.style.backgroundColor = '#222'; // Change background color
    } else {
        navbar.style.backgroundColor = '#333'; // Reset to initial color
    }
});
