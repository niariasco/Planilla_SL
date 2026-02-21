const express = require('express');
const Router = express.Router();

const ConceptoServicio = require('../servicios/ConceptoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.update(solicitud.params.Id,solicitud.body.nombre,solicitud.body.tipo_movimiento,1));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.create(solicitud.body.nombre,solicitud.body.tipo_movimiento,1));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await ConceptoServicio.delete(solicitud.params.Id,1));
});

module.exports = Router;
