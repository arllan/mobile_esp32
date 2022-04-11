// Estrutura de como os dados estão no banco
export interface IDatabase {
  // esse aqui
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

// estrutura de adicionar um novo dado no banco
export interface IAddDataBase {
  porta: string;
  ligado: string;
  desligado: string;
  statePin: boolean;
}

export interface IUpdateDataBase {
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
