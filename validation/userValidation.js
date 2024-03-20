const bcrypt = require('bcrypt');
const connectToDb = require('../connection/db_config.js')
// const {Users} = connectToDb();


async function mailValidation(email) {
    try {
        const {Users} =await connectToDb();
       const user = await Users.findOne({
        where:{email:email}
       })
       console.log("+++++++"+user);
       return user ;
    } catch (err) {
        console.error('Error in validateUser:', err);
        throw err;
    }
}

async function comparePasswords(password,hashedPassword) {
    try {
        const res  =   bcrypt.compare(password,hashedPassword);
        return res ;
    } catch (err) {
        throw err ;
    } 
} 

module.exports = { mailValidation,comparePasswords}; 