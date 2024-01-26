import { useRef, useCallback } from 'react';

const useInfiniteScroll = (isLoading, fetchedCount, displayCount, nextPage, fetch, setDisplayCount) => {
	const observer = useRef();
	
	return useCallback(node => {
		if (isLoading) return;
		
		if (observer.current) observer.current.disconnect();
		
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				if (fetchedCount > displayCount) {
					setDisplayCount(prevDisplayCount => Math.min(prevDisplayCount + 10, fetchedCount));
				} else if (displayCount >= fetchedCount && nextPage) {
					fetch();
				}
			}
		}, {
			rootMargin: '100px',
		});
		
		if (node) observer.current.observe(node);
	}, [isLoading, fetchedCount, displayCount, nextPage, fetch]);
};

export default useInfiniteScroll;
