import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import SearchResults from './pages/searchResults/SearchResults';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
