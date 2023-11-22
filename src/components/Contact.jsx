import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Thank you for your message, I will get back to you as soon as possible");
  };

  return (
    <div id="contact" className="min-h-screen w-screen flex flex-col items-center py-4">
      <div className="my-[10vh] text-center flex-col space-y-5 md:w-4/12 w-10/12">
        <h1 className="text-4xl font-bold">CONTACT</h1>
        <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
      </div>
      <div className="bg-neutral-100 md:w-1/3 w-10/12 p-5 rounded-lg shadow">
        <form action="#" className="w-full max-w-lg mx-auto mt-5">
          <input type="hidden" name="form-name" value="form 1" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input required placeholder="Enter Your Name" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input required placeholder="Enter Your Email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea required cols="30" rows="10" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Your Message" name="message" id="message"></textarea>
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-[#7843e9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
