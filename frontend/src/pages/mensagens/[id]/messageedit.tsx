import { onUpdate } from "../../../controller/messagecontroller";
import type { messageDataType } from "../../types/messagedatatype";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function MessageEdit() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const msg: messageDataType = location.state?.msg;
    const [editData, setEditData] = useState<messageDataType>(msg || {
        pergunta: "",
        email: "",
        cep: "",
        bairro: "",
        telefone: "",
    });
    
    async function hadleSaveEdit() {
        await onUpdate(Number(id), editData);
        navigate("/mensagens");   
    }
            
    return (
        <div className="flex flex-col justify-center items-center p-8 min-h-screen">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
              <h1 className="font-bold text-shadow-lg text-3xl"> Editar mensagem {id}  </h1>
             <label className="text-left mt-4"> Pergunta: </label>
             <input type="text" value={editData.pergunta}   
                onChange={(e) => setEditData({...editData, pergunta: e.target.value})}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black w-full">
             </input>    
             <label className="text-left mt-4"> Email: </label>
             <input type="text" value={editData.email}   
                onChange={(e) => setEditData({...editData, email: e.target.value})}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black w-full">
             </input>   
             <label className="text-left mt-4"> CEP: </label>
             <input type="text" value={editData.cep}   
                onChange={(e) => setEditData({...editData, cep: e.target.value})}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black w-full">
             </input>   
             <label className="text-left mt-4"> Bairro: </label>
             <input type="text" value={editData.bairro}   
                onChange={(e) => setEditData({...editData, bairro: e.target.value})}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black w-full">
             </input>   
             <label className="text-left mt-4"> Telefone: </label>
             <input type="text" value={editData.telefone}   
                onChange={(e) => setEditData({...editData, telefone: e.target.value})}
                className="border-2 rounded-lg px-3 mt-2 bg-white text-black w-full">
             </input>   
             <button onClick={hadleSaveEdit}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded 
                hover:bg-blue-600 hover:shadow-xl">
                Salvar  Edição
            </button>
            <button onClick={() => navigate("/mensagens")}
                className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded   
                hover:bg-gray-600 hover:shadow-xl">
                Cancelar Edição
            </button>
            </div>
        </div>
    )
}