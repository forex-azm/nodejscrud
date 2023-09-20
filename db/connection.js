// db/connection.js
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
  'expressjs',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');
  });
export default sequelize;