const { ejecutarConsulta } = require('../db.js');

class CPagoServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantepago` WHERE `comprobantePago_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`comprobantepago`" ) }

    async update(planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto,Id) {
    return await ejecutarConsulta("UPDATE `comprobantepago` SET `planilla_id` = ?, `empleado_id` = ?, `salarioBruto` = ?, `totalBeneficios` = ?, `totalDeducciones` = ?, `salarioNeto` = ? WHERE `comprobantePago_id` = ?",
    [planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto,Id]);
}
    async create(planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto) {
    return await ejecutarConsulta("INSERT INTO `comprobantepago` SET `planilla_id` = ?, `empleado_id` = ?, `salarioBruto` = ?, `totalBeneficios` = ?, `totalDeducciones` = ?, `salarioNeto` = ?",
    [planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto]
  );
}
    async delete(Id) {
    return await ejecutarConsulta("DELETE FROM `comprobantepago`.`rol` WHERE `comprobantePago_id` = ?"
      , [Id]);
  }
}

module.exports = new CPagoServicio();
