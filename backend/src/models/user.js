
const user = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {

        name: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
        },

        password: {
            type: DataTypes.STRING,
        },

        userType: {
            type: DataTypes.ENUM('doctor', 'normal'), // فقط تحدد اذا كان طبيب او شخص عادي
        },

        latitude: {
            type: DataTypes.FLOAT,//العرض
        },

        longitude: {
            type: DataTypes.FLOAT,//الطول
        }

    })

    //لحت انشا علاقة بين اليوزر والبروفايل 1-1
    User.associate = models => {
        User.hasOne(models.Profile)
    }

    return User;
}


export default user;