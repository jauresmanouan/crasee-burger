import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const { username } = useParams();

  return (
    <NavBarStyled className="navbar">
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 1400px;
  background-color: blue;
`;
