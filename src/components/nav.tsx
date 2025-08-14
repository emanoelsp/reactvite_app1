import { Link } from "react-router-dom"

export default function Nav(){
    
    return(
        <nav className="flex justify-center">
            <ul className="flex gap-10 text-sm">
                <li className="hover:bg-gray-500"> <Link to="/"> Início </Link></li>
                <li className="hover:bg-gray-500"> Sobre </li>
                <li className="hover:bg-gray-500"> Serviços </li>
                <li className="hover:bg-gray-500"> <Link to="/contatos"> Contatos </Link> </li>
            </ul>
        </nav>
    )
}