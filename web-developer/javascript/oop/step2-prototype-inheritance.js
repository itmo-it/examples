"use strict";

/**
 * Видеоурок от Zorax: http://www.youtube.com/watch?v=4oudziatkLI&list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem&index=20
 */


var Person,
    Developer,
    linus,
    richard,
    gates;


Person = {
    constructor: function (firstname, lastname, patro) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.patro = patro;
        return this;
    },

    getFullName: function () {
        return this.firstname + ' ' + this.lastname + ' ' + this.patro;
    }
};


Developer = Object.create(Person);

Developer.constructor = function (firstname, lastname, patro, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};

Developer.getSkills = function () {
    return this.skills.join();
};

Developer.getFullInfo = function () {
    return 'Developer: ' + this.getFullName() + '. Skills: ' + this.getSkills();
};


gates = Object.create(Person).constructor('William', 'Henry', 'GatesIII');

console.info(
    gates.getFullName()
);


linus = Object.create(Developer).constructor('Linus', 'Torvalds', 'Benedict', ['C', 'C++', 'Linux']);

console.log(
    linus.getFullName(),
    linus.getSkills()
);


richard = Object.create(Developer).constructor('Richard', 'Matthew', 'Stallman', ['C', 'C++', 'GNU']);

console.info(
    richard.getFullInfo()
);