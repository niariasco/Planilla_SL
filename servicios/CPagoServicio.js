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
    const resultado = await ejecutarConsulta("UPDATE `comprobantepago` SET `planilla_id` = ?, `empleado_id` = ?, `salarioBruto` = ?, `totalBeneficios` = ?, `totalDeducciones` = ?, `salarioNeto` = ? WHERE `comprobantePago_id` = ?",
    [planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto,Id]);

     await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "UPDATE", `Se actualizó el comprobante de pago  con ID ${Id}`]
    );
return resultado;

}
    async create(planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto) {
     const resultado =  await ejecutarConsulta("INSERT INTO `comprobantepago` SET `planilla_id` = ?, `empleado_id` = ?, `salarioBruto` = ?, `totalBeneficios` = ?, `totalDeducciones` = ?, `salarioNeto` = ?",
    [planilla_id, empleado_id, salarioBruto, totalBeneficios, totalDeducciones, salarioNeto]
  );

return resultado;
}
    async delete(Id) {
const resultado =  await ejecutarConsulta("DELETE FROM `comprobantepago`.`rol` WHERE `comprobantePago_id` = ?"
      , [Id]);

         await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuarioId, "DELETE", `Se eliminó el comprobante de pago con ID ${Id}`]
    );

return resultado;

  }
}

module.exports = new CPagoServicio();
