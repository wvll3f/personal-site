import React, { useEffect } from 'react';

function useObserver(ref: React.RefObject<Element>, rootMargin = "0px") {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); 
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
}

export default useObserver;