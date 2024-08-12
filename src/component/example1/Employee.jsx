import { useState } from "react";
import CardComponent from "./Card";
import EmpFormComponent from "./EmpForm";
import EmployeeTableComponent from "./EmpTable";


let EmployeeComponent = () => {

    const  [employees,setEmployee] = useState([
        {id:1, firstname:"Smith", lastname:"Mathew", joindate:"09/Jan/2021", department:"Development", technologies:[ {"id":1, "domain":"Java Spring Boot"}, {"id":4, "domain":"Asp.Net MVC"}], projects:3},
        {id:2, firstname:"Maria", lastname:"Garcia", joindate:"09/Oct/2019", department:"Development", technologies:[ {"id":1, "domain":"Java Spring Boot"},  {"id":2, "domain":"Python Django"}], projects:8},
        {id:3, firstname:"Jacob", lastname:"Abraham", joindate:"21/Mar/2021", department:"Testing", technologies:[ {"id":3, "domain":"Express Js"}], projects:1},
        {id:4, firstname:"Jessica", lastname:"Antoine", joindate:"18/Aug/2021", department:"Development", technologies:[ {"id":1, "domain":"Java Spring Boot"}, {"id":4, "domain":"Asp.Net MVC"}], projects:11},
    ]);

    const [selectedData,setSelectedData]=useState({
        id: "",
        firstname: "",
        lastname: "",
        joindate: "",
        department: "",
        technologies: [],
        projects: 0,
      });

    return (
        <div className="p-1">
            <h1 style={{color:"darkblue", textAlign:"center"}}>Nested Components</h1>

            <div className="my-2">
                <CardComponent employees={employees} />
            </div>   

            <div className="row g-1">
                <div className="col-md-6">
                    <EmpFormComponent getData={(value)=>setEmployee([...employees,value])} selectedData={selectedData}/>
                </div>

                <div className="col-md-6">
                    <EmployeeTableComponent employees={employees} getData={(value)=>setSelectedData (value)}/>
                </div>
            </div>  

            <div className="row g-1 my-2">
                <div className="justify-content-center d-grid">
                <img src="./images/ex1.png" style={{"width":"500px"}}/>
                </div>
            </div>


        </div>
    )
}

export default EmployeeComponent;