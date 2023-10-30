import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
const Register = () => {

      const {createUser}=useContext(AuthContext)
      // const navigate = navigate()
      const handleRegister = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const name = form.name.value;
            const password = form.password.value;
            console.log(name, email, password);
            createUser(email,password)
                  .then(res =>{
                        toast.success('User create SuccessFully!')
                        // navigate('/')
                  })
                  .catch(error =>{
                        toast.error("Already have a account")
                  //      console.log( error.massage);
                  })
      }
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2 mr-12">
                              <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleRegister} className="card-body">
                                    <h2 className='text-4xl font-bold'>Register/Sign Up !</h2>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                                    </div>
                                    <h2 className='text-center'>Already have an account?<Link to='/login' className='font-bold text-orange-600'>Login</Link> </h2>
                                    <div className="form-control mt-6">
                                          <input className='btn btn-primary' type="submit" value="Register" />
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Register;