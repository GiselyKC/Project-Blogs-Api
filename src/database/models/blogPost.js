const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
  }

  return BlogPostTable;
}

module.exports = BlogPostSchema;
 