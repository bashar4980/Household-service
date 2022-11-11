import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const addproductHandeler = (event) => {
    event.preventDefault();
    const facility = [
      {
        name: "Instant Services",
      },
      {
        name: "24/7 Quality Service",
      },
      {
        name: "Easy Customer Service",
      },
      {
        name: "Quality Cost Service",
      },
    ];
    const form = event.target;
    const title = form.service.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.message.value;

    const serviceInfo = {
      title,
      img,
      price,
      description,
      facility,
    };
    console.log(serviceInfo);
    fetch("https://server-bashar4980.vercel.app/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Service added Successfully");
        form.reset();
      });
  };
  return (
    <div className="container my-10 w-3/4 mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Add Service</h1>
      <form
        onSubmit={addproductHandeler}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label for="username" className="block text-gray-400">
            Service Name:
          </label>
          <input
            type="text"
            name="service"
            id="username"
            placeholder="Service name"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="picture" className="block text-gray-400">
            Picture Name:
          </label>
          <input
            type="text"
            name="img"
            id="picture"
            placeholder="Enter service photo"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            required
          />
        </div>

        <div className="space-y-1 text-sm">
          <label for="price" className="block text-gray-400">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Enter service price"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Product Details"
          className=" w-full p-4 rounded-md resize-none text-gray-100 bg-gray-900"
        ></textarea>

        <button
          type="submit"
          className="block w-full p-3 text-center rounded-lg text-gray-100 bg-blue-700"
        >
          Add service
        </button>
      </form>
    </div>
  );
};

export default AddService;
