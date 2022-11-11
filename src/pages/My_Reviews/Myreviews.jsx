import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Authprovider";

import Review from "./Review";

const Myreviews = () => {
  const { user } = useContext(AuthContext);
  const [allreviews, setAllreviews] = useState([]);
  const [myreviews, setMyreviews] = useState([]);

  useEffect(() => {
    fetch("https://server-bashar4980.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllreviews(data);
        const UserReview = allreviews.filter(
          (review) => review.email === user?.email
        );
        setMyreviews(UserReview);
      });
  }, [allreviews, user?.email]);

  return (
    <div>
      <div className="container mx-auto py-10 reviews_section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myreviews.length === 0 ? (
          <h2 className="text-3xl col-start-1 col-end-4 text-center text-bold">
            No reviews were added
          </h2>
        ) : (
          <>
            {myreviews.map((review) => {
              return <Review key={review._id} review={review} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Myreviews;
