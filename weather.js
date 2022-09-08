#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.js";
import { saveKeyValue } from "./services/storage.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //вывод город
  }
  if (args.t) {
    return saveToken(args.t);
  }
};

initCli();
