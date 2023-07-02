// //1
// let str = 'Радуга';
// str = str.toUpperCase();
// console.log(str);

// //2
// function searchStart(arr, str) { 
//     let result = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
//         return result;
//     }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));



// //3
// let x = 3.58884
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));

// //4

// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// //5
// function getRandom(min,max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//     console.log(getRandom(1, 10));

// //6
// function getRandomNumbers(Num) {
//     let arr = []
//     for (let j = 0; j < (Num / 2); j++) {
//         arr[j] = Math.round(Math.random() * (Num));
//         }
//    return arr
// }
// console.log(getRandomNumbers (10));

// //7
// function randomNumbers(a,b) {
//     let res = Math.round(Math.random() * (b - a) + a);
//     return res
// }
// console.log(randomNumbers(100,500));

// //8
// let MyDate = new Date();
// console.log(MyDate);

// let myDate1 = new Date(27/02/2024); 
// console.log(myDate1);

//9

let currentDate = +new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate + days73;
let DateAfter73 = new Date (searchDate);
console.log(DateAfter73);

let currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate () + 73);
console.log(currentDate1);

//10

let dateRus = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let fullDate = "Дата: " + dateRus.getDate() + " " + months[dateRus.getMonth()] + " " + dateRus.getFullYear() + "- это " + days[dateRus.getDay()] + '. Время: ' + dateRus.getHours() + ':'+ dateRus.getMinutes() + ':'+dateRus.getSeconds() + '.'; 

console.log(fullDate);
