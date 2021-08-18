/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

describe('App', () => {
  it('renders navigation', () => {
    const { getByRole } = render(<Index />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nav = getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('renders about link', () => {
    const { getByRole } = render(<Index />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nav = getByRole('link', { name: 'About' });

    expect(nav).toBeInTheDocument();
  });
});
