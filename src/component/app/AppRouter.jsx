import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EmployeeComponent from '../example1/Employee';
import TodoListComponent from '../example2/TodoList';
import HolidayComponent from '../example4/Holiday';

let AppRouterComponent = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<EmployeeComponent />} />
                    <Route path="/ex2" element={<TodoListComponent />} />
                    <Route path="/ex4" element={<HolidayComponent />} />
                    <Route path="**" element={<h1 style={{color:"red"}}>Page not found!</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouterComponent;