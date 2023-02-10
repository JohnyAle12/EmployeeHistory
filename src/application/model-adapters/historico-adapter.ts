
import { IHistoricoMethod } from '../interfaces/response-controller-interface';

class HistoricoAdapter implements IHistoricoMethod {

    constructor(){
    }

    public async getHistoricoEmpleado(empleadoId: number) {
        return []
    }

}

export default HistoricoAdapter