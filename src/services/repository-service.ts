import { IStarestRepositoriesResponse } from "../interfaces/Repository";
import { GITHUB } from "../utils/contants";

import HttpRequests from "./HttpRequests";
import HttpConfig from "./HttpConfig";
import { getLastMonth } from "../utils/date";

export interface IRepositoryService {
  getMostStarRatedRepository(): Promise<IStarestRepositoriesResponse>
}

export const repositoryService = (): IRepositoryService => {
  const last_month = getLastMonth();

  const constructUrl = () => (
    `${GITHUB.REPOSITORY.URL_PREFIX}${last_month}${GITHUB.REPOSITORY.URL_SUFIX}`
  )

  const getMostStarRatedRepository = async (): Promise<IStarestRepositoriesResponse> => {
    
    const newUrl = constructUrl();
    const config = HttpConfig().construct();

    const res = await HttpRequests().get(newUrl, config);

    return res;
  }

  return {
    getMostStarRatedRepository
  }
}