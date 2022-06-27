const PostsCategorieSchema = (sequelize, DataTypes) => {
  const PostsCategorieTable = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, { timestamps: false });

  PostsCategorieTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostsCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  }

  return PostsCategorieTable;
}

module.exports = PostsCategorieSchema;
