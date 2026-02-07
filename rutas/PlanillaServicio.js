const express = require('express');
const Router = express.Router();

const PlanillaServicio = require('../servicios/PlanillaServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.get());
});


module.exports = Router;
