import { Server, createServer } from "http";
import e from "express";
import { exitLog } from "./helpers";
import CONFIG from "./config";
import redisClient from "./redis";

export const startServer = (app: e.Application): Server => {
  const httpServer = createServer(app);

  process
    .on("SIGINT", () => exitLog(null, "SIGINT"))
    .on("SIGQUIT", () => exitLog(null, "SIGQUIT"))
    .on("SIGTERM", () => exitLog(null, "SIGTERM"))
    .on("uncaughtException", (err) => exitLog(err, "uncaughtException"))
    .on("beforeExit", () => exitLog(null, "beforeExit"))
    .on("exit", () => exitLog(null, "exit"));

  return httpServer.listen(
    { port: CONFIG.APP.PORT },
    async (): Promise<void> => {
      redisClient.on("error", (err: any) => {
        exitLog(err, "redisClient");
      });

      redisClient.on("connect", () => {
        console.log("Connected to Redis");
      });

      process.stdout.write(`⚙️ Application Environment: ${CONFIG.APP.ENV}\n`);
      process.stdout.write(`⏱ Started on: ${Date.now()}\n`);
      process.stdout.write(
        `🚀 API Server ready at http://localhost:${CONFIG.APP.PORT}\n`,
      );
    },
  );
};
