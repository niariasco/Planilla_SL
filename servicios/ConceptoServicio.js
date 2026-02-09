const { ejecutarConsulta } = require('../db.js');

class ConceptoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto` WHERE `rol_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`concepto`" ) }

    async update(nombre, tipo_movimiento,Id) {
    return await ejecutarConsulta( "UPDATE `concepto` SET `nombre` = ?, `tipo_movimiento` = ? WHERE `concepto_id` = ?",
    [nombre, tipo_movimiento,Id]);
}
    async create(nombre,tipo_movimiento) {
    return await ejecutarConsulta("INSERT INTO `concepto` SET `nombre` = ?, `tipo_movimiento` = ?"
      ,[nombre, tipo_movimiento]);
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`concepto` WHERE `concepto_id` = ?"
      , [Id]);
  }
}

module.exports = new ConceptoServicio();