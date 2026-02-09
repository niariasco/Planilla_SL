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
  async update(nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado,Id) {
    return await ejecutarConsulta("UPDATE `empleado` SET `nombre` = ?, `departamento_id` = ?, `puesto_id` = ?, `cedula` = ?, `apellido` = ?, `fecha_ingreso` = ?, `salario_actual` = ?, `estado` = ? WHERE `empleado_id` = ?"
    [nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado,Id]);
}
    async create(nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado = "ACTIVO") {
    return await ejecutarConsulta("INSERT INTO `empleado` SET `nombre` = ?, `departamento_id` = ?, `puesto_id` = ?, `cedula` = ?, `apellido` = ?, `fecha_ingreso` = ?, `salario_actual` = ?, `estado` = ?",
    [nombre, departamento_id, puesto_id, cedula, apellido, fecha_ingreso, salario_actual, estado]);
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`empleado` WHERE `empleado_id` = ?"
      , [Id]);
  }
}

module.exports = new EmpleadoServicio();
