import React from 'react';
import { ITableElement } from '##/interfaces/ITableElement';
import { ITableData } from '##/interfaces/ITableData';

export const TableElement: React.FunctionComponent<ITableElement> = (data: ITableElement): JSX.Element => {
  return (
    <>
        {data.columns.map((tableData: ITableData, i: number) => {
          return <ul>
            <li key={i}>{tableData.heading}</li>
            {tableData.data.map((dataItem: string, i: number) => {
              return <li key={i}>{dataItem}</li>
            })}
          </ul>
        })}
    </>      
  );
};

