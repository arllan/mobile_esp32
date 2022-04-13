import {screenNames} from './../../routes/screenNames';

export interface IdataList {
  id: number;
  text: string;
  type: 'blue' | 'yellow' | 'orange' | 'green' | 'brown' | 'purple';
  router: string;
}

export const dataListObj: IdataList[] = [
  {
    id: 1,
    text: 'Controle de portas digitais com passagem de parâmetros',
    type: 'blue',
    router: screenNames.exemplo,
  },
  {
    id: 2,
    text: 'Captando dados de portas digitais e análogicas via http',
    type: 'yellow',
    router: screenNames.exemplo,
  },
  {
    id: 3,
    text: 'Controlando atuadores via http com controle de passos',
    type: 'orange',
    router: screenNames.exemplo,
  },
  {
    id: 4,
    text: 'Acionando relés com controle de tempo',
    type: 'green',
    router: screenNames.exemplo,
  },
  {
    id: 5,
    text: 'Integração de gráficos com sinais análogicos e digitais ',
    type: 'brown',
    router: screenNames.exemplo,
  },
  {
    id: 6,
    text: 'Integração de dados com firebase e datalog',
    type: 'purple',
    router: screenNames.exemplo,
  },
];
