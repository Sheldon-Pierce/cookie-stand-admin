import ReportTable from "@/components/reportTable";
import CreateForm from "@/components/createForm";

export default function Main ({reports, handlereports}) {

    console.log(reports)

    return (
        <>
            <main className='h=2/3 bg-white h-4/5'>
            <div className="flex items-center justify-center bg-white">
                <div className='w-2/4 mt-14 mx-20 rounded-[20px] bg-green-300 mx-15 h-max'>
                    <CreateForm onFormSubmit={handlereports} />
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

