const express = require('express');
const Router = express.Router();

const AuditoriaServicio = require('../servicios/AuditoriaServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await AuditoriaServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await AuditoriaServicio.get());
});


module.exports = Router;
