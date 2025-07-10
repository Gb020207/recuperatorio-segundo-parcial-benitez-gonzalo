import { initDB } from "./src/config/database.js";
import express from "express";
import routesLanguage from "./src/routes/language.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routesLanguage);

app.get("/", (req, res) => res.json({ ok: "true" }));

initDB();

app.listen(PORT, () => console.log(`Servidor funcionando ${PORT}`));
