import { useEffect } from 'react';

import { fetchData } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from './store/home-slice';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import SearchResults from './pages/searchResults/SearchResults';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const home = useSelector(state => state.home);
  const dispatch = useDispatch();
  const fetchApiConfig = async () => {
    const res = await fetchData('/configuration');
    console.log(res);
    const url = {
      backdrop: `${res.images.secure_base_url}original`,
      poster: `${res.images.secure_base_url}original`,
      profile: `${res.images.secure_base_url}original`
    };
    dispatch(homeActions.getApiConfig(url));
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div style={{height:'1000px'}}></div>
      <Footer />
    </>
  );
}

export default App;
