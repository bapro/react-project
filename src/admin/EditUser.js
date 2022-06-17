import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';

function EditUser() {
   const navigate = useNavigate();
 const {user_id}  = useParams();
     const [loading, setLoading] = useState(true);
    const history = useNavigate();
    const [userInput, setUser] = useState([]);
    const [errorInput, setError] = useState([]);

   useEffect(() => {

 axios.get(`/api/edit-user/${user_id}`).then( res => {

            if(res.data.status === 200)
            {
                setUser(res.data.user);
                setLoading(false);
            }
            else if(res.data.status === 404)
            {
                 swal.fire({
                         icon: 'error',
                        title: res.data.status ,
                        showConfirmButton: false,
                        timer: 1500
                    })
                //navigate(-1);
            }
        })

    }, [navigate]);

    const handleInput = (e) => {
        e.persist();
        setUser({...userInput, [e.target.name]: e.target.value })
    }

     const updateUser = (e) => {
        e.preventDefault();
        
       
        // const data = userInput;
        const data = {
            name: userInput.name,
            email: userInput.email,
            phone: userInput.phone,
            role: userInput.role,
        }

        axios.put(`/api/update-user/${user_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                navigate(-1);
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                navigate(-1);
            }
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add users 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={updateUser} >
                                    <div className="form-group mb-3">
                                        <label>user Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={userInput.name} className="form-control" />
                                        <span className="text-danger">{errorInput.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>user email</label>
                                        <input type="text" name="email" onChange={handleInput} value={userInput.email}  className="form-control" />
                                        <span className="text-danger">{errorInput.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>user Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} value={userInput.phone}  className="form-control" />
                                        <span className="text-danger">{errorInput.phone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>user Role</label>
                                        <input type="text" name="role" onChange={handleInput} value={userInput.role}  className="form-control" />
                                        <span className="text-danger">{errorInput.role}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save user</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditUser;