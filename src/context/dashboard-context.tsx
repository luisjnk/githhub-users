import * as React from "react";

import { IUserservice, userservice } from "../services/users-service";
import { IRepositoryService, repositoryService } from "../services/repository-service";
import { IStarestRepositoriesResponse } from "../interfaces/Repository";
import { IUsers, IUser, IUserDetails, ITrendingUsersProps } from "../interfaces/Users";

interface IDashboardContext {
  userservice(): IUserservice
  repositoryService(): IRepositoryService,
  isHotRepositoriesLoading: boolean
  setHotRepositoriesLoader(): void
  isTrendingUsersLoading: boolean
  setTrendingUserLoader(): void
  setRepositories(repositories: IStarestRepositoriesResponse): void
  starestRepositories: IStarestRepositoriesResponse,
  setUsers(users: IUsers): void,
  trendingUsers: ITrendingUsersProps,
  setUsersError(): void,
  setRepositoiresError(): void,
  haveHotRepositoresError: boolean,
  haveTrendingUsersError: boolean,
  getUserDetails(items: Array<IUser>): Promise<Array<IUserDetails>>
}

const INITIAL_STATE: IStarestRepositoriesResponse = {
  items: [],
  total_count: 0
}

const INITIAL_USERS_STATE: IUsers = {
  items: [],
  total_count: 0
}

const INITIAL_TRENDINGUSERS_STATE: ITrendingUsersProps = {
  items: [],
  total_count: 0
}

const { createContext, useState, useEffect } = React;
const DashboardContext = createContext({} as IDashboardContext);

export const DashboardContextProvider: React.FC = ({ children }) => {
  const [haveHotRepositoresError, setHaveHotRepositoresError] = useState(false);
  const [haveTrendingUsersError, setrendingUsersError] = useState(false);
  const [isHotRepositoriesLoading, setIsHotRepositoriesLoading] = useState(false);
  const [isTrendingUsersLoading, setIsTrendingUsersLoading] = useState(false);

  const [starestRepositories, setStarestRepositories] = useState<IStarestRepositoriesResponse>(INITIAL_STATE)
  const [trendingUsers, setTrendingUsers] = useState<ITrendingUsersProps>(INITIAL_TRENDINGUSERS_STATE)

  const getUserDetails = async (items: Array<IUser>): Promise<Array<IUserDetails>> => {
    const getUserDetailsPromises: Array<Promise<IUserDetails>> = [];

    items.forEach(item => {
      getUserDetailsPromises.push(userservice().getUserDetails(item.url));
    });
    const usersDetails = await Promise.all(getUserDetailsPromises);
    return usersDetails
  }

  const setRepositories = (repositories: IStarestRepositoriesResponse) => {
    setStarestRepositories(repositories)
  }

  const setUsersGetInterval = (users: IUsers) => {
    setInterval(() => {
      setUsers(users)
    }, 12000)
  }
  const setUsers = async (users: IUsers) => {
    const usersDetails = await getUserDetails(users.items)

    setTrendingUsers({ items: usersDetails, total_count: users.total_count });
    setUsersGetInterval(users);
  }

  const setHotRepositoriesLoader = () => {
    setIsHotRepositoriesLoading(!isHotRepositoriesLoading)
  }

  const setTrendingUserLoader = () => {
    setIsTrendingUsersLoading(!isTrendingUsersLoading)
  }

  const setUsersError = () => {
    setrendingUsersError(true)
  }

  const setRepositoiresError = () => {
    setHaveHotRepositoresError(true)
  }
  return (
    <DashboardContext.Provider
      value={{
        userservice,
        repositoryService,
        isHotRepositoriesLoading,
        isTrendingUsersLoading,
        setHotRepositoriesLoader,
        setTrendingUserLoader,
        setRepositories,
        starestRepositories,
        setUsers,
        trendingUsers,
        setUsersError,
        setRepositoiresError,
        haveHotRepositoresError,
        haveTrendingUsersError,
        getUserDetails
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
