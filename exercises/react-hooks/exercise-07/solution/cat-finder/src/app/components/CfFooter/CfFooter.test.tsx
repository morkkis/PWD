import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CfFooter } from './CfFooter';

describe('<CfFooter />', () => {
  test('it should mount', () => {
    render(<CfFooter />);

    const aboutView = screen.getByTestId('CfFooter');

    expect(aboutView).toBeInTheDocument();
  });
});
