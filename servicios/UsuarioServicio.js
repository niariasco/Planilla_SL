const { ejecutarConsulta } = require('../db.js');

class UsuarioServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`usuario` WHERE `usuario_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`usuario`") 
  }
    async update(Id,email_interno, password, rol_id, empleado_id) {
    const resultado =  await ejecutarConsulta("UPDATE `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ? WHERE `usuario_id` = ?",
    [Id,email_interno, password, rol_id, empleado_id]);

  await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó el usuario con ID ${Id}`]);
    return resultado;
}
    async create(email_interno, password, rol_id, empleado_id) {
    const resultado =  await ejecutarConsulta("INSERT INTO `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ?",
    [email_interno, password, rol_id, empleado_id]);
   await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "CREATE", `Se creó el usuario ${nombre}`]);

    return resultado;
}
    async delete(Id) {
    const resultado =  await ejecutarConsulta("DELETE FROM `planilla`.`usuario` WHERE `usuario_id` = ?"
      , [Id]);

   await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el usuario con ID ${Id}`]
    );
    return resultado;
  }
}

module.exports = new UsuarioServicio();