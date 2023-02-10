import { IHistoricoApi, IResponseApi } from "../interfaces/response-controller-interface"

class HistoricoController implements IHistoricoApi {

    constructor(){
    }

    getHistoricoEmpleado = async (empleadoId: number) => {

        let response: IResponseApi;

        return response;
    
    }

}

export default HistoricoController;