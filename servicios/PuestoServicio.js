const { ejecutarConsulta } = require('../db.js');

class PuestoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto` WHERE `puesto_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`puesto`" ) }

    async update(nombre,salarioBase,Id) {
    return await ejecutarConsulta("UPDATE `puesto` SET `nombre` = ?, `salarioBase` = ? WHERE `puesto_id` = ?",
    [nombre, salarioBase,Id]);
}
    async create(nombre,salarioBase) {
    return await ejecutarConsulta("INSERT INTO `puesto` SET `nombre` = ?, `salarioBase` = ?"
    [nombre, salarioBase]);
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `planilla`.`puesto` WHERE `puesto_id` = ?"
      , [Id]);
  }
    
}

module.exports = new PuestoServicio();
