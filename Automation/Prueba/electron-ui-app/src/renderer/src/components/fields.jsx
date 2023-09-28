const Field = ({placeholder, width, height, color}) =>{
    return(
        <div>
            <input type="text" width={width} height={height} placeholder={placeholder} color={color}/>
        </div>
    )
}

export default Field