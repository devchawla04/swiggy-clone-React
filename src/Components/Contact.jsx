import { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Navbar from "./Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We'd love to hear from you. Fill out the form and we'll respond shortly.
              </p>
              <dl className="mt-10 space-y-4 text-gray-600">
                <div className="flex gap-x-4">
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                  <dd>545 Mavis Island, Chicago, IL 99191</dd>
                </div>
                <div className="flex gap-x-4">
                  <PhoneIcon className="h-7 w-6 text-gray-400" />
                  <dd>
                    <a href="tel:+15552345678" className="hover:text-gray-900">
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                  <dd>
                    <a href="mailto:hello@example.com" className="hover:text-gray-900">
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            {submitted ? (
              <div className="text-center text-2xl font-semibold text-green-600">
                Thanks for contacting us! We will reply shortly.
              </div>
            ) : (
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    { label: "First name", name: "firstName" },
                    { label: "Last name", name: "lastName" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Phone number", name: "phone", type: "tel" },
                  ].map(({ label, name, type = "text" }) => (
                    <div key={name}>
                      <label className="block text-sm font-semibold text-gray-900">{label}</label>
                      <input
                        name={name}
                        type={type}
                        value={formData[name]}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-indigo-600"
                      />
                      {errors[name] && <p className="text-sm text-red-600">{errors[name]}</p>}
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-indigo-600"
                    />
                    {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
                    Send message
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
