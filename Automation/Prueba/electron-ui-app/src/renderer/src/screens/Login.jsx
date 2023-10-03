import Field from "../components/fields.jsx"
import IconImage from "../assets/yarilyn.jpeg"

const Login = () => {
    return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <section className="w-3/4 flex flex-col items-center gap-12">
                <img src={IconImage} className="w-2/12"></img>
                <h4 className="text-lg font-semibold text-blue-400 font-itim border-bl">Iniciar sesión</h4>
                <Field placeholder={"Input your username"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-500"}/>
                <Field placeholder={"Input your password"} stylesPropsContainer={"w-2/4"} stylesPropsInput={"p-1 border-blue-500"}></Field>
        </section>      
    </section>    )
}

export default Login