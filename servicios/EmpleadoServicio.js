const { ejecutarConsulta } = require('../db.js');

class EmpleadoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`empleado` WHERE `empleado_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`empleado`" ) 
}
  async update(Id,nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado,usuarioId) {
    
    const resultado = await ejecutarConsulta("UPDATE `empleado` SET `nombre` = ?, `departamento_id` = ?, `puesto_id` = ?, `cedula` = ?, `apellido` = ?, `fecha_ingreso` = ?, `salario_actual` = ?, `estado` = ? WHERE `empleado_id` = ?",
    [nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado,Id]);

 await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "UPDATE", `Se actualizó el empleado con ID ${Id}`]
  );

    return resultado
}
    async create(nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado = "ACTIVO",usuarioId) {
    const resultado = await ejecutarConsulta("INSERT INTO `empleado` SET `nombre` = ?, `departamento_id` = ?, `puesto_id` = ?, `cedula` = ?, `apellido` = ?, `fecha_ingreso` = ?, `salario_actual` = ?, `estado` = ?",
    [nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado]);

  await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "CREATE", `Se creó el empleado ${nombre}`]
  );

     return resultado
}
    async delete(Id,usuarioId) {
    const resultado = await ejecutarConsulta("DELETE FROM `planilla`.`empleado` WHERE `empleado_id` = ?"
      , [Id]);

await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "DELETE", `Se eliminó el empleado con ID ${Id}`]
  );
       return resultado
  }
}

module.exports = new EmpleadoServicio();
