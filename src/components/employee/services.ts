import AppInformation from "@/types/response/AppInformation";
import { HomeDAO } from "@/dao/home";
import { getAppInfoQuery } from "@/types/request/home";

import { Employee } from "@/dao/employee";

export const getAppInfo = async (
  appInfoKey?: getAppInfoQuery,
): Promise<AppInformation> => {
  const homeDAO = new HomeDAO();
  const result = await homeDAO.get(appInfoKey);
  return result;
};

export const getEmployeesInfo = async () => {
  const result = Employee.getAll();
  return result;
};

export const HomeServices = { getAppInfo, getEmployeesInfo };
