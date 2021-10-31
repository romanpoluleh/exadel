/*class Zoo
    address
    area
    established date
    ticket price
    workers: []
    animals: [],

class Animal
    type
    color
    weight
    height
    place of origin

class Snakes
    isPoisonous

class CatLike
    isSafeToPet

class Birds
    isFlying

class Worker
    firstName
    lastName
    phone
    */



class Zoo {
    constructor(address, area, establishedDate, ticketPrice){
        this._address = address;
        this._area = area;
        this._establishedDate = establishedDate;
        this._ticketPrice = ticketPrice;
        this._workers = [];
        this._animals = [];
        }
    
    get getAddress(){
        return this._address
        }

    set setAddress(value){
        if(typeof(value) === 'string'){
            this._address = value
        } else{
            console.log('Invalid input: address must be set to a string.');
        }
        }

    get getArea(){
        return this._area;
    }

    set setArea(value){
        if(typeof(value) === 'number'){
            this._area = value
        } else{
            console.log('Invalid input: area must be set to a number.');
        }
    }
    get getEstablishedDate(){
        return this._establishedDate
    }    

    get getTicketPrice(){
        return this._ticketPrice
    }

    set setTicketPrice(value){
        if(typeof value === 'number') this._ticketPrice = value
        else{
            console.log('Invalid input: price of ticket must be set to a number');
        }
    }
     
    addWorker(worker){
        this._workers.push(worker);
    }

    editWorker(id, firstName, lastName, phone){
        this._workers[id]._firstName = firstName; 
        this._workers[id]._lastName = lastName;
        this._workers[id]._phone = phone;
    }

    removeWorker(id){
        this._workers.splice(id, 1);
    }

    showAllWorkers(){
        console.log("Workers of the zoo: ");
        for (let worker of this._workers){
            console.log(worker.constructor.name+":");
            console.log("First Name: " + worker._firstName);
            console.log("Last Name: " + worker._lastName);
            console.log("Phone: " + worker._phone + '\n');
        }
    }

    addAnimal(animal){
        this._animals.push(animal);
    }

    editAnimal(id, type, color, weight, height, origin){   
        this._animals[id]._type = type;
        this._animals[id]._color = color;
        this._animals[id]._weight = weight;
        this._animals[id]._height = height;
        this._animals[id]._origin = origin;
        
    }

    removeAnimal(id){
        this._animals.splice(id, 1);
    }

    get getAnimals(){
        return this._animals;
    }

    get getWorkers(){
        return this._workers;
    }

    showAllAnimals(){
        console.log("Animals in the zoo: ");
        for (let animal of this._animals){
            console.log(animal.constructor.name+":");
            console.log("Type: " + animal._type);
            console.log("Color: " + animal._color);
            console.log("Height: " + animal._height);
            console.log("Weight: " + animal._weight);
            console.log("Origin: " + animal._origin + '\n');
        }
    }

    showAnimalByID(id){
            console.log(this._animals[id].constructor.name+":");
            console.log(`ID: ${id}`);
            console.log("Type: " + this._animals[id]._type);
            console.log("Color: " + this._animals[id]._color);
            console.log("Height: " + this._animals[id]._height);
            console.log("Weight: " + this._animals[id]._weight);
            console.log("Origin: " + this._animals[id]._origin + '\n');
    }

}



class Worker {
    constructor(firstName, lastName, phone){
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
    }
}


class Animal{
    constructor(type, color, weight, height, origin){
        this._type = type;
        this._color = color;
        this._weight = weight;
        this._height = height;
        this._origin = origin;
    }

    get getAnimalInfo(){
        return `Animal's type is ${this._type}. Animal is ${this._color} color. It has ${this._weight} kg of weight. and ${this._height} m of height. Place of origin: ${this._origin}. `
    }

    set setWeight(value){
        if(typeof value === 'number') this._weight = value
        else{
            console.log('Invalid input: weight must be set to a number');
        }
    }

    set setHeight(value){
        if(typeof value === 'number') this._height = value
        else{
            console.log('Invalid input: height must be set to a number');
        }
    }
}


class Snake extends Animal {
    constructor(type, color, weight, height, origin, isPoisonous){
        super(type, color, weight, height, origin);
        this._isPoisonous = isPoisonous;
    }

    set setIsPoisonous(value){
        if(typeof value === 'boolean') this._isPoisonous = value
        else{
            console.log('Invalid input: isPoisonous must be set to a boolean');
        }
    }
}


class CatLike extends Animal{
    constructor(type, color, weight, height, origin, isSafeToPet){
        super(type, color, weight, height, origin);
        this._isSafeToPet = isSafeToPet;
    }

    set setIsSafeToPet(value){
        if(typeof value === 'boolean') this._isSafeToPet = value
        else{
            console.log('Invalid input: isSafeToPet must be set to a boolean');
        }
    }
}


class Bird extends Animal{
    constructor(type, color, weight, height, origin, isFlying){
        super(type, color, weight, height, origin);
        this._isFlying = isFlying;
    }

    set setIsFlying(value){
        if(typeof value === 'boolean') this._isFlying = value
        else{
            console.log('Invalid input: isFlying must be set to a boolean');
        }
    }
}

let zoo = new Zoo("Tashkentskaya 40", 0.15 , "9 august, 1984", 10)
let elephant = new Animal("proboscis", "grey", 4000, 2.7, "Egypt");
let first_worker = new Worker("Anton","Yasnuk","520-72-72");
let second_worker = new Worker("Vlad", "Bondaronok", "755-58-24");
let third_worker = new Worker("Evgenii", "Karp", "555-35-35");

zoo.addWorker(first_worker);
zoo.addWorker(second_worker);
zoo.addWorker(third_worker);
zoo.showAllWorkers();

let monkey = new Animal("primates ", "brown", 150, 1.75, "Africa");
let flamingo = new Bird("birds", "pink", 3, 1.3, "Africa");
flamingo.setIsFlying = true;
let lion = new CatLike("catlike", "orange", 200, 1.2, "Africa");
lion.setIsSafeToPet = false;
let cobra = new Snake("reptiles", "orange", 6, 3, "Asia");
cobra.setIsPoisonous = true;

zoo.addAnimal(elephant);
zoo.addAnimal(monkey);
zoo.addAnimal(flamingo);
zoo.addAnimal(lion);
zoo.showAllAnimals();

zoo.setArea = 0.16;
zoo.setAddress = "Minsk, Tashkentskaya 40, Chizhovka"
zoo.setTicketPrice = 11;

zoo.showAnimalByID(0);
zoo.editAnimal(0,"proboscis","blue", 4000, 2.7, "Egypt");
zoo.showAnimalByID(0);

console.log(elephant.getAnimalInfo);

let area = zoo.getArea;
let address = zoo.getAddress;
let establishedDate = zoo.getEstablishedDate;
let ticketPrice = zoo.getTicketPrice;

//zoo.removeAnimal(0);
//zoo.showAllAnimals();
    

    
