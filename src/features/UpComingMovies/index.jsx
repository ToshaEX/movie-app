import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../services';
import Layout from '../../layout';
import './index.scss';

const UpComingMovie = () => {
  const { isLoading, data } = useQuery(
    ['query-up-comings'],
    async () => {
      return await apiClient.get(`movie/upcoming?language=en-US&page=1`);
    },
    { retry: false, cacheTime: 10000 },
  );

  return (
    <Layout isLoading={isLoading}>
      <div className="up-coming-container">
        <Carousel
          showArrows
          useKeyboardArrows
          autoPlay
          interval={3000}
          width={'100%'}
          infiniteLoop
        >
          {data?.data?.results.map((item, i) => (
            <div key={`carousel-${i}`}>
              <img
                className="carousel-image"
                src={
                  process.env.REACT_APP_IMAGE_BASE_URL +
                  'w1280' +
                  item.poster_path
                }
                alt={'up comings'}
              />
              <p className="legend">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default UpComingMovie;
