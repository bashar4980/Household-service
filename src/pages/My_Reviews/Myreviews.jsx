import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import UserReview from '../Services/UserReview';


const Myreviews = () => {
    const {user} = useContext(AuthContext)
    const [allreviews , setAllreviews] = useState([]);
    const [myreviews , setMyreviews] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data =>{
            setAllreviews(data);
            const UserReview = allreviews.filter(review => review.email === user?.email);
            setMyreviews(UserReview)
        })
    },[allreviews, user?.email])

    return (
        <div>
           <div className=" pt-5 reviews_section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            myreviews.map((review)=>{
              return(
                <UserReview key={review._id} review={review}/>
              )
            })
           }
        </div>
        </div>
    );
};

export default Myreviews;