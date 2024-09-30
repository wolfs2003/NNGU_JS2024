/*1. Вывести сумму чисел от 1 до N*/
let n = 10;
let summ = 0;
for(let i=1; i< n+1; i++){
    summ = summ + i;
}
console.log(summ);

/*2. Вывести факториал числа N*/
let f = 4;
let factorial = 1;
for(let i=1; i< f+1; i++){
    factorial = factorial * i;
}
console.log(factorial);

/*3. Вывести четные и нечетные числа от 1 до 100*/
let c = 100;
for(let i = 1; i < c + 1; i++){
    if(i%2 == 0) {
        console.log("Чётное число: " + i)
    }
    if(i%2!=0) {
        console.log("Нечётное число: " + i)
    }
}
/*4. Вывести проверку на простое число*/
let digital = 3;
let proverka = true;
for(let i = 1; i < 10; i++){
    if(digital%i == 0) {
        if(i != 1 && i !=digital) {
            proverka = false
        }
    }
}
if(proverka == true){
    console.log("Число " + digital + " простое! ")
}
else{
    console.log("Число " + digital + " не является простым!")
}

/*5. Вывести таблицу умножения для числа N*/
let increase = 4;
for(let i = 0; i <11; i++){
    console.log(increase + " x " + i + " = " + increase*i)
}
/*6. Вывести сумму цифр числа N*/

