require("dotenv").config();

const app = require("./src/app");
app(process.env.SERVER_PORT, process.env.SERVER_HOST);
