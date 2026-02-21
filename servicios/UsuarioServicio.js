const { ejecutarConsulta } = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

PalabraSecreta = "Secreta06";

class UsuarioServicio {

  constructor() { };

    async getId(Id) {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`usuario` WHERE `usuario_id` = ?"
      , [Id]);
  }
    async get() {
    return await ejecutarConsulta("SELECT * FROM `planilla`.`usuario`") 
  }
    async update(Id,email_interno, password, rol_id, empleado_id,usuario_id) {
    const resultado =  await ejecutarConsulta("UPDATE `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ? WHERE `usuario_id` = ?",
    [email_interno, password, rol_id, empleado_id,Id]);

  await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuario_id, "UPDATE", `Se actualizó el usuario con ID ${Id}`]);
    return resultado;
}
    async create(email_interno, password, rol_id, empleado_id,usuario_id) {
    const resultado =  await ejecutarConsulta("INSERT INTO `usuario` SET `email_interno` = ?, `password` = ?, `rol_id` = ?, `empleado_id` = ?",
    [email_interno, password, rol_id, empleado_id]);
   await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuario_id, "CREATE", `Se creó el usuario ${email_interno}`]);

    return resultado;
}
    async delete(Id,usuario_id) {
    const resultado =  await ejecutarConsulta("DELETE FROM `planilla`.`usuario` WHERE `usuario_id` = ?"
      , [Id]);

   await ejecutarConsulta(
      "INSERT INTO `auditoria` SET `usuario_id` = ?, `accion` = ?, `descripcion` = ?",
      [usuario_id, "DELETE", `Se eliminó el usuario con ID ${Id}`]
    );
    return resultado;
  }

 async autenticarToken(email_interno, ClaveSinEncriptar) {
  // Consultar en la base de datos si el usuario y la clave coninciden
  // buscar usuario
try{
    const usuarios = await ejecutarConsulta(
      "SELECT * FROM usuario WHERE email_interno = ? ",
      [email_interno]
    );

    if (usuarios.length === 0) {
      return { ok: false, mensaje: "Usuario no existe" };
    }
    const Usuario = usuarios[0];

// comparar contraseña
  let Resultado = false;
        try {
            Resultado = await bcrypt.compare(ClaveSinEncriptar, Usuario.password);
        } catch (err) {
            console.log(err);
            return { ok: false, mensaje: "Error comparando contraseña" };
        }
        if (Resultado === true) {
            return this.generarToken(Usuario.rol_id, Usuario.email_interno);
        } else {
             return { ok: false, mensaje: "Contraseña incorrecta" };
        }
    } catch (error) {
    console.log(error);
    return { ok: false, mensaje: "Error interno" };
  }
}   

 async generarToken(rol_id, email_interno, usuario_id) {
       let token = jwt.sign({ rol_id, email_interno }, this.PalabraSecreta, { expiresIn: '10m' });
        // Almacenar en la base de datos para el usuario
        await ejecutarConsulta("UPDATE usuario SET token = ? WHERE usuario_id = ?",
        [token, usuario_id])
        return token;
}

    async validarToken(solicitud) {
        let token;
        try {
            token = solicitud.headers.authorization.split(" ")[1];
        } catch (err) {
            return err;
        }
        let Resultado;
        // Validación del token
        try {
            Resultado = await jwt.verify(token, this.PalabraSecreta);
        } catch (err) {
            return err;
        }
        // Se debe validar que el usuario tenga asignado ese token
        if (Usuario.Token === token) {
            return Resultado;
        } else {
            return false;
        }
    };

    async desautenticarToken(email_interno) {
    try {
    await ejecutarConsulta(
      "UPDATE usuario SET token = NULL WHERE email_interno = ?",
      [email_interno]
    );
    return { ok: true, mensaje: "Sesión cerrada correctamente" };

  } catch (error) {
    return { ok: false, mensaje: "Error al cerrar sesión" };
  }
    }
}

module.exports = new UsuarioServicio();