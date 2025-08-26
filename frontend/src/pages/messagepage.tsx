import { readMessage, onDelete } from "../controller/messagecontroller";
import type { messageDataType } from "./types/messagedatatype";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MessagePage() {
  const [messages, setMessages] = useState<messageDataType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  function fetchMessages() {
    readMessage()
      .then((data) => {
        console.log(data);
        setMessages(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Erro ao ler as mensagens:", err);
        setError("Erro ao ler as mensagens");
      });
  }

    function handleDelete(id: number) {
        onDelete(id).then(() => {
        fetchMessages();
        });
    }

    function handleEdit(id: number, msg: messageDataType) {
        navigate(`/mensagens/${id}`, { state: { msg } });
    }

  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h1 className="font-bold text-shadow-lg text-3xl"> Mensagens Recebidas  </h1>
        {messages.map((msg) => (
            <div key={msg.id} className="border-b border-gray-300 my-4 pb-4 text-left">
                <p><strong>Pergunta:</strong> {msg.pergunta}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Telefone:</strong> {msg.telefone}</p>
                <p><strong>CEP:</strong> {msg.cep}</p>
                <p><strong>Bairro:</strong> {msg.bairro}</p>   
                <button onClick={() => {handleDelete(msg.id)}}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded 
                    hover:bg-red-600 hover:shadow-xl">
                    Excluir        
                </button> 
                 <button onClick={() => {handleEdit(msg.id, msg)}}
                    className="mt-2 ml-2 bg-purple-500 text-white px-4 py-2 rounded 
                    hover:bg-purple-600 hover:shadow-xl">
                    Editar        
                </button> 
            </div>
        ))}
        {error && <p className="text-red-600">{error}</p>}
        </div>
    </div>
  );
}
