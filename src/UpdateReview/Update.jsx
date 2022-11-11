import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpadteReview = () => {
 const updateData = useLoaderData();
 const navigate = useNavigate()

 const updateHandeler = e =>{
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const updateInfo ={
       message
    }
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateInfo)
    };
    fetch(`https://server-bashar4980.vercel.app/reviews/${updateData._id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            toast.success("Update is done");
            navigate("/myreviews")
        });
 }

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>services</title>
   
</Helmet>
       <div className="container mx-auto grid grid-cols-3" >
      <div></div>
      <form onSubmit={updateHandeler} className="w-full bg-gray-900 p-5 my-10 rounded mx-auto flex flex-col">
        <h3 className="text-xl text-center my-5 text-gray-300 text-bold">Update {updateData.Title} Review</h3>
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Message..."
                    defaultValue={updateData.message}
                    className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-3 my-8 font-semibold rounded-md text-gray-200 bg-blue-700 hover:bg-blue-900"
                  >
                    Update Review
                  </button>
                </form>
                <div></div>
       </div>

    </>
  );
};

export default UpadteReview
;
