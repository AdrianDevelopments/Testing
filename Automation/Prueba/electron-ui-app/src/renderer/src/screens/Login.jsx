import Field from "../components/fields.jsx"
import IconImage from "../assets/yarilyn.jpeg"
import { useState } from "react"

const defaultButtonStyle = {
    backgroundColor: '#60A5FA',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: "0 10px 30px -3px rgba(0,0,0, 0.5)",
}

const hoverButtonStyle = {
    backgroundColor: 'white',
    color: '#60A5FA',
    padding: '10px',
    borderRadius: '5px',
    borderColor: '#60A5FA',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: "0 10px 30px -3px rgba(0,0,0, 0.5)",
}

const activeButtonStyle = {
    backgroundColor: 'white',
    color: '#60A5FA',
    padding: '10px',
    borderRadius: '5px',
    borderColor: '#60A5FA',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: "inset 5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
}

const Login = () => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <section className="w-3/4 flex flex-col items-center gap-12">
                <img src={IconImage} className="w-2/12"></img>
                <article className="flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-blue-400">
                        <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" className="h-3/4"/>
                    </svg>
                    <h4 className="text-2xl font-semibold text-blue-400 font-itim p-0 h-3/4">Sign in</h4>
                </article>
                
                <div className="flex flex-row gap-14 place-content-center w-full">
                    <label htmlFor="login-username-input">E-mail:</label>     
                    <Field typeInput={"email"} placeholder={"Input your email"} stylesPropsContainer={"w-1/2"} stylesPropsInput={"p-1 border-blue-500"} key={"login-username-input"}/>
                </div>

                <div className="flex flex-row gap-9 place-content-center w-full">
                    <label htmlFor="password-username-input">Password:</label>     
                    <Field typeInput={"password"} placeholder={"Input your password"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-500"} key={"login-password-input"}></Field>
                </div> 
                <a href="" className="text-blue-400 underline hover:text-blue-500">You do not have an account? Sign up</a>
                <button style={ active ? activeButtonStyle : (hover? hoverButtonStyle : defaultButtonStyle)}
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => {
                        setHover(false); 
                        setActive(false);}} 
                    onMouseDown={() => setActive(true)}
                    onMouseUp={() => setActive(false)}>
                    Access
                </button>
        </section>      
    </section>    )
}

export default Login