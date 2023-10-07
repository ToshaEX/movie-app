import { createBrowserRouter } from 'react-router-dom';
import { routes } from '../constants';
import Movies from '../features/Movies';
import UpComingMovies from '../features/UpComingMovies';

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Movies />,
  },
  {
    path: routes.UpComingMovies,
    element: <UpComingMovies />,
  },
]);
