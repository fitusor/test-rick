import axios from 'axios';

const fetchCharacters = async (nextPage, isLoading, setCharacters, setFetchedCount, setNextPage, setIsLoading) => {
	if (!nextPage || isLoading) return;
	try {
		setIsLoading(true);
		const res = await axios.get(nextPage);
		if (res?.status === 200 && res?.data?.results?.length > 0){
			setCharacters(prev => [...prev, ...res.data.results]);
			setFetchedCount(prevFetchedCount => prevFetchedCount + res.data.results.length);
			setNextPage(res.data.info.next);
		} else throw new Error("Error when fetch rick and morty characters!!!")
	} catch (error) {
		console.error('Error fetching characters:', error);
	} finally {
		setIsLoading(false);
	}
};

export default fetchCharacters;