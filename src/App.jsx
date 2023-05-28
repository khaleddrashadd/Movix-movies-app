import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import SearchResults from './pages/searchResults/SearchResults';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useDispatch } from 'react-redux';
import createFetchDataThunk from './store/actions/data-actions';
import { useEffect } from 'react';

const endPoints = ['tv', 'movie'];
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    endPoints.forEach(url => {
      const genresThunk = createFetchDataThunk(`${url}/genres`);
      dispatch(genresThunk(`/genre/${url}/list`));
    });
  }, [dispatch]);

  useEffect(() => {
    const configThunk = createFetchDataThunk('config');
    dispatch(configThunk('/configuration'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":mediaType/:id" element={<Details />} />
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
