import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterListContainer from './CharacterListContainer';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterList from '../mock_json/CharacterListContainer.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(characterList));
  })
);

describe('character list container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of characters', async () => {
    render(
      <MemoryRouter>
        <CharacterListContainer />
      </MemoryRouter>
    );
    screen.getByText('please hold...');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
