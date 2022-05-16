import React, { useState, useEffect, useMemo } from 'react'

export default function useOnScreen(ref: React.RefObject<Element>) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), []);
  
    useEffect(() => {
      ref.current && observer.observe(ref.current);

      return () => { observer.disconnect() }
    }, [ref, observer])
  
    return isIntersecting
}