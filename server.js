const Sequelize = require("sequelize");
const sequilize = new Sequelize(
    'activities_db',
    'root',
    'Arquette22!',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequilize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
