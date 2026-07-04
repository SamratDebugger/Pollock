import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { MyContext } from "../../context/MyProvider";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      setIsLoading(false);
      navigate("/dashboard");
    } else {
      setIsLoading(false);
    }
  }, [currentUser, navigate]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      setIsSubmitting(false);
      toast.success("Registration Successful");
      navigate("/dashboard");
    } catch (error) {
      setIsSubmitting(false);

      toast.error(error.message);
    }
  };
  return (
    <div className="py-50">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 mx-auto "
      >
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

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-info mt-4"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Registration"
          )}
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
