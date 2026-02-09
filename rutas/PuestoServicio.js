const express = require('express');
const Router = express.Router();

const PuestoServicio = require('../servicios/PuestoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.update(solicitud.params.Id,solicitud.body.nombre,solicitud.body.salarioBase));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.create(solicitud.body.nombre,solicitud.body.salarioBase));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PuestoServicio.delete(solicitud.params.Id));
});

module.exports = Router;