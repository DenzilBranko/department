'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblgroups = sequelize.define('tblgroups', {
    group_name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  tblgroups.associate = function(models) {
    tblgroups.hasMany(models.tblemployee,{
      foreignKey:'group_id',
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
     });
  };
  return tblgroups;
};