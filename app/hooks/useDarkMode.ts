import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export const useDarkMode = () => {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error("DarkModeContext is possibly undefined!")
    }
    return context
}