let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let uniqueNumbers = numbers.filter((item, index) => numbers.indexOf(item) === index);
let finalResult = [...uniqueNumbers];

console.log(finalResult);