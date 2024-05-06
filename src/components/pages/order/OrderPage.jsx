import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
      <Main/>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  height: 100vh;
  background-color: #FFA01B;

;
`;
