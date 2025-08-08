let name = prompt('Введите своё имя');
let age = confirm('Вам есть 18?');

switch (age) {
    case true:
        alert(`Вы приняты ${name}`)
        break;
     case false:
        alert("Вы нам не подходите");
    default:
        break;
}