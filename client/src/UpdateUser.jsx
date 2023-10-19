import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const UpdateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();
    const{id}=useParams();
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then( result =>{
            console.log(result);
            setName(result.data.name);
            setEmail(result.data.email);
            setAge(result.data.age);
        })
        .catch(err => console.log(err))
        },[])

    const Update=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, { name, email, age })
        .then(result => {
            console.log(result)
            navigate('/')
        })
    .catch (err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" className='form-control' />
            </div>
            <div className='mb-2'>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" className='form-control' />
            </div>
            <div className='mb-2'>
                <label> Age</label>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" className='form-control' />
            </div>
            <button type="submit" className='btn btn-success' >Edit</button>
        </form>
    </div>
</div>
  )
}
