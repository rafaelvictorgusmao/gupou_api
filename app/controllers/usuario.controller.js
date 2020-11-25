const models = require("../db/models");

//GET, POST, PUT, DELETE
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST usuario
//update PUT usuario
//destroy DELETE

exports.index = async () => {
  const resultado = await models.usuario.findAll({
    include: ['aluno']
  });
  return resultado
}

exports.show = async (id) => {
  const resultado = await models.usuario.findByPk(id);
  return resultado
}

exports.store = async (usuario) => {
  const resultado = await models.usuario.create(usuario, {
    include: ['aluno', 'questoes']
  });
  return resultado
}

exports.update = async (usuario, id) => {
  const resultado = await models.usuario.update(usuario,{
    where: {id:id}
  })
  return resultado  
}

exports.destroy = async (id) => {
  const resultado = await models.usuario.destroy({
    where: {id:id}
})
return resultado  
}