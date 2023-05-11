import {hours} from "@/app/data";

export default function ReportTable ({listOfReports}) {

    console.log(listOfReports)
    function footerTotals() {
        let grandTotal = []
        for(let i = 0; i < hours.length; i++){
            let totalAtHour = []
            for(let j = 0; j < listOfReports.length; j++){
                console.log(totalAtHour)
                totalAtHour.push(listOfReports[j].totals[i]);
            }
            console.log(grandTotal)
            grandTotal.push(totalAtHour.reduce((acc, cur) => acc + cur, 0))
        }
        return grandTotal
    }

    function finalTotal() {
        let total = 0
        for(let store of listOfReports) {
            total += store.totals.reduce((acc, cur) => acc + cur, 0)
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
                            </td>
                            {location.totals.map(list =>(
                                <td className='text-center border border-gray-400' key='list'>
                                    {list}
                                </td>
                                ))}
                                <td className='text-center'>
                                    {location.totals.reduce((acc, list) => acc + list, 0)}
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