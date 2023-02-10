import { StatusCodes } from "http-status-codes";
import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";
import HistoricoQuery from "src/infraestruture/repositories/historico-query";
import HttpError from '../../application/exceptions/http-error';

export default class HistoricoUseCase implements IHistoricoMethod {

    private historyQuery: IHistoricoMethod;
    constructor(){
        this.historyQuery = new HistoricoQuery();
    }

    public async getHistoricoEmpleado (empleadoId: number){
        const result = await this.historyQuery.getHistoricoEmpleado(empleadoId);

        if(result == null || result.length == 0){
            throw new HttpError('el historico del empleado no existe', StatusCodes.NOT_FOUND);
        }

        return result;
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) {
        
    }

}