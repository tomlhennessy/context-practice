function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat();
// Explanation: `eat()` is called as a regular function
// Context (`this`): In non-strict mode, `this` refers to the global object. In strict mode, `this` would be undefined.
// Output: Since `this.name` does not exist on the global object, it logs `undefined eats fish food`.


/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat();
// Explanation: The `eat` function is assigned to `nemo.eat`, then called as a method of `nemo`
// Context (`this`): `this` refers to `nemo` since `eat` is called as a method on `nemo`
// Output: Logs `Nemo eats fish food`.


/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat();
// Explanation: After assigning `eat` to `nemo.eat`, `eat` is called as a regular function
// Context (`this`): Since `eat()` is called as a regular function, `this` refers to the global object
// Output: Logs `undefined eats fish food`.


/********************************* Scenario 4 *********************************/
nemo.swim();
// Explanation: The `swim` method is called on the `nemo` object
// Context (`this`): `this` refers to `nemo`
// Output: Logs `Nemo swimming in the water`.

/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim();
// Explanation: The `swim` method of `nemo` is assigned to a new variable `swim` and then called
// Context (`this`): `swim()` is called as a regular function, so `this` refers to the global object
// Output: Logs `undefined swimming in the water`.
