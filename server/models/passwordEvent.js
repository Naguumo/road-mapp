export default (sequelize, DataTypes) => {
  const passwordEvent = sequelize.define(
    'passwordEvent',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end: {
        type: DataTypes.DATE,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  passwordEvent.associate = models => {
    passwordEvent.belongsTo(models.passwordRoadmap, { onDelete: 'CASCADE' });
  };
  return passwordEvent;
};
