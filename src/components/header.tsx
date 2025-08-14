import Nav from "./nav"

export default function Header(){

    return(
        <header className="bg-gray-700 text-white">
            <div className="flex justify-between items-center px-6 py-4 ">
                <div className="text-2xl font-extrabold border-1 rounded-full px-4">
                    U
                </div>
                <div className="space-x-5 text-sm">
                    <button>
                        Cadastrar
                    </button>
                    <button>
                        Logar
                    </button>
                </div>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}