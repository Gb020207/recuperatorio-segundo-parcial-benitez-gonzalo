import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Language = sequelize.define('language',{
    id:{type: DataTypes.INTEGER, allowNull: false ,primaryKey: true,autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false, unique: true},
    paradigm:{type: DataTypes.STRING, allowNull: false},
    release:{type: DataTypes.FLOAT, allowNull:true}
}

);

export default Language;