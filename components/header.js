import { useAuth } from '@/contexts/auth'

export default function Header ({username}) {

    const { user, logout } = useAuth();
    console.log(username.username)

    return (
        <>
            <header className="text-7xl font-semibold p-10 bg-green-500 mx-auto text-left h-40">
                <div className='flex justify-between'>
                    <text>
                        Cookie Stand Admin
                    </text>
                    <div className='flex justify-center'>
                        <text className='bg-green-200 rounded text-sm align-right px-2 py-1 m-4'>
                            Welcome {username.username}
                        </text>
                        <button onClick={logout} className='bg-green-700 rounded text-sm align-right px-2 py-1 m-4'>
                            Sign Out
                        </button>
                        <button className='bg-white rounded text-sm align-right px-2 py-1 m-4'>
                            Overview
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

