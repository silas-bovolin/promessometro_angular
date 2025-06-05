import { FaseResponse } from "./fase_response.model";

export interface PromessaResponse {
    Titulo: string,
    Descricao: string,
    ConclusaoPorcentagem: number,
    Detalhes: string,
    Fases: FaseResponse[]
}