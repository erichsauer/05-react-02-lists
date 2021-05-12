import React, { Component } from 'react';
import Character from '../components/Character';
import CharacterList from '../components/CharacterList';
import { getCharacters } from '../services/apiCall';

export default class CharacterListContainer extends Component {
  state = {
    characters: [],
    loading: true,
  };

  async componentDidMount() {
    const characters = await getCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading, characters } = this.state;

    if (loading) return <div>please hold...</div>;

    return <CharacterList characters={characters} />;
  }
}
