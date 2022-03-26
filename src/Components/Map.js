import React ,{useRef,useEffect}from 'react'

const {tableau}=window;
function Map() {
    const ref=useRef(null);
    const url='https://public.tableau.com/views/NEW1_16482060484300/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'
  
  const initViz = () => { 
      new tableau.Viz(ref.current,url,{width:"100vw",height:"100vh"})
   }

   useEffect(() => {
       initViz();
   },[])
    return (
    <div ref={ref}/>
    
      
    
  )
}

export default Map
