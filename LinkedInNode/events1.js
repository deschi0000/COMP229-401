const events = require("events");

const emitter = new events.EventEmitter() // constructor

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "Pretty Cool", "Dave");