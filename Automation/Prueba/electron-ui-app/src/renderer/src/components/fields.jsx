import { useState } from "react";
import  SeeIcon  from "../components/seeIcon.jsx";

const Field = ({ typeInput, placeholder, stylesPropsContainer, stylesPropsInput, borderColor}) => {
  const [seePassword, setSeePassword] = useState(true)

  return typeInput !== "password" ? 
   (
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input type={typeInput} placeholder={placeholder} className={`border-solid border rounded-md w-full ${stylesPropsInput}`} /> 
    </div>
  ) :
  (
    seePassword?
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input type={"password"} placeholder={placeholder} className={`border-solid border border-r-0 rounded-l-md w-full ${stylesPropsInput}`} /> 
      <SeeIcon seePassword={seePassword} setSeePassword={setSeePassword} borderColor={borderColor}></SeeIcon>
    </div>
    :
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input type={"text"} placeholder={placeholder} className={`border-solid border border-r-0 rounded-l-md w-full ${stylesPropsInput}`} /> 
      <SeeIcon seePassword={seePassword} setSeePassword={setSeePassword} borderColor={borderColor}></SeeIcon>
    </div>
  )
}

export default Field
