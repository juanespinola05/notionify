import { useReducer, createContext, useContext } from 'react'
import { CONFIG_OUTFIT_ID } from '../constants'

const BACKGROUND_ID = 'background'
const DEFAULT_OUTFIT_ID = '5_outfit_1'

const CLEAR_ILLUSTRATIONS_LIST = 'CLEAR_ILLUSTRATIONS_LIST'
const SET_ID_LIST = 'SET_ID_LIST'
const TOGGLE_BACKGROUND_ID = 'TOGGLE_BACKGROUND_ID'
const SET_OUTFIT_ID = 'SET_OUTFIT_ID'
const SET_ACCESSORY_ID = 'SET_ACCESSORY_ID'

const SET_CONFIG_ID = 'SET_CONFIG_ID'

interface State {
  illustrationIdList: string[]
  hasBackground: boolean
  outfitId: string
  accessoryId: string
  configId: string
}

const initialState: State = {
  illustrationIdList: [],
  hasBackground: true,
  outfitId: DEFAULT_OUTFIT_ID,
  accessoryId: '',
  configId: CONFIG_OUTFIT_ID
}

function illustrationsReducer (state: State, action: any): State {
  switch (action.type) {
    case SET_ID_LIST:
      return { ...state, illustrationIdList: action.payload }
    case TOGGLE_BACKGROUND_ID:
      return { ...state, hasBackground: !state.hasBackground }
    case SET_OUTFIT_ID:
      return { ...state, outfitId: action.payload }
    case SET_ACCESSORY_ID:
      return { ...state, accessoryId: action.payload }

    case SET_CONFIG_ID:
      return { ...state, configId: action.payload }
    case CLEAR_ILLUSTRATIONS_LIST:
      return initialState
    default:
      return state
  }
}

const IllustrationsContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>({
  state: initialState, dispatch: () => null
})

const IllustrationsProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(illustrationsReducer, initialState)
  const value = { state, dispatch }

  return <IllustrationsContext.Provider value={value}> {children} </IllustrationsContext.Provider>
}

interface IllustrationsHook extends State {
  setIllustrationsIDList: (list: string[]) => void
  toggleBackground: () => void
  setOutfit: (id: string) => void
  setAccessory: (id: string) => void
  resetIllustrations: () => void
}
interface IllustrationConfigHook {
  configId: string
  setConfigId: (id: string) => void
}

function useIllustrations (): IllustrationsHook {
  const { dispatch, state } = useContext(IllustrationsContext)
  if (state === undefined) throw new Error('useIllustrations must be used within a IllustrationsProvider')
  const { illustrationIdList, outfitId, accessoryId } = state

  const list = illustrationIdList.length > 0
    ? [outfitId, ...illustrationIdList, accessoryId, BACKGROUND_ID]
    : []

  const setIllustrationsIDList = (list: string[]): void => {
    const shortBeardSVG = list.find(svg => /3_beard_\d/ig.test(svg))
    if (shortBeardSVG !== undefined) {
      const headIndex = list.findIndex(svg => svg.startsWith('1_head_'))
      list.splice(headIndex, 1, `1_head_${shortBeardSVG.at(-1) as string}`)
    }
    list.sort((a, b) => a.localeCompare(b))
    dispatch({ type: SET_ID_LIST, payload: list })
  }

  const toggleBackground = (): void => {
    dispatch({ type: TOGGLE_BACKGROUND_ID })
  }

  const setOutfit = (id: string): void => {
    dispatch({ type: SET_OUTFIT_ID, payload: id })
  }

  const setAccessory = (id: string): void => {
    dispatch({ type: SET_ACCESSORY_ID, payload: id })
  }

  const resetIllustrations = (): void => {
    dispatch({ type: CLEAR_ILLUSTRATIONS_LIST })
  }

  return {
    ...state,
    illustrationIdList: list,
    setIllustrationsIDList,
    toggleBackground,
    setOutfit,
    setAccessory,
    resetIllustrations
  }
}

function useIllustrationConfig (): IllustrationConfigHook {
  const { dispatch, state } = useContext(IllustrationsContext)
  if (state === undefined) throw new Error('useIllustrations must be used within a IllustrationsProvider')
  const { configId } = state

  const setConfigId = (id: string): void => {
    dispatch({ type: SET_CONFIG_ID, payload: id })
  }

  return { configId, setConfigId }
}

export { IllustrationsProvider, useIllustrations, useIllustrationConfig }
