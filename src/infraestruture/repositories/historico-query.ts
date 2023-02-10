import { AttributeValue, GetItemCommand, GetItemCommandInput, GetItemCommandOutput, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
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
        const newInput: AttributeValue = {
            M: {
                fechaActualizacion: {
                    S: (new Date()).toString()
                },
                sueldoAnterior: {
                    N: ""+sueldos.sueldoAnterior
                },
                sueldoNuevo: {
                    N: ""+sueldos.sueldoNuevo
                }
            }
        }

        const query = await this.getHistoricoEmpleado(empleadoId);
        let history = query.Item ? query.Item.history.L : [];
        history.push(newInput);

        const itemCommand: PutItemCommandInput = {
            TableName,
            Item: {
                employeeId: {
                    N: ""+empleadoId
                },
                history: {
                    L: history
                }
            }
        };
        
        const command = new PutItemCommand(itemCommand)
        await client.send(command);
    }

}

export default HistoricoQuery;