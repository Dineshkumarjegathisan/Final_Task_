module.exports = (sequelize, DataTypes)=>{
    const Books = sequelize.define("book",{
        bookId :{
            type: DataTypes.STRING,
            allownull: false ,
            primaryKey: true
        },
        bookName: {
            type: DataTypes.STRING,
            allownull: false,
        },
        bookPrice :{
            type: DataTypes.DOUBLE ,
            allownull: false ,
        },
        stock:{
            type :DataTypes.INTEGER,
            allownull:false
        },
        createdBy:{
            type:DataTypes.STRING,
            allowNull:false 
          }  
    },
    )
    return Books ;
}
