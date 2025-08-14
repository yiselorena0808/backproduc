import ActividadLudicaService from '#services/ActividadLudicaService'
import  defaultMessages  from '@vinejs/vine'
import type { HttpContext} from '@adonisjs/core/http'

const actividadLudicaService = new ActividadLudicaService()

class ActividadesLudicasController {
  async crearActividad({ request, response }: HttpContext) {
    try {
      const datos = request.body()
      const nueva = await actividadLudicaService.crear(datos)
      return response.json({ msj: 'actividad creada', datos: nueva })
    } catch (error) {
      return response.json({ error: error.message, messages: defaultMessages  })
    }
  }

  async listarActividades({ response }: HttpContext) {
    try {
      const lista = await actividadLudicaService.listar()
      return response.json({ msj: 'listado de actividades', datos: lista })
    } catch (error) {
      return response.json({ error: error.message, messages: defaultMessages  })
    }
  }
}

export default ActividadesLudicasController