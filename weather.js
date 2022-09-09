#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.js";
import { getKeyValue, saveKeyValue } from "./services/storage.js";
import { getWeather } from "./services/api.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Не передан город");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("Город сохранен");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const city = (await getKeyValue("city"))
      ? await getKeyValue("city")
      : "moscow";
    const weather = await getWeather(city);
    printWeather(weather, "");
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Неверно указан город!");
    } else if (error?.response?.status === 401) {
      printError("Неверно указан токен!");
    } else {
      printError(e.message);
    }
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
};

initCli();
