import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterListContainer from './CharacterListContainer';

describe('character list comtainer', () => {
  it('renders a list of characters', async () => {
    render(<CharacterListContainer />);

    screen.getByText('please hold...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
