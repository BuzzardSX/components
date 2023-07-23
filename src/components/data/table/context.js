import { createContext } from 'react'

export const { Provider, Consumer } = createContext({
	data: undefined,
	columns: undefined
})
