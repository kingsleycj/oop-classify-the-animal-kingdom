// base class
class Animal {
  #animalName;
  #phylum;

  constructor(animalName, phylum) {
    if (this.constructor === Animal) {
      throw new Error("This class cannot be called or instantiated");
    }
    this.#animalName = animalName;
    this.#phylum = phylum;
  }

  getAnimalName() {
    this.#animalName;
  }
  getPhylum() {
    this.#phylum;
  }

  warmBlooded() {
    this.warmBlooded = true; 
  }

  coldBlooded() { 
    this.coldBlooded = true;
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

class AVES extends Animal {
    constructor(animalName, phylum){
        super(animalName, phylum);
        this.warmBlooded()
    }
}

class Mammal extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.warmBlooded();
    }
}

class Arthropoda extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.coldBlooded();
  }
}

class Fish extends Animal {
  constructor(animalName, phylum) {
    super(animalName, phylum);
    this.coldBlooded();
  }
}

class Amphibia extends Animal {
    
}

class Reptiles extends Animal {

}
const bird = new AVES();
const cat = new Mammal();
const butterfly = new Arthropoda();
const fish = new Fish();
const frog = new Amphibia();
const tortoise = new Reptiles();