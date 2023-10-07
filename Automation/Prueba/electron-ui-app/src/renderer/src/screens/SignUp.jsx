import { Link } from "react-router-dom"
import Field from "../components/fields"
import IconImage from "../assets/yarilyn.jpeg"
import CustomButton from "../components/button"


const SignUp = () =>{
    return (
        <form className="w-full flex flex-col items-center gap-8" onSubmit={(e) => e.preventDefault()}>
            <img src={IconImage} className="w-2/12"></img>
            <div className="flex flex-row items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-blue-950">
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5
                        23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33
                        23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33
                        0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5
                        56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0
                        56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33
                        23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640ZM480-400q-33
                        0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5
                        56.5T480-400Zm40 240v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8
                        9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37
                        37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
                </svg>
                <h4 className="text-2xl font-semibold font-onest p-0 h-3/4 text-blue-950">Sign up</h4>
            </div>

            <div className="flex flex-row gap-9 place-content-center w-full">
                <label htmlFor="register-name-input">Full name: </label>
                <Field typeInput={"text"} placeholder={"Input your full name"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-950"} key={"register-name-input"}/>
            </div>
            <div className="flex flex-row gap-16 place-content-center w-full">
                <label htmlFor="register-email-input">Email: </label>
                <Field typeInput={"email"} placeholder={"Input your email"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-950"} key={"register-email-input"}/>
            </div>
            <div className="flex flex-row gap-9 place-content-center w-full">
                <label htmlFor="register-password-input">Password: </label>
                <Field typeInput={"password"} placeholder={"Input your password"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-950"} key={"register-password-input"} borderColor={"#172554"}/>
            </div>

            <div className="flex flex-row gap-2 place-content-center w-full">
                <label htmlFor="register-password-input" className=" -ml-8">Confirm
                 password: </label>
                <Field typeInput={"password"} placeholder={"Input your password"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-950"} key={"register-password-input"} borderColor={"#172554"} />
            </div>
            <CustomButton text={"Register"} padding={'10px'} borderRadius={'5px'} defaultBackgroundColor={'#172554'} defaultTextColor={'white'} hoverBackgroundColor={'white'} hoverTextColor={'#172554'} hoverBorderColor={'#172554'}/>
            <Link to={"/"}>Return to login</Link>
        </form>
    )
}

export default SignUp