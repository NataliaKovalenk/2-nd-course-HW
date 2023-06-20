// // задача из урока

// while (true) {
// let Msg = prompt('Введите ваше сообщение');
// console.log(Msg);
// if (Msg === 'continue'){
//     continue;
// }
// if (Msg === 'break') {break;}

// }

// ДЗ #1

let x = 1;
while (x<=2) {console.log('Привет');x++}

//#2

let number = 1;
while (number<=5) {console.log(number);number++}

//#3

let i = 7;
while (i>=7 && i<=22) {console.log(i);i++} 

// #4

    const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400};

for(let name in obj) { console.log( `${name} - зарплата ${obj[name]} долларов.`);
}

//#5

let n = 1000;
let num = 0;
while (n/2>=50) {n = n/2; console.log(n); num++;}
console.log(num);

//#6
const month = 31;
for (let friday = 3; friday <= month; friday+=7) 
{console.log(`Сегодня пятница ${friday} число. Необходимо подготовить отчёт`);}