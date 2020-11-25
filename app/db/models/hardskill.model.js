const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const HardSkill = sequelize.define(name, {
  descricao: {
    type: DataTypes.STRING(50),
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

HardSkill.associate = (models) => {

  // Aluno N:N HardSkills
  HardSkill.belongsToMany(models.aluno, {
    through: 'aluno_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'alunos'
  })

  // Disciplina N:N HardSkills
  HardSkill.belongsToMany(models.disciplina, {
    through: 'disciplina_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'disciplinas'
  })

  // Turma N:N HardSkills
  HardSkill.belongsToMany(models.turma, {
    through: 'turma_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'turmas'
  })

  // AtividadeAvaliativa N:N HardSkills
  HardSkill.belongsToMany(models.atividadeavaliativa, {
    through: 'atividade_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'atividadesavaliativas'
  })

  // HardSkill 1:N Questão
  HardSkill.hasMany(models.questao, {
    foreignKey: {
      name: 'id_hardskill'
    },
    as: 'questoes'
  })

}

module.exports = HardSkill;