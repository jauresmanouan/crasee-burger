import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  buttonIcon,
  className,
  version = "primary",
  onClick,
}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      {buttonIcon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ version }) => style[version]}
`;

const primary = css`
  width: 100%;
  background-color: #ff9f1b;
  color: white;
  border-radius: 5px;
  padding: 18px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0;
  border: none;
  font-size: ${theme.fonts.size.SM};
  font-weight: bold;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-out;
  }
`;

const success = css`
  width: 275px;
  height: 34px;
  background-color: ${theme.colors.success};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.background_white};
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    transition: all 200ms ease-out;
  }
`;

const style = {
  primary,
  success,
};
