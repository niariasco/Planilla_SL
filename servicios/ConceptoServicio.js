const { ejecutarConsulta } = require('../db.js');

class ConceptoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto` WHERE `rol_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto`" ) }

    async update(nombre, tipo_movimiento,Id) {
     const resultado =  await ejecutarConsulta( "UPDATE `concepto` SET `nombre` = ?, `tipo_movimiento` = ? WHERE `concepto_id` = ?",
    [nombre, tipo_movimiento,Id]);
await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó el concepto de pago con ID ${Id}`]
    );
     return resultado;
}
    async create(nombre,tipo_movimiento) {
    return await ejecutarConsulta("INSERT INTO `concepto` SET `nombre` = ?, `tipo_movimiento` = ?"
      ,[nombre, tipo_movimiento]);

}
    async delete(Id) {
    const resultado = await ejecutarConsulta("DELETE FROM `planilla`.`concepto` WHERE `concepto_id` = ?"
      , [Id]);

      await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el concepto de pago con ID ${Id}`]
    );
    return resultado;
  }
}

module.exports = new ConceptoServicio();