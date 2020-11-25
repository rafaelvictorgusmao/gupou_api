const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Disciplina = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(50)
      }
  },{
    sequelize,
    tableName: name,
});

// Associações
Disciplina.associate = (models) => {
  
  //  Disciplina 1:N Turma
  Disciplina.hasMany(models.turma, {
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'turmas'
  })

  //  Disciplina N:N Professor
  Disciplina.belongsToMany(models.professor, {
    through: 'disciplina_professor',
    timestamps:false,
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'professores'
  })

  //  Disciplina N:N HardSkills
  Disciplina.belongsToMany(models.hardskill, {
    through: 'disciplina_hardskill',
    timestamps:false,
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'hardskills'
  })

}

module.exports = Disciplina;