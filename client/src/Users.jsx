import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then( result => setUsers(result.data))
        .catch(err => console.log(err))
        },[])
    const handelDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(result => {
            console.log(result)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-70 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success align-items-start'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button onClick={()=>handelDelete(user._id)} className='btn btn-danger mx-3'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
