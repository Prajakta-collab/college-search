import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import CollegeItem from "./CollegeItem";

const Search = () => {
  let data=[
    {
      "address1": "Indian Institute of Technology Bombay", 
      "address2": "Powai", 
      "city": "Mumbai", 
      "college": "Indian Institute of Technology, Mumbai"
    }, 
    {
      "address1": "Hauz Khas", 
      "address2": NaN, 
      "city": "New Delhi", 
      "college": "Indian Institute of Technology, Delhi"
    }, 
    {
      "address1": "IIT Madras Campus", 
      "address2": NaN, 
      "city": "Chennai", 
      "college": "Indian Institute of Technology, Chennai"
    }, 
    {
      "address1": "Kharagpur", 
      "address2": "721302", 
      "city": "Kharagpur", 
      "college": "Indian Institute of Technology, Kaharagpur"
    }, 
    {
      "address1": "IIT Campus", 
      "address2": "Roorkee, Uttarakhand-247667", 
      "city": "Roorkee", 
      "college": "Indian Institute of Technology, Roorkee"
    }
  
  ]

  const [res, setRes] = useState([]);

  const [filterData, setFilterData] = useState({});
  const [resData, setResData] = useState({});
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

  //     useEffect(() => {
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
  //     }, [resData])

  const checkCheckBox = () => {
    console.log("button clicked");
    console.log("ischecked", has_depart_reg);
    console.log("isfacChecked", has_fac_reg);
    var has_department_regular_courses =
      document.getElementById("depart_reg_courses");
    console.log(has_department_regular_courses);

    axios
      .post(
        "http://192.168.215.73:5001/",
        {
          has_department_regular_courses: 0,
          has_faculty_regular_courses: 0,
          has_fellowship: 1,
          has_other_minority_data: 0,
          has_other_regular_courses: 0,
          is_accredited: 0,
          is_foreign_students_enrolled: 0,
          no_of_student_hostel: 0,
          offers_distance_programme: 0,
          offers_loan: 0,
          offers_scholarship: 0,
          specialized: 0,
          student_hostel_available: 0,
          year_of_establishment: 0,
          college_building: 0,
          library: 0,
          laboratory: 0,
          playground: 0,
          stu_is_tech_ratio: "0",
          n: 5,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        // setRes(response.data);
        console.log(typeof response.data)
        console.log(Array.from(response.data))
        // response.data.forEach(element => {
        //   console.log(element);
        // });
      })
      .catch((e) => {
        console.log(e);
      });
    // setFilterData({'has_department_regular_courses':has_department_regular_courses})

    if (has_department_regular_courses) {
      console.log("has_department", filterData);
    }
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
  };
  const handleOnChange = () => {
    setIsDepat_reg(!has_depart_reg);
  };

  const handleOnChange_has_fac = () => {
    setIsFacReg(!has_fac_reg);
  };
  // useEffect(() => {
  //  checkCheckBox()

  // }, [])

  return (
    <div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="depart_reg_course"
          value="option1"
          checked={has_depart_reg}
          onChange={handleOnChange}
        />
        <label class="form-check-label" for="depart_reg_course">
          Department Regular Courses
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="fac_reg_course"
          value="fac_reg_course"
          checked={has_fac_reg}
          onChange={handleOnChange_has_fac}
        />
        <label class="form-check-label" for="fac_reg_course">
          Faculty Regular Courses
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="fellowship"
          value="fellowship"
        />
        <label class="form-check-label" for="fellowship">
          Fellowships
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="minority"
          value="minority"
        />
        <label class="form-check-label" for="minority">
          Minority
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="other_courses"
          value="other_courses"
        />
        <label class="form-check-label" for="other_courses">
          Other Courses
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="accrediated"
          value="accrediated"
        />
        <label class="form-check-label" for="accrediated">
          Accrediated
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="foreign_student"
          value="foreign_student"
        />
        <label class="form-check-label" for="foreign_student">
          Foreign Student Enrolled
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="hostel_student"
          value="hostel_student"
        />
        <label class="form-check-label" for="hostel_student">
          No.of Hostel Students
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="distance_programme"
          value="distance_programme"
        />
        <label class="form-check-label" for="distance_programme">
          Distance Programme
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="loan"
          value="loan"
        />
        <label class="form-check-label" for="loan">
          Loan
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="Scholarships"
          value="Scholarships"
        />
        <label class="form-check-label" for="Scholarships">
          Scholarships
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="hostel_availability"
          value="hostel_availability"
        />
        <label class="form-check-label" for="hostel_availability">
          Hostel Availability
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="es_year"
          value="es_year"
        />
        <label class="form-check-label" for="es_year">
          year of Establishment
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="college_building"
          value="college_building"
        />
        <label class="form-check-label" for="college_building">
          College Building
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="Library"
          value="Library"
        />
        <label class="form-check-label" for="Library">
          Library
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="Playground"
          value="Playground"
        />
        <label class="form-check-label" for="Playground">
          Playground
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="Laboratory"
          value="Laboratory"
        />
        <label class="form-check-label" for="Laboratory">
          Laboratory
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="st_te_ratio"
          value="st_te_ratio"
        />
        <label class="form-check-label" for="st_te_ratio">
          Student Teacher Ratio
        </label>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={checkCheckBox}
      >
        Find
      </button>
      <div class="row" style={{marginLeft:'120px'}}>

    {
      data.map((d)=>{
        return<CollegeItem collegeData={d}/>
      })
    }
    </div>
      <div>

     
        </div>
     
    </div>
  );
};

export default Search;
