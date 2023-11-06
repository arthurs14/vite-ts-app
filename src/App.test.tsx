/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('Renders Hello World', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    const test = screen.getByRole('heading', { level: 1 }).innerHTML;
    expect(test).toBe('Hello World!');
  });
});
