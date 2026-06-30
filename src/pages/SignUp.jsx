import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

export default function SignUp() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="py-50">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 mx-auto ">
        <h2 className=" text-center text-xl">Registration</h2>

        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          name="name"
          required
          type="text"
          className="input"
          placeholder="ex:Samrat Mufty"
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          required
          type="email"
          className="input"
          placeholder="example@mail.com"
        />

        <label htmlFor="password" className="label">
          Create Password
        </label>
        <label className="input">
          <input
            type={isHidden ? "password" : "text"}
            required
            placeholder="Password"
            name="password"
          />
          <button
            onClick={() => setIsHidden(!isHidden)}
            type="button"
            className=""
          >
            {isHidden ? (
              <FaEye className="h-[1em] opacity-50" />
            ) : (
              <FaEyeSlash className="h-[1em] opacity-50" />
            )}
          </button>
        </label>

        <button type="submit" className="btn btn-info mt-4">
          Registration
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="link link-info" to="/sign-in">
            Sign in here!
          </Link>
        </p>
      </form>
    </div>
  );
}
