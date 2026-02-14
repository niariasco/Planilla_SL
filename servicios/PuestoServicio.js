const { ejecutarConsulta } = require('../db.js');

class PuestoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto` WHERE `puesto_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto`" ) }

async update(nombre, salarioBase, Id, usuarioId) {

  const resultado = await ejecutarConsulta(
    "UPDATE `puesto` SET `nombre` = ?, `salarioBase` = ? WHERE `puesto_id` = ?",
    [nombre, salarioBase, Id]
  );

  await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "UPDATE", `Se actualizó el puesto con ID ${Id}`]
  );

  return resultado;
}

async create(nombre, salarioBase, usuarioId) {

  const resultado = await ejecutarConsulta(
    "INSERT INTO `puesto` SET `nombre` = ?, `salarioBase` = ?",
    [nombre, salarioBase]
  );

  await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "CREATE", `Se creó el puesto ${nombre} con salario base ${salarioBase}`]
  );

  return resultado;
}

async delete(Id, usuarioId) {

  const resultado = await ejecutarConsulta(
    "DELETE FROM `puesto` WHERE `puesto_id` = ?",
    [Id]
  );

  await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "DELETE", `Se eliminó el puesto con ID ${Id}`]
  );

  return resultado;
}
    
}

module.exports = new PuestoServicio();
