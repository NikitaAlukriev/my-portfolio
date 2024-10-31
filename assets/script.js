// Плавное появление секций при прокрутке
const sections = document.querySelectorAll('section');

function fadeInSection() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2; // Порог для срабатывания
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', fadeInSection);

// Анимация для иконок в футере при наведении
const icons = document.querySelectorAll('footer a img');
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease-in-out';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Эффект изменения цвета заголовка при наведении
const headerText = document.querySelector('.header-text h1');
headerText.addEventListener('mouseover', () => {
    headerText.style.color = '#3498db'; // Новый цвет при наведении
});
headerText.addEventListener('mouseout', () => {
    headerText.style.color = '#333'; // Возврат к исходному цвету
});
