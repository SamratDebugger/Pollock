import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

export default function SignIn() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="py-50">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 mx-auto ">
        <h2 className=" text-center text-xl">Login</h2>

        <label required className="label">
          Email
        </label>
        <input type="email" className="input" placeholder="example@gmail.com" />

        <label className="label">Password</label>
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
        <Link className="link link-info link-hover" to="/forgot-password">
          <p>Forgot Password!</p>
        </Link>
        <button className="btn btn-info mt-4">Login</button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="link link-info" to="/sign-up">
            Sign up now
          </Link>
        </p>
      </form>
    </div>
  );
}
