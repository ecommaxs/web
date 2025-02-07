window.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userIcon = document.querySelector('.user-icon');
    const advertise = document.querySelector('.advertise-icon');
    const product = document.querySelector('.product-icon');
    const home = document.querySelector('.home-icon');

    if (userIcon) {
        userIcon.href = loggedInUser ? 'user.html' : 'form.html';
    } else {
        console.error("User icon not found.");
    }

    if (advertise) {
        advertise.href = loggedInUser ? 'advertise.html' : 'form.html';
    } else {
        console.error("Advertise icon not found.");
    }

    if (product) {
        product.href = loggedInUser ? 'product.html' : 'form.html';
    } else {
        console.error("Product icon not found.");
    }

    if (home) {
        home.href = loggedInUser ? 'index.html' : 'form.html';
    } else {
        console.error("Home icon not found.");
    }
});
