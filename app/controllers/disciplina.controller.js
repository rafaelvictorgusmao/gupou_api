const models = require("../db/models");

//GET, POST, PUT, DELETE
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST disciplina
//update PUT disciplina
//destroy DELETE

exports.index = async () => {
  const resultado = await models.disciplina.findAll({
  });
  return resultado
}

exports.show = async (id) => {
  const resultado = await models.disciplina.findByPk(id);
  return resultado
}

exports.store = async (disciplina) => {
  const resultado = await models.disciplina.create(disciplina, {
  });
  return resultado
}

exports.update = async (disciplina, id) => {
  const resultado = await models.disciplina.update(disciplina,{
    where: {id:id}
  })
  return resultado  
}

exports.destroy = async (id) => {
  const resultado = await models.disciplina.destroy({
    where: {id:id}
})
return resultado  
}