const fs = require("fs");
const crypto = require("crypto");

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString("hex");

// Write the secret key to the .env file
fs.writeFileSync(".env", `TOKEN_KEY=${secretKey}\n`);

console.log("Generated and saved secret key:", secretKey);
