// задание 1

let a = 10;
alert (a);
a = 20;
alert (a);

// задание 2
let iPhoneRelease = 2007;
alert (iPhoneRelease);

// задание 3
let creatorJS = 'Mr Eich JavaScript creator';
alert (creatorJS);

// задание 4
a = 10;
b = 2;
let sum = a + b;
alert (sum);
alert (a - b);
alert (a * b);
alert (a / b);

// задание 5
let result = 2**5;
alert (result);

// задание 6
a = 9;
b = 2;
alert (a % b);

//здание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// задание 8
let age = prompt ('Сколько вам лет?')
alert (age);

// задание 9

let user =
{   name: "Natalia",
    age: 35,
    isAdmin: true
};
user['city of residence'] = null;
user.age=32;
delete user['city of residence'];

let info = prompt('Какую информацию хотите узать о пользователе?','name','age');
alert (user[info]);


//задание 10
let UserName = prompt ('Введите ваше имя');
alert (`Привет, ${UserName}!`);