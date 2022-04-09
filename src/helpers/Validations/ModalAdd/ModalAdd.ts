import * as Yup from 'yup';

/*
    schema de validacao do input do modal de cadastro de novos elementos da lista principal
*/

export const schema = Yup.object().shape({
  inputPino: Yup.string()
    .required('O campo e obrigatório')
    .min(10, '10 caracteres no min.'),
  inputDesligado: Yup.string()
    .required('O campo e obrigatório')
    .min(10, '10 caracteres no min.'),
  inputLigado: Yup.string()
    .required('O campo e obrigatório')
    .min(10, '10 caracteres no min.'),
});
