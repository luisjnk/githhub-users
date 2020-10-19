import React, { useContext, useState, useEffect } from 'react';

import DashboardContext from '../../context/dashboard-context';
import { IStarestRepositoriesResponse } from '../../interfaces/Repository';
import ButtonState from '../../components/Shared/Button/ButtonState';
import Table, { TypeOfTable } from '../../components/Table/Table';

import { HOT_REPOSITORY_BUTTON, HOT_USERS_BUTTON } from '../../utils/contants';
import { IUsers } from '../../interfaces/Users';

import './dashboard-table.scss';

const Dashboard: React.FC = () => {
  const { 
    isHotRepositoriesLoading,
    isTrendingUsersLoading,
    repositoryService,
    setHotRepositoriesLoader,
    userservice,
    setTrendingUserLoader,
    setRepositories,
    setUsers,
    setRepositoiresError,
    setUsersError
  } = useContext(DashboardContext);

  const { getMostStarRatedRepository } = repositoryService()
  const { getTrendingUsers } = userservice()

  useEffect(() => {
    if (isHotRepositoriesLoading) {
      getMostStarRatedRepository()
        .then((starestRepositories: IStarestRepositoriesResponse) => {
          setHotRepositoriesLoader()
          setRepositories(starestRepositories)
        })
        .catch(err => {
          setHotRepositoriesLoader()
          setRepositoiresError()
        });
    }
  }, [isHotRepositoriesLoading]);

  useEffect(() => {
    if (isTrendingUsersLoading) {
      getTrendingUsers()
        .then((trendingUsers: IUsers) => {
          setTrendingUserLoader()
          setUsers(trendingUsers)
        })
        .catch(err => {
          setHotRepositoriesLoader()
          setUsersError()
        });
    }
  }, [isTrendingUsersLoading]);


  return (
    <div >
      <header className={"header"}>
      </header>
      <div className={"container"}>
        <div className={"controls"}>
          <ButtonState isLoading={isHotRepositoriesLoading} name={HOT_REPOSITORY_BUTTON.name} id={HOT_REPOSITORY_BUTTON.id} />
          <Table typeOfTable={TypeOfTable.repository} />
        </div>
        <div className={"controls"}>
          <ButtonState isLoading={isTrendingUsersLoading} name={HOT_USERS_BUTTON.name} id={HOT_USERS_BUTTON.id} />
          <Table typeOfTable={TypeOfTable.users} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
