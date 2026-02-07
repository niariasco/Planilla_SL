const express = require('express');
const Router = express.Router();

const CPagoServicio = require('../servicios/CPagoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.get());
});

module.exports = Router;
