import { useState } from 'react'
import {
  validateButton
} from '../functions/validateSignUpFields'

const CustomButton = ({
  defaultBackgroundColor,
  defaultTextColor,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
  borderRadius,
  padding,
  text
}) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const defaultButtonStyle = {
    backgroundColor: defaultBackgroundColor,
    color: defaultTextColor,
    padding,
    borderRadius,
    boxShadow: '0 10px 30px -3px rgba(0,0,0, 0.5)'
  }

  const hoverButtonStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
    padding,
    borderRadius,
    borderColor: hoverBorderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 10px 30px -3px rgba(0,0,0, 0.5)'
  }

  const activeButtonStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
    padding,
    borderRadius,
    borderColor: hoverBorderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: 'inset 5px 5px 10px 0 rgba(0, 0, 0, 0.1)'
  }

  return (
    <button
      style={active ? activeButtonStyle : hover ? hoverButtonStyle : defaultButtonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setActive(false)
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={() =>{}
      }
    >
      {text}
    </button>
  )
}

export default CustomButton
