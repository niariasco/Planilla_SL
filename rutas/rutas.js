const rutasDelServicio1 = require('./Servicio1.js');
const departamento_rutas = require('./DepartamentoServicio.js');
const rol_rutas = require('./RolServicio.js');
const puesto_rutas = require('./PuestoServicio.js');
const concepto_rutas = require('./ConceptoServicio.js');
const empleado_rutas = require('./EmpleadoServicio.js');
const planilla_rutas = require('./PlanillaServicio.js');
const comprobantedetalle_rutas  = require('./CDetalleServicio.js');
const comprobantepago_rutas  = require('./CPagoServicio.js');
const auditoria_rutas  = require('./AuditoriaServicio.js'); 
const usuario_rutas  = require('./UsuarioServicio.js'); 

function asignarRutasAExpress(app) {
  app.use('/Servicio1', rutasDelServicio1);
  app.use('/DepartamentoServicio', departamento_rutas);
  app.use('/RolServicio', rol_rutas);
  app.use('/PuestoServicio', puesto_rutas);
  app.use('/ConceptoServicio', concepto_rutas);
  app.use('/EmpleadoServicio',empleado_rutas);
  app.use('/PlanillaServicio',planilla_rutas);
  app.use('/CDetalleServicio',comprobantedetalle_rutas);
  app.use('/CPagoServicio',comprobantepago_rutas);
  app.use('/AuditoriaServicio',auditoria_rutas);
  app.use('/UsuarioServicio',usuario_rutas);
}

module.exports = asignarRutasAExpress;
