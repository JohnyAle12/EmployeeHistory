import { StatusCodes } from "http-status-codes";
import HistoricoUseCase from "src/domain/usecase/historico-usecase";
import { responseFail, responseSuccess } from "../helpers/response";
import { IHistoricoApi, IResponseApi, IHistoricoMethod } from '../interfaces/response-controller-interface';

class HistoricoController implements IHistoricoApi {

    private historyUseCase: IHistoricoMethod;

    constructor(){
        this.historyUseCase = new HistoricoUseCase();
    }

    getHistoricoEmpleado = async (empleadoId: number) => {
        let response: IResponseApi;

        try {
            const result = await this.historyUseCase.getHistoricoEmpleado(empleadoId)
            response = responseSuccess({ data:result }, StatusCodes.OK);
        } catch (error) {
            response = responseFail(error);   
        }

        return response;
    
    }

}

export default HistoricoController;