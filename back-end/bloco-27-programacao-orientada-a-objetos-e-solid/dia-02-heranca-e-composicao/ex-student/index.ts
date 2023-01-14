import Person from "./Person";
import Subject from "./Subject";
import Student from "./Student";
import Teacher from "./Teacher";


const math = new Subject('Math');
console.log(math);

console.log('--------\n');

const ana = new Person('Ana', new Date('1990/10/10'));
const maria = new Person('Maria', new Date('1995/05/15'));
console.log(ana);
console.log(maria);

console.log('--------\n');

const lucas = new Student('Lucas', new Date('1980/03/21'));

lucas.testScores = [50, 60, 30, 90];
lucas.assignmentScores = [90, 90];
console.log(lucas);

console.log('--------\n');

const marta = new Teacher('Marta', new Date('1980/03/30'), 2000, math);

console.log(marta);