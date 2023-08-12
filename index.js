import { timeStamp } from "console";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("ercompleto", "susanamunoz", "",{host:"localhost", dialect: "postgres"});

const lugar = sequelize.define("Parque",{
    id: { type:DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement :true},
    rut:{type:DataTypes.INTEGER,
         unique:true}      ,  
    nombre: DataTypes.STRING,
    apellido: {type:DataTypes.STRING},  
}, {
 //   timestamps: false,
    tableName: 'pepito'
  })


sequelize.sync();