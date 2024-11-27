const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

// Открытие/закрытие меню при нажатии на бургер-иконку
burger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Закрытие меню при нажатии вне его области
document.addEventListener('click', function(event) {
    const isClickInside = menu.contains(event.target) || burger.contains(event.target);

    if (!isClickInside) {
        menu.classList.remove('active');
    }
});









const carousel = document.querySelector('.team-carousel');

function scrollLeft() {
    carousel.scrollBy({ left: -250, behavior: 'smooth' });
}

function scrollRight() {
    carousel.scrollBy({ left: 250, behavior: 'smooth' });
}







const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});







// Function to open the order form modal
function openOrderForm() {
    document.getElementById('orderForm').style.display = 'block';
}

// Function to close the order form modal
function closeOrderForm() {
    document.getElementById('orderForm').style.display = 'none';
}



// Function to close image modal
function closeImageModal(closeBtn) {
    closeBtn.parentElement.parentElement.remove();
}

function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
     const vopros = document.getElementById('vopros').value;

    if (!name || !phone) {
        alert('Будь ласка, заповніть усі поля');
        return false;
    }
    return true;
}

document.getElementById('orderForm').onsubmit = function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы
    if (validateForm()) {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const vopros = document.getElementById('vopros').value;

        // URL твоего веб-приложения Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyuZQN3wCxhjKxo37qWot_0230vbR-M0AqqlCYu7emkZqzPMzeluNZzGxr71pJy14De/exec';

        // Данные для отправки
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('vopros', vopros);

        // Отправляем данные на Google Apps Script
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.text())
            .then(result => {
                alert('Замовлення успішно оформлено!');
                closeOrderForm(); // Закрыть модальное окно после успешной отправки
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Не вдалося оформити замовлення. Будь ласка, спробуйте ще раз.');
            });
    }
};




