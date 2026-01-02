const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.on("start", (start, end) => {
  console.log(`Started from ${start} to ${end}`);
});

eventEmitter.emit("start", 10, 20);
