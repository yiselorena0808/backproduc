import GestionService from '#services/GestionEppService'
import { messages } from '@vinejs/vine/defaults'

const gestionService = new GestionService()

class GestionController {
  async crearGestion({ request, response }) {
    try {
      const datos = request.body()
      const nueva = await gestionService.crear(datos)
      return response.json({ msj: 'gestion creada', datos: nueva })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async listarGestiones({ response }) {
    try {
      const gestiones = await gestionService.listar()
      return response.json({ msj: 'listado', datos: gestiones })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async actualizarEstado({ params, request, response }) {
    try {
      const actualizado = await gestionService.actualizarEstado(params.id, request.body())
      return response.json({ msj: 'estado actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message, messages })
    }
  }

  async eliminarGestion({ params, response }) {
    try {
      const resp = await gestionService.eliminar(params.id)
      return response.json({ msj: resp })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export default GestionController