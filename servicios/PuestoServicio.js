const { ejecutarConsulta } = require('../db.js');

class PuestoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto` WHERE `puesto_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto`" ) }

}

module.exports = new PuestoServicio();
