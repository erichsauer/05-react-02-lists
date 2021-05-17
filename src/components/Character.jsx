import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ id, image, name, japaneseName }) => (
  <Link to={`/${id}`}>
    <img style={{ width: 200 }} src={image} alt={name} />
    <p>{name}</p>
    <p>{japaneseName}</p>
  </Link>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
};

export default Character;
