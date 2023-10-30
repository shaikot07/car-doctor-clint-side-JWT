import  { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
const LogIn = () => {
      const {logIn}=useContext(AuthContext)
      const location = useLocation();
      const navigate = useNavigate();
      // console.log(location);
      const handleLogIn = e =>{
            e.preventDefault();
            const form=e.target;
            const email=form.email.value;
            const password = form.password.value;
            // console.log(email,password);
            logIn(email,password)
                  .then(res =>{
                        const loggedInUser = res.user;
                        console.log(loggedInUser);
                        const user = {email};
                        axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
                         .then(res =>{
                              console.log(res.data);
                              if(res.data.success){
                                    toast.success('log in successfully');
                                    navigate(location?.state ? location?.state : '/')
                              }
                         })
                      
                        // get Access token 
                  })
                  .catch(error =>{
                        toast.error('invalied  email or password')
                  })
      }
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2 mr-12">
                             <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleLogIn} className="card-body">
                                    <h2 className='text-3xl font-bold text-center'>Log IN !</h2>
                                    
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
                                    <h2 className='text-center'>Have an account?<Link to='/register' className='font-bold text-orange-600'>Sign In</Link> </h2>
                                    <div className="form-control mt-6">
                                          <input className='btn btn-primary' type="submit" value="Log IN" />
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default LogIn;