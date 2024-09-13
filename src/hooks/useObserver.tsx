import React, { useEffect } from 'react'

function useObserver(ref: any, rootMargin = "0px") {

    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, rootMargin]);

    return isVisible;

}

export default useObserver
