import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import CountUp from 'react-countup';
import Map from './Map';


const Home = () => 
{
    
   
  return (
    <>
      
      <div class="row" style={{marginLeft:'120px'}}>
    <div class="col-sm-2" >

        <div class="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768', marginLeft:'20px',textcolor:'black'}}>
        <div className="card-body">
    <h2 className="card-title " >
      <img src='https://cdn-icons-png.flaticon.com/512/195/195496.png' style={{width:'180px', height:'100px'}} alt='noOfUniversities'/>
      <CountUp end={36}/></h2>
      <span></span>
    <p className="card-text">No. of Universities</p>
</div>
        </div>
        </div>
        <div class="col-sm-2">
        <div class="card text-black  mb-2" style={{maxWidth:'18rem' ,maxheight:'10rem', backgroundColor:'#FFA768',paddingLeft:'0px',textcolor:'black'}}>
        <div className="card-body">
    <h2 className="card-title " >
      <img src='https://cdn-icons-png.flaticon.com/512/562/562157.png' style={{width:'180px', height:'100px'}} alt='noofColleges'/>
      <CountUp end={750}/></h2>
      <span> </span>
    <p className="card-text">No. of Colleges</p>

        </div>
        </div>
        </div>
        <div class="col-sm-2">
        <div class="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768',marginLeft:'0px',textcolor:'black'}}>
        <div className="card-body">
    <h2 className="card-title " >
      <img src='https://cdn2.iconfinder.com/data/icons/bubble-education-icons-1/360/School-512.png' style={{width:'180px', height:'100px'}} alt="standalone institution "/>
      <CountUp end={78}/></h2>
    <p className="card-text">No. of Standalone Institutions</p>

        </div>
        </div>
        </div>

        <div class="col-sm-2">
        <div class="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768',textcolor:'black'}}>
        <div className="card-body">
    <h2 className="card-title " >
      <img src='https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png' style={{width:'180px', height:'100px'}} alt='no of students'/>
      <CountUp end={1269782}/></h2> 
    <p className="card-text">No. of Students</p>

        </div>
        </div>
        </div>
        <div class="col-sm-2">
        <div class="card text-black  mb-2" style={{maxWidth:'18rem', backgroundColor:'#FFA768',textcolor:'black'}}>
        <div className="card-body">
    <h2 className="card-title " >
      <img src='https://i.pinimg.com/originals/19/46/9a/19469aed7f222d6009f48158a682bb9c.png' style={{width:'180px', height:'100px'}}alt='no of teachers' />
      <CountUp end={42438}/></h2>
    <p className="card-text">No. of Teachers</p>

        </div>
        </div>
        </div>
  </div>

  
  

       







    <Map/>
    </>
   
  )
}

export default Home
