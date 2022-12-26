//Вивести на сторінку в один рядок через кому числа від 10 до 20.
const newArray = [];
for(let i = 10;i <= 20;i++){
    newArray[i - 10] = i;
}
document.write(newArray);

//Вивести квадрати чисел від 10 до 20.
const square = [];
for(let i = 10;i <= 20;i++){
    square[i - 10] = i*i;
}

console.log(square);

//Вивести таблицю множення на 7.
const multiplication = [];
for(let i = 1;i <= 10;i++){
    multiplication[i] = i * 7;
}
multiplication.shift();
console.log(multiplication);

//Знайти суму всіх цілих чисел від 1 до 15.

let sumNumber = 0;
for(let i = 1; i <= 15;i++){
    sumNumber += i;
}
console.log(sumNumber);

//Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for(let i = 15;i <= 35;i++){
    mult = mult * i;             
};
console.log(mult);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;

for(let i = 1;i <= 500;i++){
    sum += i;
}
console.log(sum/500);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumBig = 0;
for(let i = 30;i <= 80;i++){
    if(i%2 === 0){
        sumBig += i;
    };
};
console.log(sumBig);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let arr = [];
for(let i = 100;i <= 200;i++){
    if(i%3 === 0){
        arr.push([i]);
    }
}
console.log(arr);

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let num = 100;
let sumPositive = 0;
let numPositive = [];
let sumDouble = [];
for(let i = 1;i <= 100;i++){
    if(num%i === 0){
        numPositive.push([i]);
           
        if(i%2 === 0){
            sumDouble.push([i]);
            sumPositive += i;
        } 
    }
};

console.log(numPositive);
//Визначити кількість його парних дільників.
console.log(`Кількість парних дільників => ${sumDouble.length}  
сума парних дільників => ${sumPositive}`)
//Знайти суму його парних дільників.
//

//Надрукувати повну таблицю множення від 1 до 10.

for(let i = 1;i <= 10;i++){
    for(let j = 1;j <= 10;j++){
        
        console.log(`Таблиця множення на (${i}) => ${i} * ${j} = ${i*j}`);
    }
}




