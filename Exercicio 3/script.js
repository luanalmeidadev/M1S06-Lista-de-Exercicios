class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInformation(){
        return(`Título: ${this.title}\n Autor: ${this.author}\n Ano do Lançamento: ${this.year}`);
    }
}

let cleanCode = new Book("Clean Code", "Robert Cecil Martin", 2008);
let oProgramadorPragmatico = new Book("O Programador Pragmático", "Andy Hunt", 1999);
let cleanArchitecture = new Book("Clean Architecture", "Robert Cecil Martin", 2017);

console.log(cleanCode.getInformation());
console.log(oProgramadorPragmatico.getInformation());
console.log(cleanArchitecture.getInformation());


