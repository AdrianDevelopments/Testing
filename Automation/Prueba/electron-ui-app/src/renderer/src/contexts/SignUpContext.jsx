import { createContext, useReducer } from 'react'

const initialFormState = {
  nameValue: '',
  emailValue: '',
  passwordValue: '',
  confirmPasswordValue: '',
  buttonValue: false
}

export const SignUpContext = createContext([])

const signUpReducer = (state, action) => {
  switch (action.field) {
    case 'name': {
      return {
        ...state,
        nameValue: action.value
      }
    }
    case 'email': {
      return {
        ...state,
        emailValue: action.value
      }
    }
    case 'password': {
      return {
        ...state,
        passwordValue: action.value
      }
    }
    case 'confirmPassword': {
      return {
        ...state,
        confirmPasswordValue: action.value
      }
    }
    case 'button': {
      return {
        ...state,
        buttonValue: action.value
      }
    }
    default: {
      return state
    }
  }
}

const SignUpState = ({ children }) => {
  const [state, dispatch] = useReducer(signUpReducer, initialFormState)

  return <SignUpContext.Provider value={[state, dispatch]}>{children}</SignUpContext.Provider>
}

export default SignUpState
