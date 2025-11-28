import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { hoursLoad } from "../form/hours-load"
import { scheduleShow } from "./show"
const selectDate = document.querySelector("#date")

export async function schedulesDay() {
  const date = selectDate.value

  const dailySchedules = await scheduleFetchByDay({date})

  scheduleShow({dailySchedules})

  hoursLoad({date, dailySchedules})
}