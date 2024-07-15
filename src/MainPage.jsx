import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';




function MainPage() {
 

  return (
    <div className=" mx-auto  ">
     <Hero/>
     <Features/>
    </div>
  );
}

export default MainPage;