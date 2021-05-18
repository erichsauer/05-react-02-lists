import React, { Component } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import { getCharacterDetail } from '../services/apiCall';

export default class CharacterDetailContainer extends Component {
  state = {
    character: {},
    loading: true,
  };

  async componentDidMount() {
    const character = await getCharacterDetail(this.props.match.params.id);
    this.setState({
      character,
      loading: false,
    });
  }

  render() {
    const { loading, character } = this.state;

    if (loading) return <div>please hold...</div>;

    return <CharacterDetail {...character} />;
  }
}
