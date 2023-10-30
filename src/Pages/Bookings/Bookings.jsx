import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import BookingsRow from './BookingsRow';
import toast from 'react-hot-toast';
import axios from 'axios';

const Bookings = () => {
      const { user } = useContext(AuthContext);
      const [bookings, setBookings] = useState([]);
      const url = `http://localhost:5000/bookings?email=${user.email}`;
      useEffect(() => {
            axios.get(url,{withCredentials:true})
              .then(res =>{
                  setBookings(res.data);
              })
            // fetch(url)
            //       .then(res => res.json())
            //       .then(data => setBookings(data))
      }, [url])

      const  handleDelete= id =>{
            const proceed = confirm('Are you sure you want to delete')
            if(proceed){
                  fetch(`http://localhost:5000/bookings/${id}`,{
                        method:'DELETE'
                  })
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data);
                        if(data.deletedCount >0){
                              toast.success('delete successfully')
                              const remaining=bookings.filter(booking =>booking._id !== id)
                              setBookings(remaining)
                        }
                    })
            }
      }

      const handleBookingConfrm = id =>{
            fetch(`http://localhost:5000/bookings/${id}`,{
                  method:'PATCH',
                  headers:{
                        'content-type': 'application/json'
                  },
                  body:JSON.stringify({status:'confirm'})
            })
                  .then(res =>res.json())
                  .then(data =>{
                        console.log(data);
                        if(data.modifiedCount > 0){
                              toast.success('Confirm Success')
                              // update state 
                              const remaining = bookings.filter(booking => booking._id !== id);
                              const updated = bookings.find(booking => booking._id === id);
                              updated.status='confirm'
                              const newBooking = [updated, ...remaining];
                              setBookings(newBooking)
                        }
                  })
      }
      return (
            <div className='max-w-6xl mx-auto'>
                  <h2>Your Bookings: {bookings.length}</h2>

                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                <label>
                                                      <input type="checkbox" className="checkbox" />
                                                </label>
                                          </th>
                                          <th>image</th>
                                          <th>service</th>
                                          <th>date</th>
                                          <th>price</th>
                                          <th>status</th>
                                    </tr>
                              </thead>
                              <tbody>
                                   
                              {
                                    bookings.map(booking =><BookingsRow
                                          key={booking._id}
                                          booking={booking}
                                          handleDelete={ handleDelete}
                                          handleBookingConfrm={handleBookingConfrm}
                                          ></BookingsRow>)
                              }
                              </tbody>
                              {/* foot */}
                              

                        </table>
                  </div>
            </div>
      );
};

export default Bookings;