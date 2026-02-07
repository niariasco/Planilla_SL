const express = require('express');
const Router = express.Router();

const PuestoServicio = require('../servicios/PuestoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.get());
});


module.exports = Router;