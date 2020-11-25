const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const QuestaoDia = sequelize.define(name, {
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
QuestaoDia.associate = (models) => {

  // Aluno 1:N QuestaoDia
  QuestaoDia.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'aluno'
  })

  // Questao 1:N QuestaoDia
  QuestaoDia.belongsTo(models.questao, {
    foreignKey: {
      name: 'id_questao'
    },
    as: 'questao'
  })

}

module.exports = QuestaoDia;