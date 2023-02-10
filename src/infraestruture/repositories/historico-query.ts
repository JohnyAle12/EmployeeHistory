import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import { IHistoricoQuery } from "../interfaces/respose-query";
import client from "./dynamo-connection";

const TableName = 'employee-history';

class HistoricoQuery implements IHistoricoQuery {

    public async getHistoricoEmpleado (empleadoId: number): Promise<GetItemCommandOutput>
    {
        const inputParams: GetItemCommandInput = {
            TableName,
            Key: {
                employeeId: {
                    N: ""+empleadoId
                }
            }
        }

        const command = new GetItemCommand(inputParams);
        const result = await client.send(command);
        return result;
    }

    public async saveHistoricoEmpleado (empleadoId: number, sueldos: IHistoricoSueldos): Promise<void>
    {

    }

}

export default HistoricoQuery;