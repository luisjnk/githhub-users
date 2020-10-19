import React, { memo } from 'react';

import { ITrendingUsersProps } from '../../../interfaces/Users';
import TESTS_IDS from '../../../utils/constants-testsid';

const TrendingUsers = ({ total_count, items }: ITrendingUsersProps) => {
  return (
    <>
      {total_count > 0 &&
        <tbody data-testid={TESTS_IDS.trendingUsersTable} className="table-content">
          {items.map(item => {
            return <tr key={item.id} className="table-row">
              <td className="table-data">{item.id}</td>
              <td className="table-data">{item.login}</td>
              <td className="table-data"><img src={item.avatar_url} /></td>
              <td className="table-data">{item.followers}</td>
            </tr>
          })}
        </tbody>
      }
    </>
  )
}

  export default memo(TrendingUsers)