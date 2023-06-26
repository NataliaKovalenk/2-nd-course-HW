function timeOfYear() {
    let month = +prompt(`Введите номер месяца`);

    if (month === 12 || month === 1 || month === 2) {
        alert(`Это Зима`);
    }
    else if
        (month === 3 || month === 4 || month === 5) {
            alert(`Это Весна`)
    }
    else if (month === 6 || month === 7 || month === 8) {
        alert(`Это Лето`);
    }
    else if (month === 9 || month === 10 || month === 11) {
        alert(`Это Осень`);
    }
    else {
        alert('Такого месяца не существует');
    }

}
