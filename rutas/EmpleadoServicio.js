const express = require('express');
const Router = express.Router();

const EmpleadoServicio = require('../servicios/EmpleadoServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.update(solicitud.params.Id,solicitud.body.nombre,solicitud.body.departamento_id,solicitud.body.puesto_id,solicitud.body.cedula,solicitud.body.apellido,solicitud.body.fecha_ingreso,solicitud.body.salario_actual,solicitud.body.estado));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.create(solicitud.body.nombre,solicitud.body.departamento_id,solicitud.body.puesto_id,solicitud.body.cedula,solicitud.body.apellido,solicitud.body.fecha_ingreso,solicitud.body.salario_actual,solicitud.body.estado));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await EmpleadoServicio.delete(solicitud.params.Id));
});

module.exports = Router;

/**solicitud.body.nombre,solicitud.body.departamento_id,solicitud.body.puesto_id,solicitud.body.cedula,solicitud.body.apellido,solicitud.body.fecha_ingreso,solicitud.body.salario_actual,solicitud.body.estado */