export default function CreateForm ({onFormSubmit}) {


    return (
        <>
            <form onSubmit={onFormSubmit} className="align-content-center rounded-lg w-fit">
                <div className="font-bold text-4xl text-center p-8">
                    <text className="p-8">
                        Create Cookie Stand
                    </text>
                </div>
                <div className="mx-3 font-semibold flex items-stretch">
                    <text className='text-3xl p-2'>
                        Location
                    </text>
                    <input
                        id='location'
                        type="text"
                        className="w-full mx-5"
                        placeholder='Seattle'
                    />
                </div>
                <div className="flex justify-between mt-8 mb-6">
                    <div className="m-6">
                        <div className='mx-auto text-center mb-2'>
                            <text className="text-3xl text-center font-semibold">
                                Minimum Customers per Hour
                            </text>
                        </div>
                        <div>
                            <input
                                id='min_cust'
                                type="text"
                                className= 'p-2 w-full'
                                placeholder='4'
                            />
                        </div>
                    </div >
                    <div className="m-6">
                        <div className='mx-auto text-center mb-2'>
                            <text className="text-3xl text-center font-semibold">
                                Maximum Customers per Hour
                            </text>
                        </div>
                        <div>
                            <input id='max_cust' type="text" className='p-2 w-full' placeholder='50' />
                        </div>
                    </div>
                    <div className="m-6">
                        <div className='mx-auto text-center mb-2'>
                            <text className="text-3xl text-center font-semibold">
                                Average Cookies per Sale
                            </text>
                        </div>
                        <div>
                            <input id='avg_cookies' type="text" className='p-2 w-full' placeholder='4.7' />
                        </div>
                    </div>
                    <button className="bg-green-500 w-4/12 mr-8 flex items-center justify-center" >
                            Create
                    </button>
                </div>
            </form>
        </>
    )
}