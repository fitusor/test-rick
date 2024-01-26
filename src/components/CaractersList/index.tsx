import { FC, Ref } from 'react';
import Character from '../Character';

interface CharactersListProps {
  characters: Record<string, any>[];
  lastElementRef?: Ref<HTMLDivElement>;
}

const CharactersList: FC<CharactersListProps> = ({ characters, lastElementRef }) => {
  return (
    <div className="character-grid">
      {characters?.map((character: Record<string, any>, index: number) => (
        <Character
          testId={`characterItem-${index}`}
          key={character.id}
          character={character}
          ref={index === characters.length - 1 ? lastElementRef : undefined}
        />
      ))}
    </div>
  );
};

export default CharactersList;
