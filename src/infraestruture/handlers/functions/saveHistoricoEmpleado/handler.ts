import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import { IResponseApi } from 'src/application/interfaces/response-controller-interface';
import schema from './schema';
import HistoricoController from 'src/application/controllers/historico-controller';

const historyController = new HistoricoController();

const saveHistoricoEmpleado: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const response: IResponseApi = await historyController.saveHistoricoEmpleado(+event.pathParameters.empleadoId, {
    sueldoAnterior: event.body.beforeAmount,
    sueldoNuevo: event.body.newAmount,
  });
  return formatJSONResponse(response.statusCode, response);
}

export const main = middyfy(saveHistoricoEmpleado);
