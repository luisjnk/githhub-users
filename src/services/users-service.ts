import { IUsers, IUserDetails } from "../interfaces/Users";
import { GITHUB } from "../utils/contants";

import HttpRequests from "./HttpRequests";
import HttpConfig from "./HttpConfig";
import { getLastMonth } from "../utils/date";

export interface IUserservice {
  getTrendingUsers(): Promise<IUsers>,
  getUserDetails(url: string): Promise<IUserDetails>
}

export const userservice = (): IUserservice => {

  const constructUrl = () => {
    const last_month = getLastMonth();

    return `${GITHUB.USERS.URL_PREFIX}${last_month}${GITHUB.USERS.URL_SUFIX}`;
  }

  const getUserDetails = async (url: string): Promise<IUserDetails> => {

    const config = HttpConfig().construct();
    const res = await HttpRequests().get(url, config);
    return res;
  }

  const getTrendingUsers = async (): Promise<IUsers> => {
    const url = constructUrl();
    const config = HttpConfig().construct();

    const res = HttpRequests().get(url, config);
    return res;
  }

  return {
    getTrendingUsers,
    getUserDetails
  }
}