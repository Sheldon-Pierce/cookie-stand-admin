
export default function Home() {

  return (
      <>
        <header className="text-7xl font-semibold p-10 bg-green-500 mx-auto text-left h-40"> Cookie Stand Admin </header>
        <main className='h=2/3 bg-white h-4/5'>
            <div className="flex items-center justify-center bg-white">
                <div className='w-3/5 mt-14 mx-20 rounded-[20px] bg-green-300 mx-15 h-max'>
                    <form className="align-content-center rounded-lg w-fit">
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
                                    <input type="text" className='p-2 w-full' placeholder='50' />
                                </div>
                            </div>
                            <div className="m-6">
                                <div className='mx-auto text-center mb-2'>
                                    <text className="text-3xl text-center font-semibold">
                                        Average Cookies per Sale
                                    </text>
                                </div>
                                <div>
                                    <input type="text" className='p-2 w-full' placeholder='4.7' />
                                </div>
                            </div>
                            <div role='button' className="bg-green-500 w-4/12 mr-8 flex items-center justify-center" >
                                <text className="text-3xl mx-auto text-center font-semibold">
                                    Create
                                </text>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="m-8 text-center h-40 flex items-center justify-center bg-white">
                    <text className="text-center text-3xl font-semibold">
                         Report Table Coming Soon...
                    </text>
                </div>
        </main>
        <footer className="bg-green-500 px-10 py-5 font-semibold h-36 flex items-center justify-left text-3xl"> &copy 2023</footer>
      </>

  )
}
