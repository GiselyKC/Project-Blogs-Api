const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      content: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};