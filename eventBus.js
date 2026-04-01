# Event Bus Implementation

// Event Bus Class
class EventBus {
    constructor() {
        this.events = {};
    }

    // Subscribe to event
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        console.log(`Subscribed to: ${eventName}`);
    }

    // Emit event
    emit(eventName, data) {
        console.log(`\nEvent Triggered: ${eventName}`);
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }

    // Unsubscribe from event
    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(
                cb => cb !== callback
            );
            console.log(`Removed listener from: ${eventName}`);
        }
    }
}

// Create Event Bus
const bus = new EventBus();

// Listeners
const manager = (task) => {
    console.log(`Manager received: ${task}`);
};

const employee = (task) => {
    console.log(`Employee received: ${task}`);
};

// Subscribe listeners
bus.on("taskUpdate", manager);
bus.on("taskUpdate", employee);

// Emit event
bus.emit("taskUpdate", "New JavaScript task assigned");

// Remove one listener
bus.off("taskUpdate", manager);

// Emit again
bus.emit("taskUpdate", "Task deadline updated");
```

## Output

```text
Subscribed to: taskUpdate
Subscribed to: taskUpdate

Event Triggered: taskUpdate
Manager received: New JavaScript task assigned
Employee received: New JavaScript task assigned

Removed listener from: taskUpdate

Event Triggered: taskUpdate
Employee received: Task deadline updated
```

