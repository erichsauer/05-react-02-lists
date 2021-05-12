import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, japaneseName }) => (
  <>
    <img style={{ width: 200 }} src={image} alt={name} />
    <p>{name}</p>
    <p>{japaneseName}</p>
  </>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
};

export default Character;
