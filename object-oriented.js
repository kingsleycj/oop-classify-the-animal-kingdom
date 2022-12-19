// base class
class Animal {
  animalName;
  phylum;

  constructor(animalName, phylum) {
    if (this.constructor === Animal) {
      throw new Error("This class cannot be called or instantiated");
    }
    this.animalName = animalName;
    this.phylum = phylum;
  }

  getAnimalName() {
    return this.animalName;
  }

  setAnimalName(animalName) {
    this.animalName = animalName;
  }
  getPhylum() {
    this.phylum;
  }

  //   setphylum(phylum){
  //     this.#phylum = phylum;
  //   }
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


// class WithBackbone {
//     temperatureCondition(){
//     warmBlooded = true;
//     }
// }

// class WithoutBackbone {
//     temperatureCondition(){
//     coldBlooded = true;
//     }
// }

class Aves extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.animalName
    this.phylum
    this.withBackbone();
    this.warmBlooded();
  }

  listProperties() {
    console.log(this);
  }
}

class Mammal extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
         this.getAnimalName();
         this.getPhylum();
        this.withBackbone();
        this.warmBlooded();
    }

    listProperties(){
        console.log(this);
    }
}

class Arthropoda extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.getAnimalName();
    this.getPhylum();
    this.withoutBackbone();
    this.coldBlooded();
  }

  listProperties() {
    console.log(this);
  }
}

class Fish extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.getAnimalName();
    this.getPhylum();
    this.withBackbone();
    this.coldBlooded();
  }

  listProperties() {
    console.log(this);
  }
}

class Amphibia extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.getAnimalName();
    this.getPhylum();
    this.withBackbone();
    this.coldBlooded();
  }

  listProperties() {
    console.log(this);
  }
}

class Reptiles extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
     this.getAnimalName();
     this.getPhylum();
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

aves.setAnimalName("Bird",);
mammal.setAnimalName("Cat");
fish.setAnimalName("Tilapia");
amphibia.setAnimalName("Toad");
reptiles.setAnimalName("Turtle");

console.log("\nCLASSIFICATION OF THE ANIMAL KINGDOM\n");

console.log(aves.getAnimalName())
aves.listProperties();

console.log(mammal.getAnimalName());
mammal.listProperties();

arthropoda.setAnimalName();
console.log(arthropoda.getAnimalName());
arthropoda.listProperties();

console.log(fish.getAnimalName());
fish.listProperties();

console.log(amphibia.getAnimalName());
amphibia.listProperties();

console.log(reptiles.getAnimalName());
reptiles.listProperties();