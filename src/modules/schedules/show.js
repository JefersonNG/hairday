import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }) {
  try {

    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach(schedule => {
      const item = document.createElement("li")
      const scheduleHour = dayjs(schedule.when).format("HH:mm")
      const hour = dayjs(schedule.when).hour()

      item.setAttribute("data-id", schedule.id)

      item.innerHTML = `<strong>${scheduleHour}</strong>
              <span>${schedule.name}</span>
              <img
                src="./src/assets/cancel.svg"
                alt="Cancelar"
                class="cancel-icon"
              />`

      if(hour >= 6 && hour <= 12) {
        periodMorning.append(item)
      } else if(hour > 12 && hour <= 18){
        periodAfternoon.append(item)
      } else {
        periodNight.append(item)
      }
    });


  } catch (error) {
    alert("Nao foi possível exibir")
    console.error(error)
  }

}

