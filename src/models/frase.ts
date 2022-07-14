import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface FrasesInstance extends Model{
    id: number;
    autor: string;
    texto: string;
}

export const Frase = sequelize.define<FrasesInstance>('Frase',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    autor:{
        type: DataTypes.STRING
    },
    texto:{
        type: DataTypes.STRING
    }
}, {
    tableName: 'frases',
    timestamps: false
});