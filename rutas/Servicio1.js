const express = require('express');
const Router = express.Router();

const Servicio1 = require('../servicios/Servicio1.js');

Router.post('/listar', async (solicitud, respuesta, next) => {
  return respuesta.json(await Servicio1.listar(solicitud.body));
});

Router.get('/listar2', async (solicitud, respuesta, next) => {
  return respuesta.json(await Servicio1.listar2());
});


module.exports = Router;
