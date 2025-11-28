import dayjs from "dayjs";
import { scheduleNew } from "../../services/scheduleNew";
import { schedulesDay } from "../schedules/load";
const form = document.querySelector('form');
const selectedDate = document.querySelector('#date');
const ClientName = document.querySelector("#client")

const dateToDayInput = dayjs().format('YYYY-MM-DD');

selectedDate.value = dateToDayInput
selectedDate.min = dateToDayInput

form.onsubmit = async (event) => {
    event.preventDefault();
    
    try {
      const name = ClientName.value.trim()
      const hourSelected = document.querySelector(".hour-selected")

      if(hourSelected == null){
        alert("Selecione um horário valido")
      }

      const [hour] = hourSelected.innerText.split(":")
      const when = dayjs(selectedDate.value).add(hour, "hour")
      const id = new Date().getTime().toString()

      await scheduleNew({id, name, when})
      ClientName.value = ""

    } catch(error) {
      console.log(error)
    }

    schedulesDay()
  }