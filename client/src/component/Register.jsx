import React, { useState } from "react";
import "../App.css";
function Register() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-bag flex justify-center items-start min-h-screen bg-gray-100 py-10">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="rollnumber">
                Roll Number
              </label>
              <input
                type="number"
                name="rollnumber"
                id="rollnumber"
                placeholder="Enter your roll number"
                value={data.rollnumber || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name"
                value={data.firstname || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name"
                value={data.lastname || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={data.dob || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={data.email || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="number">
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your phone number"
                value={data.number || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <span className="block mb-1 font-medium">Gender</span>
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={data.gender === "male"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={data.gender === "female"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Section: Department and Address */}
        <div className="mt-6 space-y-4">
          <div>
            <span className="block mb-1 font-medium">Department</span>
            {["AIDS", "ECE", "CSE"].map((dept) => (
              <label className="mr-4" key={dept}>
                <input
                  type="radio"
                  name="department"
                  value={dept}
                  checked={data.department === dept}
                  onChange={handleChange}
                  className="mr-1"
                />
                {dept}
              </label>
            ))}
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              value={data.address || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
