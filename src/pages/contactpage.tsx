export default function ContactPage() {

    return (
        <main className='flex flex-col items-center p-8 bg-red-300 min-h-screen'>
            <h1 className="font-bold text-shadow-lg text-3xl">
                Entre em contato conosco
            </h1>
            <p className="text-sm mt-10">
                Será um prazer responder suas perguntas
            </p>
            <hr className="border-1 w-full"></hr>
            <p className="text-sm mt-10">
                Digite sua pergunta abaixo:
            </p>
            <input type="text"
                  className="border-2 rounded-lg px-3 mt-2 bg-red-500 text-white">
            </input>
        </main>
    )
}