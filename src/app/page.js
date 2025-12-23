import FlightSearch from '@/components/FlightSearch';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
     <HeroSection></HeroSection>
     <FlightSearch></FlightSearch>
    </div>
  );
};

export default page;