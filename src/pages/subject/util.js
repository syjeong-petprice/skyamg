import { useEffect, useState, useRef } from "react";

function useIntersectionObserver(options, onIntersect) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);

      if (entry.isIntersecting && onIntersect) {
        onIntersect();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options, onIntersect]);

  return { targetRef, isVisible };
}

export default useIntersectionObserver;
