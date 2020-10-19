import React, { useContext } from 'react';

import DashboardContext from '../../context/dashboard-context';
import TrendingUsers from './TrendingUsers/TrendingUsers-table';
import StarestRepositories from './StarestRepositories/StarestRepositories-table';
import Header from './Header/Header';
import EmptyComponent from '../Shared/Empty/Empty';
import Error from '../Shared/Error/Error';

export enum TypeOfTable {
  repository = 0,
  users = 1
}

export type ITableProps = {
  typeOfTable: number
}
const Table = ({ typeOfTable }: ITableProps) => {
  const {
    trendingUsers,
    starestRepositories
  } = useContext(DashboardContext);

  return (
    < div >
      <table className="table">
        <Header typeOfTable={typeOfTable} />
        {typeOfTable === TypeOfTable.repository &&
          <StarestRepositories total_count={starestRepositories.total_count} items={starestRepositories.items} />
        }

        {typeOfTable === TypeOfTable.users &&
          <TrendingUsers total_count={trendingUsers.total_count} items={trendingUsers.items} />
        }

      </table>
        <StatusFragment typeOfTable={typeOfTable} />
    </div >
  )
}

const StatusFragment = ({ typeOfTable }: ITableProps) => {
  const {
    trendingUsers,
    starestRepositories,
    haveTrendingUsersError,
    haveHotRepositoresError
  } = useContext(DashboardContext);


  return (
    <>
      {typeOfTable === TypeOfTable.repository && starestRepositories.total_count <= 0 && !haveHotRepositoresError && <EmptyComponent />}
      {typeOfTable === TypeOfTable.repository && haveHotRepositoresError && <Error />}

      {typeOfTable === TypeOfTable.users && trendingUsers.total_count <= 0 && !haveTrendingUsersError && <EmptyComponent />}
      {typeOfTable === TypeOfTable.users && haveTrendingUsersError && <Error />}
    </ >
  )
}


export default Table;