import express from "express";

const router = express.Router();
const initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello Jet");
    });
    return app.use("/", router);
};
module.exports = initWebRoutes;