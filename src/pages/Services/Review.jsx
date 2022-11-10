import React from 'react';

const Review = () => {
    
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
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"
                  spellcheck="false"
                ></textarea>
                <button
                  type="button"
                  className="py-3 my-8 font-semibold rounded-md text-gray-200 bg-blue-700 hover:bg-blue-900">
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Review;