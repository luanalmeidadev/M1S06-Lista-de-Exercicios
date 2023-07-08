let studentOne = {name:"Luan", noteOne: 2, noteTwo: 8};
let studentTwo = {name:"Lucas", noteOne: 7, noteTwo: 10};
let studentTree = {name:"Matheus", noteOne: 9, noteTwo: 4};

let students = [studentOne, studentTwo, studentTree];

let studentAverage = students.map(function (aluno){
    let average = (aluno.noteOne + aluno.noteTwo) / 2;
    return {name: aluno.name, average};
}
);

console.log(studentAverage);