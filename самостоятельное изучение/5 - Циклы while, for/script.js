/*
1. While - цикл выполняется до тех пор, пока условие верно.
while (i!=0) === while(i) 

while(условие){
	//код цикла;
}

Пример:

var a = 12;
while(a != 3){
	alert(a);
	a = a/2;
}

Бесконечный цикл:
while(true){
	
}

2. Do...While - цикл сначала выполняет условие, после чего проверяет
значение.

do{
	//код цикла;
}
while(условие);

Пример:

var a = 2;
do {
	alert(a);
	a = a*2;
}
while (a != 16);

3. For - цикл выполняется до какого-то значения.

for (начало; условие; шаг){
	//код цикла;
}

Пример:
for (var a = 21; a > 2; a = a/2){
	alert(a);
}
При желании можно отделять переносом на новую строку.

Убирать можно какую угодно часть:
for(;;){
	//код;
}

4. Break - прерывает цикл по достижению какого-то значения. 
Используется в бесконечных циклах, когда ответ находится где-то по середине.

var sum = 0;
while (true) {
  var value = +prompt("Введите число", ''); +prompt для того, что бы превратить значение в number
  if (!value) break;
  sum += value;
}
alert( 'Сумма: ' + sum );

Пример:
var a = 0;
while(true){
	var b = +prompt("How old r the repository owner?", "");
	if (b == 21) break;
	a += b; a тут чисто для наглядности.
	}
alert("Yeap, my age is " + b + " years old");

5. Continue - отбрасывает те значения, которые нам не нужны. 
Идет перебор цифр от 1 до 10, с потмощью continue мы можем отбросить все чётные.
for (var i = 1; i < 10; i++) {
  if (i % 2 == 0) continue; Если остаток от деления i на 2 равен 0, то число 
чётное и начинается следующая итерация цикла. Если условие не соблюдается, то выполнение 
переходит на следующую строку кода.
  alert(i);
}

6. Метки - выделяют какой-то цикл для просто ты взаимодействия.
Имя_метки:
//код;

Пример:

outer: for (var i = 0; i < 3; i++) {

  for (var j = 0; j < 3; j++) {

    var input = prompt('Значение в координатах '+i+','+j, '');

    // если отмена ввода или пустая строка -
    // завершить оба цикла
    if (!input) break outer; // (*)

  }
}
alert('Готово!');

*/

// ------------------------------------------------------------------------------

// var a = 12;
// while(a != /*нельзя ставить равенство*/ ==  3){
// 	alert(a);
// 	a = a/2;
// }

// var a = 2;
// do {
// 	alert(a);
// 	a = a*2;
// }
// while (a != 16);

// for (var a = 21;
// 	a > 2;
// 	a = a/2){
// 	alert(a);
// }

// while(true){
// 	var b = +prompt("How old r the repository owner?", "");
// 	if (b == 21) break;
// 	}
// alert("Yeap, my age is " + b + " years old");

for (var i = 1; i = 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}