import * as Yup from 'yup';

export interface schemaValidate {
  inputDesligado: string;
  inputLigado: string;
}
/*
    schema de validacao do input do modal de cadastro de novos elementos da lista principal
*/

export const schema = Yup.object().shape<schemaValidate | any>({
  inputDesligado: Yup.string()
    .required('O campo e obrigatório')
    .min(3, '3 caracteres no min.'),
  inputLigado: Yup.string()
    .required('O campo e obrigatório')
    .min(3, '3 caracteres no min.'),
});
