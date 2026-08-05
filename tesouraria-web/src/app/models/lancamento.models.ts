export type TipoLancamento = 'ENTRADA' | 'SAIDA';

export interface Lancamento {
  id?: number;
  descricao: string;
  valor: number;
  dataLancamento: string;
  tipo: TipoLancamento;
}
