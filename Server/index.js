require("dotenv").config();

const app = require("./src/main")
app(process.env.SERVER_PORT,process.env.SERVER_HOST)