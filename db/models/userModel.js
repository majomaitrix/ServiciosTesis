const {Model,DataTypes,Sequelize} = require('sequelize');
const sequelize = require('../../libs/sequelize');

const USER_TABLE='users';

const UserSchema={
  docUser:{
    allowNull:false,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  fisrtNameUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  lastNameUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  passwordUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  tipodocUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  ciudadUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  emailUser:{
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  rolUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  imageUser:{
    allowNull:false,
    type:DataTypes.STRING
  },
  nacimientoUser:{
    allowNull:false,
    type:DataTypes.DATE
  }
}

class User extends Model{
  static associate(){
    //Associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName:USER_TABLE,
      modelName:'User',
      timestamps:false
    }
  }
}

module.exports={USER_TABLE,UserSchema,User}
