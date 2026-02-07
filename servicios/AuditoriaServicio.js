const { ejecutarConsulta } = require('../db.js');

class AuditoriaServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`auditoria` WHERE `auditoria_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`auditoria`" ) }

}

module.exports = new AuditoriaServicio();
