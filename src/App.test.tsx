/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders Hello World', () => {
    // Arrange
    render(<WrappedApp />);
    // Act
    // Expect
    const helloWorld = screen.getByRole('heading', { level: 1 }).innerHTML;
    expect(helloWorld).toBe('Hello World!');
  });

  it('Renders not found in invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/testing-this-path']}>
        <App />
      </MemoryRouter>
    );

    const notFound = screen.getByRole('heading', { level: 1 }).innerHTML;
    expect(notFound).toBe('Not Found');
  });
});
