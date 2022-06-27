module.exports =  (sequelize, DataTypes) => { 
    const Todos = sequelize.define('Todos', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: DataTypes.STRING,
        completed: DataTypes.BOOLEAN
        
    },
    {
        timestamps: false,
    }
    
    );
    return Todos;
};