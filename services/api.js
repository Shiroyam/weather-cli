import { getKeyValue } from "./storage.js";
import axios from "axios";

export const getWeather = async (city) => {
  const token = await getKeyValue("token");

  if (!token) {
    throw new Error("Не задан token!");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );

  return data;
};
