import styled from "styled-components";
import Button from "../../../../reusale-ui/Button";
import { theme } from "../../../../../theme";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled className="empty-menu-admin">
      <span className="first-text">Le menu est vide ?</span>
      <span className="second-text">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <Button
        className="button"
        label="Générer de nouveaux produits"
        onClick={onReset}
        version="primary"
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  font-family: "Amatic SC";
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  .first-text {
    font-weight: ${theme.fonts.weights.bold};
  }
  .second-text {
    font-weight: ${theme.fonts.weights.regular};
    margin-top: 21px;
    margin-bottom: 31px;
  }

  .button {
    cursor: pointer;
    height: 50px;
    width: 225px;
    font-size: ${theme.fonts.size.XS};
  }
`;
