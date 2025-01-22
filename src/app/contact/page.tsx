"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  // Define the state with proper types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Event handler types
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate a form submission
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrorMessage("All fields are required. Please fill out the form.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a question or need assistance? Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Information</h2>
            <p className="text-gray-600 mb-4">
              Feel free to contact us through any of the following methods:
            </p>
            <ul className="text-gray-600">
              <li className="mb-4">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-4">
                <strong>Email:</strong> support@example.com
              </li>
              <li className="mb-4">
                <strong>Address:</strong> 123 E-commerce Street, Suite 100, Cityville
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

            {successMessage && (
              <p className="bg-green-100 text-green-700 p-4 rounded mb-6">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="bg-red-100 text-red-700 p-4 rounded mb-6">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
