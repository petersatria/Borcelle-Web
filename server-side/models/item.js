'use strict';
const {
  Model
} = require('sequelize');
const { Ingredient } = require('../models')
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User, { foreignKey: 'authorId' })
      Item.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Item.hasMany(models.Ingredient, { foreignKey: 'itemId' })
    }

    static async createItem(req) {
      const t = await sequelize.transaction();

      try {
        const { id: authorId } = req.user
        const { name, description, price, imgUrl, categoryId, ingredients } = req.body
        const data = await Item.create({
          name, description, price, imgUrl, authorId, categoryId, ingredients
        })
        const ingredientsData = req.body.ingredients.map(e => {
          return { name: e, itemId: data.id }
        })
        const createdIngredients = await sequelize.models.Ingredient.bulkCreate(ingredientsData, { transaction: t })
        await t.commit();
        return { data, createdIngredients }
      } catch (err) {
        await t.rollback();
      }
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required'
        },
        notEmpty: {
          msg: 'Name is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        notEmpty: {
          msg: 'Description is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price is required'
        },
        notEmpty: {
          msg: 'Price is required'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image url is required'
        },
        notEmpty: {
          msg: 'Image url is required'
        }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Author id is required'
        },
        notEmpty: {
          msg: 'Author id is required'
        }
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category id is required'
        },
        notEmpty: {
          msg: 'Category id is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};