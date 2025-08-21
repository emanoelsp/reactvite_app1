import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";
import { type formData, ContactSchema } from "./schemas/contactchema";

export default function ContactPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(ContactSchema) });

  const onSubmit = (data: formData) => {
    console.log(data);
    // axis post .....
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h1 className="font-bold text-shadow-lg text-3xl">
          Entre em contato conosco
        </h1>
        <p className="text-sm mt-10">Será um prazer responder suas perguntas</p>
        <hr className="border-1 w-full"></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 mx-16 md:mx-10">
            <p className="text-sm mt-10"> Digite sua pergunta abaixo: </p>
            <input
              type="text"
              {...register("pergunta")}
              className="border-2 rounded-lg px-3 mt-2 bg-white text-black"
            ></input>
            <p className="text-sm text-red-700 mt-1">
              {errors.pergunta?.message}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p className="text-sm mt-2"> Digite seu email: </p>
              <input
                type="email"
                {...register("email")}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black"
              ></input>
              <p className="text-sm text-red-700 mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <p className="text-sm mt-2"> Digite seu telefone: </p>
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
              <p className="text-sm text-red-700 mt-1">
                {errors.telefone?.message}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p className="text-sm mt-2"> CEP: </p>
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
              <p className="text-sm text-red-700 mt-1">{errors.cep?.message}</p>
            </div>
            <div>
              <p className="text-sm mt-2"> Bairro: </p>
              <input
                type="text"
                {...register("bairro")}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black"
              ></input>
              <p className="text-sm text-red-700 mt-1">
                {errors.bairro?.message}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-green-800 text-white rounded-full
                    hover:cursor-progress hover:bg-green-600 hover:text-xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
