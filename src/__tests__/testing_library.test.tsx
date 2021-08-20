/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@/utilities/test-utils';
import Index from '../pages/index';

import MatchMediaMock from 'jest-matchmedia-mock';
let matchMedia;

describe('App', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });

  it('renders navigation', () => {
    const { getByRole } = render(<Index />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nav = getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('renders one link', () => {
    const { getByRole } = render(<Index />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const nav = getByRole('link', { name: 'One' });

    expect(nav).toBeInTheDocument();
  });
});
