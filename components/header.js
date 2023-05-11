export default function Header () {

    return (
        <>
            <header className="text-7xl font-semibold p-10 bg-green-500 mx-auto text-left h-40">
                <div className='flex justify-between'>
                    <text>
                        Cookie Stand Admin
                    </text>
                    <div className='flex justify-center'>
                        <button className='bg-white rounded text-sm align-right px-2 py-1 m-4'>
                            Overview
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

