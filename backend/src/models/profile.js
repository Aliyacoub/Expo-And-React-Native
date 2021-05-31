
const profile = (sequelize, DataTypes) => {

    const Profile = sequelize.define('profile', {
        speialization: {
            type: DataTypes.STRING,
        },

        address: {
            type: DataTypes.STRING,
            unique: true,
        },

        workingHours: {
            type: DataTypes.STRING,
        },

        phone: {
            type: DataTypes.STRING,
        }

    });
    //لحت انشا علاقة بين اليوزر والبروفايل 1-1
    Profile.associate = models => {
        Profile.belongsTo(models.User)
    };

    return Profile;
};


export default profile;