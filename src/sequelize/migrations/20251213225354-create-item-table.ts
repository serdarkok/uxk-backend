import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('items', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      spec: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      markup: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('items');
  }
};
