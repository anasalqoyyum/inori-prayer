import { create } from 'zustand'

type GlobalState = {
	skipHelp: boolean
	setSkipHelp: (input: boolean) => void
}

export const useGlobalState = create<GlobalState>(set => ({
	skipHelp: false,
	setSkipHelp: (input: boolean) => set({ skipHelp: input }),
}))
