import axios from "axios";
import type { formData } from "../pages/types/formdatatype";

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

export default onSubmit;
