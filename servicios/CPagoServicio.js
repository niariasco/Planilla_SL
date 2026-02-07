const { ejecutarConsulta } = require('../db.js');

class CPagoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantepago` WHERE `comprobantePago_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantepago`" ) }

}

module.exports = new CPagoServicio();
