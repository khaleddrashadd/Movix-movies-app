import HeroBanner from "./heroBanner/HeroBanner";
import classes from './Home.module.scss';
import Trending from "./trending/Trending";

const Home = () => {
  return <div>
    <HeroBanner/>
    <Trending/>
  </div>;
};

export default Home;
