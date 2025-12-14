import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('shipping', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      ship_to_title: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ship_to_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ship_from: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      vendor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'vendors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phase: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      po_approval: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      hotel_need_by: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      excepted_delivery: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      shops_send: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      shops_approved: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      shops_delivered: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ordered: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      shipped: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      delivered: {
        type: DataTypes.DATEONLY,
        allowNull: true,
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
    await queryInterface.dropTable('ships');
  }
};
