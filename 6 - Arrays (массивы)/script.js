/*
Массив - 

var название_массива = ["раз", "два"...];
var название_массива = [нулевой, первый, второй...];
var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "биохимия", "физическая"];

Вызов элемента из массива:

alert(Название_массива[1]);
alert(chemistry[1] + ' химия');

Изменение элемента массива:
Название_массива[#] = "новое значение";
chemistry[2] = "предмет";

Добавление элемента в массив:
Название_массива[#+1] = "новый элемент";

Количество элементов в массиве:
alert(название_массива.length);

Вывод массива целиком:
alert(название_массива);

В массиве может храниться что угодно в каком угодно количестве:
var arr = [1, "name", {name: John}, true];

Методы:
1. Работа с концом массива.

Pop - удаляет последний элемент массива. Возвращает его (можно вызвать через alert).
Название_массива.pop();

var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "биохимия", "физическая"];
chemistry.pop(); - удаление крайнего элемента
alert(chemistry);

Push - добавление нового элемента в конец массива. Возвращает его.
Название_массива.push("Имя элемента");

var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "биохимия", "физическая"];
chemistry.push("фарм"); - добавление крайнего элемента
alert(chemistry);

2. Работа с началом массива:

Shift - удляет первый элемент. Возвращает его.
Название_массива.shift("Имя элемента");

Unshift - добавляет первый элемент массива. Возвращает его.
Название_массива.unshift("Имя элемента");

Оба метода могут работать сразу с несколькими элементами:
array.unshift("one", "two", "three"....);

Массив можно передать по ссылке:

function eat(arr) {  //объявление_функции название_фукции(переменная/массив_с_которым_работает)
	arr.pop();    //удаление последнего элемента
}

var arr = ["нам", "не", "страшен", "серый", "волк"];

alert( arr.length ); // (5) вывод количества элементов в массиве
eat(arr);   //вызов и выполнение функции
eat(arr);
alert( arr.length ); // 3, в функцию массив не скопирован, а передана ссылка

*/

//----------------------------------------------------------------------------------------------------------

// var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "био-"];
// alert(chemistry[1] + ' химия');
// alert(chemistry[0] + ' химия');
// chemistry[2] = "предмет";
// alert(chemistry[2] + ' химия');
// chemistry[6] = "физическая";
// alert(chemistry[6] + " one love"); 

// alert(chemistry.length + " элементов в массиве");

// alert(chemistry + " разновидности химии");

var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "биохимия", "физическая"];
chemistry.pop();
alert(chemistry);

var chemistry = ["коллоидная", "аналитическая", "органическая", "неорганическая", "ВМС", "биохимия", "физическая"];
chemistry.unshift("фарм");
alert(chemistry + " химия");