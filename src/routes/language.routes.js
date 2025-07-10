import { Router } from "express";
import { createLanguage, deleteLanguage, getAllLanguage, getLanguageById, updateLanguage } from "../controllers/language.controllers.js";
const routesLanguage = Router();

routesLanguage.post('/language',createLanguage)
routesLanguage.get('/language',getAllLanguage)
routesLanguage.get('/language/:id',getLanguageById)
routesLanguage.put('/language/:id',updateLanguage)
routesLanguage.delete('/language/:id',deleteLanguage)

export default routesLanguage;
