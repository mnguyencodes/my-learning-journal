import {useState} from "react"
import {useEffectOnUpdate} from "./useEffectOnUpdate"

export function useToggle({
    initialValue=false,
    onToggle=()=>{}
}) {
    const [on, setOn] = useState(initialValue)

    useEffectOnUpdate(onToggle, [on])

    function toggle() {
        setOn(prevOn=>!prevOn)
    }
    return [on, toggle]
}
