import { useState } from "react"
import { Input } from "../../component"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const login = () => {
        setLoading(true)
        const data = {
            username: username,
            password: password,
        }
        axios.post('https://fakestoreapi.com/auth/login', data)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
            .finally(() => {
                setUsername('')
                setPassword('')
                setLoading(false)
            })
    }


    return (
        <div className="flex w-screen h-screen bg-[#FAFAFA]">
            <div className="w-[538px] h-[605px] bg-white m-auto px-[40px] pt-[63px] pb-[37px] rounded-2xl">
                <div className="mb-11">
                    <span className="text-3xl">Login</span>
                    <p className="text-2xl">to get started</p>
                </div>
                <div className="space-y-5 mb-8">
                    <Input value={username} setValue={v => { setUsername(v) }} type="text" placeholder="username" />
                    <Input value={password} setValue={v => { setPassword(v) }} type="password" placeholder="password" />
                </div>
                <button className="text-sm mb-11">Forgot Password?</button>
                <button onClick={login} className="w-full h-[66px] rounded-lg text-white bg-[#0016DF] mb-11">{loading ? "loading" : "continue"}</button>
                <div className="text-sm text-center">
                    <span>New user?</span>
                    <button className="font-semibold">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login