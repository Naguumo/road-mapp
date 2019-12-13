import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database Connection Established');
  })
  .catch(err => {
    console.error('Database Connection Failed');
    console.error(err);
    process.exit(1);
  });

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
