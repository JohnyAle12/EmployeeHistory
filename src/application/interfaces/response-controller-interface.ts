import { StatusCodes } from "http-status-codes";
import { IHistorico } from "./historico-interface";

export interface IResponseApi {
    statusCode: StatusCodes;
    success: boolean;
    data: any;
    message: string;
};

export interface IResponseBody {
    data?: any;
    message?: string;
}

export interface IHistoricoMethod {
    getHistoricoEmpleado: (empleadoId: number) => Promise<IHistorico[]>;
}

export interface IHistoricoApi {
    getHistoricoEmpleado: (empleadoId: number) => Promise<IResponseApi>
}