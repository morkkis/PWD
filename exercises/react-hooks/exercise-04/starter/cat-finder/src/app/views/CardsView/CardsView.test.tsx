import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardsView from './CardsView';

describe('<CardsView />', () => {
  test('it should mount', () => {
    render(<CardsView />);

    const aboutView = screen.getByTestId('CardsView');

    expect(aboutView).toBeInTheDocument();
  });
});
