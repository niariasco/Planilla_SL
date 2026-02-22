const bcrypt = require('bcrypt');
const { ejecutarConsulta } = require('./db');
async function migrar() {

    const usuarios = await ejecutarConsulta("SELECT usuario_id FROM usuario");

    for (let usuario of usuarios) {

        const hash = await bcrypt.hash("1234", 10);

        await ejecutarConsulta(
            "UPDATE usuario SET password = ? WHERE usuario_id = ?",
            [hash, usuario.usuario_id]
        );

        console.log(`Usuario ${usuario.usuario_id} actualizado`);
    }

    console.log("Migración completada");
}

migrar();