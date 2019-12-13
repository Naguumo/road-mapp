export default (sequelize, DataTypes) => {
  const passwordRoadmap = sequelize.define(
    'passwordRoadmap',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  passwordRoadmap.associate = models => {
    passwordRoadmap.hasMany(models.passwordEvent);
  };
  return passwordRoadmap;
};
