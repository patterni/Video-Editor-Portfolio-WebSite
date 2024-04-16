var checkElement = document.getElementById("check");

// Функція, яка змінює текст у вибраному елементі
function changeText() {
checkElement.textContent = "Watch this";
}

// Викликаємо функцію changeText через 5 секунд після завантаження сторінки
setTimeout(changeText, 3000);

// Отримуємо посилання на елемент з ID "videoEditor"
var videoEditorElement = document.getElementById("videoEditor");

// Початкові стилі для поступового з'явлення
videoEditorElement.style.opacity = 0;
videoEditorElement.style.transition = "opacity 2s";

// Затримка перед з'явленням
setTimeout(function() {
    videoEditorElement.style.opacity = 1;
}, 1000); // Ви можете змінити цей час, якщо потрібно



function showMessage(formId) {
    var nameField = document.getElementById("name" + formId);
    var commentField = document.getElementById("comment" + formId);
    var name = nameField.value;
    var comment = commentField.value;
    alert("Comment submitted by " + name + ": " + comment);
    nameField.value = ""; // Очистка поля імені
    commentField.value = ""; // Очистка поля коментаря
    // Передаємо false, щоб призупинити відправку форми
    return false;
}


function changeImage() {
    var image = document.getElementById("profileImage");
    // Перевіряємо, яке зображення відображено в даний момент
    if (image.src.endsWith("me.jpg")) {
        // Якщо відображено зображення "me.jpg", змінюємо його на інше зображення
        image.src = "me2.jpg";
    } else {
        // Якщо відображено інше зображення, змінюємо його на зображення "me.jpg"
        image.src = "me.jpg";
    }
}
