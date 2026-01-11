'use client'

import { createContext, FC, ReactNode, useContext } from 'react'

import { IFooter, ISettings, ISidebar, ITextInSite } from '../../../../@types/generated/contentful'

export interface ILayoutData {
  settings: ISettings[]
  textInSite: ITextInSite[]
  sidebar: ISidebar[]
  footer: IFooter[]
}

export interface ILayoutContextProps {
  data: ILayoutData
}

export interface ILayoutProviderProps {
  children: ReactNode
  initialData: ILayoutData
}

const LayoutContext = createContext<ILayoutContextProps>({
  data: { settings: [], textInSite: [], sidebar: [], footer: [] },
})

export const LayoutProvider: FC<ILayoutProviderProps> = ({ children, initialData }) => {
  return <LayoutContext.Provider value={{ data: initialData }}>{children}</LayoutContext.Provider>
}

export function useLayoutContext() {
  return useContext(LayoutContext)
}
