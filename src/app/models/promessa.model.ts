import { PromessaItem } from "./promessa-item.model"

export interface Promessa {
    id: number,
    titulo: string,
    descricao: string,
    porcentagem: number,
    detalhe: string,
    itens?: PromessaItem[]
}