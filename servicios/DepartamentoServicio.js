const { ejecutarConsulta } = require('../db.js');

class DepartamentoServicio {

  constructor() { };

 async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento` WHERE `departamento_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`departamento`" ) }
 
    async update(nombre, Id) {
    return await ejecutarConsulta("UPDATE `departamento` SET `nombre` = ? WHERE `departamento_id` = ?",
    [nombre, Id]);
}
    async create(nombre) {
    return await ejecutarConsulta( "INSERT INTO `departamento` SET `nombre` = ?"
      ,[nombre]);
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`departamento` WHERE `rol_id` = ?"
      , [Id]);
  }
}

module.exports = new DepartamentoServicio();
