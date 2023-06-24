// задания из урока
// const user = {
//     name: 'Natalie',
//     age: 35,
//     city: 'Togliatty',

//     getInfo() {
//         return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
//     }
// }
// console.log(user.getInfo());


// function getRectangleArea() {
//     return this.width * this.height
    
// }
// function getRectanglePerimeter() {
//     return this.width * 2 + this.height * 2;
// }
// const square1 = {
//     width: 20,
//     height: 30,
//     area: getRectangleArea,
//     per: getRectanglePerimeter
// }
// const square2 = {
//     width: 4,
//     height: 8,
//     area: getRectangleArea,
//     per: getRectanglePerimeter
// }
// console.log(square1.area());
// console.log(square1.per());
// console.log(square2.area());
// console.log(square2.per());


// ДЗ 1

function min(a , b) {
    let minResult;
    if (a <= b) {
        minResult = a        
    } 
    else {minResult = b;}
    return minResult
      }    

console.log(min(5 , 2));

// 2

function evenNumber() {
    let number = +prompt (`Введите число`);
 if (number % 2 === 0) {
    console.log('Число четное');    
 } 
 else {console.log('Число нечетное');
}
}
evenNumber()

// 3

function square1(a) {
    const result = a ** 2;
    console.log(result);
}
square1(4);

function square2(b) {
    const result = b ** 2;
    return result
    }
square2(5);

// 4
 function HelloFriend() {
    const age = prompt ('Сколько вам лет?');
    if (age <= 0) {alert ('Вы ввели неправильное значение!');
        }
    else if (age > 0 && age < 13) {alert ('Привет, друг!');        
    }
    else (alert ('Добро пожаловать!'))
    }
    
HelloFriend ();

// 5

function checkNumber(a, b){

    if (isNaN(a) || isNaN(b)) {console.log('Одно или оба значения не являются числом');
    }
    else {let result =  a * b; return(result);}  
    }

    console.log(checkNumber(2, 7));
    checkNumber('fgggd',5);
    

//6

    
function cube(n) {
    if (isNaN(n)) {console.log(`Переданный параметр не является числом`);
    }
    else {let result = n ** 3; console.log (`${n} в кубе равняется ${result}`)
    } 
    }
cube ('rgg');
cube (3)      

// 7

let pi = 3.14159265358979323846;
function getArea() {
        return this.radius ** 2 * pi    
}
function getPerimeter() {
    return this.radius * 2 * pi
}
const circle1 = {
    radius: 20,
    area: getArea,
    perimeter: getPerimeter,

}
const circle2 = {
    radius: 12,
    area: getArea,
    perimeter: getPerimeter,
}
console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());




