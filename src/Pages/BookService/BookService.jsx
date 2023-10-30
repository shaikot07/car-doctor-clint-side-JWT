import  { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { data } from 'autoprefixer';
import toast from 'react-hot-toast';

const BookService = () => {
      const service = useLoaderData();
      const { title, _id,price ,img} = service;
      // console.log(service);
      const {user}=useContext(AuthContext);

      const handleBookService =event =>{
            event.preventDefault();
            const form = event.target;
            const name= form.name.value;
            const date = form.date.value;
            const email=user?.email;
            const booking ={
                  customerName:name,
                  email,
                  date,
                  img,
                  service:title, 
                  service_id:_id,
                  price:price  
            }
         console.log(booking);   
         fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(booking)
         })
            .then(res =>res.json())
            .then(data =>{
                  console.log(data);
                  if(data.insertedId){
                        toast.success('service booking successfully')
                  }
            })
      }

      return (
            <div className='max-w-6xl mx-auto'>
                  <h2>Book service:{title} </h2>
                  <form onSubmit={handleBookService} >
                        <div className='grid grid-cols-2 gap-6 mb-4'> 
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                          
                                          <input type="text" placeholder="name" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                                    </label>
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Date</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                          
                                          <input type="date" name='date' className="input input-bordered" />
                                    </label>
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Your Email</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                          
                                          <input type="text"  defaultValue={user?.email} name='email' className="input input-bordered" />
                                    </label>
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Due Amount</span>
                                    </label>
                                    <label className="input-group input-group-vertical">
                                          
                                          <input type="text" defaultValue={'$'+price} name='due' className="input input-bordered" />
                                    </label>
                              </div>
                        </div>
                        <input  type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Order Confirm" />
                  </form>
            </div>
      );
};

export default BookService;