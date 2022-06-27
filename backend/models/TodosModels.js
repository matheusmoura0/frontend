module.exports =  (sequelize, DataTypes) => { 
    const Todos = sequelize.define('todos', { 
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        todo: DataTypes.STRING,
    });
    return Todos;
};