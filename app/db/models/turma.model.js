const { DataTypes } = require('sequelize');
const QuestaoDia = require('./questaodia.model');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Turma = sequelize.define(name, {
    codigo: {
        type: DataTypes.STRING(10)
      }
  },{
    sequelize,
    tableName: name,
});

// Associações
Turma.associate = (models) => {

  //Disciplina 1:N Turma
  Turma.belongsTo(models.disciplina, {
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'disciplina'
  })

  //  Turma 1:N Grupo
  Turma.hasMany(models.grupo, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'grupos'
  })

  //  Turma 1:N AtividadeAvaliativa
  Turma.hasMany(models.atividadeavaliativa, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'atividadesavaliativas'
  })

  //  Turma N:N Professor
  Turma.belongsToMany(models.professor, {
    through: 'turma_professor',
    timestamps:false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'professores'
  })

  //  Turma N:N Curso
  Turma.belongsToMany(models.curso, {
    through: 'turma_curso',
    timestamps:false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'cursos'
  })

  //  Turma N:N Aluno
  Turma.belongsToMany(models.aluno, {
    through: 'turma_aluno',
    timestamps:false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'alunos'
  })

  //  Turma N:N HardSkill
  Turma.belongsToMany(models.hardskill, {
    through: 'turma_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'hardskills'
  })
  
}

module.exports = Turma;