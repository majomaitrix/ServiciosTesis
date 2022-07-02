const boom = require('@hapi/boom');
const models =require('./../libs/sequelize');
const sequelize = require('../libs/sequelize');

class usersService {

  constructor(){
  }

  async create() {

  }

  async find() {
    const query='SELECT * FROM users';
    const [data,metadata]=await sequelize.query(query);
    return data;
  }

  async findOne() {
  }

  async update() {

  }

  async delete() {

  }

}



module.exports = usersService;
