'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblsalary = sequelize.define('tblsalary', {
    salary_date: DataTypes.DATE,
    salary_amount: DataTypes.DOUBLE,
    status: DataTypes.INTEGER
  }, {});
  tblsalary.associate = function(models) {
    tblsalary.belongsTo(models.tblemployee,{
      foreignKey:'emp_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
  };
  return tblsalary;
};