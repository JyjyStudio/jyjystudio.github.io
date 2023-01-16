import React, { createContext, useState } from 'react'

export const MouseContext: React.Context<CursorContext> = createContext({
	cursorType: '',
	cursorChangeHandler: (cursorType: string) => {},
})

export default function MouseContextProvider({ children }: any) {
	const [cursorType, setCursorType] = useState('')

	const cursorChangeHandler = (cursorType: string) => {
		setCursorType(cursorType)
	}

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{children}
		</MouseContext.Provider>
	)
}
type CursorContext = {
	cursorType: string
	cursorChangeHandler: (cursorType: string) => void
}
