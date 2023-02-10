import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";

class HistoricoQuery implements IHistoricoMethod {

    public async getHistoricoEmpleado (empleadoId: number) {
        return []
    }

}

export default HistoricoQuery;