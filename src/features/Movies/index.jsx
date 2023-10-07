import React from 'react';
import Layout from '../../layout';
import { useQuery } from 'react-query';
import { apiClient } from '../../services';
import MovieCard from '../../components/MovieCard';
import './index.scss';

const Movies = () => {
  const { isLoading, data } = useQuery(
    'query-movies',
    async () => {
      return await apiClient.get(`movie/popular?language=en-US&page=1`);
    },
    { retry: false },
  );

  return (
    <Layout isLoading={isLoading}>
      <div className="movies-outer">
        <div className="movies-header">Trending Movies</div>
        <div className="movies-container">
          {data?.data?.results?.map(({ poster_path, title, id }) => (
            <MovieCard path={poster_path} title={title} movie_id={id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
