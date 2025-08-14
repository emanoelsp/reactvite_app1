export default function MainPage() {

    return (
        <main className='flex flex-col items-center p-8 bg-red-300 min-h-screen'>
            <h1 className="font-bold text-shadow-lg text-3xl">
                Bem-vindo REACT+VITE+TAILWINDCSS
            </h1>
            <p className="text-sm mt-10">
                Páginas web interativas e responsivas
            </p>
            <hr className="border-1 w-full"></hr>
            <p className="text-sm mt-10">
                Quer saber como tudo funciona:
            </p>
            <label className="border-2 rounded-lg px-3 mt-2 bg-red-500 text-white">
                Clique aqui
            </label>
        </main>
    )
}