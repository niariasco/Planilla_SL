const express = require('express');
const Router = express.Router();

const RolServicio = require('../servicios/RolServicio.js');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await RolServicio.getId(solicitud.params.Id));
});
Router.get('/get', async (solicitud, respuesta, next) => {
  return respuesta.json(await RolServicio.get());
});
Router.put('/update/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await RolServicio.update(solicitud.params.Id,solicitud.body.nombre,1));
});
Router.post('/create', async (solicitud, respuesta, next) => {
  return respuesta.json(await RolServicio.create(solicitud.body.nombre,1));
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  return respuesta.json(await RolServicio.delete(solicitud.params.Id,1));
});
module.exports = Router;



/*
params = lo que va en la URL (path) - trabajando con un registro específico

body = lo que va dentro del request (datos del formulario/JSON) - creando o actualizando datos
*/