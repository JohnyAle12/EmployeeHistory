import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import { IResponseApi } from 'src/application/interfaces/response-controller-interface';
import HistoricoController from '../../../../application/controllers/historico-controller';

const historyController = new HistoricoController();

const getHistoricoEmpleado: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {

  const response: IResponseApi = await historyController.getHistoricoEmpleado(+event.pathParameters.empleadoId);
  return formatJSONResponse(response.statusCode, response);
}

export const main = middyfy(getHistoricoEmpleado);
