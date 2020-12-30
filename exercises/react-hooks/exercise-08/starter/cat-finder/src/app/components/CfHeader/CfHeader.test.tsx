import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CfHeader from './CfHeader';

describe('<CfHeader />', () => {
  test('it should mount', () => {
    render(<CfHeader />);

    const aboutView = screen.getByTestId('CfHeader');

    expect(aboutView).toBeInTheDocument();
  });
});
