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
    return await ejecutarConsulta("UPDATE `comprobantedetalle` SET `comprobantePago_id` = ?, `concepto_id` = ?, `cantidad` = ?, `monto` = ? WHERE `comprobanteDetalle_id` = ?",
    [comprobantePago_id, concepto_id, cantidad, monto, Id]);

}
    async create(comprobantePago_id, concepto_id, cantidad, monto) {
    return await ejecutarConsulta("INSERT INTO `comprobantedetalle` SET `comprobantePago_id` = ?, `concepto_id` = ?, `cantidad` = ?, `monto` = ?",
    [comprobantePago_id, concepto_id, cantidad, monto]);

}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`comprobantedetalle` WHERE `comprobanteDetalle_id` = ?"
      , [Id]);
  }

}

module.exports = new CDetalleServicio();