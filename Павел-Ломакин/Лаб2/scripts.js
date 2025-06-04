// Плавная прокрутка к разделам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 500); // Задержка перед началом анимации
});