module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define("Workout", {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Workout.associate = (models) => {
        Workout.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Workout;
};
