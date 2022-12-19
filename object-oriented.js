// An Abstract class where all other classes will be referenced from
class Animal {
    animalName;
    classification;

    // constructor function that will accept the animalName and classification as parameters
    constructor(animalName, classification) {
        if (this.constructor === Animal) {
        throw new Error("This class cannot be called or instantiated");
        }
        this.animalName = animalName;
        this.classification = classification;
    }
// a method to return the name of the animal
    getAnimalName() {
        return this.animalName;
    }
// a method to store the name of the animal in a parameter
    setAnimalName(animalName) {
        this.animalName = animalName;
    }

    // a method  used to call an 
    getclassification() {
        this.classification;
    }

    warmBlooded() {
        this.warmBlooded = true;
    }

    coldBlooded() {
        this.coldBlooded = true;
    }

    listProperties() {
        throw new Error("This method cannot be implemented");
    }

    withBackbone() {
        this.withBackbone = true;
    }

    withoutBackbone() {
        this.withoutBackbone = true;
    }
}


class Aves extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.animalName;
        this.classification;
        this.withBackbone();
        this.warmBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Mammal extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.getAnimalName();
        this.getclassification();
        this.withBackbone();
        this.warmBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Arthropoda extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.getAnimalName();
        this.getclassification();
        this.withoutBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Fish extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.getAnimalName();
        this.getclassification();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Amphibia extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.getAnimalName();
        this.getclassification();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Reptiles extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.getAnimalName();
        this.getclassification();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

const aves = new Aves("Bird", "Aves");
const mammal = new Mammal("Cat", "Mammal");
const arthropoda = new Arthropoda("Butterfly", "Arthropoda");
const fish = new Fish("Tilapia", "Fish");
const amphibia = new Amphibia("Toad", "Amphibia");
const reptiles = new Reptiles("Turtle", "Reptiles");

aves.setAnimalName("Bird");
mammal.setAnimalName("Cat");
arthropoda.setAnimalName("Butterfly");
fish.setAnimalName("Tilapia");
amphibia.setAnimalName("Toad");
reptiles.setAnimalName("Turtle");

console.log("\nCLASSIFICATION OF THE ANIMAL KINGDOM\n");

console.log(aves.getAnimalName());
aves.listProperties();
console.log('\n')

console.log(mammal.getAnimalName());
mammal.listProperties();
console.log("\n");

console.log(arthropoda.getAnimalName());
arthropoda.listProperties();
console.log("\n");

console.log(fish.getAnimalName());
fish.listProperties();
console.log("\n");

console.log(amphibia.getAnimalName());
amphibia.listProperties();
console.log("\n");

console.log(reptiles.getAnimalName());
reptiles.listProperties();
console.log("\n");
