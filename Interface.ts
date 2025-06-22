interface Person {
  name: string;
  age: number;
  greet(): void;
}
class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
const student1 = new Student("Alice", 21);
student1.greet(); // Output: Hi, I'm Alice and I'm 21 years old.
