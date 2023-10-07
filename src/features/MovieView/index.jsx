import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout';
import { useQuery } from 'react-query';
import { apiClient } from '../../services';
import './index.scss';
import Tag from '../../components/Tag';

const MovieView = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(
    'query-movies',
    async () => {
      return await apiClient.get(`/movie/${id}?language=en-US`);
    },
    { retry: false, cacheTime: 1000 },
  );

  const imageUrl = `${process.env.REACT_APP_IMAGE_BASE_URL}original${data?.data?.backdrop_path}`;
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
                <span className="movie-view-title">{data.data?.title}</span>
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

// {
//     "adult": false,
//     "backdrop_path": "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
//     "belongs_to_collection": {
//         "id": 968052,
//         "name": "The Nun Collection",
//         "poster_path": "/2RLAPEbafIFG7J8FV9h1lKWNYBU.jpg",
//         "backdrop_path": "/bKpqH9y3SjovMM3VqzezBbJtuf7.jpg"
//     },
//     "budget": 38500000,
//     "genres": [
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "https://www.warnerbros.com/movies/nun2",
//     "id": 968051,
//     "imdb_id": "tt10160976",
//     "original_language": "en",
//     "original_title": "The Nun II",
//     "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil. AKSHAIYA",
//     "popularity": 4746.232,
//     "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
//     "production_companies": [
//         {
//             "id": 12,
//             "logo_path": "/mevhneWSqbjU22D1MXNd4H9x0r0.png",
//             "name": "New Line Cinema",
//             "origin_country": "US"
//         },
//         {
//             "id": 76907,
//             "logo_path": "/ygMQtjsKX7BZkCQhQZY82lgnCUO.png",
//             "name": "Atomic Monster",
//             "origin_country": "US"
//         },
//         {
//             "id": 11565,
//             "logo_path": null,
//             "name": "The Safran Company",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2023-09-06",
//     "revenue": 231200000,
//     "runtime": 110,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         },
//         {
//             "english_name": "French",
//             "iso_639_1": "fr",
//             "name": "Français"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Confess your sins.",
//     "title": "The Nun II",
//     "video": false,
//     "vote_average": 6.986,
//     "vote_count": 610
// }
