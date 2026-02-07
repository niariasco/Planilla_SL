const { ejecutarConsulta } = require('../db.js');

class DepartamentoServicio {

  constructor() { };

 async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento` WHERE `departamento_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento`" ) }

}

module.exports = new DepartamentoServicio();
