import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import './index.scss';

const MovieCard = ({ path, title, movie_id }) => {
  return (
    <Link to={routes.HOME + movie_id} className="card-container">
      <img
        loading="lazy"
        className="card-image"
        src={process.env.REACT_APP_IMAGE_BASE_URL + 'w342' + path}
        alt={'https://www.filmurray.com/200/300'}
      />

      <div className="card-description">
        <div className="card-title">{title}</div>
        <div className="card-rating">{}</div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movie_id: PropTypes.number.isRequired,
};

export default MovieCard;
