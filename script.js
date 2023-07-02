//игра 1

function timeOfYear() {
    let month = +prompt(`Введите номер месяца`);

    if (month === 12 || month === 1 || month === 2) {
        alert(`Это Зима`);
    }
    else if
        (month === 3 || month === 4 || month === 5) {
            alert (`Это Весна`);
    }
    else if (month === 6 || month === 7 || month === 8) {
        alert (`Это Лето`);
    }
    else if (month === 9 || month === 10 || month === 11) {
        alert(`Это Осень`);
    }
    else {
        alert('такого месяца не существует');
    }

}
//игра 2

 const list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 function game2 () {
    const newList = list.sort(() => Math.random() - 0.5)
     alert (newList)

     let firstAnswer = prompt('Чему равнялся первый элемент массива?');
     let lastAnswer = prompt('Чему равнялся последний элемент массива?');
      if (firstAnswer.toLowerCase() === newList[0].toLowerCase() && lastAnswer.toLowerCase() === newList[newList.length-1].toLowerCase()) {
        alert('Поздравляю, ты угадал')
              } 
              else if (firstAnswer.toLowerCase() === newList[0].toLowerCase() || lastAnswer.toLowerCase() === newList[newList.length-1].toLowerCase()) {
                alert('Ты был близок к победе')
              } 
              else {
                alert ('Ты не угадал!')
              }
        
      }



 