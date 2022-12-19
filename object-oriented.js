/* -------------------------------------------------------------------
An Abstract class where all other classes will be referenced from
---------------------------------------------------------------------*/
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

  // a method  used to call an other objects in a class
  getClassification() {
    this.classification;
  }

  // a method created to store temperature Status of the animal
  warmBlooded() {
    this.warmBlooded = true;
  }

  coldBlooded() {
    this.coldBlooded = true;
  }

  /* --------------------------------------------------------------------------------------------------
  An abstract method  will  list the properties of the animal and will throw an ERROR if  
  implementation is attempted  on a class that does not inherit from the ABSTRACT CLASS
-----------------------------------------------------------------------------------------------------*/
  listProperties() {
    throw new Error("This method cannot be implemented");
  }

  // a method created to store the backbone properties of the animals
  withBackbone() {
    this.withBackbone = true;
  }

  withoutBackbone() {
    this.withoutBackbone = true;
  }
}


// The Aves class that inherits from Animal
class Aves extends Animal {
    constructor(animalName, classification) {
        super(animalName, classification);
        this.animalName;
        this.classification;
        this.withBackbone();
        this.warmBlooded();
    }
    // an implementation of an abstract method in a subclass
    listProperties() {
        console.log(this);
    }
}

// The Mammal class that inherits from Animal
class Mammal extends Animal {
  constructor(animalName, classification) {
    super(animalName, classification);
    this.getAnimalName();
    this.getClassification();
    this.withBackbone();
    this.warmBlooded();
  }
  // an implementation of an abstract method in a subclass
  listProperties() {
    console.log(this);
  }
}

// The Arthropoda class that inherits from Animal
class Arthropoda extends Animal {
  constructor(animalName, classification) {
    super(animalName, classification);
    this.getAnimalName();
    this.getClassification();
    this.withoutBackbone();
    this.coldBlooded();
  }
  // an implementation of an abstract method in a subclass
  listProperties() {
    console.log(this);
  }
}

// The Fish class that inherits from Animal
class Fish extends Animal {
  constructor(animalName, classification) {
    super(animalName, classification);
    this.getAnimalName();
    this.getClassification();
    this.withBackbone();
    this.coldBlooded();
  }
  // an implementation of an abstract method in a subclass
  listProperties() {
    console.log(this);
  }
}

// The Amphibia class that inherits from Animal
class Amphibia extends Animal {
  constructor(animalName, classification) {
    super(animalName, classification);
    this.getAnimalName();
    this.getClassification();
    this.withBackbone();
    this.coldBlooded();
  }
  // an implementation of an abstract method in a subclass
  listProperties() {
    console.log(this);
  }
}

// The Reptles class that inherits from Animal
class Reptiles extends Animal {
  constructor(animalName, classification) {
    super(animalName, classification);
    this.getAnimalName();
    this.getClassification();
    this.withBackbone();
    this.coldBlooded();
  }
  // an implementation of an abstract method in a subclass
  listProperties() {
    console.log(this);
  }
}

/* ----------------------------------------------------------------
                INSTANTIATING  THE  CLASSES 
----------------------------------------------------------------*/
const aves = new Aves("Bird", "Aves");
const mammal = new Mammal("Cat", "Mammal");
const arthropoda = new Arthropoda("Butterfly", "Arthropoda");
const fish = new Fish("Tilapia", "Fish");
const amphibia = new Amphibia("Toad", "Amphibia");
const reptiles = new Reptiles("Turtle", "Reptiles");

// Setting up the animalNames property
aves.setAnimalName("Bird");
mammal.setAnimalName("Cat");
arthropoda.setAnimalName("Butterfly");
fish.setAnimalName("Tilapia");
amphibia.setAnimalName("Toad");
reptiles.setAnimalName("Turtle");


console.log("\nCLASSIFICATION OF THE ANIMAL KINGDOM\n");

/* ------------------------------------------------------------------------
Logging out subclasses  and methods inherited from its parent class
--------------------------------------------------------------------------*/

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
