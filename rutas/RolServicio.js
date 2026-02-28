const express = require('express');
const Router = express.Router();

const RolServicio = require('../servicios/RolServicio.js');
const Usuarios = require('../servicios/UsuarioServicio');

Router.get('/get/:Id', async (solicitud, respuesta, next) => {
   
  if (await Usuarios.validarToken(solicitud)) {
    try {
      return respuesta.json(await RolServicio.getId(solicitud.params.Id));
    } catch (error) {
      console.error(error);
      return respuesta.status(500).json(error);
    }
  }
  return respuesta.status(401).json();
});
Router.get('/get', async (solicitud, respuesta, next) => {

   if (await Usuarios.validarToken(solicitud)) {
    try {
      return respuesta.json(await RolServicio.get());
    } catch (error) {
      console.error(error);
      return respuesta.status(500).json(error);
    }
  }
  return respuesta.status(401).json();
});

Router.put('/update/:Id', async (solicitud, respuesta, next) => {
   if (await Usuarios.validarToken(solicitud)) {
    try {
      return respuesta.json(await RolServicio.update(solicitud.params.Id,solicitud.body.nombre,1));
    } catch (error) {
      console.error(error);
      return respuesta.status(500).json(error);
    }
  }
  return respuesta.status(401).json();
});
Router.post('/create', async (solicitud, respuesta, next) => {
  if (await Usuarios.validarToken(solicitud)) {
    try {
      return respuesta.json(await RolServicio.create(solicitud.body.nombre,1));
    } catch (error) {
      console.error(error);
      return respuesta.status(500).json(error);
    }
  }
  return respuesta.status(401).json();
});
Router.delete('/delete/:Id', async (solicitud, respuesta, next) => {
  if (await Usuarios.validarToken(solicitud)) {
    try {
      return respuesta.json(await RolServicio.delete(solicitud.params.Id,1));
    } catch (error) {
      console.error(error);
      return respuesta.status(500).json(error);
    }
  }
  return respuesta.status(401).json();
});
module.exports = Router;



/*
params = lo que va en la URL (path) - trabajando con un registro específico

body = lo que va dentro del request (datos del formulario/JSON) - creando o actualizando datos
*/