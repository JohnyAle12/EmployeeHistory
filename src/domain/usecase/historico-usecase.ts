import { StatusCodes } from "http-status-codes";
import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";
import HistoricoAdapter from "src/application/model-adapters/historico-adapter";
import HttpError from '../../application/exceptions/http-error';

export default class HistoricoUseCase implements IHistoricoMethod {

    private historyAdapter: IHistoricoMethod;
    constructor(){
        this.historyAdapter = new HistoricoAdapter();
    }

    public async getHistoricoEmpleado (empleadoId: number){
        const result = await this.historyAdapter.getHistoricoEmpleado(empleadoId);

        if(result == null || result.length == 0){
            throw new HttpError('el historico del empleado no existe', StatusCodes.NOT_FOUND);
        }

        return result;
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) {
        await this.historyAdapter.saveHistoricoEmpleado(empleadoId, sueldos);
    }

}