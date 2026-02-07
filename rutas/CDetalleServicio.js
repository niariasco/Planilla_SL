const express = require('express');
const Router = express.Router();

const CDetalleServicio = require('../servicios/CDetalleServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.get());
});


module.exports = Router;
