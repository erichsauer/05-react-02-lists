import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map(({ _id, image, name, japaneseName }) => (
      <li key={_id}>
        <Character
          id={_id}
          image={image}
          name={name}
          japaneseName={japaneseName}
        />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      japaneseName: PropTypes.string.isRequired,
    })
  ),
};

export default CharacterList;
