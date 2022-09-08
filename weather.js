#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printHelp} from "./services/log.js";

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
        //сохранить токен
    }
};

initCli();