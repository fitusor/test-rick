import React from 'react';
import Character from './index';
import { render, screen } from '@testing-library/react';

const character = {
  image: 'test',
  name: 'test',
};

describe('<Character />', () => {
  test('should render name', () => {
    render(<Character character={character} />);

    expect(screen.getByTestId('character-name')).toHaveTextContent(character.name);
  });
  test('should render image', () => {
    render(<Character character={character} />);

    expect(screen.getByAltText(character.name)).toBeVisible();
  });
});
