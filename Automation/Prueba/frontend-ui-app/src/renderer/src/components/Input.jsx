const InputComponent = ({ placeholder, width, height}) => {
    return <input placeholder={placeholder} style={{
        height,
        width
    }} className="border-2 border-zinc-300 rounded-md text-sm placeholder-[4]"/>
}

export default InputComponent