import { createContext, useReducer, useEffect } from 'react'

const initialFormState = {
  nameValue: '',
  emailValue: '',
  passwordValue: '',
  confirmPasswordValue: '',
  buttonValue: false
}

export const SignUpContext = createContext([])

const signUpReducer = (state, action) => {
  if (!action.field) {
    return {
      ...state,
      buttonValue: action.value
    }
  } else {
    return {
      ...state,
      [action.field]: action.value
    }
  }
}

const SignUpState = ({ children }) => {
  const [state, dispatch] = useReducer(signUpReducer, initialFormState)

  return <SignUpContext.Provider value={[state, dispatch]}>{children}</SignUpContext.Provider>
}

export default SignUpState
