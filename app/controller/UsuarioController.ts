import UsuarioService from '#services/UsuarioService'
import  defaultMessages  from '@vinejs/vine'
import type { HttpContext} from '@adonisjs/core/http'

const usuarioService = new UsuarioService()

class UsuariosController {
   async register({ request, response }: HttpContext) {
    const { nombre, apellido, nombre_usuario, correo_electronico, cargo, contrasena, confirmacion } = request.body()

    if (contrasena !== confirmacion) {
      return response.status(400).json({ mensaje: 'Las contraseñas no coinciden' })
    }

    const respuesta = await usuarioService.register(nombre, apellido, nombre_usuario, correo_electronico, cargo, contrasena,confirmacion)
    return response.status(201).json({ msj: 'usuario registrado', respuesta })
  }

<<<<<<< HEAD
    async login({request, response}: HttpContext){
        const {correo_electronico, contrasena} = request.body()
        const lista=await usuarioService.login(correo_electronico,contrasena)
        return response.json(lista)
    }
=======
   async login({ request, response }) {
  const { correo_electronico, contrasena } = request.body();
  const resultado = await usuarioService.login(correo_electronico, contrasena);

  if (resultado.error) {
    return response.status(400).json(resultado);
  }

  return response.status(200).json(resultado);
  }
>>>>>>> 4838369a99c3d4ba29ce248b8965b08baf07374c

  async listarUsuarios({ response }: HttpContext) {
    try {
      const usuarios = await usuarioService.listar()
      return response.json({ msj: 'lista de usuarios', datos: usuarios })
    } catch (error) {
      return response.json({ error: error.message, messages: defaultMessages  } )
    }
  }

  async listarUsuarioId({ params, response }: HttpContext) {
    try {
      const usuario = await usuarioService.listarId(params.id)
      return response.json({ msj: 'usuario encontrado', datos: usuario })
    } catch (error) {
      return response.json({ error: error.message, messages: defaultMessages  } )
    }
  }

  async actualizarUsuario({ params, request, response }: HttpContext) {
    try {
      const actualizado = await usuarioService.actualizar(params.id, request.body())
      return response.json({ msj: 'usuario actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message, messages: defaultMessages  } )
    }
  }

  async eliminarUsuario({ params, response }: HttpContext) {
    try {
      const resp = await usuarioService.eliminar(params.id)
      return response.json({ msj: resp })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async conteoUsuarios({ response }: HttpContext ) {
    try {
      const resultado = await usuarioService.conteo()
      return response.json({ msj: 'conteo realizado', datos: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export default UsuariosController
