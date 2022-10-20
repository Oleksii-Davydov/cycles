// Вивести на сторінку в один рядок через кому числа від 10 до 20//
//a//

let count = 0;
while (count < 20) {
    count += 1;
    console.log(count);
    document.write(count)
}
//b//
for (let count = 10; count < 21; count += 1) {
    console.log(count)

}
//Вивести квадрати чисел від 10 до 20//
for (let count = 10; count < 21; count += 1) {
    result = count * count
    console.log(result)
    document.write(result)
}


//Вивести таблицю множення на 7//
let num = 0;
let j = 7
for (let i = 1; i <= 10; i++) {
    num = i * j;
    document.write(j + "*" + i + "=" + num);
    console.log(+num)
}

//Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let count = 0; count <= 15; count += 1) {
    sum += count
}
document.write("sum(0...15) =" + sum);
console.log(sum)
//-Знайти добуток усіх цілих чисел від 15 до 35

let sum_1 = 0;
for (let count = 15; count <= 35; count += 1) {
    sum_1 += count
}
document.write("sum(15...35) =" + sum_1);
console.log(sum_1)
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500//
let sum_2 = 0;
for (let count = 0; count <= 500; count += 1) {
    sum_2 += count
    result = sum_2 / 500
}
document.write("sum((1.+.+.500)/500) =" + result);
console.log(+result)
//-Вивести суму лише парних чисел в діапазоні від 30 до 80//

let sum_3 = 0;
for (let count = 30; count <= 80; count += 1) {
    if (!(count % 2)) {
        sum_3 += count
    }
}
document.write("sum(30...80) =" + sum_3);
console.log(sum_3)
//Вивести всі числа в діапазоні від 100 до 200 кратні 3//

let sum_5 = 0;
for (let count = 100; count <= 200; count += 1) {
    if (!(count % 3)) {
        document.write( + count)
        console.log(count)
    }
}
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники


//Визначити кількість його парних дільників


//Знайти суму його парних дільників


//-Надрукувати повну таблицю множення від 1 до 10

