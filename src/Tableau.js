import React, { useEffect, useRef } from 'react';
const {tableau} = window;
export const Tableau =()=> {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/authoring/CollegeMap_16481068175670/Dashboard1#1";
  function initViz(){
    new tableau.Viz(ref.current,url);
  }
  return (
    <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
  );
}