class withBackbone {
    warmBlooded = true;
}

class withoutBackbone {
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