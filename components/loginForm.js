import { useAuth } from '@/contexts/auth'

export default function LoginForm () {

    const { login } = useAuth();

    function handleSubmit(){
        event.preventDefault()
        login(event.target.username.value, event.target.password.value)
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className="align-content-center rounded-lg w-fit">
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className="font-bold text-4xl text-center p-8">
                                <text className="p-8">
                                    Create Cookie Stand
                                </text>
                            </div>
                            <div className="mx-3 font-semibold flex items-stretch">
                                <text className='text-3xl p-2'>
                                    Username
                                </text>
                                <input
                                    id='username'
                                    type="text"
                                    className="w-full mx-5"
                                    placeholder='username'
                                />
                            </div>
                            <br/>
                            <div className="mx-3 font-semibold flex items-stretch">
                                <text className='text-3xl p-2'>
                                    Password
                                </text>
                                <input
                                    id='password'
                                    type="text"
                                    className="w-full mx-5"
                                    placeholder='password'
                                />
                            </div>
                            <br/>
                            <div>
                                <>
                                    <button className="p-2 text-white bg-gray-500 rounded">Login</button>
                                </>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}