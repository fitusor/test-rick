import { forwardRef } from "react";


const Character: React.ForwardRefRenderFunction<HTMLDivElement, Record<string, any>> = forwardRef(({ character }, ref) => {
	return (
		<div className="character-card" ref={ref}>
			<img src={character.image} alt={character.name} />
			<h2>{character.name}</h2>
		</div>
	);
});

export default Character;