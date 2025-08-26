import axios from "axios";
import type { formData } from "../pages/types/formdatatype";
import type { messageDataType } from "../pages/types/messagedatatype";

const onSubmit = async (data: formData) => {
  console.log(data);
  try {
    const rs = await axios.post("http://localhost:3001/mensagens", data);
    if (rs.status === 201) {
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar a mensagem.");
    }
  } catch (error) {
    console.error("Erro ao enviar a mensagem:", error);
    alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
  }
};

export { onSubmit };

const readMessage = async () => {
  try {
    const rs = await axios.get("http://localhost:3001/mensagens");
    return rs.data;
  } catch (error) {
    console.error("Erro ao ler as mensagens:", error);
    return [];
  }
}

export { readMessage };

const onDelete = async (id: number) => {
    try {
        const rs = await axios.delete(`http://localhost:3001/mensagens/${id}`);
        if (rs.status === 204) {
            alert("Mensagem deletada com sucesso!");
        } else {
            alert("Erro ao deletar a mensagem.");
        }
    } catch (error) {
        console.error("Erro ao deletar a mensagem:", error);
        alert("Erro ao deletar a mensagem. Tente novamente mais tarde.");
    }
}

export { onDelete };

const onUpdate = async (id: number, data: messageDataType) => {
    try {
        const rs = await axios.put(`http://localhost:3001/mensagens/${id}`, data);
        if (rs.status === 200) {
            alert("Mensagem atualizada com sucesso!");
        } else {
            alert("Erro ao atualizar a mensagem.");
        }
    } catch (error) {
        console.error("Erro ao atualizar a mensagem:", error);
        alert("Erro ao atualizar a mensagem. Tente novamente mais tarde.");
    }
}

export { onUpdate };



