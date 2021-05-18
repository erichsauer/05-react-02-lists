import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetailContainer from './CharacterDetailContainer';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterList from '../mock_json/CharacterListContainer.json';

const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460',
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: '5f5fb4bbbfd05c2aed82e460',
          name: 'Admiral',
          japaneseName: 'イッテツ Ittetsu',
          image:
            'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
          birthday: 'January 27th (Aquarius)',
          skill: 'Writing about pickles',
          goal: 'Fisherman',
        })
      );
    }
  )
);

describe('character detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a character detail page', async () => {
    render(
      <MemoryRouter>
        <CharacterDetailContainer
          match={{ params: { id: '5f5fb4bbbfd05c2aed82e460' } }}
        />
      </MemoryRouter>
    );
    screen.getByText('please hold...');
    await screen.findAllByAltText('Admiral');
  });
});
