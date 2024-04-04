import { Router } from "express";
import homeRouter from "@/components/employee/routes";

// import { redisCache } from "@/middlewares/redisCache";

const router = Router();

router.use("/",  homeRouter);

export default router;
