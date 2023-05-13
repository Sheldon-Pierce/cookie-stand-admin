import {hours} from "@/app/data";
import useResource from "@/hooks/useResource";
import { ReactComponent as Trash } from 'public/trash.svg'


export default function ReportTable ({listOfReports}) {

    const {resources, loading, createResource, deleteResource} = useResource();

    console.log(listOfReports)
    console.log(resources)

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
                    {resources.map(location => (
                        <tr className='border border-gray-400 even:bg-green-200 odd:bg-green-300'>
                            <td className='text-center' key={location.id}>
                                {location.location}
                                <span onClick={() => deleteResource(location.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
</svg>
                                </span>
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