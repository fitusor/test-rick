import { SetStateAction, useCallback, useRef } from 'react';

export type UseInfiniteScrollParams = {
  isLoading: boolean;
  fetchedCount: number;
  displayCount: number;
  nextPage: string | null;
  fetch: () => void;
  setDisplayCount: (value: SetStateAction<number>) => void;
};

const useInfiniteScroll = ({
  isLoading,
  fetchedCount,
  displayCount,
  nextPage,
  fetch,
  setDisplayCount,
}: UseInfiniteScrollParams) => {
  const observer = useRef<IntersectionObserver | null>(null);

  return useCallback(
    (node: Element | null) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (fetchedCount > displayCount) {
              setDisplayCount((prevDisplayCount) => Math.min(prevDisplayCount + 10, fetchedCount));
            } else if (displayCount >= fetchedCount && nextPage) {
              fetch();
            }
          }
        },
        {
          rootMargin: '100px',
        },
      );

      if (node) observer.current.observe(node);
    },
    [isLoading, fetchedCount, displayCount, nextPage, fetch],
  );
};

export default useInfiniteScroll;
