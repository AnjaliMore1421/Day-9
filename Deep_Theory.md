# Day 9 – Full Deep Content

## Deep Theory – Observer Pattern

1) **Observer Pattern deep explanation.**
   Observer Pattern is a behavioral design pattern where **one object (subject)** notifies **multiple objects (observers)** whenever its state changes.
   It follows a **one-to-many relationship**.

- **Subject** → main object
- **Observers** → subscribed listeners

When the subject updates, all observers receive the notification automatically.

### Example
A YouTube channel notifying all subscribers when a new video is uploaded.

### JavaScript Example

```javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(message) {
        this.observers.forEach(observer => observer(message));
    }
}

const user1 = (msg) => console.log("User 1:", msg);
const user2 = (msg) => console.log("User 2:", msg);

const channel = new Subject();

channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("New video uploaded!");
```

### Output

```text
User 1: New video uploaded!
User 2: New video uploaded!
```

### Uses
- Event listeners
- DOM events
- React / Redux
- Node.js EventEmitter

 # 2)Factory Pattern Implementation

The Factory Pattern is a creational design pattern used to create objects without directly using the `new` keyword every time.

It helps create objects based on a condition or type.

##  Example
class Car {
    constructor() {
        this.type = "Car";
    }
}

class Bike {
    constructor() {
        this.type = "Bike";
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        if (vehicleType === "car") {
            return new Car();
        } else if (vehicleType === "bike") {
            return new Bike();
        }
    }
}

const factory = new VehicleFactory();

const car = factory.createVehicle("car");
const bike = factory.createVehicle("bike");

console.log(car.type);
console.log(bike.type);
```

## Output

```text
Car
Bike
```

# 3)Singleton Pitfalls

The Singleton Pattern ensures that only one instance of a class is created and used throughout the application.

## Pitfalls

- **Global state issue** – data can be changed from anywhere, making debugging difficult.
- **Hard to test** – unit testing becomes difficult because the same instance is shared.
- **Tight coupling** – different parts of the application become dependent on the same object.
- **Scalability issues** – not suitable when multiple instances may be needed later.
- **Hidden dependencies** – classes may use the singleton directly instead of receiving it as a dependency.

## Example

```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.data = "Single Instance";
        Singleton.instance = this;
    }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true
```

# 4)Module Pattern – Best Usage

The Module Pattern is used to organize code by keeping variables and functions private while exposing only the required methods.

It helps in **data hiding and avoiding global scope pollution**.

## Best Usage

- **Encapsulation** – keep private variables safe
- **Reusable code** – group related functions together
- **Avoid global variables** – prevents naming conflicts
- **Better maintainability** – code becomes clean and modular

##  Example

```javascript
const UserModule = (function () {
    let username = "Anjali"; // private variable

    function getName() {
        return username;
    }

    return {
        getName
    };
})();

console.log(UserModule.getName());
```

## Output

```text
Anjali
```

# 5)MVC Architecture

**MVC** stands for **Model, View, Controller**.  
It is a software design pattern used to organize code into separate sections.

## Components

- **Model** → Handles data and business logic
- **View** → Manages UI / user interface
- **Controller** → Handles user input and connects Model with View

## Flow

User action → Controller → Model → View

## Example

// Model
const model = {
    data: "Hello MVC"
};

// View
function view(data) {
    console.log(data);
}

// Controller
function controller() {
    view(model.data);
}

controller();
```

## Output

```text
Hello MVC
```
