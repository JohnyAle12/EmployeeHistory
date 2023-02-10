
import { IHistoricoQuery } from 'src/infraestruture/interfaces/respose-query';
import HistoricoQuery from 'src/infraestruture/repositories/historico-query';
import { IHistoricoSueldos } from '../interfaces/historico-interface';
import { IHistoricoMethod } from '../interfaces/response-controller-interface';

class HistoricoAdapter implements IHistoricoMethod {

    private historyQuery: IHistoricoQuery;
    constructor(){
        this.historyQuery = new HistoricoQuery();
    }

    public async getHistoricoEmpleado(empleadoId: number) {
        const query = await this.historyQuery.getHistoricoEmpleado(empleadoId);

        if(!query.Item){
            return null;
        }

        return query.Item.history.L.map( item => {
            const {
                fechaActualizacion,
                sueldoAnterior,
                sueldoNuevo
            } = item.M
            
            return {
                fechaActualizacion: new Date(fechaActualizacion.S),
                sueldoAnterior: +sueldoAnterior.N,
                sueldoNuevo: +sueldoNuevo.N
            }
        });
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) {
        return this.historyQuery.saveHistoricoEmpleado(empleadoId, sueldos);
    }

}

export default HistoricoAdapter