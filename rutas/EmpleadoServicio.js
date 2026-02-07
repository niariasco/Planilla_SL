const express = require('express');
const Router = express.Router();

const EmpleadoServicio = require('../servicios/EmpleadoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.get());
});


module.exports = Router;
