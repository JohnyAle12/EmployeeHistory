import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";

class HistoricoQuery implements IHistoricoMethod {

    public async getHistoricoEmpleado (empleadoId: number) {
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

}

export default HistoricoQuery;