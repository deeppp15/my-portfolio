import { useEffect, useRef, useState } from "react";

export function useTypingEffect(typeText, typeDuration){
    const[currentPosition,setCurrentPosition]=useState(0);

    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentPosition((value) => value + 1);
        currentPositionRef.current += 1;
        if (currentPositionRef.current > typeText.length) {
            clearInterval(intervalId);
        }
        }, typeDuration);
        return () => {
        clearInterval(intervalId);
        currentPositionRef.current = 0;
        setCurrentPosition(0);
        };
    }, [typeDuration, typeText]);

  return typeText.substring(0, currentPosition);
}