import React from 'react';


const CollegeItem = (collegeData) => {
  console.log("collegeData",collegeData);
  return (
    <div className="col-6">
    <div className="card my-3" >

<div className="card-body">
<h5 className="card-title " style={{background:'#A9A9A9	'}}>
College Name : {collegeData.collegeData.college}</h5>
<p className="card-text">city:{collegeData.collegeData.city}</p>
<p className="card-text">address:{collegeData.collegeData.address1} </p>
<p className="card-text">address:{collegeData.collegeData.address2} </p>



</div>
</div>
</div>



  )
}

export default CollegeItem