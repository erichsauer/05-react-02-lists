import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetailContainer from './CharacterDetailContainer';
import { MemoryRouter } from 'react-router';

describe('character detail container', () => {
  it('renders a character detail page', async () => {
    render(
      <MemoryRouter>
        <CharacterDetailContainer
          match={{ params: { id: '5f5fb4bbbfd05c2aed82e460' } }}
        />
      </MemoryRouter>
    );

    screen.getByText('please hold...');

    const img = await screen.findAllByAltText('Admiral');
  });
});
