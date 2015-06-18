"use strict";

var person = {
    firstname: 'Linus',
    lastname: 'Torvalds',
    patro: 'Benedict',

    getFullName: function () {
        return this.firstname + ' ' + this.lastname + ' ' + this.patro;
    }
};


console.info(
    person.getFullName()
);