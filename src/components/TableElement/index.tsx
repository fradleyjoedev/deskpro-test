import React from 'react';
import { ITableElement } from '##/interfaces/ITableElement';
import { ITableData } from '##/interfaces/ITableData';
import './TableElement.scss';

export const TableElement: React.FunctionComponent<ITableElement> = (data: ITableElement): JSX.Element => {
  return (
    <div className="table spacing">
        {data.columns.map((tableData: ITableData, i: number) => {
          return <ul className="table__column" key={i}>
            <li className="table__column--item">{tableData.heading}</li>
            {tableData.data.map((dataItem: string, i: number) => {
              return <li key={i} className="table__column--item">{dataItem}</li>
            })}
          </ul>
        })}
    </div>      
  );
};

