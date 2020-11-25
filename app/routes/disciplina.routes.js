module.exports = (() => {
  const disciplinaController = require("../controllers/disciplina.controller");

  var router = require("express").Router();

  router.post("/", async (req, res) => {
    const disciplina = await disciplinaController.store(req.body);
    res.json(disciplina);
  })

  router.get("/", async (req, res) => {
    const disciplina = await disciplinaController.index();
    res.json(disciplina);
  })

  router.get("/:id", async (req, res) => {
    const disciplina = await disciplinaController.show(req.params.id);
    res.json(disciplina);
  })

  router.put("/:id", async (req, res) => {
    const disciplina = await disciplinaController.update(req.body, req.params.id);
    res.json(disciplina);
  })

  router.delete("/:id", async (req, res) => {
    const disciplina = await disciplinaController.destroy(req.params.id);
    res.json(disciplina);
  })

  return router

})()