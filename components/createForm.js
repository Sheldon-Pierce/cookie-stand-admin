export default function CreateForm ({onFormSubmit}) {


    return (
        <>
            <div className='flex justify-center align-center w-full'>
                <form onSubmit={onFormSubmit} className="align-content-center rounded-lg w-fit">
                    <div className='flex justify-between'>
                            <div className='w-full pt-4 flex justify-center align-center'>
                                <text className='font-semibold text-center text-1xl'>
                                        ADD LOCATION
                                </text>
                                <br/>
                                <input
                                    id='location'
                                    type="text"
                                    className='w-fit'
                                    placeholder='Choose Stand Location'
                                />
                            </div>
                            <div className="bg-green-600 w-4/12 mr-8 flex items-center justify-center mt-4 px-16 py-4">
                                <button>
                                        Create Stand
                                </button>
                            </div>
                    </div>
                    <div className="flex justify-between mt-8 mb-6">
                        <div className="m-6">
                            <div className='mx-auto text-center mb-2'>
                                <text className="text-1xl text-center font-semibold">
                                    Minimum Customers per Hour
                                </text>
                            </div>
                            <div>
                                <input
                                    id='min_cust'
                                    type="text"
                                    className= 'p-2 w-full'
                                    placeholder='0'
                                />
                            </div>
                        </div >
                        <div className="m-6">
                            <div className='mx-auto text-center mb-2'>
                                <text className="text-1xl text-center font-semibold">
                                    Maximum Customers per Hour
                                </text>
                            </div>
                            <div>
                                <input id='max_cust' type="text" className='p-2 w-full' placeholder='0' />
                            </div>
                        </div>
                        <div className="m-6">
                            <div className='mx-auto text-center mb-2'>
                                <text className="text-1xl text-center font-semibold">
                                    Average Cookies per Sale
                                </text>
                            </div>
                            <div>
                                <input id='avg_cookies' type="text" className='p-2 w-full' placeholder='0' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}