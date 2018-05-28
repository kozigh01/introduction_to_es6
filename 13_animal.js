class Animal {
  // ES6 doesn't have propery definitions, properties are defined in constructor
  // count = 1; // throws an error
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  // can't use arrow functions in ES6 as method
  makeNoise(sound) {
    console.log(sound);
  }

  static saySomething() {
    return `I am an Animal ${Animal.counter++}`;
  }
}

class Cat extends Animal {
  makeNoise(sound = 'Meow') {
    console.log(sound);
  }
}

// static class properties must be defined outside class
Animal.counter = 1;

export { Animal, Cat };