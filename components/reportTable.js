import {hours} from "@/app/data";
import useResource from "@/hooks/useResource";
import { ReactComponent as Trash } from 'public/trash.svg'


export default function ReportTable ({listOfReports}) {

    const {resources, loading, createResource, deleteResource} = useResource();

    console.log(listOfReports)
    function footerTotals() {
        let grandTotal = []
        for(let i = 0; i < hours.length; i++){
            let totalAtHour = []
            for(let j = 0; j < listOfReports.length; j++){
                totalAtHour.push(listOfReports[j].hourly_sales[i]);
            }
            grandTotal.push(totalAtHour.reduce((acc, cur) => acc + cur, 0))
        }
        return grandTotal
    }

    function finalTotal() {
        let total = 0
        for(let store of listOfReports) {
            total += store.hourly_sales.reduce((acc, cur) => acc + cur, 0)
        }
        return total
    }


    return (
        <>
            <table className='w-full border border-gray-400'>
                <thead className='bg-green-500'>
                    <tr>
                        <th>
                            Location
                        </th>
                        {hours.map(hour => (
                            <th key={hour}>
                                {hour}
                            </th>
                        ))}
                        <th>
                            Totals
                        </th>
                    </tr>
                </thead>
                <tbody className='border border-gray-400 even:bg-green-200 odd:bg-green-300'>
                    {listOfReports.map(location => (
                        <tr className='border border-gray-400 even:bg-green-200 odd:bg-green-300'>
                            <td className='text-center' key={location}>
                                {location.location}
                                <span onClick={() => deleteResource(location)}> [x] </span>
                            </td>
                            {location.hourly_sales.map(list =>(
                                <td className='text-center border border-gray-400' key='list'>
                                    {list}
                                </td>
                                ))}
                                <td className='text-center'>
                                    {location.hourly_sales.reduce((acc, list) => acc + list, 0)}
                                </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='bg-green-500'>
                    <tr className='font-bold bg-green-500'>
                        <th className='text-center border border-gray-400 bg-green-500'>
                            Totals
                        </th>
                            {footerTotals().map(totals => (
                                <td className='text-center'>
                                    {totals}
                                </td>
                            ))}
                        <th className='text-center'>
                            {finalTotal()}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}