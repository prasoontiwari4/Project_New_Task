module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      bidAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
    });
  
    return Bid;
  };
  