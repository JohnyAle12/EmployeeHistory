
import HistoricoQuery from 'src/infraestruture/repositories/historico-query';
import { IHistoricoSueldos } from '../interfaces/historico-interface';
import { IHistoricoMethod } from '../interfaces/response-controller-interface';

class HistoricoAdapter implements IHistoricoMethod {

    private historyQuery: IHistoricoMethod;
    constructor(){
        this.historyQuery = new HistoricoQuery();
    }

    public async getHistoricoEmpleado(empleadoId: number) {
        return this.historyQuery.getHistoricoEmpleado(empleadoId);
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) {
        return this.historyQuery.saveHistoricoEmpleado(empleadoId, sueldos);
    }

}

export default HistoricoAdapter