import * as Yup from 'yup';

export interface schemaValidate {
  inputPino: string;
  inputDesligado: string;
  inputLigado: string;
}
/*
    schema de validacao do input do modal de cadastro de novos elementos da lista principal
*/

export const schema = Yup.object().shape<schemaValidate | any>({
  inputPino: Yup.string()
    .required('O campo e obrigatório')
    .min(1, '1 caracteres no min.')
    .max(2, '2 caracteres no max'),
  inputDesligado: Yup.string()
    .required('O campo e obrigatório')
    .min(3, '3 caracteres no min.'),
  inputLigado: Yup.string()
    .required('O campo e obrigatório')
    .min(3, '3 caracteres no min.'),
});
