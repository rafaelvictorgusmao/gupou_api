const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Curso = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(50)
      }
  },{
    sequelize,
    tableName: name,
});

Curso.associate = (models) => {

  //  Turma N:N Curso
  Curso.belongsToMany(models.turma, {
    through: 'turma_curso',
    timestamps:false,
    foreignKey: {
      name: 'id_curso'
    },
    as: 'turmas'
  })

  //  Curso 1:N Aluno
  Curso.hasMany(models.aluno, {
    foreignKey: {
      name: 'id_curso'
    },
    as: 'alunos'
  })

}
module.exports = Curso;