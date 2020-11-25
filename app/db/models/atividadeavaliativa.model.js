const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const AtividadeAvaliativa = sequelize.define(name, {
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
AtividadeAvaliativa.associate = (models) => {

  //Turma 1:N AtividadeAvaliativa
  AtividadeAvaliativa.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  })

  // AtividadeAvaliativa N:N HardSkill
  AtividadeAvaliativa.belongsToMany(models.hardskill, {
    through: 'atividade_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_atividadeavaliativa'
    },
    as: 'hardskills'
  })

  // AtividadeAvaliativa 1:N Avaliacao360
  AtividadeAvaliativa.hasMany(models.avaliacao360, {
    foreignKey: {
      name: 'id_atividadeavaliativa'
    },
    as: 'avaliacoes360'
  })

  // AtividadeAvaliativa 1:N Grupo
  AtividadeAvaliativa.hasMany(models.grupo, {
    foreignKey: {
      name: 'id_atividadeavaliativa'
    },
    as: 'grupos'
  })

}

module.exports = AtividadeAvaliativa;