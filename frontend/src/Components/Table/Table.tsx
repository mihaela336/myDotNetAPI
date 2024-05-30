import React from 'react';
import { testIncomeStatementData } from './TestData';

const data = testIncomeStatementData //ToDO replace with chatging session data

interface Props {}

type Station =(typeof data)[0];

const configs = [
    {
        label:"year",
        render:(station: Station)=> station.acceptedDate
    },
    {label: "Cost of revenue",
        render: (station: Station)=>station.costOfRevenue
    }
]

const Table = (props: Props) => {
    //dinamically display table rows
  
    const renderedRows = data.map((station)=>{
        return (
            //replace cik with id
            <tr key={station.cik}>
                {configs.map((val:any)=>
                {
                    return (
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                            {val.render(station)}
                        </td>
                    );

                })}

                
                </tr>
          );

    }
)
    //dinamically display table headers
    const renderedHeadder= configs.map((config:any)=>{
        return (
            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                key={config.label}
                >{config.label}
            </th>
        )

    })

    
    return <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <table>
            <thead className="min-w-full divide-y divide=gray-200 m-5">
                {renderedHeadder}
            </thead>
            <tbody >{renderedRows}</tbody>
        </table>
    </div>
}

export default Table