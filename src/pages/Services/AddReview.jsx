import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const Review = ({title}) => {

 const {user} = useContext(AuthContext)
    const formHandeler =(event) =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const name = user?.displayName;
        const picture = user?.photoURL;
        const email = user?.email;
        const Title = title
      
        
       const userReview = {
        name,
        picture,
        message,
        Title,
        email
       }
        fetch('http://localhost:5000/services/reviews',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userReview)
        })
        .then(res=>res.json())
        .then(data=> {
         
          form.reset();
        })

    }

    return (
        <div>
               <div className="review_form">
          <div className="w-3/4 mx-auto flex flex-col max-w-xl p-4 shadow-sm rounded-xl bg-gray-900 text-gray-100">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
              </div>
              <form onSubmit={formHandeler} className="flex flex-col w-full">
                <textarea
                  rows="3"
                  name='message'
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"
                
                ></textarea>
                <button
                  type="submit"
                  className="py-3 my-8 font-semibold rounded-md text-gray-200 bg-blue-700 hover:bg-blue-900">
                  Add Review
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Review;