export interface dataList {
  id: number;
  text: string;
  type: 'blue' | 'yellow' | 'orange' | 'green' | 'brown' | 'purple';
}

export const dataListObj: dataList[] = [
  {
    id: 1,
    text: 'Controle de portas digitais com passagem de parâmetros',
    type: 'blue',
  },
  {
    id: 2,
    text: 'Captando dados de portas digitais e análogicas via http',
    type: 'yellow',
  },
  {
    id: 3,
    text: 'Controlando atuadores via http com controle de passos',
    type: 'orange',
  },
  {
    id: 4,
    text: 'Acionando relés com controle de tempo',
    type: 'green',
  },
  {
    id: 5,
    text: 'Integração de gráficos com sinais análogicos e digitais ',
    type: 'brown',
  },
  {
    id: 6,
    text: 'Integração de dados com firebase e datalog',
    type: 'purple',
  },
];
