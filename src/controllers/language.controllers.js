import Language from "../models/language.model.js";

export const createLanguage = async (req, res) => {
    try {
        const {id, name, paradigm, release_year} = req.body;
       if(id === ""|| id === undefined){
            return res.status(500).json({
                msg:"No puede ser nulo"
            })
        }
            if(name === ""|| name === undefined){
            return res.status(500).json({
                msg:"No puede ser nulo"
            })
        }
            if(paradigm === ""|| paradigm === undefined){
            return res.status(500).json({
                msg:"No puede ser nulo"
            })
        
            }
            await Language.create({id, name, paradigm, release_year})
            try {
                return res.status(201).json({
                    msg: "Se creo el lenguaje"
                })
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    msg: "No se creo el lenguaje"
                })
            }
        }
            catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "No se pudo crear el registro"
        })
    }
    
}
export const getAllLanguage = async (req, res) => {
    try {
     const Languages = await Language.findAll();
     res.json({
        count: Languages.length,
        data: Languages  ,
});
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:"No hay registros"
        })
    }

}
export const getLanguageById = async (req, res) => {
    try {
        const { id } = req.params;
        const Languages = await Language.findByPk(id)

        if(!Languages){
            return res.status(404).json({
                msg: "No se encontraron registros con ese id"
            })
        }
        return res.status(200).json(Languages);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Coloque el id correspondiente"
        })
    }
    
}
export const updateLanguage = async (req, res) => {
    try {
 const {  name, paradigm, release_year } = req.body;
    const { id } = req.params;
    const result = await Language.findByPk(id);

    if (
      ({ name }, { paradigm } == "")
    ) {
      res.staus(500).json({
        msg: "no puede haber valores nulos",
      });
    }

    if (result === 0) {
      res.status(404).json({
        msg: "NOT FOUND",
      });
    }
    Language.update(req.body);
    
    return res.status(201).json(req.body);
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Ha ocurrido un error" });
  }
};

export const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Language.destroy({where:{id: id}});
        if(result === 0){
            return res.status(404).json({
                msg: "No hay registros con este id"
            })
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "No se pudo borrar el lenguaje"
        })
    }
    
}