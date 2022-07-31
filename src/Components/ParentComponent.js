import React, {useState,useCallback} from 'react'
import Button from './Button';
import CountComponent from './CountComponent'
import TitleComponent from './TitleComponent'

function ParentComponent() {
   const [age,setAge]= useState(25);
   const [salary,setSalary]= useState(50000);

   const incremnentAge=useCallback(()=>{
    setAge(age+1);
   },[age])

   const incrementSalary=useCallback(()=>{
    setSalary(salary+1000);
   },[salary])
  return (
    <div>
       <TitleComponent/>
       <CountComponent text="Age" count={age}/>
       <Button handleClick={incremnentAge}>Increment Age</Button>
       <CountComponent text="Salary" count={salary}/>
       <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
