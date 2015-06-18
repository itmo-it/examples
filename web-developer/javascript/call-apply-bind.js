"use strict";

/**
 * Способы задания контекста (this):
 * - неявный:
 *   1. через вызов метода объекта (оператор "точка")
 *   2. через вызов оператор new
 * - явный:
 *   3. через call(context, arg1, ..., argN)    => https://learn.javascript.ru/call-apply
 *   4. через apply(context, [arg1, ..., argN]) => https://learn.javascript.ru/call-apply
 *   5. привязка контекста через bind(context)  => // https://learn.javascript.ru/bind
 */

var linus = {
        firstname: 'Linus',
        lastname: 'Torvalds',
        patro: 'Benedict'
    },
    richard = {},
    mult,
    double;


function getFullName() {
    return this.firstname + ' ' + this.lastname + ' ' + this.patro;
}


function setFullName(firstname, lastname, patro) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.patro = patro;
}


/**
 * Пример №1. Вызов функции с явным указанием контекста, используя метод call
 */
console.info(
    getFullName.call(linus)
);


/**
 * Пример №2. Вызов функции с передачей аргументов и явным указанием контекста, используя метод apply
 */
setFullName.call(richard, 'Richard', 'Matthew', 'Stallman');
setFullName.apply(richard, ['Richard', 'Matthew', 'Stallman']);

console.info(
    getFullName.call(richard)
);



/**
 * Пример №3. Явно задать контект функции, используя метод bind
 *
 * Карринг (currying) или каррирование — термин функционального программирования,
 * который означает создание новой функции путём фиксирования аргументов существующей.
 */

mult = function (a, b) {
    return a * b;
};

double = mult.bind(null, 2);


console.log(
    double(2),
    double(3)
);