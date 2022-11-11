import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Review from "./AddReview";
import UserReview from "./UserReview";

const ServiceDetails = () => {
  const singleServiceData = useLoaderData();
  const { title, img, price, description, facility } = singleServiceData;
  const [allreviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  console.log(allreviews);
  console.log("s");
  console.log(reviews);
  useEffect(() => {
    fetch("https://server-bashar4980.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        const singleServiceReview = data.filter(
          (review) => review.Title === title
        );

        setReviews(singleServiceReview);
      });
  }, [allreviews, title]);

  return (
    <div className="container mx-auto py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>services-details</title>
      </Helmet>
      <div className="product_details mx-5 md:mx-center md:w-full sm:flex-row lg:flex gap-5 ">
        <div className="img lg:w-4/6 mx-auto">
          <img src={img} className="w-full " alt="service img" />
        </div>
        <div className="content  lg:w-2/6 pt-10 ">
          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="text-xl font-semibold text-gray-900">
            {price} Tk
          </span>
          <div className="mt-2.5 mb-5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              5.0
            </span>
          </div>
          {facility.map((item) => {
            return (
              <li key={uuidv4()} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-violet-400"
                >
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <span>{item.name}</span>
              </li>
            );
          })}
          <button className=" mt-5 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Booking Now
          </button>
        </div>
      </div>
      <div className="mx-5 ">
        <h3 className="text-2xl py-5 font-semibold">Description:</h3>
        <h3 className="text-xl">{description}</h3>
      </div>

      {/* Review section is add */}

      <div className="container mx-auto py-10">
        <h3 className="text-3xl text-center mb-10">Add Reviews</h3>
        <Review title={title} />

        <h3 className=" pt-5 text-3xl text-center mb-10">{title} Reviews</h3>

        <div className=" pt-5 reviews_section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => {
            return <UserReview key={review._id} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
