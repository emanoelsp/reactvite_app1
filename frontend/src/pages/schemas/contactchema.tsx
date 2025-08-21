import * as yup from 'yup'

export type formData ={
        pergunta: string,
        email: string,
        cep: string,
        rua: string,
        bairro: string,
        numero: number,
        complemento: string,
        telefone: string,
}

export const ContactSchema = yup.object().shape({
        pergunta:
            yup.string().required('O campo pergunta é obrigatório')
                .min(3, 'O campo pergunta deve ter no minímo 3 caracteres'),
        email:
            yup.string().email('O email não é válido')
                .required('O campo email é obrigatório')
                .min(6, 'O campo email deve ter no minímo 6 caracteres'),
        cep:
            yup.string().required('O campo CEP é obrigatório')
                .min(8, 'O campo CEP deve ter no minímo 8 caracteres'),
        rua:
            yup.string().required('O campo rua é obrigatório')
                .min(3, 'O campo rua deve ter no minímo 3 caracteres'),
        bairro:
            yup.string().required('O campo bairro é obrigatório')
                .min(3, 'O campo bairro deve ter no minímo 3 caracteres'),
        numero:
            yup.number().required('O campo número é obrigatório')
                .min(1, 'O campo número deve ter no minímo 1 caracteres'),
        complemento:
            yup.string().required('O campo complemento é obrigatório')
                .min(3, 'O campo complemento deve ter no minímo 3 caracteres'),
        telefone:
            yup.string().required('O campo telefone é obrigatório')
                .min(3, 'O campo telefone deve ter no minímo 11 digitos')
    })