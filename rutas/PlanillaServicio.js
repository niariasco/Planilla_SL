const express = require('express');
const Router = express.Router();

const PlanillaServicio = require('../servicios/PlanillaServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.update(solicitud.params.Id,solicitud.body.fechaFin,solicitud.body.fechaInicio,1));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.create(solicitud.body.fechaInicio,solicitud.body.fechaFin));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await PlanillaServicio.delete(solicitud.params.Id,1));
});
module.exports = Router;


/*fechaInicio, fechaFin*/