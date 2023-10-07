import React, { lazy, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../services';
import Loading from '../../components/Loading';
import './index.scss';

const Layout = lazy(() => import('../../layout'));
const MovieCard = lazy(() => import('../../components/MovieCard'));

const Movies = () => {
  const { isLoading, data } = useQuery(
    ['query-movies'],
    async () => {
      return await apiClient.get(`movie/popular?language=en-US&page=1`);
    },
    { retry: 3, cacheTime: 10000 },
  );

  return (
    <Suspense fallback={<Loading />}>
      <Layout isLoading={isLoading}>
        <div className="movies-outer">
          <div className="movies-header">Trending Movies</div>
          <div className="movies-container">
            {data?.data?.results?.map(({ poster_path, title, id }) => (
              <MovieCard
                path={poster_path}
                title={title}
                movie_id={id}
                key={`movie-card-${id}`}
              />
            ))}
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};

export default Movies;
