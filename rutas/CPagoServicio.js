const express = require('express');
const Router = express.Router();

const CPagoServicio = require('../servicios/CPagoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.update(solicitud.params.Id,solicitud.body.planilla_id,solicitud.body.empleado_id,solicitud.body.salarioBruto,solicitud.body.totalBeneficios,solicitud.body.totalDeducciones,solicitud.body.salarioNeto,1));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.create(solicitud.body.planilla_id,solicitud.body.empleado_id,solicitud.body.salarioBruto,solicitud.body.totalBeneficios,solicitud.body.totalDeducciones,solicitud.body.salarioNeto,1));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CPagoServicio.delete(solicitud.params.Id,1));
});
module.exports = Router;

/**solicitud.body.planilla_id,solicitud.body.empleado_id,solicitud.body.salarioBruto,solicitud.body.totalBeneficios,solicitud.body.totalDeducciones,solicitud.body.salarioNeto */