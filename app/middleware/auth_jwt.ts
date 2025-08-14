import Jwt from 'jsonwebtoken';
import type { HttpContext} from '@adonisjs/core/http'

const SECRET=process.env.jwt_secret || 'sstrict';
export default class AuthJwt{
    async handle({request,response}: HttpContext, next: any){
        const authheader = request.header('Authorization');
        if (!authheader) {
  throw new Error('Authorization header missing')
}
        const token = authheader.replace('Bearer', '').trim()
        if (!token){
            return response.unauthorized({message:"Falta un token"})
        } else {
            try {
                const jwtcoded = Jwt.verify(token, SECRET)
                request.updateBody({authUsuario: jwtcoded})
                await next()
            } catch (error) {
                return response.unauthorized({message:"Token invalido"})
            }
        }
    }
}