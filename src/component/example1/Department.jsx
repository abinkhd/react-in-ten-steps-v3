import { useState } from "react"


let DepartmentComponent = ({getDepartment}) => {

    let departments = [
        {"id":1, "dept":"Development"},
        {"id":2, "dept":"Testing"}
    ]
    const handleChange=(e)=>{
        getDepartment(e.currentTarget.value);
    }
        
    return (
        <select className="form-select"  onChange={handleChange}>
            <option key="-1">Select Department</option>
            {departments.map(item=>
                <option key={item.id}>{item.dept}</option>
            )}
        </select>
    )
}

export default DepartmentComponent;