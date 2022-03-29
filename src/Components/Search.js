import React ,{useState,useEffect}from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import CollegeItem from './CollegeItem'

const Search = () => {
  // const resultData={
  //   [
  //     {
  //       "Collegename":"I.E.T CAMPUS", 
  //       "Address1":"SITAPUR  ROAD", 
  //       "address2"LUCKNOW", 
  //       "Uttar Pradesh Technical University, Lucknow"
  //     },
  //     {
  //       "DD-26,Sector-I,Salt Lake City", 
  //       NaN, 
  //       "Kolkata", 
  //       "Netaji Subhash Open University, Kolkata"
  //     }, 
  //     {
  //       "Nirma University, S. G. Highway", 
  //       "Ahmedabad, Gujarat, PIN-382481", 
  //       "Ahmedabad", 
  //       "Nirma University, Ahmedabad"
  //     }, 
  //     {
  //       "AES BUNGLOW 3", 
  //       "COMMERCE SIX ROADS, NAVANGPURA", 
  //       "AHMEDABAD", 
  //       "Ahmedabad University"
  //     }, 
  //     {
  //       "Navsari Agricultural University,", 
  //       "Eru Char Rasta,  At & Po Eru  Ta- Jalalpore", 
  //       "Navsari  396 450", 
  //       "Navsari Agricultural University"
  //     }
  //   ]
  // }
    const [filterData, setFilterData] = useState({})
    const [resData,setResData]=useState({});
    const [has_depart_reg, setIsDepat_reg] = useState(false);
    const [has_fac_reg, setIsFacReg] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);




    useEffect(() => {
//         axios.post("http://192.168.43.73:5001/", {
//             "has_department_regular_courses":0, "has_faculty_regular_courses":0, 
// "has_fellowship":1,
// "has_other_minority_data":0,
// "has_other_regular_courses":0,
// "is_accredited":0,
// "is_foreign_students_enrolled":0,
// "no_of_student_hostel":0,
// "offers_distance_programme":0,
// "offers_loan":0,
// "offers_scholarship":0,
// "specialized":0,
// "student_hostel_available":0,
// "year_of_establishment":0,
// "college_building":0,
// "library":0,
// "laboratory":0,
// "playground":0,
// "stu_is_tech_ratio:":0
//           })
//           .then(function (response) {

//    // resData.map(<collegeItem/>)
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
    }, [resData])
    
   

    const checkCheckBox=()=> {  
        console.log('button clicked')
        console.log('ischecked',has_depart_reg);
        console.log('isfacChecked',has_fac_reg);
        var has_department_regular_courses=document.getElementById("depart_reg_courses");
        console.log(has_department_regular_courses);

        axios.post("http://192.168.43.73:5001/", {
            "has_department_regular_courses":0, "has_faculty_regular_courses":0, 
"has_fellowship":1,
"has_other_minority_data":0,
"has_other_regular_courses":0,
"is_accredited":0,
"is_foreign_students_enrolled":0,
"no_of_student_hostel":0,
"offers_distance_programme":0,
"offers_loan":0,
"offers_scholarship":0,
"specialized":0,
"student_hostel_available":0,
"year_of_establishment":0,
"college_building":0,
"library":0,
"laboratory":0,
"playground":0,
"stu_is_tech_ratio:":0,"n":5
          })
          .then(function (response) {

   // resData.map(<collegeItem/>)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // setFilterData({'has_department_regular_courses':has_department_regular_courses})

      if(has_department_regular_courses){  console.log("has_department",filterData);}
//          has_faculty_regular_courses, 
// has_fellowship,
// has_other_minority_data,
// has_other_regular_courses,
// is_accredited,
// is_foreign_students_enrolled
// no_of_student_hostel,
// offers_distance_programme,
// offers_loan,
// offers_scholarship,
// specialized,
// student_hostel_available,
// year_of_establishment,
// college_building,
// library,
// laboratory,
// playground,
// stu_is_tech_ratio
    }
    const handleOnChange = () => {
        setIsDepat_reg(!has_depart_reg);
      };

      const handleOnChange_has_fac = () => {
        
        setIsFacReg(!has_fac_reg);
      };
    useEffect(() => {
     checkCheckBox()
      
    }, [])
    
    
  return (
   
    <div >
     
{/* 
      <section class="border p-4 mb-4 d-flex align-items-center flex-column">
 
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <div class="container-fluid">
     
      <a class="navbar-brand" href="/">College Find</a>

     
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
         
          <li class="nav-item dropdown">
           
          </li>
          


        </ul>
        <Dropdown>
        <Dropdown.Toggle variant="success">
         Filters
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Department Regular Courses
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Faculty Regular Courses
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Fellowships
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Minority 
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Other Courses
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Accrediated
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Foreign Student Enrolled
          </Dropdown.Item> <Dropdown.Item href="#">
            Hostel Students
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Distance Programme
          </Dropdown.Item> <Dropdown.Item href="#">
            Loan
          </Dropdown.Item> <Dropdown.Item href="#">
            Scholarships
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Hostel Availability
          </Dropdown.Item> <Dropdown.Item href="#">
            year of Establishment
          </Dropdown.Item>
          <Dropdown.Item href="#">
            College Building
          </Dropdown.Item> <Dropdown.Item href="#">
            Library
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Laboratory
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Playground
          </Dropdown.Item> <Dropdown.Item href="#">
            Student Teacher Ratio
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
       
        <div class="input-group ps-5">
          <div id="navbar-search-autocomplete" class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">Search</label>
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
     
    </div>
    
  </nav>

</section> */}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="depart_reg_course" value="option1" checked={has_depart_reg}
          onChange={handleOnChange} />
  <label class="form-check-label" for="depart_reg_course">Department Regular Courses</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="fac_reg_course" value="fac_reg_course" checked={has_fac_reg} onChange={handleOnChange_has_fac}/>
  <label class="form-check-label" for="fac_reg_course">Faculty Regular Courses</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="fellowship" value="fellowship"/>
  <label class="form-check-label" for="fellowship">Fellowships</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="minority" value="minority"/>
  <label class="form-check-label" for="minority">Minority</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="other_courses" value="other_courses"/>
  <label class="form-check-label" for="other_courses">Other Courses</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="accrediated" value="accrediated"/>
  <label class="form-check-label" for="accrediated">Accrediated</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="foreign_student" value="foreign_student"/>
  <label class="form-check-label" for="foreign_student">Foreign Student Enrolled</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="hostel_student" value="hostel_student"/>
  <label class="form-check-label" for="hostel_student">No.of Hostel Students</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="distance_programme" value="distance_programme"/>
  <label class="form-check-label" for="distance_programme">Distance Programme</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="loan" value="loan"/>
  <label class="form-check-label" for="loan">Loan</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="Scholarships" value="Scholarships"/>
  <label class="form-check-label" for="Scholarships">Scholarships</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="hostel_availability" value="hostel_availability"/>
  <label class="form-check-label" for="hostel_availability">Hostel Availability</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="es_year" value="es_year"/>
  <label class="form-check-label" for="es_year">year of Establishment</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="college_building" value="college_building"/>
  <label class="form-check-label" for="college_building">College Building</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="Library" value="Library"/>
  <label class="form-check-label" for="Library">Library</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="Playground" value="Playground"/>
  <label class="form-check-label" for="Playground">Playground</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="Laboratory" value="Laboratory"/>
  <label class="form-check-label" for="Laboratory">Laboratory</label>
</div><div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="st_te_ratio" value="st_te_ratio"/>
  <label class="form-check-label" for="st_te_ratio">Student Teacher Ratio</label>
</div>
<button type="button" class="btn btn-primary btn-lg" onClick={checkCheckBox}>Find</button>

{/* <CollegeItem/> */}
</div>  )
}

export default Search