import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    if (name === "" || email === "" || password === "") {
      toast.error("All fields required");
    } else {
      toast.success("Signup successful");
    }

    setTimeout(() => {
      window.location.href = "/";
    }, 800);
    console.log("hello");
    console.log(name, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-lg">
        <div className="ml-4">
          <h2 className="uppercase text-white font-bold text-3xl text-center">
            SignUp
          </h2>
        </div>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none dark:placeholder-gray-50 dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white placeholder-white"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none dark:placeholder-white placeholder-white dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none dark:placeholder-white placeholder-white dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white"
            placeholder="Password"
            required
          />
        </div>
        <div className="w-full mt-4">
          <button
            className="text-white bg-red-500 focus:outline-none  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  lg:w-full sm:w-full font-bold "
            onClick={() => handleSignUp()}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
