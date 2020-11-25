const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Aluno = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
      }
  },{
    sequelize,
    tableName: name,
    timestamps:false
});

// Associações

Aluno.associate = (models) => {

  //  Usuario 1:1 Aluno
  Aluno.belongsTo(models.usuario, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  })

  //  Aluno N:N HardSkill
  Aluno.belongsToMany(models.hardskill, {
    through: 'aluno_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'hardskills'
  })

  //  Aluno N:N Turma
  Aluno.belongsToMany(models.turma, {
    through: 'turma_aluno',
    timestamps:false,
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'turmas'
  })

  //  Aluno N:N SoftSkill
  Aluno.belongsToMany(models.softskill, {
    through: 'aluno_softskill',
    timestamps:false,
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'softskills'
  })

  //  Aluno N:N Grupo
  Aluno.belongsToMany(models.grupo, {
    through: 'aluno_grupo',
    timestamps:false,
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'grupos'
  })

  //Curso 1:N Aluno
  Aluno.belongsTo(models.curso, {
    foreignKey: {
      name: 'id_curso'
    },
    as: 'curso'
  })

  // Aluno 1:N Tarefa
  Aluno.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'tarefas'
  })

  // Aluno 1:N QuestaoDia
  Aluno.hasMany(models.questaodia, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'questoesdia'
  })

  // Aluno 1:N Avaliacao360
  Aluno.hasMany(models.avaliacao360, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'avaliacoes360'
  })

}

module.exports = Aluno;