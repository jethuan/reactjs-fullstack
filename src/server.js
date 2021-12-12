import express from "express";
import bodyParser from "body-parser";
import Viewengine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

const app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Viewengine(app);
initWebRoutes(app);

const port = process.env.PORT || 6969;
//port= unđèined => port 6969
app.listen(port, () => {
    //callback
    console.log("backend nodeJs is running", +port);
});