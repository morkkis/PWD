Arrow function:
var start = performance.now();
class A {
  constructor() {
    this.counter = 0;

    this.handleClick = () => {
      this.counter++;
    };
  }
  
  handleLongClick() {
    this.counter++;
  }
}

for (let i=0; i < 500000000; i++) { new A()} 

console.log('duration = ', performance.now() - start);




Bound function:
var start = performance.now();
class B {
  constructor() {
    this.counter = 0;
	this.handleClick = this.handleClick.bind(this)
  }
  
  handleLongClick() {
    this.counter++;
  }
  
  handleClick() {
    this.counter++;
  }
}

for (let i=0; i < 500000000; i++) { new B()} 

console.log('duration = ', performance.now() - start);


Function:
var start = performance.now();
class C {
  constructor() {
    this.counter = 0;
  }
  
  handleLongClick() {
    this.counter++;
  }
  
  handleClick() {
    this.counter++;
  }
}

for (let i=0; i < 500000000; i++) { new C()} 

console.log('duration = ', performance.now() - start);