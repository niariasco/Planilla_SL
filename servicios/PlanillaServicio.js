const { ejecutarConsulta } = require('../db.js');

class PlanillaServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla` WHERE `planilla_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla`" ) }

  async update(fechaInicio, fechaFin,Id) {
    return await ejecutarConsulta("UPDATE `planilla` SET `fechaInicio` = ?, `fechaFin` = ? WHERE `planilla_id` = ?",
    [fechaInicio, fechaFin,Id]);
}
    async create(fechaInicio, fechaFin) {
    return await ejecutarConsulta("INSERT INTO `planilla` SET `fechaInicio` = ?, `fechaFin` = ?",
    [fechaInicio, fechaFin]);

}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`planilla` WHERE `planilla_id` = ?"
      , [Id]);
  }
}

module.exports = new PlanillaServicio();
