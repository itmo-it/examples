"use strict";

var Person,
    Developer,
    linus,
    richard,
    gates;


Person = function (fullName) {
    fullName = fullName.split(' ');
    this.firstname = fullName[0] || '';
    this.lastname = fullName[1] || '';
    this.patro = fullName[2] || '';
};


Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname + ' ' + this.patro;
};



Developer = function (fullName, skills) {
    Person.call(this, fullName);
    this.skills = skills || [];
};


Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;


Developer.prototype.getSkills = function () {
    return this.skills.join();
};


Developer.prototype.getFullInfo = function () {
    return 'Developer: ' + this.getFullName() + '. Skills: ' + this.getSkills();
};



gates = new Person('William Henry GatesIII');
console.info(
    gates.getFullName()
);

linus = new Developer('Linus Torvalds Benedict', ['C', 'C++', 'Linux']);
console.log(
    linus.getFullName(),
    linus.getSkills()
);

richard = new Developer('Richard Matthew Stallman', ['C', 'C++', 'GNU']);
console.info(
    richard.getFullInfo()
);