const Sequelize = require('sequelize')
const BookModel = require('../models/bookModels.js')
const UserModel = require('../models/userModels.js')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host :process.env.DB_HOST,
         dialect:'mysql'

    }
);

const Books = BookModel(sequelize ,Sequelize);
const Users = UserModel(sequelize ,Sequelize)
const Op = Sequelize.Op;

const Models = {
    Op,
    Books,
    Users
};

const connection = {} ;

module.exports = async()=>{
    if(connection.isConnected){
        console.log("Using existing connection.");
        return Models
    }
     await sequelize.sync();
    await sequelize.authenticate();
    connection.isConnected = true ;
    console.log("Created a new connection");
    return Models ;
}