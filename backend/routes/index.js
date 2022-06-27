import { Sequelize } from "sequelize";
const db = new Sequelize('Todo_database', 'root', '9193999', {
    host: "localhost",
    dialect: "mysql"
});

export default db;