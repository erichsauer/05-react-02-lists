import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterContainer from './CharacterContainer';

describe('test suite', () => {
  it('renders a list of characters', async () => {
    render(<CharacterContainer />);

    screen.getByText('please hold...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
