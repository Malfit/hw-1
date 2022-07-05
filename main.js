//1 создать переменные товаров с ценами 15.678, 123.965, 90.2345
let product1;
let product2;
let product3;
nProduct = 3;

product1 = 15.678;
product2 = 123.965;
product3 = 90.2345;

//2 посчитать минимум, максимум
let max = Math.max(product1, product2, product3);
console.log("max:", max);
let min = Math.min(product1, product2, product3);
console.log("min:", min);

//3 посчитать сумму товаров
let sum = product1 + product2 + product3;
console.log("sum:", sum);

//4 округлить сумму товаров
let roundMore = Math.ceil(sum);
console.log("округление в большую сторону:", roundMore);
let roundLess = Math.floor(sum);
console.log("округление в меньшую степень:", roundLess);
let round = Math.round(sum);
console.log("стандартное округление:", round);
let roundFixed = sum.toFixed(1);
console.log("округление до десятых:", roundFixed);

//5 проверить является сумма товаров четным или нечетным числом
let evenOdd = sum % 2 == 0;
console.log("sum четное число?", evenOdd)

//6 вычислить сдачу если у тебя есть 500 грн
let rest = 500 - sum;
console.log("сдача с 500 грн -", rest)

//7 посчитать среднюю стоимость товаров
let avg = sum / nProduct;
console.log("avg:", avg);

//8  сгенерировать случайную скидку от 0 - 100 %
let sale = Math.random()*101;
console.log("случайная скидка:", sale, "%")

//9 посчитать сумму к оплате со скидкой
let pay = sum - sum/100*sale;
console.log("цена со скидкой:", pay)

//10 посчитать сколько ты сэкономила
let econom = sum/100*sale;
console.log("экономия:", econom, "грн")
