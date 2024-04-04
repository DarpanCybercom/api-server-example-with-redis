import { NextFunction, Request, Response } from "express";
import { OK } from "http-status/lib";
import redisClient from "../redis";
import { apiResponse } from "@/helpers/apiResponse";

export const redisCache = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(req.originalUrl);

    const cachedData = await redisClient.get(req.originalUrl);

    if (cachedData) {
      return res.status(OK).json(apiResponse(cachedData));
    }

    next();
  } catch (error) {
    console.log(error);

    next(error);
  }
};
