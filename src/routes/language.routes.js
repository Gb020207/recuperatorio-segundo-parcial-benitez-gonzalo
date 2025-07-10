import { Router } from "express";
import { createLanguage, deleteLanguage, getAllLanguage, getLanguageById, updateLanguage } from "../controllers/language.controllers.js";
const routesLanguage = Router();

routesLanguage.post('/languages',createLanguage)
routesLanguage.get('/languages',getAllLanguage)
routesLanguage.get('/languages/:id',getLanguageById)
routesLanguage.put('/languages/:id',updateLanguage)
routesLanguage.delete('/languages/:id',deleteLanguage)

export default routesLanguage;
