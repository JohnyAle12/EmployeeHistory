
import HistoricoQuery from 'src/infraestruture/repositories/historico-query';
import { IHistoricoMethod } from '../interfaces/response-controller-interface';

class HistoricoAdapter implements IHistoricoMethod {

    private historyQuery: IHistoricoMethod;
    constructor(){
        this.historyQuery = new HistoricoQuery();
    }

    public async getHistoricoEmpleado(empleadoId: number) {
        return this.historyQuery.getHistoricoEmpleado(empleadoId);
    }

}

export default HistoricoAdapter