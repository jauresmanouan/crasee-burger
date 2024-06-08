import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  onChange,
  className,
  InsertIcon,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      {InsertIcon}
      <input onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  ${({ version }) =>
    version === "normal" ? TextInputNormalStyled : TextInputAdminStyled};
`;

const TextInputNormalStyled = css`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: #17161a;
  }

  &::placeholder {
    background: white;
    color: lightgray;
  }
`;

const TextInputAdminStyled = css`
  background-color: ${theme.colors.background_white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 17px;
  padding-top: 9px;
  padding-bottom: 9px;
  margin-bottom: 8px;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 13px;
    color: #93a2b1;
    margin-left: 24px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    background-color: ${theme.colors.background_white};
  }

  &::placeholder {
    background: white;
    color: lightgray;
  }
`;
