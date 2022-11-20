import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CfSideBar } from './CfSideBar';

describe('<CfSideBar />', () => {
  test('it should mount', () => {
    render(<CfSideBar />);

    const aboutView = screen.getByTestId('CfSideBar');

    expect(aboutView).toBeInTheDocument();
  });
});
