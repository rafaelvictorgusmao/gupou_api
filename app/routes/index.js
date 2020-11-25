const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const disciplina = require('./disciplina.routes');

module.exports = app => {
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/disciplina', disciplina);
}