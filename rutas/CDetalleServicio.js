const express = require('express');
const Router = express.Router();

const CDetalleServicio = require('../servicios/CDetalleServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.update(solicitud.params.Id,solicitud.body.comprobantePago_id, solicitud.body.concepto_id, solicitud.body.cantidad, solicitud.body.monto));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.create(solicitud.body.comprobantePago_id, solicitud.body.concepto_id, solicitud.body.cantidad, solicitud.body.monto));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await CDetalleServicio.delete(solicitud.params.Id));
});

module.exports = Router;

/**solicitud.body.comprobantePago_id, solicitud.body.concepto_id, solicitud.body.cantidad, solicitud.body.monto */