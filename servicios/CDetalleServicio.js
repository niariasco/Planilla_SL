const { ejecutarConsulta } = require('../db.js');

class CDetalleServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantedetalle` WHERE `comprobanteDetalle_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantedetalle`" ) }

  async update(comprobantePago_id, concepto_id, cantidad, monto, Id) {
    const resultado = await ejecutarConsulta("UPDATE `comprobantedetalle` SET `comprobantePago_id` = ?, `concepto_id` = ?, `cantidad` = ?, `monto` = ? WHERE `comprobanteDetalle_id` = ?",
    [comprobantePago_id, concepto_id, cantidad, monto, Id]);

 await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó el Comprobante detalle con ID ${Id}`]);

 return resultado

}
    async create(comprobantePago_id, concepto_id, cantidad, monto) {
    const resultado = await ejecutarConsulta("INSERT INTO `comprobantedetalle` SET `comprobantePago_id` = ?, `concepto_id` = ?, `cantidad` = ?, `monto` = ?",
    [comprobantePago_id, concepto_id, cantidad, monto]);
/*
 await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "CREATE", `Se creó un detalle de servicio}`]);
      */

 return resultado
}
    async delete(Id) {
    const resultado = await ejecutarConsulta("DELETE FROM `planilla`.`comprobantedetalle` WHERE `comprobanteDetalle_id` = ?"
      , [Id]);

await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el comprobante de detalle con ID ${Id}`]
    );

 return resultado
  }

}

module.exports = new CDetalleServicio();