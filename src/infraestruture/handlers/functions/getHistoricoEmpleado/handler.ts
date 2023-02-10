import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import { IResponseApi } from 'src/application/interfaces/response-controller-interface';

const hello: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {

  const response: IResponseApi = {
    statusCode: 200,
    success: true,
    data: {
      empleadoId: + event.pathParameters.empleadoId
    },
    message: "message test"
  }
  return formatJSONResponse(response.statusCode, response);
}

export const main = middyfy(hello);
