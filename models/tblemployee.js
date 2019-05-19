'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblemployee = sequelize.define('tblemployee', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    join_date: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {});
  tblemployee.associate = function(models) {
    tblemployee.belongsTo(models.department,{
      foreignKey:'dept_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
     tblemployee.belongsTo(models.tblgroups,{
      foreignKey:'group_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
     tblemployee.hasOne(models.tblsalary,{
      foreignKey:'emp_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
  };
  return tblemployee;
};