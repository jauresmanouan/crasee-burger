import styled from "styled-components";

export default function TextInput({
  onChange,
  className,
  InsertIcon,
  ...extraProps
}) {
  return (
    <InputStyled className={className}>
      {InsertIcon}
      <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
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
