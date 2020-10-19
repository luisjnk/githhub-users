import React, { memo } from 'react';

import { HEADER_ATTRIBUTES } from '../../../utils/contants';
import { ITableProps, TypeOfTable } from '../Table';

const Header = ({ typeOfTable }: ITableProps) => {

  const handleAtributes = (): Array<string> => {
    if (typeOfTable === TypeOfTable.repository) {
      return HEADER_ATTRIBUTES.REPOSITORIES_TABLE
    }
    if (typeOfTable === TypeOfTable.users) {
      return HEADER_ATTRIBUTES.USERS_TABLE
    }
    return []
  }

  return (
    <thead >
      <tr className="table-header">
        {handleAtributes().map(attribute => {
          return <td key={attribute} className="header__item"><a id={attribute} className="filter__link" >{attribute}</a></td>
        })}
      </tr>
    </thead>
  )
}

export default memo(Header)