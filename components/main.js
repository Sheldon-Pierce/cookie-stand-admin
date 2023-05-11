import ReportTable from "@/components/reportTable";
import CreateForm from "@/components/createForm";
import {useState} from "react";
import {hours} from "@/app/data";

export default function Main () {

   const [reports, setReports] = useState([]);

    function handleReports(event) {
        event.preventDefault()
        let reportObj = {
            location: event.target.location.value,
            min_cust: event.target.min_cust.value,
            max_cust: event.target.max_cust.value,
            avg_cookies: event.target.avg_cookies.value,
            totals: SalesDataMath(event.target.max_cust.value, event.target.min_cust.value, event.target.avg_cookies.value)
        }
        setReports([...reports, reportObj])
    }

    function SalesDataMath(max, min, avg) {
        let sales_numbers = []
        for (let i = 0; i < hours.length; i++) {
            sales_numbers.push(Math.floor(Math.random() * (max - min) * avg))
        }
        return sales_numbers
    }

    return (
        <>
            <main className='h=2/3 bg-white h-4/5'>
            <div className="flex items-center justify-center bg-white">
                <div className='w-3/5 mt-14 mx-20 rounded-[20px] bg-green-300 mx-15 h-max'>
                    <CreateForm onFormSubmit={handleReports} />
                </div>
            </div>
                {reports.length ?
                    <div className="flex items-center justify-center">
                        <div className='w-3/5 mt-6 mb-6'>
                            <ReportTable listOfReports={reports} />
                        </div>
                    </div>
                    :
                <div className="m-8 text-center h-40 flex items-center justify-center bg-white">
                    <text className="text-center text-3xl font-semibold">
                         Report Table Coming Soon...
                    </text>
                </div>
                }
            </main>
        </>
    )
}

