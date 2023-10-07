import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout';
import { useQuery } from 'react-query';
import { apiClient } from '../../services';
import Tag from '../../components/Tag';
import './index.scss';

const MovieView = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState();
  const [data, setData] = useState();

  const { isLoading } = useQuery(
    'query-movie',
    async () => {
      return await apiClient.get(`/movie/${id}?language=en-US`);
    },
    {
      retry: false,
      onSuccess: (data) => {
        console.log(data);
        setData(data);
        setImageUrl(
          `${process.env.REACT_APP_IMAGE_BASE_URL}original${data?.data?.backdrop_path}`,
        );
      },
    },
  );

  return (
    <Layout isLoading={isLoading}>
      <div className="movie-view-container">
        <div className="movie-view-hero">
          <div
            className="movie-view-backdrop"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,5,1) 0%, rgba(0,0,0,0) 0%, rgba(1,7,9,1) 100%),url(${imageUrl})`,
            }}
          />
          <div className="movie-view-detail-container">
            <div className="movie-view-card">
              <img
                loading="lazy"
                className="movie-view-poster"
                src={
                  process.env.REACT_APP_IMAGE_BASE_URL +
                  'w1280' +
                  data?.data?.poster_path
                }
                alt="poster"
              />
              <div className="movie-view-description">
                <span className="movie-view-title">{data?.data?.title}</span>
                <span className="movie-view-release-date">
                  Release Date : {data?.data?.release_date}
                </span>
                <div className="movie-view-tag">
                  {data?.data?.genres?.map((item, i) => (
                    <Tag key={`movie-tag-${item.id}-${i}`} text={item?.name} />
                  ))}
                </div>
                <span className="movie-view-vote-average">
                  #{+data?.data?.vote_average?.toFixed(1)}/10
                </span>
                <span className="movie-view-overview">
                  {data?.data?.overview}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieView;
