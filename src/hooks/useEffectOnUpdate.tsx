import {useEffect, useRef} from "react"

type Effect = () => void


export function useEffectOnUpdate<T>(effectFunction: Effect, deps: T[]) {
    const firstRender = useRef(true)
    useEffect(()=>{
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
}
