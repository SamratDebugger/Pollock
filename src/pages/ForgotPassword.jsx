import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success("Password Reset Link Sent");
        // ..
      })
      .catch((error) => {
        toast.error(error.message);

        // ..
      });
  };
  return (
    <div className="py-50">
      <form
        onSubmit={handleReset}
        className="p-5 fieldset rounded-box bg-base-200 w-xs mx-auto"
      >
        <h2 className=" text-center text-xl">Forgot Password</h2>
        <label htmlFor="email" className="label">
          Enter your email address
        </label>
        <input
          name="email"
          required
          type="email"
          className="input"
          placeholder="example@mail.com"
        />
        <button type="submit " className="btn btn-info mt-3">
          Reset Password
        </button>
        <Link className="" to="/sign-in">
          <button className="btn btn-ghost w-full btn-error">
            <FaArrowLeft /> Back to Login{" "}
          </button>
        </Link>
      </form>
    </div>
  );
}
