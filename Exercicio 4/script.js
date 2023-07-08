class Vehicle {
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }
    getDetails(){
        return(`Marca: ${this.brand},\n Ano: ${this.year}`);
    }

}

class Car extends Vehicle {
    constructor(brand, year, door){
        super(brand, year)
        this.door = door;
    }
    getDetails(){
        return(`Marca: ${this.brand},\n Ano: ${this.year},\n Portas: ${this.door}`);
    }
}

const car = new Car("Civic", 2001, 4);
const car2 = new Car("Celta", 2010, 2);

console.log(car);
console.log(car2);