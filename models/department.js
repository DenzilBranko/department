'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    department_name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  department.associate = function(models) {
    department.hasMany(models.tblemployee,{
      foreignKey:'dept_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
  };
  return department;
};