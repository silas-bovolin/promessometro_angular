import { VereadorResponse } from "./vereador_response.model";

export interface SigilometroResponse {
    Vereadores: VereadorResponse[];
    QuantidadeRequerimentosRejeitados: number;
    QuantidadeRequerimentosAceitos: number;
}