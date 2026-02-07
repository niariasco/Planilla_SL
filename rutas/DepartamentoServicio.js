const express = require('express');
const Router = express.Router();

const DepartamentoServicio = require('../servicios/DepartamentoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.getId(solicitud.params.Id));
});

Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.get());
});


module.exports = Router;
