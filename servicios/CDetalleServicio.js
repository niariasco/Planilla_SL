const { ejecutarConsulta } = require('../db.js');

class CDetalleServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantedetalle` WHERE `comprobanteDetalle_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantedetalle`" ) }

}

module.exports = new CDetalleServicio();