import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Profile() {
  const { username } = useParams();
  return (
    <ProfileStyled>
      <div className="name-button">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <button className="button">
            <small>Se déconnecter</small>
          </button>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  font-family: "Open Sans";
  display: flex;
  align-items: center;
  margin-right: 70px;

  .name-button {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  p {
    margin: 0;
    b {
      color: ${theme.colors.primary};
    }
  }

  .button {
    border: ${theme.colors.background_white};
    background-color: ${theme.colors.background_white};
    font-family: "Open Sans";
    padding: 0;
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }

  .icon {
    height: auto;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    margin-left: 10px;
  }
`;
