import { handlerPath } from '@libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'historicos/{empleadoId}',
        request:{
          schemas:{
            'application/json': schema
          }
        }
      }
    }
  ]
}
