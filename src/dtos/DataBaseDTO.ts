// Estrutura de como os dados estão no banco
export interface IDatabase {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: false;
}

// estrutura de adicionar um novo dado no banco
export interface ISetDataBase {
  key: string;
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

export interface IUpdateDataBase {
  key: string;
  index: number;
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

// estrutura de como fazer o get no banco
export type IGetDataBase = string;

// estrutura de dados para deletar
export type IDeleteDataBase = string;

//estrutura de dados para deletar uma posição no banco pelo index
export type IDeletePositionBase = {
  key: string;
  index: number;
};
