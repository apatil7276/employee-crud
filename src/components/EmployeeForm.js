import { useState,useEffect } from 'react'
import './EmployeeForm.css'
import axios from 'axios';

export default function EmployeeForm(props) {
    console.log(props)
    const [employee, setEmployee] = useState({
        FirstName: "",
        LastName: "",
        DOB: "",
        Study: "mpsc",
        StartDate: "",
        EndDate: "",
        CurrentSalary: 0,
        Description: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }
    useEffect(()=>{
        setEmployee(props.data)
    },[])
    const handleUpdate=()=>{
       
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employee)
        console.log(props.data.id)
        if(props.data.id){
            axios.post(`https://sweede.app/DeliveryBoy/update-Employee/${props.data.id}`,
                employee)
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.error(error);
                });
              props.getData()  
        }
        else
        {
            axios.post('https://sweede.app/DeliveryBoy/Add-Employee/', employee)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            props.getData()  
        }
       
    }
    return (
        <div className="form-cotaioner" >
            <div className="form-content">
                <div className="form-title">Employee Register Form</div>
              
                <form >
                <div className="d" style={{ display:'flex',flexGrow:1, justifyContent:'end'}} ><i class="fa fa-close"style={{fontSize:24}} onClick={()=>{props.handleClose()}}></i></div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="form-input-group">
                                <label className='form-label'>First name*</label>
                                <input type="text" className='form-input' id="fname" onChange={handleChange} name="FirstName" value={employee.FirstName} placeholder='Enter your name' />
                            </div>
                            <div className="form-input-group">
                                <label className='form-label'>Last name*</label>
                                <input type="text" className='form-input' id="fname" onChange={handleChange} name="LastName" value={employee.LastName} placeholder='Enter your name' />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input-group">
                                <label className='form-label'>DOB</label>
                                <input type="date" className='form-input' onChange={handleChange} value={employee.DOB} id="fname" name="DOB" placeholder='Enter your name' />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input-group">
                                <label className='form-label'>Start Date</label>
                                <input type="date" className='form-input' id="fname" onChange={handleChange} name="StartDate" value={employee.StartDate} placeholder='Enter your name' />
                            </div>
                            <div className="form-input-group">
                                <label className='form-label'>End Date</label>
                                <input type="date" className='form-input' id="fname" onChange={handleChange} name="EndDate" value={employee.EndDate} placeholder='Enter your name' />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input-group">
                                <label className='form-label'>Current Salary</label>
                                <input type="text" className='form-input' onChange={handleChange} value={employee.CurrentSalary} name="CurrentSalary" id="fname" placeholder='Enter your name' />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-input-group">
                                <label className='form-label'>Discription</label>
                                <div className='form-description'>
                                    <div className="form-doc">
                                        <div className='B'>B</div>
                                        <div className="I">I</div>
                                        <div className="I">U</div>
                                        <i style={{ color: "#707070", fontSize: 28 }} class="fa fa-bars"></i>
                                        <i style={{ color: "#707070", fontSize: 28 }} class="fa fa-bars"></i>
                                        <div className="B">A</div>
                                    </div>
                                    <textarea className='form-textarea' onChange={handleChange} name="Description" value={employee.Description}  rows="14"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <button className='btn'>Cancel</button>
                            <button className='btn-s' onClick={handleSubmit}>{props.data.id?"Update":"Save"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}