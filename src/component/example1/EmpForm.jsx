import { useState } from "react";
import DepartmentComponent from "./Department";
import TechnologyComponent from "./Technology";

let EmpFormComponent = ({ getData,selectedData }) => {
  const [employee, setEmployee] = useState({
    id: "",
    firstname: "",
    lastname: "",
    joindate: "",
    department: "",
    technologies: [],
    projects: 0,
  });
  console.log(selectedData);

  // function convertDate(){
  // let dateValue=new Date(selectedData.joindate);
  // let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(dateValue);
  //   let month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(dateValue);
  //   let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(dateValue);
  //   console.log(dateValue)
  //   return dateValue=`${year}-${month}-${day}`.toString();
  
  // }

  const handleCheckBox = (value) => {
    if (value.e.target.checked) {
      setEmployee({
        ...employee,
        technologies: [...employee.technologies, value.item],
      });
    } else {
      setEmployee({
        ...employee,
        technologies: employee.technologies.filter(
          (t) => t.id !== value.item.id
        ),
      });
    }
    console.log(employee);  
  };

  const handleDate = (e) => {
    const date=new Date(e.currentTarget.value);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    let newDate=`${day}/${month}/${year}`.toString();
    setEmployee({...employee,joindate:newDate})
    console.log(employee.joindate)
  };

  const handleChange = (e) => {
    let value = e.currentTarget.value;
    setEmployee({ ...employee, [e.currentTarget.id]: value });
  };

  const handleSubmit = () => {
    getData(employee);
  };
  return (
    <div className="card ms-2">
      <div className="card-header">
        <h3>Employee Form</h3>
      </div>

      <div className="card-body">
        <div className="row g-1 my-1">
          <div className="col-md-2">
            <input
              type="text"
              value={selectedData?selectedData.id:employee.id}
              className="form-control text-center"
              id="id"
              required 
              placeholder="id"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              id="firstname"
              value={selectedData?selectedData.firstname:employee.firstname}
              onChange={handleChange}
              className="form-control text-center"
              placeholder="first name"
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              id="lastname"
              value={selectedData?selectedData.lastname:employee.lastname}
              onChange={handleChange}
              className="form-control text-center"
              placeholder="last name"
            />
          </div>
        </div>

        <div className="row g-1 my-1">
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              id="joindate" 
              onChange={handleDate}
            />
          </div>

          <div className="col-md-6">
            <DepartmentComponent
              id="department"
              // selectedDepartment={selectedData.department}
              getDepartment={(value) =>
                setEmployee({ ...employee, department: value })
              }
            />
          </div>
        </div>

        <div className="row g-1 my-1">
          <div className="col-md-12">
            <p className="my-1 text-center">Select Technology</p>
            <TechnologyComponent
              // selectedTechnology={selectedData.technologies}
              id="technologies"
              getTechnology={(value) => handleCheckBox(value)}
            />
          </div>
        </div>

        <div className="row g-1 my-1">
          <div className="col-md-6">
            <p className="my-1 ms-1">Count of Completed Projects</p>
          </div>

          <div className="col-md-6">
            <input
              type="number"
              className="form-control text-center"
              value={employee.count}
              id="projects"
              placeholder="count"
              onChange={(e)=>setEmployee({...employee,projects:Number(e.currentTarget.value)})}
            />
          </div>
        </div>

        <div className="row g-1 my-1">
          <div className="col-md-12">
            <button
              className="btn btn-outline-primary float-end"
              onClick={handleSubmit}
            >
            {selectedData.id!==""?'Update':'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpFormComponent;
