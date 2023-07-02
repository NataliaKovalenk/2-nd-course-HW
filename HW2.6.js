//1

let arr = [1,5,4,10,0,3]
for (let i = 0; i < arr.length; i++) {
   if (arr [i] === 10) break;    
   console.log(arr[i]);
}

//2

let numbers = [1, 5, 4, 10, 0, 3]
   console.log(numbers.indexOf(4));

//3

let numbs = [1,3,5,10,20]
   numbs = numbs.join(' ')
   console.log(numbs);

//4

 const array = [];
   for (let index = 0; index < 3; index++) {
   array [index] = [];
   for (let j = 0; j < 3; j++) {
   array[index][j] = 1;
   }
}
   console.log(array);

//5

const ones = [1,1,1]
   ones.push (2,2,2);
   console.log(ones);

//6

let all = [9, 8, 7, 'a', 6, 5]
   all.sort();
   all.pop();
   console.log(all);

//7

const userArr = [5, 8, 9, 7, 5, 2,];
   function findNumber(userArr) {
   const answer = +prompt('Угадай число');
   return alert(userArr.includes(answer) ? `Угадал` : `Не угадал`);
}
   console.log(findNumber(userArr));

//8

let letters = 'abcdef';
   letters = letters.split('');
   letters = letters.reverse ();
   letters = letters.join ('')
   console.log(letters);

//9

const twoArr = [[1,2,3],[4,5,6]]
const newArr = [...twoArr[0],...twoArr[1]];
const mergeArr = [].concat(...twoArr);

console.log(mergeArr);

//10

let sum = [5,6,8,9,1,3]
for (let index = 0; index < sum.length-1; index++) {
   const result1 = sum[index] + (sum[index+1]);
   console.log(result1);
   }

//11

const integerNumbers = [2,8,4,6,7,5,1];
   function square(integerNumbers) {
   let s = integerNumbers.map(item => item ** 2);
   return s
}
   console.log(square(integerNumbers));

//12

const str = ['слово', '', 'слог', 'длинное предложение', 'буква']
   function getLengthWords (str) {
   return str.map(el => `${el.length}`)
}
console.log(getLengthWords(str));


//13

let ar = []
function filterPositive(ar) {
   const positiveNumbers = ar.filter(k => k < 0);
   return positiveNumbers;
}
   console.log(filterPositive([-1, 0, 5, -10, 56]));
   console.log(filterPositive([-25, 25, 0, -1000, -2]));

