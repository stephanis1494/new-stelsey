"use client"
import { ReactNode, FC, useState } from "react"
import { makeStore } from "@/src/store/store"
import { Provider } from "react-redux"

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
}): ReactNode => {
  const [store] = useState(makeStore)
  return <Provider store={store}>{children}</Provider>
}
