import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map(({ _id, image, name, japaneseName }) => (
      <Link to={`/${_id}`} key={_id}>
        <li>
          <Character image={image} name={name} japaneseName={japaneseName} />
        </li>
      </Link>
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
