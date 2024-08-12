import { render } from "@testing-library/react";
import CreateTodoComponent from "./CreateTodo";


let TodoListComponent = () => {

    let employees = [
        { id: 51, empname: "Smith" },
        { id: 52, empname: "John" },
        { id: 53, empname: "Eliz" },
        { id: 54, empname: "Peter" },
        { id: 55, empname: "James" },
    ];

    let todolist = [
        { id: 1, title: "month end report", startdate: "09/01/2022", enddate: "17/01/2022", status: "New", employees: [{ id: 51, empname: "Smith" }, { id: 52, empname: "John" }] },
        { id: 2, title: "deploy application", startdate: "04/02/2022", enddate: "05/02/2022", status: "In Progress", employees: [{ id: 54, empname: "Peter" }, { id: 53, empname: "Eliz" }, { id: 55, empname: "James" }] },
        { id: 3, title: "server maintainance", startdate: "11/05/2022", enddate: "15/05/2022", status: "Completed", employees: [{ id: 51, empname: "Smith" }, { id: 55, empname: "James" }] }
    ];

    return (
        <>
            <CreateTodoComponent
                emplist={employees}
                todos={todolist}
                status={<>{
                    <select className="form-select">
                        <option value="-1">Select</option>
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                }</>}
            />


        </>
    )
}

export default TodoListComponent;