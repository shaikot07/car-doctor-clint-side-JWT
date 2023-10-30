import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ServiceCart = ({ service }) => {
      // console.log(service);
      const {_id, title, img, price } = service;
      return (
            <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure><img src={img} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-1xl font-bold text-orange-500'>Price: $ {price}</p>
                        <div className="card-actions justify-end">
                              <Link to={`/book/${_id}`}>
                                    <button className="btn btn-outline"><FaArrowRight className='text-orange-500'></FaArrowRight></button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default ServiceCart;