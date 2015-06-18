"use strict";

var Person,
    linus,
    richard;


Person = function (firstname, lastname, patro) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.patro = patro;
};


Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname + ' ' + this.patro;
};


linus = new Person('Linus', 'Torvalds', 'Benedict');
console.info(
    linus.getFullName()
);

richard = new Person('Richard', 'Matthew', 'Stallman');
console.info(
    richard.getFullName()
);