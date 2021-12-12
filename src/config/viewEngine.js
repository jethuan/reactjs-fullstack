import express from "express";

const Viewengine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/view");
};
module.exports = Viewengine;