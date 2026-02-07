const { ejecutarConsulta } = require('../db.js');

class ConceptoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto` WHERE `rol_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto`" ) }

}

module.exports = new ConceptoServicio();