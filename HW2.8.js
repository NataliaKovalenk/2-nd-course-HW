//1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort((x, y) => x.age - y.age));

//2
function isPositive(number) {
  if (number > 0) {
    return number;
  }
 }
function isMale(peoples) {
  if (peoples.gender === 'male')
  return peoples

}
function filter(array, rulesFunction) {
for (let i = 0; i < array.length; i++){
  return array.filter(rulesFunction);
}
 
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people1 = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(people1, isMale)); 

//3
const timer = (deadline) => {
  const interval = setInterval(() => {
    console.log(new Date());
  }, 3000);

 setTimeout(() => {
  clearInterval(interval);console.log('30 секунд прошло');
 }, deadline * 1000);
};

timer(30);

//4
function delayForSecond() {
  setTimeout(() => {
    console.log('Привет, Глеб');
      }, 1000);
  }
delayForSecond(); 

//5
function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) { cb(); }

  }, 1000)
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

setTimeout(() => sayHi('Глеб'), 2000)
delayForSecond()




