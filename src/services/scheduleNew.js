import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, name, when})
    })

    console.log("Cadastro com sucesso")

  } catch(error) {
    console.log('Não foi possível cadastrar agendamento' + error)
  }
}