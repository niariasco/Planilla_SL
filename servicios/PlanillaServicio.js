const { ejecutarConsulta } = require('../db.js');

class PlanillaServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla` WHERE `planilla_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla`" ) }

}

module.exports = new PlanillaServicio();
