import React from 'react';
import MainHero from '../../components/HeroBanner/MainHerro';
import BuyPropertyCard from '../../components/Cards/BuyPropertyCard';

const BuyProperty = () => {
  return (
    <div className="pt-[50px]">
      <MainHero />
      <BuyPropertyCard />
    </div>
  );
};

export default BuyProperty;
