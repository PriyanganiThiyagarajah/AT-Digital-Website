document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.getElementById('contents');

    mobileMenuButton.addEventListener('click', function () {
        navList.classList.toggle('display');
    });
});