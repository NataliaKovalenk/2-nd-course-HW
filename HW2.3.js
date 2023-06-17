// // Задание 1
// let password = 'Ромашка';
// let UserInput = prompt('Введите пароль')
// if (UserInput===password) {
//     console.log('Пароль введен верно');
//     }
// else {
//     console.log('Пароль введен неправильно');
//     }

// //Задание 2

// let c = 8
// if (c >= 0 && c <= 10) {console.log ('верно');}
// else {console.log('не верно');}

// //Задание 3

// let d = 133;
// let e = 4;
// if (d > 100 || e > 100) { console.log('верно');
    
// } else { console.log('неверно');
    
// }

// //Задание 4
// let a = '2';
// let b = '3';
// alert(Number (a) + Number (b));

// Задание 5
let monthNumber = +(prompt ('Введите номер месяца в году'));
switch (monthNumber) {
    case 1:
    case 2:   
    case 12: 
        console.log('это Зима')        
    break;
    case 3:
    case 4:
    case 5:
        console.log('это Весна')
    break;
    case 6:
    case 7:
    case 8:
        console.log('это Лето')
    break;
    case 9:
    case 10:
    case 11:
        console.log('это Осень')
    break;
    
    default:
        console.log('такого не существует');
        break;
}