import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { MyContext } from "../../context/MyProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

export default function SignIn() {
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

  //login logic here
  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login Successful");
        setIsSubmitting(false);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="py-50">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5 mx-auto "
      >
        <h2 className=" text-center text-xl">Login</h2>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="example@gmail.com"
        />

        <label htmlFor="password" className="label">
          Password
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
        <Link className="link link-info link-hover" to="/forgot-password">
          <p>Forgot Password!</p>
        </Link>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-info mt-4"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Login"
          )}
        </button>

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
