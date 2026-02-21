const express = require('express');
const Router = express.Router();

const DepartamentoServicio = require('../servicios/DepartamentoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.getId(solicitud.params.Id));
});

Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.update(solicitud.params.Id,solicitud.body.nombre,1));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.create(solicitud.body.nombre,1));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await DepartamentoServicio.delete(solicitud.params.Id,1));
});

module.exports = Router;
