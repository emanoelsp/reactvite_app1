export default function Footer(){

const data = new Date()
const ano = data.getFullYear()

    return(
        <footer className="bg-gray-700 text-white text-center py-6 ">
            <p className="text-lg">
                &copy; Todos direitos reservados.
                &reg; Marca registrada
            </p>
            <p className="text-sm"> 
                UniSENAI, {ano}
            </p>
        </footer>
    )
}