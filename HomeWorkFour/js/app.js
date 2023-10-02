

function send() {
    // Ввод данных из поля ввода html input
    // let x = prompt("Введите х")
    let name = document.getElementById('nameUser').value;
    let message = document.getElementById('message').value;

    // Логика.
    // Проверка на наличие текста в полях ввода имени и сообщения. 
    if (name == '') {
        document.getElementById('error').innerText = "Введите ваше Имя!"
        return;
    } else if (message == '') {
        document.getElementById('error').innerText = "Введите ваше сообещине!"
        return;
    }
    //Вывод данных в поле в формате: Имя: сообщение 
    document.getElementById('result').innerText = `${name}: ${message}`;
    //Очистка текста ошибки, если она была ранее.
    document.getElementById('error').innerText = "";
    // Очистка поля ввода для собщения.
    document.getElementById('message').value = "";

    //document.getElementById('result').value = message;
    //alert(`${x} * 5 = ${resuls}`)

}
// Функция запрашивающая имя и воводящее его с приветсвием в всплывающих окнах.
function nameHello() {
    // Запрашивает имя, сохнаряет его в переменную.
    let name = prompt("Как ваше имя?");
    // Выводит сохранённое имя + приветсвие.
    alert(`Здравствуйте, ${name}!`);
}

