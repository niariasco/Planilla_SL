const { ejecutarConsulta } = require('../db.js');

class RolServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`rol` WHERE `rol_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`rol`") 
  }
    async update(Id,nombre,usuarioId) {
    const resultado = await ejecutarConsulta("UPDATE `rol` SET `nombre` = ? WHERE `rol_id` = ?",
    [nombre,Id]);

    await ejecutarConsulta(
    "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
    [usuarioId, "UPDATE", `Se actualizó el rol con ID ${Id}`]);

    return resultado;
}
  async create(nombre, usuarioId) {
    const resultado = await ejecutarConsulta(
      "INSERT INTO `rol` SET `nombre` = ?",
      [nombre]);

    await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "CREATE", `Se creó el rol ${nombre}`]
    );

    return resultado;
  }
    async delete(Id,usuarioId) {
       const resultado = await ejecutarConsulta("DELETE FROM `planilla`.`rol` WHERE `rol_id` = ?"
      , [Id]);

     await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el rol con ID ${Id}`]
    );
   return resultado;
}
}

module.exports = new RolServicio();
