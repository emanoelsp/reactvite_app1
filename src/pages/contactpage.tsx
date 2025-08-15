import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { IMaskInput } from 'react-imask';

export default function ContactPage() {
    type formData = {
        pergunta: string,
        email: string,
        cep: string,
        rua: string,
        bairro: string,
        numero: number,
        complemento: string,
        telefone: string,
    }

    const schema = yup.object().shape({
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

    const { control, register, handleSubmit, formState: { errors } }
        = useForm<formData>({ resolver: yupResolver(schema) })

    const onSubmit = (data: formData) => {
        console.log(data)
        // axis post .....
    }

    return (
        <div className='flex flex-col items-center p-8 bg-red-300 min-h-screen'>
            <h1 className="font-bold text-shadow-lg text-3xl">
                Entre em contato conosco
            </h1>
            <p className="text-sm mt-10">
                Será um prazer responder suas perguntas
            </p>
            <hr className="border-1 w-full"></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-sm mt-10">  Digite sua pergunta abaixo: </p>
                <input type="text" {...register('pergunta')}
                    className="border-2 rounded-lg px-3 mt-2 bg-white text-black">
                </input>
                <p className='text-sm bg-red-900 text-white mt-1'>{errors.pergunta?.message}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                        <p className="text-sm mt-2">  Digite seu email: </p>
                        <input type="email" {...register('email')}
                            className="border-2 rounded-lg px-3 mt-2 bg-white text-black">
                        </input>
                        <p className='text-sm bg-red-900 text-white mt-1'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <p className="text-sm mt-2">  Digite seu telefone: </p>
                        <Controller
                            name="telefone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <IMaskInput
                                    {...field}
                                    mask="(00) 00000-0000"
                                    className="border-2 rounded-lg px-3 mt-2 bg-white text-black"
                                    onAccept={(value: string) => field.onChange(value)}
                                />
                            )}
                        />
                        <p className='text-sm bg-red-900 text-white mt-1'>{errors.telefone?.message}</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div >
                        <p className="text-sm mt-2">  CEP: </p>
                         <Controller
                            name="cep"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <IMaskInput
                                    {...field}
                                    mask="00000-000"
                                    className="border-2 rounded-lg px-3 mt-2 bg-white text-black"
                                    onAccept={(value: string) => field.onChange(value)}
                                />
                            )}
                        />
                        <p className='text-sm bg-red-900 text-white mt-1'>{errors.cep?.message}</p>
                    </div>
                    <div >
                        <p className="text-sm mt-2">  Bairro: </p>
                        <input type="text" {...register('bairro')}
                            className="border-2 rounded-lg px-3 mt-2 bg-white text-black">
                        </input>
                        <p className='text-sm bg-red-900 text-white mt-1'>{errors.bairro?.message}</p>

                    </div>
                </div>
                <button type='submit' className='mt-4 px-2 bg-green-800 text-white rounded-full'>
                    Enviar
                </button>
            </form>
        </div>
    )
}