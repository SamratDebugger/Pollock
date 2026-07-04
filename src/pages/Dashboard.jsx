import { useContext } from "react";
import { MyContext } from "../../context/MyProvider";

export default function Dashboard() {
  const { currentUser } = useContext(MyContext);

  return (
    <section>
      <div>
        <h1>Welcome to Dashboard, {currentUser.displayName}</h1>
      </div>
    </section>
  );
}
