//تعامل مع العديد من قواعد البيانات
import Sequelize from "sequelize";

//تواصل مع قاعده البيانت
const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'postgres'
    }
);

const models = {
    User: sequelize.import('./user'),
    Profile: sequelize.import('./profile')
}
//التي تقوم بالبحث والربط بين  الجدولين 
Object.keys(models).forEach(key => {
    if ("associate" in models[key]) {
        models[key].associate(models);
    }
})
sequelize.authenticate()
    .then(() => {
        console.log("connected to database successfuly");
    })
    .catch(err => {
        console.error("unabel connected to database successfuly", err);
    })

export { sequelize };

export default models;