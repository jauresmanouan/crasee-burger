import { Link, useParams } from "react-router-dom";
import LoginForm from "../login/LoginForm";

export default function OrderPage() {
  const {username} = useParams()

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link> 
    </div>
  )
}



