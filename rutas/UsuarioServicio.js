const express = require('express');
const Router = express.Router();

const UsuarioServicio = require('../servicios/UsuarioServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await UsuarioServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await UsuarioServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await UsuarioServicio.update(solicitud.params.Id,solicitud.body.email_interno,solicitud.body.password, solicitud.body.rol_id, solicitud.body.empleado_id));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await UsuarioServicio.create(solicitud.body.nombre,solicitud.body.email_interno,solicitud.body.password, solicitud.body.rol_id, solicitud.body.empleado_id));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await UsuarioServicio.delete(solicitud.params.Id));
});
module.exports = Router;


/*id,email_interno, solicitud.body.password, solicitud.body.rol_id, solicitud.body.empleado_id*/ 