import { Sequelize } from "sequelize";

const db = new Sequelize('nodejs_proyek_14', 'necronomicon', '123456789', {
    host: "localhost",
    dialect: "pgsql"
});

export default db;