# Dynamic Component Factory

// Components
class Button {
    render() {
        console.log("Button component created");
    }
}

class Card {
    render() {
        console.log("Card component created");
    }
}

class Modal {
    render() {
        console.log("Modal component created");
    }
}

// Factory Class
class ComponentFactory {
    static createComponent(type) {
        switch (type) {
            case "button":
                return new Button();
            case "card":
                return new Card();
            case "modal":
                return new Modal();
            default:
                throw new Error("Invalid component type");
        }
    }
}

// Dynamic creation
const button = ComponentFactory.createComponent("button");
const card = ComponentFactory.createComponent("card");
const modal = ComponentFactory.createComponent("modal");

// Render components
button.render();
card.render();
modal.render();
```

## Output

```text
Button component created
Card component created
Modal component created
```
