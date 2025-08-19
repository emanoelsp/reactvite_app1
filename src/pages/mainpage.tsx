import { FaReact, FaRocket } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import WelcomeAlert from "../components/alerts/welcomealert";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <FaReact className="w-16 h-16 text-blue-600 animate-spin mx-auto my-5" />
        <div className="flex gap-5">
          <FcIdea className="hidden sm:inline w-10 h-10 md:w-14 md:h-14 trasition" />
          <h1 className="font-bold text-shadow-lg text-3xl">
            Bem-vindo REACT+VITE+TAILWINDCSS
          </h1>
          <FcIdea className="hidden sm:inline w-10 h-10 md:w-14 md:h-14 trasition" />
        </div>
        <p className="text-sm mt-10">Páginas web interativas e responsivas</p>
        <hr className="border-1 w-full"></hr>
        <p className="text-sm mt-10">Quer saber como tudo funciona:</p>
        <button
          className="group flex items-center justify-center gap-3 px-6 py-4 
                    border-2 rounded-lg mt-2 bg-red-500 text-white mx-auto
                  hover:bg-red-800 shadow-md transition-transform transform hover:scale-105"
          onClick={WelcomeAlert}
        >
          <span
            className="transition-transform duration-500 group-hover:-translate-y-3 
                            group-hover:translate-x-2"
          >
            <FaRocket />
          </span>
          Clique aqui
        </button>
      </div>
    </div>
  );
}
