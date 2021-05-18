import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = ({
  image,
  name,
  japaneseName,
  skill,
  goal,
  birthday,
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

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    japaneseName: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }),
};

export default CharacterDetail;
