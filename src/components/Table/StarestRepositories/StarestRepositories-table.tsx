import React, { memo } from 'react';

import { IStarestRepositoriesResponse } from '../../../interfaces/Repository';
import TESTS_IDS from '../../../utils/constants-testsid';

const StarestRepositories = ({ total_count, items }: IStarestRepositoriesResponse) => {
  return (
    <>
      {total_count > 0 &&
        <tbody data-testid={TESTS_IDS.repositoryTable} className="table-content">
          {items.map(item => {
            return <tr key={item.id} className="table-row">
              <td className="table-data">{item.id}</td>
              <td className="table-data">{item.name}</td>
              <td className="table-data">{item.description}</td>
              <td className="table-data">{item.stargazers_count}</td>
            </tr>
          })}
        </tbody>
      }
    </>
  )
}

export default memo(StarestRepositories)