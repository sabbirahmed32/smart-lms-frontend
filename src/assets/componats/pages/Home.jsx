import React from 'react';
import Layouts from '../master/Layouts';
import Hero from './home/Hero';
import FeaturedCategories from './home/FeaturedCategory';
import Course from './home/Course';
import FeatureCoures from './home/FeatureCoures';

function Home() {
  return (
   <>
    <Layouts>
      <Hero></Hero>
      <FeaturedCategories></FeaturedCategories>
      <FeatureCoures></FeatureCoures>
    </Layouts>
   </>
  );
}

export default Home;
