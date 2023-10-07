# Welcome to Movie App

## Libraries

> Setup Redux and redux-toolkit, but didn't use
> below project use TMDB API and react-redux
> https://github.com/ToshaEX/filmpire

- React (18.2.0)
- Redux (8.1.3)
- @tanstack/react-query (4.36.1)
- Axios (1.5.1)
- react-router-dom (6.16.0)
- sass (1.69.0)

## Optimization

- Lazy loading
- Caching API calls
- Suspense and fallback loading

## Setup and configuring App

Install dependencies.

    npm i

Replace the API key with your API key,

    # .env
    REACT_APP_BASE_URL=https://api.themoviedb.org/3/
    REACT_APP_IMAGE_BASE_URL=https://image.tmdb.org/t/p/
    REACT_APP_API_KEY=[Your Api Key]

Constants file for routing and navigation paths,

    src/constants/index.js

start the development server,

    npm start

For production build,

    npm run build

For the bundle analyzer,

    npm run analyze
