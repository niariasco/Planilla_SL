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
    return await ejecutarConsulta("UPDATE `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ? WHERE `usuario_id` = ?",
    [Id,email_interno, password, rol_id, empleado_id]);
}
    async create(email_interno, password, rol_id, empleado_id) {
    return await ejecutarConsulta("INSERT INTO `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ?",
    [email_interno, password, rol_id, empleado_id]);

}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`usuario` WHERE `usuario_id` = ?"
      , [Id]);
  }
}

module.exports = new UsuarioServicio();