const express = require('express');
const Router = express.Router();

const ConceptoServicio = require('../servicios/ConceptoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.get());
});


module.exports = Router;
