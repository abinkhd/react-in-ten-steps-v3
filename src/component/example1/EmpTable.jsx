
let EmployeeTableComponent = ({employees,getData}) => {
   

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Employee</th>
                    <th>Join Date</th>
                    <th>Projects</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {employees.map(item=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstname} {item.lastname}</td>
                        <td>{item.joindate}</td>
                        <td>{item.projects}</td>
                        <td>
                            <button className="fa-solid fa-eye" onClick={()=>getData(item)}/>
                        </td>
                    </tr>    
                )}

                
            </tbody>
        </table>
    )
}

export default EmployeeTableComponent;