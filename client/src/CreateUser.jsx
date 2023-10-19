import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
export const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/')
            })
        .catch (err => console.log(err))
  }
return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div className="mb-2 ">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <label> Age</label>
                    <input
                        type="text"
                        placeholder="Enter Age"
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
);
};
