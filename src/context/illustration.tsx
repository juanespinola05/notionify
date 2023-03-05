import { useReducer, createContext, useContext } from 'react'

const SET_ILLUSTRATIONS_IDS_LIST = 'SET_ILLUSTRATIONS_IDS_LIST'

const initialState = {
  list: []
}

function illustrationsReducer (state = initialState, action: any): any {
  switch (action.type) {
    case SET_ILLUSTRATIONS_IDS_LIST:
      return { ...state, list: action.payload }
    default:
      return state
  }
}

const IllustrationsContext = createContext([])

const IllustrationsProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(illustrationsReducer, initialState)
  const value = { list: state.list, dispatch }

  return <IllustrationsContext.Provider value={value}> {children} </IllustrationsContext.Provider>
}

function useIllustrations (): any {
  const context = useContext(IllustrationsContext)
  if (context === undefined) throw new Error('useIllustrations must be used within a IllustrationsProvider')
  const { dispatch }: any = context

  const setIllustrations = (list: string[]): void => {
    dispatch({ type: SET_ILLUSTRATIONS_IDS_LIST, payload: list })
  }

  return { ...context, setIllustrations }
}

export { IllustrationsProvider, useIllustrations }
