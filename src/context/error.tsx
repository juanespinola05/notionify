import { createContext, useContext, useReducer } from 'react'

const SET_ERROR = 'SET_ERROR'
const REMOVE_ERROR = 'REMOVE_ERROR'

interface State {
  error: string
}

const initialState: State = {
  error: ''
}

function errorReducer (state: State, action: any): State {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    case REMOVE_ERROR:
      return { ...initialState }
    default:
      return state
  }
}

const ErrorContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>({
  state: initialState, dispatch: () => null
})

const ErrorProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(errorReducer, initialState)
  const value = { state, dispatch }

  return <ErrorContext.Provider value={value}> {children} </ErrorContext.Provider>
}

interface UseError extends State {
  setError: (error: string) => void
}

function useError (): UseError {
  const { dispatch, state } = useContext(ErrorContext)
  const setError = (error: string): void => {
    dispatch({ type: SET_ERROR, payload: error })
    setTimeout(() => {
      dispatch({ type: REMOVE_ERROR, payload: error })
    }, 5000)
  }

  return {
    ...state,
    setError
  }
}

export { ErrorProvider, useError }
