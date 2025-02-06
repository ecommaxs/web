window.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userIcon = document.querySelector('.user-icon');

    if (userIcon) {
        if (loggedInUser) {
            userIcon.href = 'user.html';
        } else {
            userIcon.href = 'form.html';
        }
    } else {
        console.error("User not found.");
    }
    if (advertise) {
        if (loggedInUser) {
            advertise.href = 'advertise.html';
        } else {
            adverise.href = 'form.html';
        }
    } else {
        console.error("User not found.");
    }
    if (product) {
        if (loggedInUser) {
            product.href = 'product.html';
        } else {
            product.href = 'form.html';
        }
    } else {
        console.error("User not found.");
    }
    if (home) {
        if (loggedInUser) {
            home.href = 'index.html';
        } else {
            home.href = 'form.html';
        }
    } else {
        console.error("User not found.");
    }
});
