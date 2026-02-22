const { ejecutarConsulta } = require('../db.js');

class PlanillaServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla` WHERE `planilla_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`planilla`" ) }

  async update(Id,fechaFin,fechaInicio,usuarioId) {
    const resultado= await ejecutarConsulta("UPDATE `planilla` SET `fechaInicio` = ?, `fechaFin` = ? WHERE `planilla_id` = ?",
    [fechaInicio, fechaFin,Id]);

await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó la planilla con ID ${Id}`]
    );
        return resultado;
}
    async create(fechaInicio, fechaFin) {
       const resultado= await ejecutarConsulta("INSERT INTO `planilla` SET `fechaInicio` = ?, `fechaFin` = ?",
    [fechaInicio, fechaFin]);
/*
  await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "CREATE", `Se creó la planilla de ${nombre} `]);*/
        return resultado;
}
    async delete(Id,usuarioId) {
       const resultado= await ejecutarConsulta("DELETE FROM `planilla`.`planilla` WHERE `planilla_id` = ?"
      , [Id]);

       await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó la planilla ${Id}`]);
    return resultado;
  }
}

module.exports = new PlanillaServicio();
