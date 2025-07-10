import { initDB } from "./src/config/database.js";
import express from "express";


import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => res.json({ ok: "true" }));


initDB();

app.listen(PORT, () => console.log(`Servidor funcionando ${PORT}`));