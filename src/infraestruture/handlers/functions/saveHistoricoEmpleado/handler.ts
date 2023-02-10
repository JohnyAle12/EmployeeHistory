import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import { IResponseApi } from 'src/application/interfaces/response-controller-interface';
import schema from './schema';

const saveHistoricoEmpleado: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const response: IResponseApi = {
    statusCode: 200,
    success: true,
    data: {
      empleadoId: + event.pathParameters.empleadoId,
      beforeAmount: event.body.beforeAmount,
      newAmount: event.body.newAmount,
    },
    message: "save history"
  }
  return formatJSONResponse(response.statusCode, response);
}

export const main = middyfy(saveHistoricoEmpleado);
