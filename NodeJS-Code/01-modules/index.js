const fs = require("node:fs");

const contents = fs.readFileSync("notes.txt", "utf-8");
// console.log(contents);

fs.writeFileSync("copy.txt", "hello", "utf-8");
fs.appendFileSync("copy.txt", "\n\nhey", "utf-8");

fs.mkdirSync("games/xyz/a", { recursive: true });
fs.rm("games", { recursive: true });

fs.unlinkSync("copy.txt");
