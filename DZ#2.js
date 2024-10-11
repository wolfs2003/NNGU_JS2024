/*1. Вывести сумму чисел от 1 до N*/
function summ1toN(n) {
    let summ = 0;
    for(let i=1; i<= n; i++){
        summ = summ + i;
    }
    return "Сумма чисел от 1 до "+n+ " = "+summ;
}
console.log(summ1toN(10));

/*2. Вывести факториал числа N*/
function factorial(n){
    let f = 1;
    for(let i=1; i<= n; i++){
        f *= i;
    }
    return "Факториал числа " + n + " = " + f;
}
console.log(factorial(5));

/*3. Вывести четные и нечетные числа от 1 до 100*/
//let c = 100;
function chet_nechet(max){
    let chet = "Чётные: ";
    let nechet = "Нечётные: ";
    for(let i = 1; i <= max; i++){
        if(i%2 == 0) {

            chet += i + " ";
        }

        if(i%2!=0) {
           nechet += i + " ";
        }
    }
    return chet  +"\n"+ nechet;
}
console.log(chet_nechet(100));


/*4. Вывести проверку на простое число*/
function prostoeChislo(number){
    let proverka = true;
    for(let i = 2; i < 10; i++){
        if(number%i == 0) {
            if(i != 1 && i !=number) {
                proverka = false
            }
        }
    }
    if(proverka == true){
        return "Число " + number + " простое!";
    }
    else{
        return "Число " + number + " не является простым!";
    }
}
console.log(prostoeChislo(17));

/*5. Вывести таблицу умножения для числа N*/
function tableX(increase){
    let table = "Таблица умножения для числа "+increase+":\n";
    for(let i = 0; i <11; i++){
        table += increase + " x " + i + " = " + increase*i +"\n";
    }
    return table;
}
console.log(tableX(5));
/*6. Вывести сумму цифр числа N*/
function summDigitsInNumber(number){
    let first = number;
    let chislo = 0;
    while(number > 0){
        chislo += number%10
        number = Math.floor(number/10)
    }
    return "Сумма цифр числа " + first + " равна " + chislo;
}
console.log(summDigitsInNumber(4325));

/*7. Обратное число*/
function obratnoeChislo(digit){
    let first = digit;
    let lastdigit = "";
    while(digit > 0){
        lastdigit += String(digit%10)
        digit = Math.floor(digit/10)
    }
    return "Обратное число от числа " + first + " равно " + lastdigit;
}
console.log(obratnoeChislo(1234567890));

/*8. Количество цифр в числе N*/
function howMuch(dig1) {
    let first = dig1;
    let chislo1 = 0;
    while(dig1 > 0){
        chislo1 ++
        dig1 = Math.floor(dig1/10)
    }
    return "В числе '"+first + "' " + chislo1 + " цифр.";
}
console.log(howMuch(1234567890));

/*9. Проверка палиндрома для числа N*/
function proverkaNaPolyndrom(digit1){
    let digit2 = digit1;
    let lastdigit2 = "";
    while(digit2 > 0){
        lastdigit2 += String(digit2%10)
        digit2 = Math.floor(digit2/10)
    }
    if(lastdigit2 == digit1){
        return "Число " + digit1 + " полиндром!"
    }
    else {
        return "Число " + digit1 + " не полиндром!"
    }

}
console.log(proverkaNaPolyndrom(12344321));

/*10. Сумма квадратов чисел от 1 до N*/
let num = 4;
function summKvadratov(num){
    let summ1 = 0;
    for(let i = 1; i < num + 1; i++){
    summ1 += Math.pow(i,2)
    }
    return `Cумма квадратов чисел от 1 до ${num} равна ${summ1}`;
}
console.log(summKvadratov(3));

