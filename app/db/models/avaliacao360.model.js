const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Avaliacao360 = sequelize.define(name, {
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
Avaliacao360.associate = (models) => {

  // Aluno 1:N Avaliacao360
  Avaliacao360.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'aluno'
  })

  // AtividadeAvaliativa 1:N Avaliacao360
  Avaliacao360.belongsTo(models.atividadeavaliativa, {
    foreignKey: {
      name: 'id_atividadeavaliativa'
    },
    as: 'atividadeavaliativa'
  })

  // Grupo 1:N Avaliacao360
  Avaliacao360.belongsTo(models.grupo, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'grupo'
  })

  // Avaliacao360 N:N SoftSkill
  Avaliacao360.belongsToMany(models.softskill, {
    through: 'avaliacao360_softskill',
    timestamps:false,
    foreignKey: {
      name: 'id_avaliacao360'
    },
    as: 'softskills'
  })

}

module.exports = Avaliacao360;