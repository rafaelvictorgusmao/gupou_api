const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Questao = sequelize.define(name, {
  descricao: {
    type: DataTypes.TEXT,
    allowNull:false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field:'criado_em',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field:'atualizado_em',
  }
},{
    sequelize,
    tableName: name,
});

// Associações
Questao.associate = (models) => {

  //Usuario 1:N Questao
  Questao.belongsTo(models.usuario, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  })

  //Usuario 1:N Questao
  Questao.belongsTo(models.hardskill, {
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'hardskill'
  })

  // Questao 1:N QuestaoDia
  Questao.hasOne(models.questaodia, {
    foreignKey: {
      name: 'id_questao'
    },
    as: 'questoesdia'
  })


}

module.exports = Questao;