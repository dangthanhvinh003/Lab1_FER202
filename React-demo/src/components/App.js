import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import '../styles/App.css';

class App extends Component {
    render() {
        class Person {
            constructor(name, age) {
              this.name = name;
              this.age = age;
            }
          
            sayHello() {
              console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
          }
          
          const person = new Person("John", 25);
          person.sayHello();
          
          
          
          
        return (

            <><div>
                <h1>My React App!</h1>
            </div><HelloWorld></HelloWorld></>
        );
    }
}

export default App;
