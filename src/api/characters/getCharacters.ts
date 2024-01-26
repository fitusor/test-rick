import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

export type FetchCharactersParams = {
  nextPage: string | null;
  isLoading: boolean;
  setCharacters: Dispatch<SetStateAction<any[]>>;
  setFetchedCount: Dispatch<SetStateAction<number>>;
  setNextPage: Dispatch<SetStateAction<string | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const fetchCharacters = async ({
  nextPage,
  isLoading,
  setCharacters,
  setFetchedCount,
  setNextPage,
  setIsLoading,
}: FetchCharactersParams): Promise<void> => {
  if (!nextPage || isLoading) return;
  try {
    setIsLoading(true);
    const res = await axios.get(nextPage);
    setCharacters((prev) => [...prev, ...res.data.results]);
    setFetchedCount((prevFetchedCount) => prevFetchedCount + res.data.results.length);
    setNextPage(res.data.info.next);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching characters:', error);
  } finally {
    setIsLoading(false);
  }
};

export default fetchCharacters;
