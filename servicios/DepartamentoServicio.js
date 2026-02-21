const { ejecutarConsulta } = require('../db.js');

class DepartamentoServicio {

  constructor() { };

 async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento` WHERE `departamento_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento`" ) }
 
    async update( Id, nombre, usuarioId) {
    const resultado = await ejecutarConsulta("UPDATE `departamento` SET `nombre` = ? WHERE `departamento_id` = ?",
    [nombre, Id]);

    await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó el departamento con ID ${Id}`]
    );
    return resultado; 
}
    async create(nombre,usuarioId) {
    const resultado = await ejecutarConsulta( "INSERT INTO `departamento` SET `nombre` = ?"
      ,[nombre]);
      
    await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "CREATE", `Se creó el departamento ${nombre}`]
    );

  return resultado;

}
    async delete(Id,usuarioId) {
    const resultado = await ejecutarConsulta("DELETE FROM `planilla`.`departamento` WHERE `departamento_id` = ?"
      , [Id]);
      
      await ejecutarConsulta("INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el departamento con ID ${Id}`]);
    return resultado;
  }
}

module.exports = new DepartamentoServicio();
