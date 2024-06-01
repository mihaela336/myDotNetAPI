import React from 'react'
import { TestDataCompany } from '../Table/TestData'

type Props = {
    config: any;
    data: any;

}


const ItemDetailsList = ({config, data}: Props) => {
    const renderedRows = config.map((row: any) => {
        return(
            <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                        {row.label}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                        {row.subTitle}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {row.render(data)}
                </div>
            </div>
            </li>
        );
    })
  return (
    <div className="bg-white shadow rounded-lg  mr-64 ml-4 mt 4 mb-4 p-4 sm:p-6 h-full w-full">
        <ul className="divide-y divided-gray-200"> {renderedRows}</ul>

    </div>
  )
};

export default ItemDetailsList