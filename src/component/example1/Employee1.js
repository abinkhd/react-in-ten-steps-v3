import React, { useState } from 'react'

const Employee1 = () => {
    const  [time,setTime]=useState(0);
    const [intervalVal,setIntervalVal]=useState(null);
    const [employees, setEmployees] = useState([
      { eid: 1, ename: 'nikhil', salary: 10000, department: 'training' },
      { eid: 2, ename: 'amit', salary: 17000, department: 'training' },
      { eid: 3, ename: 'neha', salary: 12000, department: 'sales' },
      { eid: 4, ename: 'swati', salary: 10000, department: 'marketing' },
      { eid: 5, ename: 'shruti', salary: 9000, department: 'training' },
      { eid: 6, ename: 'jatin', salary: 8000, department: 'sales' }
  ])
  const maxSalary=Math.max(...employees.map((e)=>e.salary))
  
  console.log(employees.find(e=>e.salary==maxSalary));

    const Timer=(event)=>{
      if(event){
        setIntervalVal(setInterval(()=>{
          setTime(prev=>prev+1);
        },1000))
      }
      else{
        setTime(0);
        clearInterval(intervalVal);
      }
    }

  
  return (
    <>
    {/* <h1>{time}</h1>
    <button onClick={()=>Timer(true)}>Start</button>
    <button onClick={()=>Timer(false)}>Stop</button> */}
    </>
  )
}

export default Employee1