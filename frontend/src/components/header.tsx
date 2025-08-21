import React, { Suspense } from "react";

const Nav = React.lazy(() => import("./nav"));
import { FaUser, FaSignInAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white">
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="text-2xl font-extrabold border-1 rounded-full px-4">
          U
        </div>
        <div className="flex space-x-5 text-sm">
          <button className="flex items-center gap-2 hover:text-red-300 trasition">
            <FaUser className="w-5 h-5" />
            <span className="hidden sm:inline"> Cadastrar </span>
          </button>
          <button className="flex items-center gap-2 hover:text-red-300 trasition">
            <FaSignInAlt className="w-5 h-5" />
            <span className="hidden sm:inline"> Logar </span>
          </button>
        </div>
      </div>
      <div>
        <Suspense fallback={<div> Carregando .... </div>}>
            <Nav />
        </Suspense>
      </div>
    </header>
  );
}









