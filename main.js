// * #1
// *
// * Создайте переменные со значениями

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2 , 3, 4, 5];
var myObj = {
    first: 'First Name',
    last: 'Last Name' 
}

console.log ('myNum: ', myNum);
console.log ('myStr: ', myStr);
console.log ('myBool: ', myBool);
console.log ('myArr: ', myArr);
console.log ('myObj: ', myObj);

// * #2
// *
// * Отформатируйте целое число, которое хранится в переменной myNum,
// * чтобы получить результат с 2 знаками после запятой.
// * Результат сохраните в переменную decimal2.

var decimal2 = myNum.toFixed(2);

/* #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 10;
console.log(++i);
console.log(i++);
console.log(i);


var i = 10;
console.log(i++);
console.log(i);
console.log(++i);


var i = 20;
console.log(i--);
console.log(i);

var i = 20;
console.log(i--);
console.log(--i);
console.log(i);

var i = 20;
console.log(i--);
console.log(i);
console.log(--i);
console.log(i);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20;

myTest += myNum;
console.log (myTest);


myTest -= 7;
console.log (myTest);

myTest *= 6;
console.log (myTest);

myTest /= 8;
console.log (myTest);

myTest %= 2;
console.log (myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

var myPi = Math.PI;
console.log('Число Пи myPi:', myPi );


// округленное значение числа 89.279 → myRound

var myRound = Math.round(89.279);
console.log('Округление myRound:', myRound);

// случайное число между 0..10 → myRandom
var myRandom = Math.random()*10;
console.log('Рандом myRundom:', myRandom);

// 3 в 5 степени → myPow
var myPow = Math.pow(3,5);
console.log('Степень myPow:', myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

var strObj = {
    str: 'Мама мыла раму, рама мыла маму'
};

strObj.length = strObj.str.length;
console.log('Работа с длиной strObj = ', strObj);


/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);


/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace (
    'Мама мыла раму, рама мыла маму',
    'Мама моет раму, Рама держит маму'
);

console.log('Замена strReplace:', strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

var myUpperCase = strObj.str.toUpperCase();
console.log('верхний регистр:', myUpperCase);
console.log('нижний регситр'.toLowerCase());