import { Router } from "express";
import { createLanguage, deleteLanguage, getAllLanguage, getLanguageById, updateLanguage } from "../controllers/language.controllers.js";
const routesLanguage = Router();

routesLanguage.post('/language',createLanguage)
routesLanguage.get('/language',getAllLanguage)
route('/language/:id',getLanguageById)
('/language/:id',updateLanguage)
('/language/:id',deleteLanguage)
