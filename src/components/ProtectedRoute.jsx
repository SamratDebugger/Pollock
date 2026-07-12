import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyProvider";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      navigate("/sign-in");
    }
  }, [currentUser, navigate]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
}
