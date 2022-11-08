import express from "express";
import bodyParser from "body-parser";
import router from "./scripts/users.js";

const app = express();

const PORT = 9000;

app.use(bodyParser.json());
app.use("/users", router);
app.listen(PORT, () => console.log("server is running"));
