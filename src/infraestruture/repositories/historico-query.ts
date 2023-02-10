import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";
import { IHistorico } from '../../application/interfaces/historico-interface';

class HistoricoQuery implements IHistoricoMethod {

    public async getHistoricoEmpleado (empleadoId: number): Promise<IHistorico[]>
    {
        return [
            {
                fechaActualizacion: new Date(),
                sueldoAnterior: 900,
                sueldoNuevo: 100,
            },
            {
                fechaActualizacion: new Date(),
                sueldoAnterior: 300,
                sueldoNuevo: 100,
            },
            {
                fechaActualizacion: new Date(),
                sueldoAnterior: 700,
                sueldoNuevo: 400,
            }
        ]
    }

    public async saveHistoricoEmpleado (empleadoId: number, sueldos: IHistoricoSueldos): Promise<void>
    {

    }

}

export default HistoricoQuery;