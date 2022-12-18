class withBackbone {
    constructor() {
        if (this.constructor === withBackbone) {
          throw new Error("The class 'withBackbone' cannot be called or instantiated");
        }
    }
    warmBlooded = true;
}

class withoutBackbone {
    constructor() {
        if (this.constructor === withoutBackbone) {
          throw new Error(" The class 'withoutBackbone' cannot be called or instantiated");
        }
    }
    coldBlooded = true;
}

class AVES extends withBackbone {
    
}
const bird = new AVES();
class Mammal extends withBackbone {

}
const cat = new Mammal();
class Arthropoda extends withoutBackbone {

}
const butterfly = new Arthropoda();
class Fish extends withoutBackbone {

}
const fish = new Fish();
class Amphibia extends withoutBackbone {

}
const frog = new Amphibia();
class Reptiles extends withoutBackbone {

}
const tortoise = new Reptiles();