import React, { useState, useEffect, useCallback } from 'react';
import CharactersList from "../CaractersList";
import fetchCharacters from "../../api/characters/getCharacters";
import useInfiniteScroll from "../../utils/useInfiniteScroll";

const Gallery = () => {
	const [characters, setCharacters] = useState([]);
	const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character/?page=1');
	const [isLoading, setIsLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(10);
	const [fetchedCount, setFetchedCount] = useState(0);
	
	const fetch = useCallback(() => {
		fetchCharacters(
			nextPage,
			isLoading,
			setCharacters,
			setFetchedCount,
			setNextPage,
			setIsLoading
		);
	}, [nextPage, isLoading]);
	
	const lastElementRef = useInfiniteScroll(
		isLoading,
		fetchedCount,
		displayCount,
		nextPage,
		fetch,
		setDisplayCount
	);
	
	useEffect(() => {
		fetch();
	}, []);
	
	return (
		<CharactersList characters={characters.slice(0, displayCount)}
										lastElementRef={lastElementRef}
		/>
	);
};

export default Gallery;