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
    async update(nombre, Id) {
    return await ejecutarConsulta("UPDATE `rol` SET `nombre` = ? WHERE `rol_id` = ?",
    [nombre, Id]);
}
    async create(nombre) {
    return await ejecutarConsulta("INSERT INTO `rol` SET `nombre` = ?"
      ,[nombre]);
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`rol` WHERE `rol_id` = ?"
      , [Id]);
  }
}

module.exports = new RolServicio();
