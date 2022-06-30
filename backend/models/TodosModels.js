module.exports =  (sequelize, DataTypes) => { 
    const Todos = sequelize.define('Todos', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: DataTypes.STRING,
        completed: DataTypes.BOOLEAN,
        todotime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        
    },
    {
        timestamps: false,
    }
    
    );
    return Todos;
};