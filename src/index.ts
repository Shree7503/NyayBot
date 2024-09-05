import express, { Express, Request, Response } from "express";
import path from "path";
import data from "./info";

const app: Express = express(); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

app.get("/info", (req: Request, res: Response) => {
    res.render("info", { data: data });
});

app.listen(8000, () => {
    console.log("Server Running at PORT: 8000");
});

export default app;