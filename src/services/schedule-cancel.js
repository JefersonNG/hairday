
import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE"
    })

    console.log("Agendamento cancelado com sucesso")

  } catch (error) {
    alert("Nao foi possível fazer cancelamento")
  }
}