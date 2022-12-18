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
}


class WithBackbone {
    temperatureCondition(){
    warmBlooded = true;
    }
}

class WithoutBackbone {
    temperatureCondition(){
    coldBlooded = true;
    }
}

class AVES extends Animal {
    
}

class Mammal extends Animal {

}

class Arthropoda extends Animal {

}

class Fish extends Animal {

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