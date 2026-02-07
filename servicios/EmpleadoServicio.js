const { ejecutarConsulta } = require('../db.js');

class EmpleadoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`empleado` WHERE `empleado_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`empleado`" ) }

}

module.exports = new EmpleadoServicio();
