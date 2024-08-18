import { useEffect, useRef } from "react";

export function useTimeout(callbackFuntion: () => void, time: number) {
  const savedCallback = useRef(callbackFuntion)

  useEffect(() => {
    savedCallback.current = callbackFuntion;
  }, [callbackFuntion])

  useEffect(() => {
    const functionId = setTimeout(() => 
      savedCallback.current()
    , time)

    return () => clearTimeout(functionId)
  }, [time])
}