// ✅ Correct
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const profileRedirection = () => {
    console.log("user redirected");
    navigate("/profile");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>

      
      <button onClick={profileRedirection}>Go to Profile</button>

      <p>
        <Link to="/profile">Go to Profile</Link>
      </p>
    </div>
  );
}
