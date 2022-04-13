import * as Yup from 'yup';

/*
    schema de validacao do input do modal de cadastro de IP
*/

export interface schemaValidate {
  input: string;
}

export const schema = Yup.object().shape<schemaValidate | any>({
  input: Yup.string()
    .required('O campo e obrigatório')
    .min(10, '10 caracteres no min.')
    .trim('Não e permitido caracteres de espaço')
    .strict(true),
});
