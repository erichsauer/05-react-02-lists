import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = ({
  character: { image, name, japaneseName, skill, goal, birthday },
}) => {
  return (
    <>
      <img style={{ width: 300 }} src={image} alt={name} />
      <p>{name}</p>
      <p>{japaneseName}</p>
      <p>Skill: {skill}</p>
      <p>Goal: {goal}</p>
      <p>Birthday: {birthday}</p>
      <Link to="/">Back to the list</Link>
    </>
  );
};

CharacterDetail.propTypes = {};

export default CharacterDetail;
