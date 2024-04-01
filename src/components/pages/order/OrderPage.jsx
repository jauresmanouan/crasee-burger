import { Link } from "react-router-dom";
import LoginForm from "../login/LoginForm";

export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  )
}



