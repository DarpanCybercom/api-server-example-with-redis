import { Request, Response, NextFunction } from "express";
import { OK } from "http-status/lib";
import redisClient from "../../redis";
import { HomeServices } from "./services";
import { getAppInfoQuery } from "@/types/request/home";
import { apiResponse } from "@/helpers/apiResponse";

const getAppInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appInfoKey = req.query.key as getAppInfoQuery;
    const result = await HomeServices.getAppInfo(appInfoKey);

    res.status(OK).json(apiResponse(result));
  } catch (error) {
    next(error);
  }
};

const getEmployeesInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(req, "req");

    const cachedData = await redisClient.get(req.originalUrl);

    if (cachedData) {
      res.status(OK).json(
        apiResponse({
          data: JSON.parse(cachedData),
          message: "Success Cache DATA",
        }),
      );
      return;
    }

    const result = await HomeServices.getEmployeesInfo();

    await redisClient.set(req.originalUrl, JSON.stringify(result), "EX", 60);

    console.log(result, "result");

    res.status(OK).json(apiResponse({ data: result, message: "Success" }));
  } catch (error) {
    next(error);
  }
};

export default { getAppInfo, getEmployeesInfo };
