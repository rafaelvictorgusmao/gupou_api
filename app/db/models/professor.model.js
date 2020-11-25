const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Professor = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
      }
  },{
    sequelize,
    tableName: name,
});

// Associações

Professor.associate = (models) => {

  //  Usuario 1:1 Professor
  Professor.belongsTo(models.usuario, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  })

  //  Disciplina N:N Professor
  Professor.belongsToMany(models.disciplina, {
    through: 'disciplina_professor',
    timestamps:false,
    foreignKey: {
      name: 'id_professor'
    },
    as: 'disciplinas'
  })

  //  Turma N:N Professor
  Professor.belongsToMany(models.turma, {
    through: 'turma_professor',
    timestamps:false,
    foreignKey: {
      name: 'id_professor'
    },
    as: 'turmas'
  })

}

module.exports = Professor;