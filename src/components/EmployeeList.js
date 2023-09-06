import { useEffect, useState } from 'react';
import './EmployeeList.css'
import axios from 'axios';
import BtnPopup from './popup/BtnPopup';
import EmployeeForm from './EmployeeForm';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

export default function EmployeeList() {
    const [empDetails, setEmpDetails] = useState();
    
    const [open,setOpen]=useState()
    const [data,setData]=useState()

    useEffect(() => {
        getData()
    }, [])
    // console.log(empDetails)
const getData=()=>{
    axios.get(`https://sweede.app/DeliveryBoy/Get-Employee/`)
    .then(function (response) {
        setEmpDetails(response.data);
    })
   }
    const updateData=(emp)=>{
        console.log(emp)
        setData(emp?emp:'')
        setOpen(true)
       
    }
    const handleClose =()=>{
        console.log("close.....")
        setOpen(false)
    }
    const handleDelete=(id)=>{
       axios.delete(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`).then((res)=>{
        console.log(res)
       })
       getData()
    }
    const addData=()=>{
        setOpen(true)
    }
    return (
        <div className="list-container">
            <div className="d">
                <div className="list-header" >
                <div className="list-title">Employee List</div>
                    <button className='btn-s' onClick={()=>updateData()}>Add</button>
                </div>
               
                
                <div className="list-content">
                {open&&<EmployeeForm data={data} handleClose={handleClose} getData={getData}/>}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empDetails && empDetails.map((employee, id) => {
                                    // console.log("emp", employee)
                                    return (
                                        <tr key={id}>
                                            <td>{employee.FirstName}</td>
                                            <td>{employee.DOB}</td>
                                            <td>{employee.StartDate}</td>
                                            <td>{employee.EndDate}</td>
                                            <td>{employee.Description}</td>
                                            <td>
                                                <div className="action">
                                                    <i class="fa fa-eye" ></i>
                                                    <i class="fa fa-edit" onClick={()=>updateData(employee)}></i>
                                                    <i class="fa fa-trash-o" onClick={()=>handleDelete(employee.id)}></i>
                                                </div>
                                            </td>
                                        </tr>)

                                })
                            }
                        </tbody>

                    </table>
                  
                </div>
            </div>
        </div>
    )
}