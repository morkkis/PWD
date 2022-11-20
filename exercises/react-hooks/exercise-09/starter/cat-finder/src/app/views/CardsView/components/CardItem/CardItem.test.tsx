import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CardItem } from './CardItem';
import { ICat } from '../../../../interfaces/cat.interface';

describe('<CardItem />', () => {
  test('it should mount', () => {
    const data = {} as ICat;
    render(<CardItem data={ data } onLikeClick={jest.fn} onRemoveClick={jest.fn} />);

    const aboutView = screen.getByTestId('CardItem');

    expect(aboutView).toBeInTheDocument();
  });
});
