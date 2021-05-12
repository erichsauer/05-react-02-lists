import React from 'react';
import PropTypes from 'prop-types';

function Character({ image, name, japaneseName }) {
  return (
    <>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{japaneseName}</p>
    </>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
};

export default Character;
