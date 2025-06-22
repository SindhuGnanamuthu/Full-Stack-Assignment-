class Animal {
    public name: string;
    private sound: string;
    protected type: string;
  
    constructor(name: string, sound: string, type: string) {
      this.name = name;
      this.sound = sound;
      this.type = type;
    }
  
    public makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  class Dog extends Animal {
    constructor(name: string) {
      super(name, "Woof", "Dog");
    }
  
    describe(): void {
      console.log(`${this.name} is a ${this.type}`);
    }
  }
  const dog1 = new Dog("Bingo");
  dog1.describe(); 