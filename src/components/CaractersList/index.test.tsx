import React from 'react';
import CharactersList from './index';
import { render, screen } from '@testing-library/react';

const characters = [
  {
    image: 'test',
    name: 'test',
    id: 1,
  },
  {
    image: 'test',
    name: 'test',
    id: 2,
  },
];

describe('<Character />', () => {
  test('should not render empty array', () => {
    render(<CharactersList characters={[]} />);

    expect(screen.queryByTestId(/characterItem-/)).not.toBeInTheDocument();
  });
  test('should not render empty array', () => {
    render(<CharactersList characters={characters} />);

    expect(screen.getAllByTestId(/characterItem-/)).toHaveLength(2);
  });
  /*Сделать на 1 элементов*/
});
