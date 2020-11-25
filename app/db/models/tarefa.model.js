const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Tarefa = sequelize.define(name, {
  descricao: {
    type: DataTypes.STRING(30),
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
Tarefa.associate = (models) => {

  // Aluno 1:N Tarefa
  Tarefa.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'aluno'
  })

  // Grupo 1:N Tarefa
  Tarefa.belongsTo(models.grupo, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'grupo'
  })

}

module.exports = Tarefa;