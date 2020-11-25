const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Grupo = sequelize.define(name, {
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
Grupo.associate = (models) => {

  //Turma 1:N Grupo
  Grupo.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  })

  // Aluno N:N Grupo
  Grupo.belongsToMany(models.aluno, {
    through: 'aluno_grupo',
    timestamps:false,
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'alunos'
  })

  //AtividadeAvaliativa 1:N Grupo
  Grupo.belongsTo(models.atividadeavaliativa, {
    foreignKey: {
      name: 'id_atividadeavaliativa'
    },
    as: 'atividadeavaliativa'
  })

  // Grupo 1:N Tarefa
  Grupo.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'tarefas'
  })

  // Grupo 1:N Avaliacao360
  Grupo.hasMany(models.avaliacao360, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'avaliacoes360'
  })

}

module.exports = Grupo;