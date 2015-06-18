"use strict";

/**
 * Видеоурок от Zorax: http://www.youtube.com/watch?v=a3X9uqCoxKY&list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem&index=21
 */


var Person,
    linus,
    richard;


Person = function (firstname, lastname, patro) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.patro = patro;

    this.getFullName = function () {
        return this.firstname + ' ' + this.lastname + ' ' + this.patro;
    };
};


linus = new Person('Linus', 'Torvalds', 'Benedict');
console.info(
    linus.getFullName()
);

richard = new Person('Richard', 'Matthew', 'Stallman');
console.info(
    richard.getFullName()
);